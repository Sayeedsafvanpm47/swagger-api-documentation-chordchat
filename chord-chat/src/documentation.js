const userRouteDocs = require("./docs/user.doc");
const postRouteDocs = require("./docs/post.doc");
const ticketRouteDocs = require("./docs/ticket.doc");
const ticketOrderDocs = require("./docs/ticket-order.doc");
const marketPlaceDoc = require("./docs/marketplace.doc");
const chatDocs = require("./docs/chat.doc");
const notificationDocs = require("./docs/notification.doc");

const swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "Chord chat",
    version: "0.0.1",
    description:
      "This is the documentation for chord chat. In this documentation you can view the different routes involved in the craft of chord chat. Chord chat is built with microservices, thus you can view the routes categorized under different services.",
  },
  servers: [
    {
      url: " http://localhost:3000",
      description: "Local dev",
    },
  ],
  tags: [
    { name: "User-Service", description: "Routes in User-service" },
    { name: "Post-Service", description: "Routes in Post-service" },
    { name: "Ticket-Service", description: "Routes in Ticket-service" },
    {
      name: "Ticket-Order-Service",
      description: "Routes in Ticket-order-service",
    },
    {
      name: "Marketplace-Service",
      description: "Routes in Marketplace-service",
    },
    { name: "Chat-Service", description: "Routes in chat-service" },
    {
      name: "Notification-Service",
      description: "Routes in notification-service",
    },
  ],
  paths: {
    ...userRouteDocs,
    ...postRouteDocs,
    ...ticketRouteDocs,
    ...ticketOrderDocs,
    ...marketPlaceDoc,
    ...chatDocs,
    ...notificationDocs,
  },
};

module.exports = swaggerDocumentation;
