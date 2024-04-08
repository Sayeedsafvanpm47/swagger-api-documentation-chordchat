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
              conversation: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  userId: { type: "number" },
                  messages: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        time: { type: "number" },
                        message: { type: "string" },
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
    description: "This body contains the message to be sent to user",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "contains the message to be sent",
              example: "Hello this is a test message sent to user from schema",
            },
          },
        },
      },
    },
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
                example: "Message sent successfully",
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

const videoCall = {
  tags: ["Chat-Service"],
  description: "Route to facetime a specific user ID",
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
                description: "Video calling event triggering",
                example:"Video calling event triggered for user 1"
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

const chatList = {
  tags: ["Chat-Service"],
  description: "Route to facetime a specific user ID",
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
                description: "fetching users",
                example:"Fetched user idols succesfully"
              },
              idols:{
                type:"array",
                example:[1,2,3,4,5]}
            },
          },
        },
      },
    },
    500: {
      description: "Internal server error",
    },
  }
}

const chatDocs = {
  "/view-chats/3": {
    get: viewChats,
  },
  "/send-message/3": {
    post: sendMessage,
  },
  "/video-call/2": {
    get: videoCall,
  },
  "/chat-list":{
    get:chatList
  }
};

module.exports = chatDocs;
