const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const ticketData = [
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
];
let currentDate = new Date()
router.post("/admin-create-ticket", (req, res) => {
try {

  const { title, description, price, stock, expiring_At } = req.body;
  if (!title || !description || !price || !stock || !expiring_At)
    return res.status(401).send({ message: "Fill in details properly" });
  ticketData.push({id:uuidv4(),createdAt:currentDate,...req.body,expired:false})
  return res.json({data:ticketData[ticketData.length-1]})
  
} catch (error) {
  return res.status(500).json({message:'Internal server error'})
}
});

router.patch('/admin-edit-ticket/:id', (req, res) => {
          const { id } = req.params;
          const { title, description, price, stock, expiring_At } = req.body;  
          const ticketIndex = ticketData.findIndex(ticket => ticket.id == id);  
          if (ticketIndex === -1) {
            return res.status(404).json({ message: 'Ticket not found' });
          }
          if (title) ticketData[ticketIndex].title = title;
          if (description) ticketData[ticketIndex].description = description;
          if (price) ticketData[ticketIndex].price = price;
          if (stock) ticketData[ticketIndex].stock = stock;
          if (expiring_At) ticketData[ticketIndex].expiring_At = expiring_At;
        
          return res.json({ message: 'Ticket updated successfully', data: ticketData[ticketIndex] });
        });
        
router.post('/buy-ticket/:id',(req,res)=>{
          const ticketId = req.params.id 
          const numberOfTickets = req.body.numberOfTickets 
          const checkticketStock = ticketData.findIndex(ticket => ticket.id == ticketId)
         if(ticketData[checkticketStock].stock == 0) return res.status(401).send({message:'Stock out'})
          if(ticketData[checkticketStock] !== -1)
          {
                    if(ticketData[checkticketStock].stock >= 1)
                    {
                              ticketData[checkticketStock].stock = ticketData[checkticketStock].stock - numberOfTickets 
                              return res.json({message:'ticket stock changed, ticket details sent to payment, waiting for placing order after payment verification!',data:{numberOfTickets:numberOfTickets,...ticketData[checkticketStock]}}) 

                    }
          }
})

router.get('/list-tickets',(req,res)=>{
  try {
   if(ticketData.length)
    res.json({message:'All tickets fetched succesfully',data:ticketData})
    else 
    return res.json({message:'No tickets available',data:[]})
  } catch (error) {
    return res.status(500).json({message:'Internal server error'})
  }
})

router.get('/share-ticket/:id',(req,res)=>{
          const ticketId = req.params.id 
          const findTicketIndex = ticketData.findIndex(ticket => ticket.id == ticketId)
          if(findTicketIndex === -1) return res.status(404).json({message:'Ticket not found'})
          return res.json({message:`Ticket with id ${ticketId} shared to whatsapp window`,data:ticketData[findTicketIndex]})
})

module.exports = router;
