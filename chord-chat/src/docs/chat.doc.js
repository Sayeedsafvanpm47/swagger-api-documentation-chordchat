const viewChats = {
  tags: ["Chat-Service"],
  description: "Route to view chats for a specific user ID",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Successfully fetched chats for the user ID",
              },
              adDetails: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    description: "The ID of the user",
                  },
                  userId: {
                    type: "integer",
                    description: "The ID of the user whose chats are fetched",
                  },
                  messages: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        time: {
                          type: "string",
                          format: "date-time",
                          description: "The timestamp of the message",
                        },
                        message: {
                          type: "string",
                          description: "The content of the message",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: "Not found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "No chats found for the user ID",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal server error",
    },
  },
};

const sendMessage = {
  tags: ["Chat-Service"],
  description: "Route to send messages to a specific user ID via event service",
  requestBody: {
          description: 'This body contains the message to be sent to user',
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "contains the message to be sent",
                    example: "Hello this is a test message sent to user from schema"
                  },
                 
                 
                }
              }
            }
          }
        },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Message sent successfully",
                example:'Message sent successfully'
              },
              data: [
                {
                  id: 1,
                  targetUserId: 1,
                  messages: [
                    { time: Date.now(), message: "Hi sent message 1" },
                  ],
                  delivery_status: "delivered",
                },
              ],
            },
          },
        },
      },
    },
    404: {
      description: "Not found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "No chats found for the user ID",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal server error",
    },
  },
};

const chatDocs = {
  "/view-chats/3": {
    get: viewChats,
  },
  "/send-message/3":{
          post:sendMessage
  }
};

module.exports = chatDocs;
