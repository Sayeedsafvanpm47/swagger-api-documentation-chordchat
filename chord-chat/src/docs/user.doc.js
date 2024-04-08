

const userSignup = {
  tags: ["User-Service"],
  description: "User signup route",
  requestBody: {
    description:
      "This body contains the email, password as required and other information about the route.",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              format: "email",
              description: "Unique email address of the user",
              example: "sayeed123@gmail.com",
            },
            username: {
              type: "string",
              description: "username",
              example: "syd",
            },
            password: {
              type: "string",
              description: "User's password",
              example: "12345",
            },
            firstname: {
              type: "string",
              description: "User's first name",
              example: "sayeed",
            },
            lastname: {
              type: "string",
              description: "User's last name",
              example: "safvan",
            },
            talent: {
              type: "string",
              description: "User's talent",
              example: "guitarist",
            },
          },
          required: ["email", "password"], // Assuming email and password are required fields
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          message: "Otp verification requested",
          otp: 123,
        },
      },
    },
    400: {
      description: "Invalid input",
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description:
                  "Error message indicating email address is already in use",
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

const verifySignup = {
  tags: ["User-Service"],
  description: "Verify OTP for signup route",
  requestBody: {
    description:
      "This body contains the OTP to be verified to proceed with signup.",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            otp: {
              type: "number",
              description: "OTP to be entered",
              example: 123,
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
          example: {
            id: 1,
            username: "sydsfn",
            email: "sayeed123@gmail.com",
            password: "123456",
            fans: [],
            idols: [],
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
                description: "Invalid OTP error",
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

const userSignin = {
  tags: ["User-Service"],
  description: "User signin route",
  requestBody: {
    description:
      "This body contains the email, password as required for user to signin",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              format: "email",
              description: "email address of the user",
              example: "sayeed@gmail.com",
            },
            password: {
              type: "string",
              description: "User's password",
              example: "12345",
            },
          },
          required: ["email", "password"],
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
              email: {
                type: "string",
                format: "email",
                description: "User's email address",
                example: "sayeed@gmail.com",
              },
            },
          },
        },
      },
    },
    400: {
      description: "Invalid input",
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
                description: "Error message indicating login request failed",
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
                description: "Error message indicating account not found",
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

const getUser = {
  tags: ["User-Service"],
  description: "Get single user route",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                format: "email",
                description: "User logged in with email and password",
                example: "sayeed@gmail.com",
              },
            },
          },
        },
      },
    },
    400: {
      description: "Invalid input",
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
                description: "Error message indicating login request failed",
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

const userSignout = {
  tags: ["User-Service"],
  description: "User signout route",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          message: "User signed out successfully!",
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
                description: "No user is currently logged in!",
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

const userProfile = {
  tags: ["User-Service"],
  description: "User Profile details",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              gigs: [],
              fans: 0,
              idols: 0,
              profile_description: "enter description",
              username: "sydonguitars",
              pfp: "12312nfajisrajwrwor.jpg",
            },
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
                description: "No user is currently logged in!",
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

const editProfile = {
  tags: ["User-Service"],
  description: "User edit profile details",
  requestBody: {
    description: "This body contains the tweaked details of user profile",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            username: {
              type: "string",

              description: "username of the user",
              example: "sydonguitarsupdated",
            },
            oldpassword: {
              type: "string",
              description: "User's old password",
              example: "12345",
            },

            newpassword: {
              type: "string",
              description: "User's new password",
              example: "123",
            },
            confirmpassword: {
              type: "string",
              description: "Confirm password",
              example: "123",
            },
          },
          required: ["email", "password"],
        },
      },
    },
  },

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          message: "Profile updated successfully",
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
                description: "No user is currently logged in!",
              },
            },
          },
        },
      },
    },
    409: {
      description: "Invalid credentials",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Passwords doesnt match issue!",
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

const findUsers = {
  tags: ["User-Service"],
  description: "Users fetching based on search results",
  requestBody: {
    description: "This body contains search term to search",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            searchTerm: {
              type: "string",

              description: "username of the user",
              example: "syd",
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
          data: [
            {
              id: 2,
              username: "sydonguitars",
              email: "sayeed@gmail.com",
              password: "12345",
            },
            {
              id: 1,
              username: "sydsfn",
              email: "sayeed123@gmail.com",
              password: "123456",
            },
          ],
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
                description: "No user is currently logged in!",
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
                description: "No users found!",
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

const viewProfile = {
  tags: ["User-Service"],
  description: "Viewing random users profile after searching",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          id: 2,
          username: "sydonguitars",
          email: "sayeed@gmail.com",
          password: "12345",
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
                description: "No user is currently logged in!",
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
                description: "No users found!",
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

const toggleFollow = {
  tags: ["User-Service"],
  description:
    "Following user if not following, or unfollowing user if following",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          message: "followed successfully",
          currentUser: {
            id: 2,
            username: "sydonguitars",
            email: "sayeed@gmail.com",
            password: "12345",
            fans: [],
            idols: [],
          },
          followedUser: {
            id: 1,
            username: "sydsfn",
            email: "sayeed123@gmail.com",
            password: "123456",
            fans: [],
            idols: [],
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
                description: "No user is currently logged in!",
              },
            },
          },
        },
      },
    },
    400: {
      description: "Bad request",
    },

    500: {
      description: "Internal server error",
    },
  },
};

