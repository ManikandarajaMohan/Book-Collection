export const AddBooks = {
    post: {
        tags: ["Books"],
        description: "Add new Book",
        operationId: "addBook",
        parameters: [],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Book",
                    },
                }
            }
        },
        responses: {
            200: {
                description: "New Book Added",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Success",
                        },
                    },
                },
            },
            400: {
                description: "If Book ID already exists in the record",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                error: {
                                    type: "boolean",
                                    example: true
                                },
                                message: {
                                    type: "string",
                                    example: "Book ID Already Exists"
                                }
                            }
                        },
                    },
                }
            },

            500: {
                description: "Some Internal error",
            }
        },
    },
};