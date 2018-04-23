const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const users = data.users;
const recipes = data.recipes;

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();
  var obj =new Object();
  var name = "KFC";
  obj.name = name
  obj.description = "Best Fried Chicken"
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "Palisade Avenue"
  obj.cuisine = ["Indian","Chinese"]
  obj.timing = "9am to 11pm"
  obj.contact = "884-125-5241"
  var posterinfo = new Object();
  posterinfo.name="Alex"
  //posterinfo.id = 212312
  var review = new Object();
  //review.revid = 123
  review.poster = posterinfo 
  review.comment = "Great Food"
  review.rating = "4"
  var reviews = []
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "McD";
  obj.name = name
  obj.description = "Best Burger"
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "Sherman Avenue"
  obj.cuisine = ["Chinese"]
  obj.timing = "9am to 11pm"
  obj.contact = "994-415-5901"
  var posterinfo = new Object();
  posterinfo.name="George"
  review.poster = posterinfo 
  review.comment = "Great Quality"
  review.rating = "4"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Burger King";
  obj.name = name
  obj.description = "Awesome Burgers"
  obj.state = "New Jersey"
  obj.city = "Newark"
  obj.location = "Jackson Street"
  obj.cuisine = ["Fast Food"]
  obj.timing = "9am to 11pm"
  obj.contact = "129-905-1212"
  var posterinfo = new Object();
  posterinfo.name="Leo"
  review.poster = posterinfo 
  review.comment = "Great Deals"
  review.rating = "3"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Qdoba";
  obj.name = name
  obj.description = "Best Grills"
  obj.state = "New Jersey"
  obj.city = "Princeton"
  obj.location = "Washington Street"
  obj.cuisine = ["Mexican"]
  obj.timing = "9am to 11pm"
  obj.contact = "312-791-9912"
  var posterinfo = new Object();
  posterinfo.name="Ryan"
  review.poster = posterinfo 
  review.comment = "Spicy Food"
  review.rating = "4"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Amici Milano";
  obj.name = name
  obj.description = "Old-fashioned supper club with white-tablecloth dining, a lengthy wine list & weekend jazz music."
  obj.state = "New Jersey"
  obj.city = "Trenton"
  obj.location = "600 Chestnut Ave"
  obj.cuisine = ["Italian"]
  obj.timing = "9am to 10pm"
  obj.contact = "341-098-8123"
  var posterinfo = new Object();
  posterinfo.name="Percy"
  review.poster = posterinfo 
  review.comment = "Great place. The owner and staff make you feel welcomed. Excellent tapas and Dominican style cuisine. Save room for dessert."
  review.rating = "5"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  

    
  var name = "Dos Caminos";
  obj.name = name
  obj.description = "Vibrant cantina serving modern Mexican cuisine, made-to-order guacamole & tequila cocktails"
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "675 Hudson St, New York, NY 10014"
  obj.cuisine = ["Mexican"]
  obj.timing = "9am to 11pm"
  obj.contact = "341-098-8123"
  var posterinfo = new Object();
  posterinfo.name="Adam"
  review.poster = posterinfo 
  review.comment = "Spent the day in New York City with a friend. We stopped at Dos Camino for drinks and guacamole with chips. I enjoyed the organic margarita. It was delicious, light and refreshing.  The guacamole and chips were excellent. We ordered medium salsa, personally, it was a little too spicy for me"
  review.rating = "4.2"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Cookshop";
  obj.name = name
  obj.description = "Energetic, greenmarket-driven hot spot by the High Line serving American fare plus a popular brunch."
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "156 10th Ave, New York, NY 10011"
  obj.cuisine = ["American"]
  obj.timing = "9am to 11pm"
  obj.contact = "341-098-8123"
  var posterinfo = new Object();
  posterinfo.name="Chris"
  review.poster = posterinfo 
  review.comment = "One of the few New York City restaurants you can count on for an excellent meal regardless of circumstance. Go for any meal or for a day on the patio"
  review.rating = "4.5"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
 
  var name = "Taste Good Chinese Restaurant";
  obj.name = name
  obj.description = "Familiar Chinese noodles, seafood & tofu dishes in a strip-mall storefront known for takeout."
  obj.state = "New York"
  obj.city = "Buffalo"
  obj.location = "2308 Delaware Ave, Buffalo, NY 14216"
  obj.cuisine = ["Chinese"]
  obj.timing = "9am to 11pm"
  obj.contact = "341-098-8123"
  var posterinfo = new Object();
  posterinfo.name="Smith"
  review.poster = posterinfo 
  review.comment = "Not bad. The food was fresh but didn't stand out or impress. Gone back a few times for quick pickup. I really wish they used a little more spice in the cooking. Still it's worth it if you're looking to make a quick pickup of Chinese take-out. Decent parking options"
  review.rating = "3"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);

  var name = "Phoebe's Restaurant & Coffee Lounge";
  obj.name = name
  obj.description = "Long-running skylight-topped American bistro serving a seasonal menu, with an attached coffee bar."
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "900 E Genesee St, Syracuse, NY 13210"
  obj.cuisine = ["American"]
  obj.timing = "9am to 11pm"
  obj.contact = "341-098-8123"
  var posterinfo = new Object();
  posterinfo.name="Darcey"
  review.poster = posterinfo 
  review.comment = "Love their lunch specials and daily quiche selection. Can't go wrong with the French onion soup and pheobe salad either! They always get me in and out, even when I tell them I am on a short break"
  review.rating = "4"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Dosa Grill";
  obj.name = name
  obj.description = "Simply decorated Indian restaurant offering both Southern & Northern cuisine, plus a lunch buffet."
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "4467 E Genesee St, Syracuse, NY 13214"
  obj.cuisine = ["Indian"]
  obj.timing = "9am to 11pm"
  obj.contact = "341-098-8123"
  var posterinfo = new Object();
  posterinfo.name="Jessica"
  review.poster = posterinfo 
  review.comment = "Amazing food, truly some of the best Indian food I've had. Every dish ordered has been great."
  review.rating = "4"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);


  var name = "Yume Wo Katare ";
  obj.name = name
  obj.description = "Famous Ramen Noodles"
  obj.state = "Massachusetts"
  obj.city = "Cambridge"
  obj.location = "1923 Massachusetts Ave"
  obj.cuisine = ["Chinese"]
  obj.timing = "11am to 10pm"
  obj.contact = "617-714-4008"
  var posterinfo = new Object();
  posterinfo.name="Claire H."
  //posterinfo.id = 212312
  var review = new Object();
  //review.revid = 123
  review.poster = posterinfo 
  review.comment = "The ramen is huge and i hope they can come up with a more sustainable way not to waste a large amount of food everyday."
  review.rating = "3"
  var reviews = []
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Highland Kitchen";
  obj.name = name
  obj.description = "A regular haunt of practically everyone who has ever lived in Somerville's Spring Hill or Union Square"
  obj.state = "Massachusetts"
  obj.city = "Somerville"
  obj.location = "150 Highland Ave"
  obj.cuisine = ["American"]
  obj.timing = "11am to 1am"
  obj.contact = "617-625-1131"
  var posterinfo = new Object();
  posterinfo.name="Carlos F."
  review.poster = posterinfo 
  review.comment = "I always enjoy the food at highland kitchen. They have a creative menu and a friendly staff. I have never left disappointed. They're coconut curry dishes are amazing"
  review.rating = "5"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Giacomo’s Ristorante ";
  obj.name = name
  obj.description = "Best Italian Meal outside of Italy!"
  obj.state = "Massachusetts"
  obj.city = "Boston"
  obj.location = "355 Hanover St"
  obj.cuisine = ["Italian"]
  obj.timing = "4:30pm to 10:00pm"
  obj.contact = "617-523-9026"
  var posterinfo = new Object();
  posterinfo.name="Fletcher D."
  review.poster = posterinfo 
  review.comment = "Worth the wait. Very small inside, doesn't seat many, but that's part of the charm and they do move people in and out pretty quickly. Can't remember the name of my dish, it was on the special menu, it was delicious but I don't think it matters what you order, all 4 of our meals were excellent."
  review.rating = "4"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Taqueria Jalisco";
  obj.name = name
  obj.description = "Free chips with homemade salsa!"
  obj.state = "Massachusetts"
  obj.city = "Boston"
  obj.location = "291 Bennington St"
  obj.cuisine = ["Mexican"]
  obj.timing = "10am to 10pm"
  obj.contact = "617-567-6367"
  var posterinfo = new Object();
  posterinfo.name="Delaware"
  review.poster = posterinfo 
  review.comment = "Burrito mojado with pork carnitas and nachos con carne with beef also excellent."
  review.rating = "5"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "urya Indian Kitchen";
  obj.name = name
  obj.description = "Great takeout spot, provides delivery, and a few spots for dining"
  obj.state = "Massachusetts"
  obj.city = "Cambridge"
  obj.location = "114 Magazine St"
  obj.cuisine = ["Indian"]
  obj.timing = "11:15am to 10pm"
  obj.contact = "617-945-5489"
  var posterinfo = new Object();
  posterinfo.name="Karen"
  review.poster = posterinfo 
  review.comment = "Delicious, flavorful Butter Chicken, Naan, Riata and Rice Pudding!  I had it delivered and it was quick!"
  review.rating = "5"
  reviews = review
  await recipes.addrecipe(name, obj,reviews);

  console.log("Done seeding database");
  //await db.close();
}

main();