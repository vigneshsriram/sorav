const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");


router.get("/", async(req,res)=>{
    res.render("restaurantFilter");
});

router.post("/review", async(req, res)=>{
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
    
    rest.state = state;
    rest.city = city;
    rest.cuisine = cuisineArray;
    console.log("this is the value of the cuisine  " + state);
    console.log("this is the value of the cuisine  " + city);
    console.log("this is the value of the cuisine  " + cuisine);
    res.render("review", {
        rest
    });
})

module.exports = router;
