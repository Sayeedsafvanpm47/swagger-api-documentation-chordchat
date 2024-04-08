const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const marketPlaceData = [
  {
    id: 1,
    userId: 2,
    description: "New guitar",
    price: 2000,
    image: "fjdashfajofa.jpg",
    created_At: "10/04/2024",
    Active: true,
    flag_count : 3,
    visibility : true 
  },
  {
    id: 2,
    userId: 1,
    description: "New drums",
    price: 5000,
    image: "3313jofa.jpg",
    created_At: "11/04/2024",
    Active: true,
    flag_count : 4,
    visibility : true 
  },
];
const currentDate = new Date();
router.post("/create-ad", (req, res) => {
  try {
    const { description, image, price } = req.body;
    if (!description || !image || !price)
      return res.status(400).send({ message: "Error while creating" });
    let adData = {
      id: uuidv4(),
      created_At: currentDate,
      Active: true,
      ...req.body,
    };
    marketPlaceData.push(adData);
    res.json({ message: "Post created successfully", data: adData });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

router.get("/toggle-show-ad/:adId", (req, res) => {
  try {
    const adId = req.params.adId;
    const adIndex = marketPlaceData.findIndex((ad) => ad.id == adId);

    if (adIndex !== -1) {
      marketPlaceData[adIndex].Active = !marketPlaceData[adIndex].Active;
      return res.json({
        message: "Ad status toggled successfully",
        updatedAd: marketPlaceData[adIndex],
      });
    } else {
      return res.status(404).json({ message: "Ad not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/ad-message-user/:adId", (req, res) => {
  try {
    const adId = req.params.adId;

    const adIndex = marketPlaceData.findIndex((ad) => ad.id == adId);

    if (adIndex !== -1) {
      const adDetails = { ...marketPlaceData[adIndex] };

      const message =
        "Event emitted with message details to be sent to the owner of the ad from the user, this will be shown in the user's chat";

      return res.json({ message, adDetails });
    } else {
      return res.status(404).json({ message: "Ad not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/flag-ad/:id',(req,res)=>{
  try {
      const adId = req.params.id 
      const findAdIndex = marketPlaceData.findIndex(ad => ad.id == adId)
      if(findAdIndex == -1) return res.status(404).json({message:'Ad not found'})
      marketPlaceData[findAdIndex].flag_count++ 
      if(marketPlaceData[findAdIndex].flag_count >=5)
      {
          marketPlaceData[findAdIndex].visibility = false 
          return res.json({message:'Ad is flagged visibility changed, event for notifying sent out',data:marketPlaceData[findAdIndex]})
      }else
      {
          return res.json({message:'Ad is flagged',data:marketPlaceData[findAdIndex]})

      }
  } catch (error) {
    return res.status(404).send({message:'Ad not found'})
  }
})


router.delete('/delete-ad/:adId',(req,res)=>{
try {
  const adId = req.params.adId 
const findAdIndex = marketPlaceData.findIndex(ad => ad.id == adId)
if(findAdIndex !== -1)
{
  marketPlaceData.splice(findAdIndex,1)
  return res.json({message:'Successfully deleted ad',data:marketPlaceData})
}else
{
  return res.status(404).send({message:'Ad not found'})
}
} catch (error) {
  return res.status(500).send({message:'Internal server error'})
}

})

router.patch('/edit-ad/:adId',(req,res)=>{
  try {
    const adId = req.params.adId 
    const {image,description,price} = req.body 
    const adIndex = marketPlaceData.findIndex(ad => ad.id == adId)
    if(adIndex === -1)
    {
    return res.status(404).send({message:'Ad not found'})
    }
    if(image) marketPlaceData[adIndex].image = image 
    if(description) marketPlaceData[adIndex].description = description 
    if(price) marketPlaceData[adIndex].price = price 
    return res.json({message:`Ad for id ${adId} updated succesfully`,data:marketPlaceData[adIndex]})
    
  } catch (error) {
    return res.status(500).send({message:'Internal server error!'})
  }
})

router.get('/get-ads',(req,res)=>{
  try {
    if(marketPlaceData.length)
    {
      return res.json({message:'Fetched all ads successfully',data:marketPlaceData})

    }else
    {
      return res.json({message:'No ads available',data:[]})
    }
  } catch (error) {
    return res.status(500).json({message:'Internal server error'})
  }
})

module.exports = router 