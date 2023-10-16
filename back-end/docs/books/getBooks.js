export const GetBooks = {
  get: {
    tags: ["Books"],
    description: "Get All Books",
    operationId: "getBooks",
    parameters: [],
    responses: {
      200: {
        description: "Books were obtained",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                books: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Book",
                  }
                }
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