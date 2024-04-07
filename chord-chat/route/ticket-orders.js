const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const orderData = [{
          id:1,userId:2,ticketId:1,numberOfTickets:2,price:1000,total:2000,paymentStatus:'done',purchaseDate:'10/04/2024',orderStatus:'booked'
},{
          id:2,userId:1,ticketId:1,numberOfTickets:2,price:1000,total:2000,paymentStatus:'done',purchaseDate:'10/04/2024',orderStatus:'booked'
},{
          id:1,userId:2,ticketId:1,numberOfTickets:2,price:1000,total:2000,paymentStatus:'done',purchaseDate:'10/04/2024',orderStatus:'cancelled'
}]

function createOrderAndPlaceInDatabase()
{
//function for processing after listeing to the events from payment service 
}
router.get('/view-user-orders', (req, res) => {
          try {
            const loggedInUserId = 1;
            const userOrders = orderData.filter(order => order.userId == loggedInUserId);
            
            if (userOrders.length > 0) {
              return res.json({ userOrders });
            } else {
              return res.status(404).json({ message: 'No orders found for the user' });
            }
          } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
          }
        });
        router.get('/cancel-order/:orderId', (req, res) => {
          try {
            const orderId = req.params.orderId;
            let loggedInUserDetails = {
                    id:1,wallet:0
            }
            const findOrderIndex = orderData.findIndex(order => order.id == orderId);
        
            if (findOrderIndex !== -1) {
              loggedInUserDetails.wallet = loggedInUserDetails.wallet + orderData[findOrderIndex].total
              orderData[findOrderIndex].orderStatus = 'cancelled'
              orderData[findOrderIndex].paymentStatus = 'refunded to wallet'
              const restockData = {
                    ticketId: orderData[findOrderIndex].ticketId,
                    numberOfTickets: orderData[findOrderIndex].numberOfTickets
                  };

             
              return res.json({ message: 'Order canceled successfully, event to emit restock data emitted successfully', cancelledOrder:orderData[findOrderIndex],restockData });
            } else {
              
              return res.status(404).json({ message: 'Order not found' });
            }
          } catch (error) {
          
            return res.status(500).json({ message: 'Internal server error' });
          }
        });
        
        router.get('/admin-view-all-orders',(req,res)=>{
          try {
                    if(orderData.length)
                    {
                      res.json({message:'Orders fetched successfully',orders:orderData})
                    }
                    else
                    {
                      res.json({message:'No orders yet',orders:[]})
                    }
          } catch (error) {
                    res.status(500).json({message:'Internal server error'})
          }
        })

      module.exports = router 