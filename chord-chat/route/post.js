const express = require("express");
const router = express.Router();
const {v4:uuidv4} = require('uuid')

let authorized = true;
let postData = [
  {
    id: 1,
    user_id: 1,
    description: "My first post",
    likes: [{ userId: "2" }, { userId: "4" }],
    comments: [{ userId: 2,commentId:2, comment: "super" }],
    video: "sdashdahwesd123123.mp4",
  },{
          id: 2,
          user_id: 2,
          description: "My second post",
          likes: [{ userId: "3" }, { userId: "4" }],
          comments: [{ userId: 1,commentId:1, comment: "super" },{ userId: 1,commentId:2, comment: "super 2" }],
          video: "sdashdahwesd12asdad3123.mp4",
        },
        {
          id: 3,
          user_id: 2,
          description: "My second post",
          likes: [{ userId: "3" }, { userId: "4" }],
          comments: [{ userId: 1,commentId:3, comment: "super" }],
          video: "sdashdahwesd12asdad3123.mp4",
        }
];
function authorize(req, res, next) {
  if (authorized) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized access" });
  }
}

router.post("/create-post",authorize, (req, res) => {
  try {
          const {video} = req.body 
          if(!video) return res.status(404).json({message:'Not found, some error occured'})
          const newpost ={id:uuidv4(),...req.body} 
          postData.push(newpost)
          res.json({message:'Post created successfully',postData:newpost})
          

  } catch (error) {
          res.status(500).json({message:'internal server error'})
  }
});

router.delete("/delete-post/:id", (req, res) => {
          try {
              const postId = req.params.id;
              const currentPostIndex = postData.findIndex(post => post.id == postId);
      
              if (currentPostIndex !== -1) {
                  postData.splice(currentPostIndex, 1);
                  return res.status(204).send(); 
              } else {
                  return res.status(404).json({ message: 'Post not found' });
              }
          } catch (error) {
              console.error('Error deleting post:', error);
              return res.status(500).json({ message: 'Internal server error' });
          }
      });
router.get("/get-posts",(req,res)=>{
          try {
                  res.json({postData:postData})  
          } catch (error) {
                    res.status(500).send({message:'Internal server error'})
          }
})

router.post('/toggle-like-post/:id', (req, res) => {
          try {
              const postId = req.params.id;
              const loggedInUserId = "1";
              const findPostIndex = postData.findIndex(post => post.id == postId);
      
              if (findPostIndex !== -1) {
                  const post = postData[findPostIndex];
                  const likedByUserIndex = post.likes.findIndex(user => user.userId == loggedInUserId);
      
                  if (likedByUserIndex !== -1) {
                     
                      post.likes.splice(likedByUserIndex, 1);
                  } else {
                   
                      post.likes.push({ userId: loggedInUserId });
                  }
      
                  return res.json({ message: 'Toggle like successful', post });
              } else {
                  return res.status(404).json({ message: 'Post not found' });
              }
          } catch (error) {
              console.error('Error toggling like:', error);
              return res.status(500).json({ message: 'Internal server error' });
          }
      });
      
router.post('/add-comment/:id',(req,res)=>{
          try {
           const comment = req.body.comment 
           const loggedInUserId = 1
           const findPost = postData.findIndex(post => post.id == req.params.id)
           if(findPost !== -1)
           {
                    postData[findPost].comments.push({userId:loggedInUserId,comment:comment,commentId:uuidv4()})
                    return res.json({message:'comment added successfully!',data:postData[findPost]})

           }else
           {
                    return res.status(404).json({ message: 'Post not found' });
           }
           
                    
          } catch (error) {
                    console.error('Error adding comment:', error);
                    return res.status(500).json({ message: 'Internal server error' });
          }
})

router.delete('/delete-comment/:id/:commentId', (req, res) => {
          try {
              const postId = req.params.id;
              const commentId = req.params.commentId;
      
            
              const postIndex = postData.findIndex(post => post.id == postId);
      
          
              if (postIndex !== -1) {
                  const post = postData[postIndex];
                  const commentIndex = post.comments.findIndex(comment => comment.commentId == commentId);
      
              
                  if (commentIndex !== -1) {
                      
                      post.comments.splice(commentIndex, 1);
                      return res.json({ message: 'Comment deleted successfully', data: post });
                  } else {
                      return res.status(404).json({ message: 'Comment not found' });
                  }
              } else {
                  return res.status(404).json({ message: 'Post not found' });
              }
          } catch (error) {
              console.error('Error deleting comment:', error);
              return res.status(500).json({ message: 'Internal server error' });
          }
      });
      

router.get('/view-comments/:id',(req,res)=>{
try {

          const postId = req.params.id 
          const findPost = postData.findIndex(post=>post.id == postId)
          if(findPost !== -1)
          {
                    return res.json({message:'Comments fetched successfully',comments:postData[findPost].comments})
          }
          else
          {
                    return res.status(404).send({message:'Not found'})
          }
          
} catch (error) {
          console.error('Error fetching comment:', error);
          return res.status(500).json({ message: 'Internal server error' });
}          
})

router.get('/view-likes/:id',(req,res)=>{
          try {

                    const postId = req.params.id 
                    const findPost = postData.findIndex(post=>post.id == postId)
                    if(findPost !== -1)
                    {
                              return res.json({message:'Likes fetched successfully',likes:postData[findPost].likes})
                    }
                    else
                    {
                              return res.status(404).send({message:'Not found'})
                    }
                    
          } catch (error) {
                    console.error('Error fetching likes:', error);
                    return res.status(500).json({ message: 'Internal server error' });
          }          
})
router.patch('/edit-post/:id',(req,res)=>{
          try {
                   const description = req.body.description 
                   const postId = req.params.id 
                   const findPost = postData.findIndex(post => post.id == postId)
                   if(findPost !== -1)
                   {
                    postData[findPost].description = description 
                    return res.json({message:'Edited successfully',data:postData[findPost]})
                   }else
                   {
                    
                    return res.status(404).send({message:'Not found'})
                   }

                    
          } catch (error) {
                    console.error('Error fetching likes:', error);
                    return res.status(500).json({ message: 'Internal server error' });
                    
          }
})

module.exports = router;
