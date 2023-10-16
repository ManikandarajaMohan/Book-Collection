export const GetBookById = {
    get: {
        tags: ["Books"],
        description: "Get Book By Book Id",
        operationId: "getBookById",
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
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/Book",
                            }

                        },
                    },
                },
            },
            500: {
                description: "Some Internal error",
            }
        },
    },
};