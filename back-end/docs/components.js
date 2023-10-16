export const Components = {
    components: {
        schemas: {
            id: {
                type: "string", 
                description: "An id of a book", 
                example: "550e8400-e29b-41d4-a716-446655440000", 
            },
            Book: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "Book identification number",
                        example: "550e8400-e29b-41d4-a716-446655440000",
                    },
                    name: {
                        type: "string",
                        description: "The title of your book",
                        example: "The New Turing Omnibus",
                    },
                    author: {
                        type: "boolean",
                        description: "The book author",
                        example: "Alexander K. Dewdney",
                    },
                    publishedDate: {
                        type: "number",
                        description: "The published date of your book.",
                        example: 1639172876,
                    },
                    description: {
                        type: "string",
                        description: "Breif summary about book",
                        example: "Summary of the book",
                    },
                    coverImg: {
                        type: "string",
                        format: "Base64",
                        description: "Base64 string of the image.",
                        example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAA...",
                    },
                },
            },
            Success: {
                type: "object",
                properties: {
                    error: {
                        type: "boolean",
                        example: false
                    },
                    message: {
                        type: "string",
                        example: "Success Message"
                    }
                }
            }
        }
    }
}