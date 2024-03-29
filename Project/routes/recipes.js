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

router.get("/", async (req, res) => {
  res.render("restaurant/login")
});

router.post("/restaurantfilter", async (req, res) => {
  res.render("restaurant/restaurant_filter",{})
});
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
