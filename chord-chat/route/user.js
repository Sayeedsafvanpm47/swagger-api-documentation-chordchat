const express = require('express')
const {v4:uuidv4} = require('uuid')

const router = express.Router()
let authorized = false 
let loggedin 
let otp 
let userSignupDetails
let forgotEmail 
function authorize(req,res,next){
          if(authorized)
          {
                    next()
          }else
          {
                    return res.status(401).send({message:'Not authorized'})
          }
}
const data = [
	{
		id: "7e5a2ae4-1221-4e35-b582-2de33a1e1312",
		name: "David",
	},
	{
		id: "5d3d2102-bfe5-4bbc-854d-59480bb4be12",
		name: "John",
	},
          {
                    id:2,
                    username:'sydonguitars',
                    email:'sayeed@gmail.com',
                    password:'12345',
                    fans:[],
                    idols:[],
                    status:'active'
          },
          {         id:1,
                    username:'sydsfn',
                    email:'sayeed123@gmail.com',
                    password:'123456',
                    fans:[],
                    idols:[],
                    status:'active'
          }
];
router.post("/signup", (req, res) => {
          try {
              const emailExists = data.some(user => user.email === req.body.email);
              if (emailExists) {
                  return res.status(409).json({ message: 'Email already exists' });
              }
              
              const otp = 123; 
              
             userSignupDetails = {
                    email:req.body.email,
                    password:req.body.password,
                    username:req.body.username || '',
                    fans:[],
                    idols:[],
                  

             }
              return res.json({ message: 'OTP verification required', otp: otp });
              
          } catch (error) {
              console.error(error);
              return res.status(500).send({ message: 'Internal server error' });
          }
      });

      //otp middleware 
      function verifyOTP(req, res, next) {
          const otp = req.body.otp;
         
          
          if (otp === '123') {
            
              next();
          } else {
            
              return res.status(401).json({ message: 'Invalid OTP' });
          }
      }
      
      router.post('/verify-signup',verifyOTP, (req, res) => {
          try {
              
                  const user = { id: uuidv4(), ...userSignupDetails };
                  data.push(user);
                  return res.json(user);
              
          } catch (error) {
              console.error(error);
              return res.status(500).send({ message: 'Internal server error' });
          }
      });


      
router.get("/users", (req, res) => {
	return res.json({
		count: data.length,
		values: data,
	});
});

router.post('/signin', (req, res) => {
          const user = data.find(user => user.email === req.body.email);
      
          if (!user) {
              return res.status(404).json({ message: 'Account not found' });
          }
      
          if (user.password === req.body.password) {
              authorized = true;
              loggedin = req.body.email;
              return res.json(user);
          } else {
              return res.status(401).json({ message: 'Invalid credentials' });
          }
      });
      

router.get('/get-user',(req,res)=>{
if(authorized)
{
          const login = {
                    email : loggedin,
                    message:'Logged in as'+ ' ' + loggedin
          }
          return res.json(login)
}else
{
          res.status(401).send({message:'Not authorized!'})
}
})

router.get('/signout',(req,res)=>{
          if(authorized){
                    authorized = false 
                    loggedin = null 
                    return res.json({message:'Logout success'})
          }else 
          {
                    return res.status(401).send({message:'No user is currently logged in'})
          }
         
})

router.get('/user-profile',(req,res)=>{
if(authorized)
{
          let profile = {
                    gigs:['video1','video2'],
                    fans:10,
                    idols:20,
                    profile_description:'Guitarist at charlog band',
                    username:'sydonguitars',
                    pfp:'sasjdajsdajs192348124891241204214441.jpg',


          }
          return res.json(profile)
}
else
{
  return res.status(401).send({message:'Not authorized'})
}
})


router.patch('/edit-profile', (req, res) => {
          if (!authorized) {
              return res.status(401).json({ message: 'Unauthorized access' });
          }
      
          const userIndex = data.findIndex(user => user.email === loggedin);
      
          if (userIndex === -1) {
              return res.status(404).json({ message: 'User not found' });
          }
      
         
          if (req.body.oldpassword && data[userIndex].password !== req.body.oldpassword) {
              return res.status(409).json({ message: 'Old password is incorrect!' });
          }
      
         
          const updatedUserDetails = {
              ...data[userIndex],
              username: req.body.username || data[userIndex].username,
              password: req.body.newpassword || data[userIndex].password
          };
      
          
          data[userIndex] = updatedUserDetails;
      
          return res.json({ message: 'Profile updated successfully', user: updatedUserDetails });
      });
      

