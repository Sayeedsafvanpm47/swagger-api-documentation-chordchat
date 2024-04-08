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

const toggleLike = {
  tags: ["Post-Service"],
  description: "route to toggle like on posts",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          example: {
            id: 1,
            user_id: 1,
            description: "My first post",
            likes: [{ userId: "2" }, { userId: "4" }],
            comments: [{ userId: 2, comment: "super" }],
            video: "sdashdahwesd123123.mp4",
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

const addComment = {
  tags: ["Post-Service"],
  description: "route to add comments on posts",
  requestBody: {
    description: 'This body contains the comment',
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            comment: {
              type: "string",
              description: "This contains the content for comment",
              example: 'nice post'
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
            user_id: 1,
            description: "My first post",
            likes: [{ userId: "2" }, { userId: "4" }],
            comments: [{ userId: 2, comment: "super" }],
            video: "sdashdahwesd123123.mp4",
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


const deleteComment = {
  tags: ["Post-Service"],
  description: "route to delete a comment",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          example: {
            id: 1,
            user_id: 1,
            description: "My first post",
            likes: [{ userId: "2" }, { userId: "4" }],
            comments: [{ userId: 2, comment: "super" }],
            video: "sdashdahwesd123123.mp4",
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


const viewComments = {
  tags: ["Post-Service"],
  description: "route to view comments",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          example: {
            id: 1,
            user_id: 1,
            description: "My first post",
            likes: [{ userId: "2" }, { userId: "4" }],
            comments: [{ userId: 2, comment: "super" }],
            video: "sdashdahwesd123123.mp4",
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


const viewLikes = {
  tags: ["Post-Service"],
  description: "route to view likes",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          example: {
            id: 1,
            user_id: 1,
            description: "My first post",
            likes: [{ userId: "2" }, { userId: "4" }],
            comments: [{ userId: 2, comment: "super" }],
            video: "sdashdahwesd123123.mp4",
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


const editPost = {
  tags: ["Post-Service"],
  description: "route to edit post",
  requestBody: {
    description: 'This body contains the details to be edited',
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            description: {
              type: "string",
              description: "This contains the content for editing",
              example: 'edited the post'
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
            user_id: 1,
            description: "My first post edited",
            likes: [{ userId: "2" }, { userId: "4" }],
            comments: [{ userId: 2, comment: "super" }],
            video: "sdashdahwesd123123.mp4",
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

const flagPost = {
  tags: ["Post-Service"],
  description: "route to flag a post",
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
                example:"Post is flagged"
              },
              data:{
                type:"object",
                example:{
                  id: 2,
                  user_id: 2,
                  description: "My second post",
                  likes: [{ userId: "3" }, { userId: "4" }],
                  comments: [{ userId: 1,commentId:1, comment: "super" },{ userId: 1,commentId:2, comment: "super 2" }],
                  video: "sdashdahwesd12asdad3123.mp4",
                  flag_count : 3,
                  visibility:true 
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




const postRouteDocs = {
          "/create-post":{
                    post:createPost
          },
          "/delete-post/2":{
                    delete:deletePost
          },
          "/get-posts":{
                    get:getPosts
          },
          "/toggle-like-post/3":{
                    post:toggleLike
          },
          "/add-comment/2" : {
            post : addComment 
          },
          "/delete-comment/2/1":{
            delete : deleteComment  
          },
          "/view-comments/2":{
            get : viewComments 
          },
          "/view-likes/2":{
            get : viewLikes
          },
          "/edit-post/2":{
            patch : editPost 
          },
          "/flag-post/3":{
            post:flagPost
          }

}
module.exports = postRouteDocs