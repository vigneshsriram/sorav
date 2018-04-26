const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;
const uuid = require("node-uuid");
// router.get("/:id", async (req, res) => {
//   try {
//    // res.send(req.params.id);
//     const user = await recipeData.getrecipeById(req.params.id);
//     res.json(user);
  
//   } catch (e) {
//     res.status(404).json({ message: e});
//   }
// });

router.get("/", async (req, res) => {
  res.render("restaurant/login")
});

router.get("/signup", async (req, res) => {
  res.render("restaurant/signup")
});

router.post("/login", async (req, res) => {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var username = req.body.username;
  var pass = req.body.password
  var email = req.body.email
  var userinfo = await recipeData.adduser(fname,lname,username,email,pass);
  console.log(userinfo)
 if(userinfo == "DuplicateUser")
 {
   res.render("restaurant/signup",{"message":"Error: Username exists."})
 }
 else if(userinfo == "DuplicateEmail")
 {
   res.render("restaurant/signup",{"message":"Error: Email exists."})
 }
 else if(userinfo == "InvalidEmail")
 {
   res.render("restaurant/signup",{"message":"Error: Invalid email"})
 }
 else{
  res.render("restaurant/login",{"message":"Thankyou. Login now."})
 }
});
router.post("/restaurantfilter", async (req, res) => {
  var username = req.body.username
  var pass = req.body.password
  var user = await recipeData.validateUser(username,pass)
  console.log(user)
  
  if(user!="empty")
  {
  var patchedSession = await recipeData.patchsession(user._id)
  console.log(patchedSession)
  res.render("restaurant/restaurant_filter")
  }
  else{
  res.render("restaurant/login",{"message":"Invalid user"})
  }
});

// router.post("/thankyou", async (req, res) => {
//   var fname = req.body.fname;
//   var lname = req.body.lname
//   var pass = req.body.password
//   await recipeData.adduser(fname,lname,pass);
//   res.render("restaurant/thankyou")
  
// });
router.get("/restaurantfilter", async (req, res) => {
    res.render("restaurant/restaurant_filter")
});

router.get("/restaurant/:id", async (req, res) => {
  console.log(req.params.id)
   var onerest =  await recipeData.getrestaurantbyid(req.params.id);
   console.log(onerest)
  res.render("restaurant/restaurant_detail",onerest)
});
router.post("/restaurantlist", async (req, res) => {
   
   //var state = "New Jersey";
   //var city = "Jersey city";
   
   var state = req.body.state;
	var city = req.body.city;
	var cuisine = req.body.cuisine;
	var cityValue = city.value;
    var stateValue = state.value;
    var rest= {};

	if(stateValue == ""){
		alert("enter state")
		return;
	}

	if(cityValue == ""){
		alert("enter city")
		return;
	}

	var cuisineArray = [];
	if(cuisine == ""){
		cuisineArray = ["Indian", "American", "Mexican", "Italian", "Chinese"]
		
	}else{
		cuisineArray.push(cuisine);
    }
    
    // rest.state = state;
    // rest.city = city;
    // rest.cuisine = cuisineArray;
    console.log("this is the value of the cuisine  " + state);
    console.log("this is the value of the cuisine  " + city);
    console.log("this is the value of the cuisine  " + cuisine);
   
    var arrrest = await recipeData.getrestaurants(state,city,cuisineArray);
    
   res.render("restaurant/restaurant_list",{rests:arrrest});

      
});

// router.put("/:id", async (req, res) => {
//   const updatedData = req.body;
//   // try {
//   //   await recipeData.getrecipeById(req.params.id);
//   // } catch (e) {
//   //   res.status(404).json({ error: "recipe not found" });
//   // }

//   try {
//     const updatedPost = await recipeData.updaterecipe(req.params.id, updatedData);
//     res.json(updatedPost);
//   } catch (e) {
//     res.status(500).json({ error: e });
//   }
// });

router.patch("/:id",async(req,res) => {

  const toupdate = req.body;
  // try
  // {
  //   await recipeData.getrecipeById(req.params.id);
  // }catch(e)
  // {
  //   res.send(404).json({error: "recipe not found"})
  // }

  try
  {
     const updateddata = await recipeData.patchrecipe(req.params.id, toupdate);
     res.json(updateddata);
  }catch(e)
  {
        res.status(500).json({error : e})
  }
});
router.delete("/:id", async (req, res) => {
 
  try {
   const something = await recipeData.removerecipe(req.params.id);
   res.json({message: "deleted"})
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