router.post('/find-users',authorize,(req,res)=>{
          const searchTerm = req.body.searchTerm 
          const regex = new RegExp(searchTerm, 'i'); // 'i' flag for case-insensitive search

    const foundUsers = data.filter(user => regex.test(user.username));

    if (foundUsers.length > 0) {
        return res.json({ message: 'Users found', users: foundUsers });
    } else {
        return res.status(404).json({ message: 'No users found matching the search term' });
    }
})

router.get('/view-profile/:id',authorize,(req,res)=>{
          const userId = req.params.id
         

    const foundUsers = data.findIndex(user => user.id == userId);

    if (foundUsers !== -1) {
        return res.json({ message: 'User found', users: data[foundUsers] });
    } else {
        return res.status(404).json({ message: 'No users found!' });
    }
})

router.post('/toggle-follow-user/:id', authorize, (req, res) => {
          const userId = req.params.id;
          const targetUserIndex = data.findIndex(user => user.id == userId);
          const currentUserIndex = data.findIndex(user => user.email == loggedin);
      
          if (targetUserIndex !== -1 && currentUserIndex !== -1) {
              const targetUser = data[targetUserIndex];
              const currentUser = data[currentUserIndex];
      
            
              const isFollowing = currentUser.idols.includes(userId);
      
              if (isFollowing) {
                  
                  const targetUserIndexInFollowers = targetUser.fans.indexOf(currentUser.id);
                  const currentUserIndexInIdols = currentUser.idols.indexOf(userId);
                  targetUser.fans.splice(targetUserIndexInFollowers, 1);
                  currentUser.idols.splice(currentUserIndexInIdols, 1);
                  return res.json({ message: 'User unfollowed successfully', currentUser: currentUser, followedUser: targetUser });
              } else {
               
                  targetUser.fans.push(currentUser.id);
                  currentUser.idols.push(userId);
                  return res.json({ message: 'User followed successfully', currentUser: currentUser, followedUser: targetUser });
              }
          } else {
              return res.status(400).send({ message: 'Failed to follow, bad request' });
          }
      });
      
      router.post('/forgot-password',(req,res)=>{
         otp = 123
         forgotEmail = req.body.email 
         
         res.json({message:'Requesting otp verification for password reset',otp:otp,email:forgotEmail})
         
      })
      router.post('/verify-forgot-password',(req,res)=>{
         const findUser = data.findIndex((user)=>user.email==forgotEmail)
         if(findUser !== -1)
         {
          if(otp==123){
          if(req.body.password == req.body.confirmpassword)
          {
          data[findUser].password = req.body.password 
          return res.json({message:'password updated',user:data[findUser]})
          }else
          {
                    return res.status(409).send({message:'Passwords doesnt match'})
          }
}
return res.status(401).send({message:'Invalid otp, authorization error'})


         }
      })
      
// query id
router.get("/users/id", (req, res) => {
	const user_record = data.find((user) => user.id === req.query.id);

	if (!user_record) {
		return res.status(404).json({
			message: "User not found.",
		});
	}

	return res.json(user_record);
});

router.get("/users/:id", (req, res) => {
	const user_record = data.find((user) => user.id === req.params.id);

	if (!user_record) {
		return res.status(404).json({
			message: "User not found.",
		});
	}

	return res.json(user_record);
});


//admin 


router.get('/admin-get-all-users',authorize,(req,res)=>{
try {
          if(data.length)
{
          return res.json({message:'List of users!',users:data})
}else
{
          return res.status(400).json({message:'Bad request error'})
}
          
} catch (error) {
          return res.status(500).send({message:'Internal server error'})
}
})


router.post('/admin-toggle-block-user/:id', authorize, (req, res) => {
          try {
              const userId = req.params.id;
              const findUser = data.findIndex(user => user.id == userId);
      
              if (findUser !== -1) {
                 
                  data[findUser].status = data[findUser].status === 'active' ? 'blocked' : 'active';
                  return res.json({ message: `User status changed to ${data[findUser].status}!`, user: data[findUser] });
              } else {
                 
                  return res.status(404).send({ message: 'User not found' });
              }
          } catch (error) {
             
              console.error('Error toggling user block status:', error);
              return res.status(500).send({ message: 'Internal server error' });
          }
      });
      
      router.get('/admin-view-user/:id',authorize,(req,res)=>{
          const userId = req.params.id
         

    const foundUsers = data.findIndex(user => user.id == userId);

    if (foundUsers !== -1) {
        return res.json({ message: 'Users found', users: data[foundUsers] });
    } else {
        return res.status(404).json({ message: 'No users found!' });
    }
})


module.exports = router;