# Inventory

<a href="https://inventory.applikuapp.com">inventory.applikuapp.com</a>

<br/>
<img src="inventory-man.gif" alt="gif" />
<br/>

<h2>About the Project:</h2>
<p>When I embark on creating an application, I prioritize projects that resonate with me, as it ensures my genuine enthusiasm throughout the development process. 
  This is the case with this web-based inventory management application. 
  It was designed with personal business pursuits in mind, which allowed me to craft each portion of the app to fit my needs.</p>
<p>
  Several tools were employed in the development of this project, and the current roster comprises:
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>React</li>
    <li>JavaScript</li>
    <li>MongoDB</li>
    <li>MongoDB Atlas</li>
    <li>Mongoose</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Boostrap</li>
  </ul>
</p>

<h3>Front End:</h3>
<p>A blend of <b>React, HTML, CSS, JavaScript, and Bootstrap</b> was harnessed to craft the front-end of this project. Among these tools, <b>React</b> emerged as an invaluable cornerstone, serving as the fundamental framework for virtually all front-end operations. In addition to <b>React</b>, the <b>Bootstrap</b> grid system played a pivotal role in structuring the layout with its containers, rows, and columns. Finally, CSS was employed for the overall design aesthetics.</p>
<p>My foremost objective in creating this application was to reduce dependence on supplementary tools in order to enhance my proficiency in <b>React</b>. Initially, this presented a challenge as I had to rapidly grasp the utilization of React hooks, components, and fragments within just a few days. Nevertheless, within a day or two, I had acquired sufficient knowledge to establish the app's fundamental framework. As I continued to advance my skills, I iteratively refined the front-end design multiple times to achieve a greater efficiency. Ultimately, by the project's conclusion, I had an understanding of the great possibilities with an framework like <b>React.</b></p>
<p><b>JavaScript</b> primarily found its role within the functions of <b>React</b> components. The bulk of JavaScript functionality was centered around the utilization of the fetch API calls. In conjunction with the useEffect hooks of <b>React</b>, <b>JavaScript</b> was employed to initiate 'GET' API requests to retrieve data from the backend. Additionally, 'PUT' requests were used for editing and updating product data, while 'DELETE' requests were used to delete products. This encapsulates the extent of <b>JavaScript</b> implementation, as <b>React</b> remained the predominant driving force behind the dynamic addition of elements.</p>

<h3>Back End:</h3>
<p>The tools harnessed in the backend development includes the following array: <b>Node.js, Express.js, MongoDB, MongoDB Atlas, Mongoose.</b> The foremost reason I chose to use <b>Node.js and Express.js</b> was based on my desire the enhance my proficiency of both of these tools. Additionally, I decided to go with <b>Node.js and Express.js</b> due to their simplicity and speed. <b>Node.js</b> is known for its fast performance, which is crucial for handling a high number of requests efficiently. <b>Express.js</b>, being a minimalist and flexible framework built on <b>Node.js</b>, offers a straightforward way to handle web requests and manage routes, making development less complex. Additionally, these technologies have a large and active developer community, ensuring that I can easily find support and resources whenever needed.</p>
<p>The decision to opt for <b>MongoDB</b> as the database management system for this project stemmed from the specific characteristics of the data structure and requirements. <b>MongoDB</b> was deemed suitable primarily because of the absence of complex relationships within the dataset. Unlike traditional relational databases, <b>MongoDB</b> operates on a NoSQL schema, making it particularly well-suited for scenarios where data does not inherently exhibit intricate connections between different entities. Furthermore, it's flexibility and scalability allowed for the efficient storage and retrieval of data in a manner that was both straightforward and performant.</p>
<p>The selection of <b>Mongoose</b> as the database modeling tool for this project was driven by its ability to work seamlessly with <b>MongoDB.</b> <b>Mongoose</b> simplifies the interaction with <b>MongoDB</b> by providing a structured and organized way to define data schemas and models. This was especially valuable because it helped ensure data consistency and made it easier to work with <b>MongoDB's</b> NoSQL format. Finally, <b>MongoDB Atlas</b> was used in the deployment of the database to the cloud</b></p>

<h3>Installation and Deployment:</h3>
<p>If you would like to take this project and copy it for personal use, you can following the following guide:
    <ol>
        <li>Fork the project</li>
        <li>Type 'npm install' into the command line to install all of the dependencies</li>
        <li>cd into the 'client' folder and type 'npm install' into the command line to install all of the dependencies</li>
        <li>If you're using MongoDB Atlas, update the database URL in the app.js file to your personal URL</li>
        <li>If you're using a local MongoDB database, type "mongodb://127.0.0.1:27017/{database name}" in place of the database URL</li>
        <li>cd back out into the root by typing 'cd ..'</li>
        <li>Type into the command line "npm start"</li>
        <li>If you make adjustments to the React frontend, you must 'cd client' and run 'react run build' to rebuild the static files</li>
        <li>Once this is complete, replace all of the files in the root folder name 'public' with these build files</li>
        <li>Now, you can rerun 'npm start'</li>
    </ol>
The project contains all of the proper files for it to be deployed on Heroku. It only requires creating a heroku app and deploying the forked repository.
</p>
