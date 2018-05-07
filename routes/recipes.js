const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

// router.get("/:id", async (req, res) => {
//   try {
//    // res.send(req.params.id);
//     const user = await recipeData.getrecipeById(req.params.id);
//     res.json(user);
  
//   } catch (e) {
//     res.status(404).json({ message: e});
//   }
// });
var authUser;
var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBW868Z1gfMZA_pQjyDopOLvsxyN9YujO8', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
//  var yeh;
 var geocoder = NodeGeocoder(options);


 router.get("/", async (req, res) => {
   var cook = req.cookies.AuthCookie;
  if( cook === undefined)
 {
    res.render("restaurant/login");
    
}
else
 {
    if(authUser!=undefined)
    { 
      res.redirect("/restaurantfilter");
    }
    else
    {
       res.clearCookie("AuthCookie");
       res.render("restaurant/login");
    }
}
});


router.get("/signup", async (req, res) => {
  res.render("restaurant/signup")
});


router.post("/login", async (req, res) => {
  var cook = req.cookies.AuthCookie;
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

  authUser = await recipeData.patchsession(user._id)

  res.cookie("AuthCookie",authUser.sessionId);  

 // console.log(patchedSession)
  res.render("restaurant/restaurant_filter")
  }
  else{

  res.render("restaurant/login",{"message":"Invalid user"})
  }
});

router.get("/restaurantfilter", async (req, res) => {
  var  cook = req.cookies.AuthCookie;
  if(cook===undefined)
  {
    res.redirect("/");
  }
  else
  {
  res.render("restaurant/restaurant_filter")
  }
});


router.get("/restaurant/:id", async (req, res) => {
 // console.log(req.params.id)
 var cook = req.cookies.AuthCookie;
 if(cook === undefined)
 {
    res.redirect("/");
 }
 else
 {

   var onerest =  await recipeData.getrestaurantbyid(req.params.id);
  // console.log(onerest)

   geocoder.geocode(onerest.obj.location,function(err,results)
   {
     lat = results[0].latitude;
     longi = results[0].longitude;
     console.log(lat,longi)
     res.render("restaurant/restaurant_detail", {latit:lat , longit:longi, restone:onerest });
   });
  }
//  res.render("restaurant/restaurant_detail",onerest)
});
router.post("/restaurant/:id", async (req, res) => {
  
   var onerest =  await recipeData.getrestaurantbyid(req.params.id);
  // console.log(onerest)
   var cook = req.cookies.AuthCookie;
  // console.log(authUser+"THAT")
   await recipeData.addreview(authUser,req.body.comment,onerest);
   geocoder.geocode(onerest.obj.location,function(err,results)
   {
     lat = results[0].latitude;
     longi = results[0].longitude;
     //console.log(req.params.id)
     
     res.render("restaurant/restaurant_detail", {latit:lat , longit:longi, restone:onerest });
   });
//  res.render("restaurant/restaurant_detail",onerest)
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
  // console.log("this is the value of the cuisine  " + state);
   //console.log("this is the value of the cuisine  " + city);
   //console.log("this is the value of the cuisine  " + cuisine);

  
  var arrrest = await recipeData.getrestaurants(state,city,cuisineArray);
  res.render("restaurant/restaurant_list",{rests:arrrest});

     
});

router.get("/userprofile",function(req,res){
  var cook = req.cookies.AuthCookie;
  if(cook === undefined)
  {
      res.redirect("/");
  }
  else
  {
    res.render("restaurant/userprofile",authUser);
  }

});


router.get("/logout", async (req, res) => {
  var cook = req.cookies.AuthCookie;
  if(cook === undefined)
  {
      res.redirect("/");

  }
  else
  {    
    if(authUser!=undefined)
    {
       var loggedout = await recipeData.patchsession(authUser._id)
        res.clearCookie("AuthCookie");
        console.log(loggedout)
    authUser = null;
  //console.log(authUser)
       res.redirect("/")
    }
    else
    {
      res.clearCookie("AuthCookie");
      res.redirect("/");
        
    }
  }
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

router.get("/changepassword", async (req, res) => {
  res.render("restaurant/changepassword")
});

router.post("/changepassword", async (req, res) => {
  var oldpassword = req.body.oldpassword;
  var newpassword = req.body.newpassword;

  var test = await recipeData.patchpassword(oldpassword, newpassword, authUser)
  if(test == "incorrect")
  {
    res.render("restaurant/changepassword",{"message" : "Error: Old password doesn't match entered password."})
  }
  else if(test == "same")
  {
    res.render("restaurant/changepassword",{"message" : "Error: New password and current password are the same."})
  }
  else{
    authUser = test;
    res.render("restaurant/changepassword",{"message" : "Password successfully changed."})
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