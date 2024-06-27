/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Job Position : Full Stack Developer, Job Description: React, Nodejs , MySql, Years of Experience:6,Depends on this information please give me 5 interview questions with answers in Json Format . give question and answer as field in json\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"question\": \"Describe your experience working with React.js, including any specific libraries or frameworks you've used.\",\n    \"answer\": \"I have over 5 years of experience with React.js, having built several complex web applications. I'm proficient in using React components, state management with Redux or Context API, and optimizing performance with techniques like memoization. I've also worked with popular libraries such as React Router, Material-UI, and Axios for data fetching.  I'm comfortable working with React Hooks and am familiar with the latest features and best practices.\"\n  },\n  {\n    \"question\": \"Explain how you would design and implement a RESTful API using Node.js and Express.js.\",\n    \"answer\": \"I would start by defining the API endpoints and their corresponding HTTP methods (GET, POST, PUT, DELETE) based on the application's requirements.  I'd leverage Express.js's routing capabilities to map these endpoints and handle requests efficiently.  For data persistence, I'd use a database like MySQL and implement CRUD operations with Node.js drivers.  To ensure data integrity, I'd include input validation, error handling, and security measures like authentication and authorization.\"\n  },\n  {\n    \"question\": \"Describe your approach to database design and optimization in a MySQL environment.\",\n    \"answer\": \"For database design, I would focus on normalization to reduce data redundancy and improve data integrity. I would also consider using appropriate data types and indexes for efficient querying.  For optimization, I would analyze query performance and identify bottlenecks. I would use techniques like query optimization, indexing, and database caching to improve speed and efficiency. I'm also familiar with tools like Explain Plan to analyze query execution plans.\"\n  },\n  {\n    \"question\": \"How do you handle state management in large React applications, and what are the advantages and disadvantages of your preferred approach?\",\n    \"answer\": \"For large applications, I typically use Redux for state management. It provides a centralized store for application state and allows for predictable updates through actions and reducers. The advantages include clear separation of concerns, improved testability, and easier debugging. However, Redux can introduce some complexity, especially in smaller projects. I'm also familiar with the Context API, which can be a simpler solution for managing state within a component tree.\"\n  },\n  {\n    \"question\": \"Walk me through the process of deploying a Node.js application to a production environment. What tools and considerations would you use?\",\n    \"answer\": \"I would typically use a platform like Heroku or AWS Elastic Beanstalk for deployment. These platforms provide easy configuration and scaling options.  I'd first set up a build process to bundle the application's code. I would then configure environment variables for production settings like database connection strings. Finally, I'd deploy the application to the chosen platform and ensure it's running smoothly. Security measures like HTTPS and rate limiting would be implemented to protect the production environment.\"\n  }\n]\n```"},
          ],
        },
      ],
    });
  