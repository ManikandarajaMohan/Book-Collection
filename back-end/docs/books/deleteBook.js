export const DeleteBookById = {
    delete: {
        tags: ["Books"],
        description: "Delete Book By Book Id",
        operationId: "deleteBookById",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Book Id",
            },
        ],
        responses: {
            200: {
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