const forgotPassword = {
  tags: ["User-Service"],
  description: "Forgot password submission route",
  requestBody: {
    description:
      "This body contains email and will produce otp for futher reset proceedings",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              format: "email",
              description: "email to reset",
              example: "sayeed123@gmail.com",
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
          example: {
            message: "Otp verification required",
            otp: 123,
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
                description: "Invalid OTP error",
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

const verifyForgotPassword = {
  tags: ["User-Service"],
  description: "Verify and save new password for the requested user",
  requestBody: {
    description:
      "This body contains the OTP to be verified, new password and confirm password fields, to proceed with resetting the password.",
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            otp: {
              type: "number",
              description: "OTP to be entered",
              example: 123,
            },
            password: {
              type: "string",
              description: "New password",
              example: "12345",
            },
            confirmpassword: {
              type: "string",
              description: "Confirm password",
              example: "12345",
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
          example: {
            id: 1,
            username: "sydsfn",
            email: "sayeed123@gmail.com",
            password: "123456",
            fans: [],
            idols: [],
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
                description: "Invalid OTP error",
              },
            },
          },
        },
      },
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Passwords doesnt match",
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

const getAllUsers = {
  tags: ["User-Service"],
  description: "Route to get all the users!",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          example: [
            {
              id: 1,
              username: "sydsfn",
              email: "sayeed123@gmail.com",
              password: "123456",
              fans: [],
              idols: [],
            },
            {
              id: 2,
              username: "sydsf2",
              email: "sayeed122@gmail.com",
              password: "123453",
              fans: [],
              idols: [],
            },
          ],
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
                description: "Invalid OTP error",
              },
            },
          },
        },
      },
    },
    400: {
      description: "Bad request error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Bad request error",
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

const toggleBlockUser = {
  tags: ["User-Service"],
  description: "route to block a user from admin side",

  responses: {
    200: {
  description: "OK",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          data: {
            type: "object",
            properties: {
              id: { type: "number" },
              username: { type: "string" },
              email: { type: "string" },
              password: { type: "string" },
              fans: { type: "array", items: {} }, 
              idols: { type: "array", items: {} }, 
              status: { type: "string" },
            },
            example: {
              id: 1,
              username: "sydsfn",
              email: "sayeed123@gmail.com",
              password: "123456",
              fans: [],
              idols: [],
              status: "active",
            },
          },
        },
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
                description: "Invalid OTP error",
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
                description: "Resource not found!",
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

const adminViewUser = {
  tags: ["User-Service"],
  description: "route to view a user from admin side",

  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              data: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  username: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  fans: { type: "array", items: {} },
                  idols: { type: "array", items: {} }, 
                  status: { type: "string" },
                },
                example: {
                  id: 1,
                  username: "sydsfn",
                  email: "sayeed123@gmail.com",
                  password: "123456",
                  fans: [],
                  idols: [],
                  status: "active",
                },
              },
            },
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
                description: "Unauthorized",
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
                description: "Resource not found!",
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

const userRouteDocs = {

  "/signup": {
    post: userSignup,
  },
  "/verify-signup": {
    post: verifySignup,
  },
  "/signin": {
    post: userSignin,
  },
  "/get-user": {
    get: getUser,
  },
  "/signout": {
    get: userSignout,
  },
  "/user-profile": {
    get: userProfile,
  },
  "/edit-profile": {
    patch: editProfile,
  },
  "/find-users": {
    post: findUsers,
  },
  "/view-profile/3": {
    get: viewProfile,
  },
  "/toggle-follow-user/1": {
    post: toggleFollow,
  },
  "/forgot-password": {
    post: forgotPassword,
  },
  "/verify-forgot-password": {
    post: verifyForgotPassword,
  },
  "/admin-get-all-users": {
    get: getAllUsers,
  },
  "/admin-toggle-block-user/1": {
    post: toggleBlockUser,
  },
  "/admin-view-user/2": {
    get: adminViewUser
  },
};

module.exports = userRouteDocs;
