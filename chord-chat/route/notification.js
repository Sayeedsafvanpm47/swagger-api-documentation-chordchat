const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const notificationData = [{
id:1,notification_content:{message:'Welcome to chord chat buds!',follower_id:-1},status:'sent',created_At:'10/04/2024',generic:true,user_id:-1
},{
          id:2,notification_content:{message:'Welcome to chord chat buds!',follower_id:2},status:'sent',created_At:'10/04/2024',generic:false,user_id:1
}]

router.post('/send-general-notifications',(req,res)=>{
try {
          const notification = req.body.notification 
const data = {id:uuidv4(),notification_content:{message:notification,follower_id:-1},status:'sent',created_At:'10/04/2024',generic:true,user_id:-1}
notificationData.push(data)
res.json({message:'Event generated to notification producer to be recieved from user side to push to notification array to view notifications!',data:data})
} catch (error) {
        res.status(500).json({message:'Internal Server Error'})  
}
})

router.get('/view-notifications',(req,res)=>{
try {
         if(notificationData.length)
         {
          res.json({message:'Notifications fetched successfully',data:notificationData})
         } else{
          res.json({message:'No sent notifications',data:[]})
         }
          
} catch (error) {
          res.status(500).json({message:'Internal server error'})
}
})

function handleUserSpecificNotifications()
{
          //function to handle the followed events from user followed
}
function sendFollowNotifications()
{
          //function to send the followed by notifications to the user
}

module.exports = router 