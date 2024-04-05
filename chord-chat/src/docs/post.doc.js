const createPost = {
          tags: ["Post-Service"],
          description: "route to create a new post",
          requestBody: {
                    description: 'This body contains all the details for creating a new post',
                    required: true,
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            video: {
                              type: "string",
                              description: "processed into url string after storing the video using multer",
                              example: '1123hdhashdasoih231240fjans'
                            },
                            description:{
                                      type:"string",
                                      description:"Description for the new post",
                                      example:'This is a new post'
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
                    id: 1,
                    userId: 1,
                    description: 'this is a new post',
                    likes: [],
                    comments: [],
                    video:'asdashdhasdhqowhwdq'
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
                        description: "Not authorized"
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
                              description: "Resource not found!"
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

const deletePost = {
          tags: ["Post-Service"],
          description: "route to delete a specific post",
        
          responses: {
            204: {
              description: "No content response",
              content: {
                "application/json": {
                  example: []
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
                        description: "Not authorized"
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
                              description: "Resource not found!"
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

const getPosts = {
          tags: ["Post-Service"],
          description: "route to get all posts",
        
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  example: [ {
                    id: 1,
                    user_id: 1,
                    description: "My first post",
                    likes: [{ userId: "2" }, { userId: "4" }],
                    comments: [{ userId: 2, comment: "super" }],
                    video: "sdashdahwesd123123.mp4",
                  },{
                          id: 2,
                          user_id: 2,
                          description: "My second post",
                          likes: [{ userId: "3" }, { userId: "4" }],
                          comments: [{ userId: 1, comment: "super" }],
                          video: "sdashdahwesd12asdad3123.mp4",
                        }]
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
                        description: "Not authorized"
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



const postRouteDocs = {
          "/create-post":{
                    post:createPost
          },
          "/delete-post/2":{
                    delete:deletePost
          },
          "/get-posts":{
                    get:getPosts
          }
}
module.exports = postRouteDocs