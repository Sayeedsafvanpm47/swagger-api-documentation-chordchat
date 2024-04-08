const viewNotifications = {
          tags: ["Notification-Service"],
          description: "Route to view notifications",
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
                        description: "Viewing notifications",
                        example:"Notifications fetched successfully"
                      },
                      data:{
                              type:"object",
                              example:{
                                        id:1,notification_content:{message:'Welcome to chord chat buds!',follower_id:-1},status:'sent',created_At:'10/04/2024',generic:true,user_id:-1
                                        }
                      }
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
        

        const sendGeneralNotifications = {
          tags: ["Notification-Service"],
          description: "Route to send general notifications",
          requestBody: {
                    description: 'This body contains notification to be sent.',
                    required: true,
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            notification: {
                              type: "string",
                              description: "contains the notification to be sent",
                              example: "This is a notification to the user"
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
                        description: "Sending notifications",
                        example:"Event generated to notification producer to be recieved from user side to push to notification array to view notifications!"
                      },
                      data:{
                              type:"object",
                              example:{id:1,
                                      notification_content:{
                                        message:'This is a notification sent to the user',follower_id:-1
                                      },
                                      status:'sent',created_At:'10/04/2024',generic:true,user_id:-1
                                        }
                      }
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
      

const notificationDocs = {

"/view-notifications":{
          get:viewNotifications
},
"/send-general-notifications":{
          post:sendGeneralNotifications
}
}

module.exports = notificationDocs 