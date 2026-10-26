# CS 465 Full Stack Development — Travlr Getaways

## Project Overview

Travlr Getaways is a full stack web application developed using the MEAN stack: MongoDB, Express, Angular, and Node.js. The application provides a customer-facing website where visitors can explore travel packages and an administrative interface for managing trip information. Throughout this project, I learned how different technologies work together to create a functional web application.

## Architecture

During this project, I worked with Express, HTML, JavaScript, and Angular. Each technology served a different purpose. Express and Handlebars supported the customer-facing website by generating pages on the server. HTML provided the structure of those pages, while JavaScript supported the application's functionality.

Angular was used to develop the single-page administrative application. Unlike the traditional customer-facing website, Angular can update parts of the interface without requiring the entire page to reload. This approach is useful for administrative tasks such as viewing, adding, and editing travel packages.

The backend used MongoDB, a NoSQL database, because travel packages can be represented as flexible, document-based records. MongoDB stores information in documents that work well with the JSON data exchanged between the frontend and backend. Mongoose also helped define the structure of the trip information and validate data.

## Functionality

One important concept I learned was the difference between JSON and JavaScript. JavaScript is a programming language used to create application functionality, while JSON is a text-based format for organizing and exchanging data. In Travlr Getaways, the REST API returned trip information in JSON format, allowing Angular to receive and display information stored in MongoDB.

Refactoring was another important part of this project. For example, separating the API routes and controllers from the customer-facing Express application improved the organization of the code. This separation made it easier to test the API independently and identify problems without changing unrelated parts of the application.

Reusable user interface components also improved development efficiency. Angular components allowed the administrative interface to organize functionality into smaller sections, including trip listings and forms. Reusing components can reduce duplicate code, make maintenance easier, and provide a more consistent user experience.

## Testing

Testing was an important part of developing Travlr Getaways. I learned that API endpoints provide specific addresses through which the frontend communicates with the backend. Different HTTP methods perform different operations. GET retrieves information, POST creates information, PUT updates existing information, and DELETE removes information.

For example, the `/api/trips` endpoint returns travel package information, while `/api/trips/:tripCode` can retrieve a particular trip using its unique code. During development, I used browser testing and API responses to troubleshoot problems with retrieving trip data. One important accomplishment was confirming that the Express API could retrieve three travel packages from my local MongoDB database and display them through Angular.

Security adds another layer to testing. Administrative operations should require authentication so unauthorized users cannot change trip information. JSON Web Tokens can be used to verify requests to protected endpoints. Testing secured routes involves checking whether valid credentials allow authorized operations and whether missing or invalid tokens are rejected. These security considerations helped me understand why testing must address more than whether an application displays information correctly.

## Reflection

This course helped me develop a stronger understanding of full stack software development and how frontend applications
