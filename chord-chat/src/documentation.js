const userRouteDocs = require("./docs/user.doc");
const postRouteDocs = require("./docs/post.doc");

const swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "Chord chat",
    version: "0.0.1",
    description: "This is the documentation for chord chat",
  },
  servers: [
    {
      url: " http://localhost:3000",
      description: "Local dev",
    },
  ],
  tags: [
    { name: "User-Service", description: "Routes in User-service" },
    {
      name: "User-Service-admin-side",
      description: "Routes in User-service admin side",
    },{ name: "Post-Service", description: "Routes in Post-service" }
  ],
  paths: { ...userRouteDocs, ...postRouteDocs },
};

module.exports = swaggerDocumentation;
