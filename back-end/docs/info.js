export const info = {
    openapi: "3.0.3",
    info: {
        title: "Book Collection API with Swagger",
        version: "0.1.0",
        description:
            "This is a simple Book Coolection API application made with Express and documented with Swagger"
    },
    servers: [
        {
            url: "http://localhost:3001/api/book",
            description: "Local server"
        },
    ],
    tags: [
        {
            name: "Books",
            description: "The books collections API"
        },
      ],
    
};