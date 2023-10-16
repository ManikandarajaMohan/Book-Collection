export const UpdateBook = {
    put: {
        tags: ["Books"],
        description: "Update Book",
        operationId: "updateBook",
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
                description: "Update Book",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Success",
                        },
                    },
                },
            },
            400: {
                description: "If Book ID does not exists in the record",
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
                                    example: "Book not Found"
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