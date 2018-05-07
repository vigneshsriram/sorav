function selectCity(state,city){
    var state = document.getElementById(state);
    var city = document.getElementById(city);

    city.innerHTML = "";

    if(state.value == "New York"){
		var optionArray = ["|","New York City|New York City","Buffalo|Buffalo","Syracuse|Syracuse"];
	} else if(state.value == "New Jersey"){
		var optionArray = ["|","Lawrenceville|Lawrenceville","Princeton|Princeton","Trenton|Trenton","Jersey city|Jersey city"];
	} else if(state.value == "Massachusetts"){
		var optionArray = ["|","Cambridge|Cambridge","Boston|Boston", "Somerville|Somerville"];
    }
    else if(state.value == "Florida"){
		var optionArray = ["|","Florida City|Florida City","Tampa|Tampa", "Key West|Key West"];
    }
    else if(state.value == "5th state"){
		var optionArray = ["|","test|Mustang","shelby|Shelby"];
    }
    
    for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		console.log(pair);
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		city.options.add(newOption);
	}

}

function searchRestaurant(state, city, cuisine){

}