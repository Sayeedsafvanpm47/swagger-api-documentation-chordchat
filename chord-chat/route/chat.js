const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let chatData = [
          {
                    id: 1,
                    userId: 2,
                    received_messages: [{ id: 1, userId: 3, messages: [{time: Date.now(), message: "Hi hello"}],  }],
                    sent_messages: [
                      {
                        id: 1,
                        targetUserId: 1,
                        messages: [{time: Date.now(), message: "Hi sent message 1"}],
                        delivery_status: "delivered",
                      },
                    ],
                  },
  {
    id: 2,
    userId: 1,
    received_messages: [{ id: 1, userId: 3, messages: [{time: Date.now(), message: "Hi how are you"}],  }],
    sent_messages: [
      {
        id: 1,
        targetUserId: 2,
        messages: [{time: Date.now(), message: "Hi sent message 2"}],
        delivery_status: "delivered",
        time: Date.now()
      },
    ],
  }
];

router.get('/view-chats/:id',(req,res)=>{
  let messageUserId = parseInt(req.params.id); 
  let loggedInUserId = 2;
  let findUserIndex = chatData.findIndex(user => user.userId == loggedInUserId);

  if(findUserIndex !== -1) {
    let conversation = chatData[findUserIndex].received_messages.find(message => message.userId == messageUserId);

    if (conversation) {
      // If conversation found, send it as response
      res.json({ success: true, conversation });
    } else {
      res.status(404).json({ success: false, message: "Conversation not found" });
    }
  } else {
    res.status(404).json({ success: false, message: "User not found" });
  }
});

router.post('/send-message/:id',(req,res)=>{
          const message = req.body.message;
          const targetUserId = req.params.id;
      
         
          const loggedInUserId = 2; 
      
          
          let findUserIndex = chatData.findIndex(user => user.userId == loggedInUserId);
      
          if(findUserIndex !== -1) {
       
              let conversation = chatData[findUserIndex].sent_messages.find(message => message.targetUserId == targetUserId);
              
              if (conversation) {
                 
                  conversation.messages.push({time: Date.now(), message: message});
                  return res.json({ success: true, conversation });
              } else {
                  
                  chatData[findUserIndex].sent_messages.push({
                      id: uuidv4(), 
                      targetUserId: targetUserId,
                      messages: [{time: Date.now(), message: message}]
                  });
                  return res.json({ success: true, message: "Message sent successfully",data:chatData[findUserIndex].sent_messages });
              }
          } else {
              res.status(404).json({ success: false, message: "User not found" });
          }
      });
      
router.get('/video-call/:id',(req,res)=>{
try {
  const targetUser = req.params.id

res.json({message:'Video calling event triggered for user'+''+targetUser})
  
} catch (error) {
  res.status(500).json({message:'Internal server error'})
}

})

router.get('/chat-list',(req,res)=>{
  try {
    const user ={idols:[1,2,3,4,5]}
    res.json({message:'Fetched user idols successfully!',idols:user.idols})
  } catch (error) {
    res.status(500).json({message:'Internal server error'})
  }

})
module.exports = router 



