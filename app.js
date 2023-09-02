import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path, { dirname }  from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dotenvPath = path.join(__dirname, '.env')
dotenv.config({ path: dotenvPath })

const app = express();
const port = process.env.PORT || 8060

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
const uri = `mongodb+srv://ibraem1026:${process.env.DB_PASS}@inventory.ylzqqd5.mongodb.net/InventoryDB`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    quantity: Number,
    barcode: String
})

const Item = new mongoose.model('Item', itemSchema);

app.get('/all', async (req, res) => {
    const all = await Item.find({});
    res.send(all);
})

app.get('/allcodes', async (req, res) => {
    const all = await Item.find({});
    const barcodes = all.map(element => element.barcode);
    res.send(barcodes);
});

app.get('/search/:barcode', async (req, res) => {
    const entered_barcode = req.params.barcode;

    const item = await Item.find({barcode: entered_barcode})
    
    if (item.length != 0) {
        res.status(200).json(item)
    }
    else {
        res.status(404).json({ error: 'Item not found' });
    }
})

app.get('/delete/:barcode', async (req, res) => {
    const entered_barcode = req.params.barcode;

    try {
        await Item.deleteOne({barcode: entered_barcode})
        res.status(200).json('Success')
    }
    catch {
        res.status(404).json({ error: 'Item not found' });
    }

})

app.post('/add', async (req, res) => {
    const {name, image, quantity, barcode} = req.body

    const item = new Item({name: name, image: image, quantity: quantity, barcode: barcode})
    await item.save()
    res.redirect('/view/' + barcode);
});

app.patch('/edit/:barcode', async (req, res) => {
    const {name, image, quantity, type, amount} = req.body;
    const barcode = req.params.barcode;

    const item = await Item.find({ barcode: barcode })
    const original = item[0].quantity

    let quantityChange = ''

    if (type !== undefined) {

        const intAmount = parseInt(amount)

        if (type === 'increase') {

            quantityChange = {
                quantity: (original + intAmount)
            }
        }
        else {
            quantityChange = {
                quantity: (original - intAmount)
            };
        }

        try {
            await Item.findOneAndUpdate({ barcode: barcode }, quantityChange, { new: true });
            res.status(200).send('Success');
        }
        catch {
            res.status(404).send('Error');
        }
    }
    else {
        const updatedItem = {
            name: name,
            image: image,
            quantity: quantity,
        };

        try {
            await Item.findOneAndUpdate({ barcode: barcode }, updatedItem, { new: true });
            res.status(200).send('Success');
        }
        catch {
            res.status(404).send('Error');
        }
    }
}) 

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})