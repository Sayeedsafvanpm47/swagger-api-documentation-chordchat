const viewUserOrders = {
  tags: ["Ticket-Order-Service"],
  description: "route to view all user orders",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          example: {
            id: 1,
            userId: 2,
            ticketId: 1,
            numberOfTickets: 2,
            price: 1000,
            total: 2000,
            paymentStatus: "done",
            purchaseDate: "10/04/2024",
            orderStatus: "booked",
          },
        },
      },
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Not authorized",
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
                description: "Resource not found",
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

const cancelOrder = {
          tags: ["Ticket-Order-Service"],
          description: "route to view cancel an order",
        
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  example: {
                    id: 1,
                    userId: 2,
                    ticketId: 1,
                    numberOfTickets: 2,
                    price: 1000,
                    total: 2000,
                    paymentStatus: "refunded to wallet",
                    purchaseDate: "10/04/2024",
                    orderStatus: "cancelled",
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        description: "Not authorized",
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
                        description: "Resource not found",
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
}

const adminViewOrders = {
          tags: ["Ticket-Order-Service"],
          description: "route to view all user orders on admin side",
        
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  example:[{
                    id:1,userId:2,ticketId:1,numberOfTickets:2,price:1000,total:2000,paymentStatus:'done',purchaseDate:'10/04/2024',orderStatus:'booked'
          },{
                    id:2,userId:1,ticketId:1,numberOfTickets:2,price:1000,total:2000,paymentStatus:'done',purchaseDate:'10/04/2024',orderStatus:'booked'
          },{
                    id:1,userId:2,ticketId:1,numberOfTickets:2,price:1000,total:2000,paymentStatus:'done',purchaseDate:'10/04/2024',orderStatus:'cancelled'
          }]
                },
              },
            },
            401: {
              description: "Unauthorized",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        description: "Not authorized",
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
                        description: "Resource not found",
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
}

const ticketOrderDocs = {
          "/view-user-orders":{
                    get:viewUserOrders
          },
          "/cancel-order/2":{
                      get:cancelOrder
          },
          "/admin-view-all-orders":{
                    get:adminViewOrders
          }
};



module.exports = ticketOrderDocs;
