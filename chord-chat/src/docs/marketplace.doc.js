const { post, patch } = require("../../route/ticket")

const createAd = {
          tags: ["Marketplace-Service"],
          description: "route to create an ad by a user",
          requestBody: {
                    description: 'This body contains the details to create an ad',
                    required: true,
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            description: {
                              type: "string",
                              description: "This contains description for the ad",
                              example: 'Gibson guitar'
                            },
                            image: {
                              type: "string",
                              description: "This contains the url for image in multer storage",
                              example: '112312babdabsdasd.jpg'
                            },
                            price: {
                              type: "string",
                              description: "This contains the price of the product",
                              example: 1000
                            },
                          
                           
                          }
                        }
                      }
                    }
                  },
        
          responses: {
            201: {
              description: "Ad created successfully",
              content: {
                "application/json": {
                  example: {
                    id: 1,
                    userId: 2,
                    description: "New guitar",
                    price: 2000,
                    image: "fjdashfajofa.jpg",
                    created_At: "10/04/2024",
                    Active: true,
                  },
                },
              },
            },
            400: {
              description: "Bad request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        description: "Bad request",
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

const toggleShowAd = {
          tags: ["Marketplace-Service"],
          description: "route to toggle visibility of ad by user",
         
        
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  example: {
                    id: 1,
                    userId: 2,
                    description: "New guitar",
                    price: 2000,
                    image: "fjdashfajofa.jpg",
                    created_At: "10/04/2024",
                    Active: true,
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
                        description: "Not found",
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

const adMessageUser = {
          tags: ["Marketplace-Service"],
          description: "route to message a user from ad",
         
        
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                    message:"Event emitted with message details to be sent to the owner of the ad from the user, this will be shown in the user's chat",
                  adDetails: {
                    id: 1,
                    userId: 2,
                    description: "New guitar",
                    price: 2000,
                    image: "fjdashfajofa.jpg",
                    created_At: "10/04/2024",
                    Active: true,
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
                        description: "Not found",
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

const deleteAd = {

          tags: ["Marketplace-Service"],
          description: "route to delete an ad",
         
        
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                    message:"Successfully deleted ad",
                  adDetails: [
                    {
                      id: 1,
                      userId: 2,
                      description: "New guitar",
                      price: 2000,
                      image: "fjdashfajofa.jpg",
                      created_At: "10/04/2024",
                      Active: true,
                    },
                    {
                      id: 2,
                      userId: 1,
                      description: "New drums",
                      price: 5000,
                      image: "3313jofa.jpg",
                      created_At: "11/04/2024",
                      Active: true,
                    },
                  ],
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
                        description: "Not found",
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

const getAds = {
          
          tags: ["Marketplace-Service"],
          description: "route to delete an ad",
         
        
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                    message:"Successfully fetched ads",
                  adDetails: [
                    {
                      id: 1,
                      userId: 2,
                      description: "New guitar",
                      price: 2000,
                      image: "fjdashfajofa.jpg",
                      created_At: "10/04/2024",
                      Active: true,
                    },
                    {
                      id: 2,
                      userId: 1,
                      description: "New drums",
                      price: 5000,
                      image: "3313jofa.jpg",
                      created_At: "11/04/2024",
                      Active: true,
                    },
                  ],
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
                        description: "Not found",
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

const editAd = {
          tags: ["Marketplace-Service"],
          description: "route to edit an ad",
          requestBody: {
                    description: 'This body contains the details to edit an ad',
                    required: true,
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            description: {
                              type: "string",
                              description: "This contains description for the ad",
                              example: 'Gibson guitar edited'
                            },
                            image: {
                              type: "string",
                              description: "This contains the url for image in multer storage",
                              example: '112312babdabsdasd.jpg'
                            },
                            price: {
                              type: "string",
                              description: "This contains the price of the product",
                              example: 3000
                            },
                          
                           
                          }
                        }
                      }
                    }
                  },
         
        
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                    message:"Successfully edited ad",
                  adDetails: 
                    {
                      id: 1,
                      userId: 2,
                      description: "New guitar edited",
                      price: 3000,
                      image: "fjdashfajofa.jpg",
                      created_At: "10/04/2024",
                      Active: true,
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
                        description: "Not found",
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

const flagAd = {
  tags: ["Marketplace-Service"],
  description: "route to flag an ad",
  responses: {
    200: {
      description: "Ok",
      content: {
        "application/json": {
           schema:{
            type:"object",
            properties:{
              message:{
                type:"string",
                example:"Ad is flagged"
              },
              data:{
                type:"object",
                example:{
                  id: 2,
                  userId: 1,
                  description: "New drums",
                  price: 5000,
                  image: "3313jofa.jpg",
                  created_At: "11/04/2024",
                  Active: true,
                  flag_count : 4,
                  visibility : true 
                }
              }
            }
           }
          
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
                description: "Not found",
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

const marketPlaceDoc = {
"/create-ad":{
          post:createAd 
},
"/toggle-show-ad/2":{
          get:toggleShowAd
},
"/ad-message-user/2":{
          get:adMessageUser
},

"/delete-ad/2":{
          delete:deleteAd 
},
"/get-ads":{
          get:getAds
},
"/edit-ad/2":{
          patch:editAd 
},
"/flag-ad/2":{
  post:flagAd
}
}
module.exports = marketPlaceDoc 