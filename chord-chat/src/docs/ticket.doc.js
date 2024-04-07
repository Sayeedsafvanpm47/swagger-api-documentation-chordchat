const { patch } = require("../../route/ticket")

const createTicket = {
          tags: ["Ticket-Service"],
          description: "route to create a new post",
          requestBody: {
                    description: 'This body contains all the details for creating a new ticket',
                    required: true,
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            title: {
                              type: "string",
                              description: "contains the title of the ticket",
                              example: 'Pantera'
                            },
                            description:{
                                      type:"string",
                                      description:"Description for the new ticket",
                                      example:'Panter world tour 95'
                            },
                            price: {
                              type: "number",
                              description: "contains the pricing details of ticket",
                              example: 1000
                            },
                            stock:{
                                      type:"number",
                                      description:"Contains the stock of the item",
                                      example:10
                            },
                            expiring_At: {
                              type: "string",
                              description: "contains the expiry date",
                              example: '07/04/2024'
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
                  example: {
                    id: 2,
                    title: "megadeth",
                    description: "Megadeth Cyber Army",
                    price: 4000,
                    stock: 10,
                    expiring_At: "25/04/2024",
                    expired: false,
                    createdAt: "10/04/2024",
                  }
                }
              }
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
                        description: "Fill in details properly"
                      }
                    }
                  }
                }
              }
            },
            500: {
              description: "Internal server error"
            }
          }
}

const editTicket = {
          tags: ["Ticket-Service"],
          description: "route to edit a post",
          requestBody: {
                    description: 'This body contains all the details for editing a new ticket',
                    required: true,
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            title: {
                              type: "string",
                              description: "contains the title of the ticket",
                              example: 'Pantera edited'
                            },
                            description:{
                                      type:"string",
                                      description:"Description for the new ticket",
                                      example:'Panter world tour 95 edited'
                            },
                            price: {
                              type: "number",
                              description: "contains the pricing details of ticket",
                              example: 2000
                            },
                            stock:{
                                      type:"number",
                                      description:"Contains the stock of the item",
                                      example:20
                            },
                            expiring_At: {
                              type: "string",
                              description: "contains the expiry date",
                              example: '07/04/2024'
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
                  example: {
                    id: 2,
                    title: "megadeth",
                    description: "Megadeth Cyber Army",
                    price: 4000,
                    stock: 10,
                    expiring_At: "25/04/2024",
                    expired: false,
                    createdAt: "10/04/2024",
                  }
                }
              }
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
                        description: "Fill in details properly"
                      }
                    }
                  }
                }
              }
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
                              description: "Resource not found"
                            }
                          }
                        }
                      }
                    }
                  },
            500: {
              description: "Internal server error"
            }
          }
}


const buyTicket = {
          tags: ["Ticket-Service"],
          description: "route to buy a ticket",
          requestBody: {
                    description: 'This body contains the number of ticket that user ordered',
                    required: true,
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            numberOfTickets: {
                              type: "number",
                              description: "contains the number of the ticket",
                              example: 2
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
                  example: {
                    id: 2,
                    title: "megadeth",
                    description: "Megadeth Cyber Army",
                    price: 4000,
                    stock: 10,
                    expiring_At: "25/04/2024",
                    expired: false,
                    createdAt: "10/04/2024",
                  }
                }
              }
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
                        description: "Fill in details properly"
                      }
                    }
                  }
                }
              }
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
                              description: "Resource not found"
                            }
                          }
                        }
                      }
                    }
                  },
            500: {
              description: "Internal server error"
            }
          }
}

const shareTicket = {
          tags: ["Ticket-Service"],
          description: "route to share a ticket",

          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {message:'Message details ready to be shared',
                  example: {
                    id: 2,
                    title: "megadeth",
                    description: "Megadeth Cyber Army",
                    price: 4000,
                    stock: 10,
                    expiring_At: "25/04/2024",
                    expired: false,
                    createdAt: "10/04/2024",
                  }
                }
              }
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
                        description: "Fill in details properly"
                      }
                    }
                  }
                }
              }
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
                              description: "Resource not found"
                            }
                          }
                        }
                      }
                    }
                  },
            500: {
              description: "Internal server error"
            }
          }
}

const listTicket = {
          tags: ["Ticket-Service"],
          description: "route to list tickets",

          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {message:'Ticket details fetched',
                  example: [
                    {
                      id: 1,
                      title: "metallica",
                      description: "Metallica Woodstock 94",
                      price: 1000,
                      stock: 10,
                      expiring_At: "15/04/2024",
                      expired: false,
                      createdAt: "06/04/2024",
                    },
                    {
                      id: 2,
                      title: "megadeth",
                      description: "Megadeth Cyber Army",
                      price: 4000,
                      stock: 10,
                      expiring_At: "25/04/2024",
                      expired: false,
                      createdAt: "10/04/2024",
                    },
                  ]
                }
              }
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
                        description: "Fill in details properly"
                      }
                    }
                  }
                }
              }
            },
           
            500: {
              description: "Internal server error"
            }
          }
}

const ticketRouteDocs = {
          "/admin-create-ticket":{
                    post:createTicket
          },
          "/admin-edit-ticket/1":{
                    patch:editTicket 
          },
          "/buy-ticket/2" : {
                     post : buyTicket 
          },
          "/share-ticket/2" : {
                    get: shareTicket 
          },
          "/list-tickets" : {
                   get:listTicket
          }
}

module.exports = ticketRouteDocs 