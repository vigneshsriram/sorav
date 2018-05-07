// const dbConnection = require("../config/mongoConnection");
// const data = require("../data/");
// const users = data.users;
// const recipes = data.recipes;

// async function main() {
//   const db = await dbConnection();
//   await db.dropDatabase();


  

//   var obj =new Object();
//   var name = "Chef Of India";
//   obj.name = name
//   obj.description = "Homey, storefront nook with late hours preparing North & South Indian staples to eat in or take out"
//   obj.state = "New Jersey"
//   obj.city = "Jersey city"
//   obj.location = "324 Central Ave, Jersey City, NJ 07307"
//   obj.cuisine = ["Indian"]
//   obj.timing = "9am to 1am"
//   obj.contact = "884-125-5241"
//   var posterinfo = new Object();
//   posterinfo.name="Amol Kurhade"
//   //posterinfo.id = 212312
//   var review = new Object();
//   //review.revid = 123
//   review.poster = posterinfo 
//   review.comment = "The place is good near to Indian street in jersey city, you can easily find parking not like the Indian street on Newark Ave. the taste is good and the rate are also low. Two can have a snack and full dinner by $16/20. Recommended"
//   review.rating = "4"
//   var reviews = []
//   reviews = review
//   obj.imgpath = "/public/pics/pic1.jpg";
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "King Szechuan Palace";
//   obj.name = name
//   obj.description = "Informal eatery serving sushi & Sichuan-style Chinese dishes, such as dry pot chicken."
//   obj.state = "New Jersey"
//   obj.city = "Jersey city"
//   obj.location = "83, 2446, Reservoir Ave, Jersey City, NJ 07307"
//   obj.cuisine = ["Chinese"]
//   obj.timing = "9am to 10:30pm"
//   obj.contact = "(201) 222-6888"
//   var posterinfo = new Object();
//   posterinfo.name="Nathan Jimenez"
//   review.poster = posterinfo 
//   review.comment = "Super nice. Tasty but not expensive. Very good."
//   review.rating = "4"
//   reviews = review
//   obj.imgpath = "/public/pics/pic2.jpg"
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "Amici Milano";
//   obj.name = name
//   obj.description = "Old-fashioned supper club with white-tablecloth dining, a lengthy wine list & weekend jazz music"
//   obj.state = "New Jersey"
//   obj.city = "Trenton"
//   obj.location = "600 Chestnut Ave, Trenton, NJ 08611"
//   obj.cuisine = ["Italian"]
//   obj.timing = "9am to 10pm"
//   obj.contact = "(973) 589-4767"
//   var posterinfo = new Object();
//   posterinfo.name="Joseph Merlino"
//   review.poster = posterinfo 
//   review.comment = "Great place. The owner and staff make you feel welcomed. Excellent tapas and Dominican style cuisine. Save room for dessert."
//   review.rating = "4"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "QDOBA Mexican Eats";
//   obj.name = name
//   obj.description = "Mexican chain for counter-serve, custom burritos, tacos & more, including health-oriented options"
//   obj.state = "New Jersey"
//   obj.city = "Princeton"
//   obj.location = "140 Nassau St, Princeton, NJ 08542"
//   obj.cuisine = ["Mexican"]
//   obj.timing = "9am to 11pm"
//   obj.contact = "(609) 921-2031"
//   var posterinfo = new Object();
//   posterinfo.name="Ryan Mitchell"
//   review.poster = posterinfo 
//   review.comment = "First time at Princeton Qdoba. I really liked the taste of food here"
//   review.rating = "4"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "Route 1 Diner Restaurant";
//   obj.name = name
//   obj.description = "Traditional family-friendly American diner with vinyl booths, jukeboxes & free WiFi, open 24 hours."
//   obj.state = "New Jersey"
//   obj.city = "Lawrenceville"
//   obj.location = "2009 US-1, Lawrenceville, NJ 08648"
//   obj.cuisine = ["American"]
//   obj.timing = "9am to 10pm"
//   obj.contact = "(609) 392-3500"
//   var posterinfo = new Object();
//   posterinfo.name="Sam Roig"
//   review.poster = posterinfo 
//   review.comment = "Some of the best. High quality. Diner food I ever had in New Jersey. A must go place when driving through town"
//   review.rating = "5"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  


//   //MASSACHUSETTS DATABASE
//   var name = "Yume Wo Katare ";
//   obj.name = name
//   obj.description = "Famous Ramen Noodles"
//   obj.state = "Massachusetts"
//   obj.city = "Cambridge"
//   obj.location = "1923 Massachusetts Ave"
//   obj.cuisine = ["Chinese"]
//   obj.timing = "11am to 10pm"
//   obj.contact = "617-714-4008"
//   var posterinfo = new Object();
//   posterinfo.name="Claire H."
//   //posterinfo.id = 212312
//   var review = new Object();
//   //review.revid = 123
//   review.poster = posterinfo 
//   review.comment = "The ramen is huge and i hope they can come up with a more sustainable way not to waste a large amount of food everyday."
//   review.rating = "3"
//   var reviews = []
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "Highland Kitchen";
//   obj.name = name
//   obj.description = "A regular haunt of practically everyone who has ever lived in Somerville's Spring Hill or Union Square"
//   obj.state = "Massachusetts"
//   obj.city = "Somerville"
//   obj.location = "150 Highland Ave"
//   obj.cuisine = ["American"]
//   obj.timing = "11am to 1am"
//   obj.contact = "617-625-1131"
//   var posterinfo = new Object();
//   posterinfo.name="Carlos F."
//   review.poster = posterinfo 
//   review.comment = "I always enjoy the food at highland kitchen. They have a creative menu and a friendly staff. I have never left disappointed. They're coconut curry dishes are amazing"
//   review.rating = "5"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "Giacomo’s Ristorante ";
//   obj.name = name
//   obj.description = "Best Italian Meal outside of Italy!"
//   obj.state = "Massachusetts"
//   obj.city = "Boston"
//   obj.location = "355 Hanover St"
//   obj.cuisine = ["Italian"]
//   obj.timing = "4:30pm to 10:00pm"
//   obj.contact = "617-523-9026"
//   var posterinfo = new Object();
//   posterinfo.name="Fletcher D."
//   review.poster = posterinfo 
//   review.comment = "Worth the wait. Very small inside, doesn't seat many, but that's part of the charm and they do move people in and out pretty quickly. Can't remember the name of my dish, it was on the special menu, it was delicious but I don't think it matters what you order, all 4 of our meals were excellent."
//   review.rating = "4"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "Taqueria Jalisco";
//   obj.name = name
//   obj.description = "Free chips with homemade salsa!"
//   obj.state = "Massachusetts"
//   obj.city = "Boston"
//   obj.location = "291 Bennington St"
//   obj.cuisine = ["Mexican"]
//   obj.timing = "10am to 10pm"
//   obj.contact = "617-567-6367"
//   var posterinfo = new Object();
//   posterinfo.name="Delaware"
//   review.poster = posterinfo 
//   review.comment = "Burrito mojado with pork carnitas and nachos con carne with beef also excellent."
//   review.rating = "5"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "urya Indian Kitchen";
//   obj.name = name
//   obj.description = "Great takeout spot, provides delivery, and a few spots for dining"
//   obj.state = "Massachusetts"
//   obj.city = "Cambridge"
//   obj.location = "114 Magazine St"
//   obj.cuisine = ["Indian"]
//   obj.timing = "11:15am to 10pm"
//   obj.contact = "617-945-5489"
//   var posterinfo = new Object();
//   posterinfo.name="Karen"
//   review.poster = posterinfo 
//   review.comment = "Delicious, flavorful Butter Chicken, Naan, Riata and Rice Pudding!  I had it delivered and it was quick!"
//   review.rating = "5"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);



//   //NEWYORK DATABASE
//   var name = "Dos Caminos";
//   obj.name = name
//   obj.description = "Vibrant cantina serving modern Mexican cuisine, made-to-order guacamole & tequila cocktails"
//   obj.state = "New York"
//   obj.city = "New York City"
//   obj.location = "675 Hudson St, New York, NY 10014"
//   obj.cuisine = ["Mexican"]
//   obj.timing = "9am to 11pm"
//   obj.contact = "341-098-8123"
//   var posterinfo = new Object();
//   posterinfo.name="Adam"
//   review.poster = posterinfo 
//   review.comment = "Spent the day in New York City with a friend. We stopped at Dos Camino for drinks and guacamole with chips. I enjoyed the organic margarita. It was delicious, light and refreshing.  The guacamole and chips were excellent. We ordered medium salsa, personally, it was a little too spicy for me"
//   review.rating = "4.2"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "Cookshop";
//   obj.name = name
//   obj.description = "Energetic, greenmarket-driven hot spot by the High Line serving American fare plus a popular brunch."
//   obj.state = "New York"
//   obj.city = "New York City"
//   obj.location = "156 10th Ave, New York, NY 10011"
//   obj.cuisine = ["American"]
//   obj.timing = "9am to 11pm"
//   obj.contact = "341-098-8123"
//   var posterinfo = new Object();
//   posterinfo.name="Chris"
//   review.poster = posterinfo 
//   review.comment = "One of the few New York City restaurants you can count on for an excellent meal regardless of circumstance. Go for any meal or for a day on the patio"
//   review.rating = "4.5"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
 
//   var name = "Taste Good Chinese Restaurant";
//   obj.name = name
//   obj.description = "Familiar Chinese noodles, seafood & tofu dishes in a strip-mall storefront known for takeout."
//   obj.state = "New York"
//   obj.city = "Buffalo"
//   obj.location = "2308 Delaware Ave, Buffalo, NY 14216"
//   obj.cuisine = ["Chinese"]
//   obj.timing = "9am to 11pm"
//   obj.contact = "341-098-8123"
//   var posterinfo = new Object();
//   posterinfo.name="Smith"
//   review.poster = posterinfo 
//   review.comment = "Not bad. The food was fresh but didn't stand out or impress. Gone back a few times for quick pickup. I really wish they used a little more spice in the cooking. Still it's worth it if you're looking to make a quick pickup of Chinese take-out. Decent parking options"
//   review.rating = "3"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);

//   var name = "Phoebe's Restaurant & Coffee Lounge";
//   obj.name = name
//   obj.description = "Long-running skylight-topped American bistro serving a seasonal menu, with an attached coffee bar."
//   obj.state = "New York"
//   obj.city = "Syracuse"
//   obj.location = "900 E Genesee St, Syracuse, NY 13210"
//   obj.cuisine = ["American"]
//   obj.timing = "9am to 11pm"
//   obj.contact = "341-098-8123"
//   var posterinfo = new Object();
//   posterinfo.name="Darcey"
//   review.poster = posterinfo 
//   review.comment = "Love their lunch specials and daily quiche selection. Can't go wrong with the French onion soup and pheobe salad either! They always get me in and out, even when I tell them I am on a short break"
//   review.rating = "4"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);
  
//   var name = "Dosa Grill";
//   obj.name = name
//   obj.description = "Simply decorated Indian restaurant offering both Southern & Northern cuisine, plus a lunch buffet."
//   obj.state = "New York"
//   obj.city = "Syracuse"
//   obj.location = "4467 E Genesee St, Syracuse, NY 13214"
//   obj.cuisine = ["Indian"]
//   obj.timing = "9am to 11pm"
//   obj.contact = "341-098-8123"
//   var posterinfo = new Object();
//   posterinfo.name="Jessica"
//   review.poster = posterinfo 
//   review.comment = "Amazing food, truly some of the best Indian food I've had. Every dish ordered has been great."
//   review.rating = "4"
//   reviews = review
//   await recipes.addrecipe(name, obj,reviews);




// //FLORIDA DATABASE
// var name = "Blue Heaven";
// obj.name = name
// obj.description = "Iconic landmark for Floridian-Caribbean cuisine & key lime pie, with a funky setting."
// obj.state = "Florida"
// obj.city = "Key West"
// obj.location = "729 Thomas St"
// obj.cuisine = ["Mexican"]
// obj.timing = "10am to 10pm"
// obj.contact = "305-296-8666"
// var posterinfo = new Object();
// posterinfo.name="Claudia Miller"
// review.poster = posterinfo 
// review.comment = "Kick back in the shady courtyard for breakfast with the roosters. Try the Shrimp and Grits or Lobster Benedict"
// review.rating = "4.5"
// reviews = review
// await recipes.addrecipe(name, obj,reviews);

// var name = "Columbia Restaurant";
// obj.name = name
// obj.description = "Traditional Spanish restaurant, a branch of a long-standing local chain dating back to 1905."
// obj.state = "Florida"
// obj.city = "Tampa"
// obj.location = "2117 E 7th Ave"
// obj.cuisine = ["Mexican", "Spanish"]
// obj.timing = "11am to 9pm"
// obj.contact = "813-248-4961"
// var posterinfo = new Object();
// posterinfo.name="Harry Bergner"
// review.poster = posterinfo 
// review.comment = "It is a great place to go. You can go over and over again and not get tierd of it. Dont forget to see the Flamingo dance show."
// review.rating = "5"
// reviews = review
// await recipes.addrecipe(name, obj,reviews);

// var name = "Farmer's Market Restaurant";
// obj.name = name
// obj.description = "Casual destination for American comfort food including hearty breakfasts, fried seafood & steaks."
// obj.state = "Florida"
// obj.city = "Florida City"
// obj.location = " 300 N Krome Ave # 17"
// obj.cuisine = ["American", "Spanish"]
// obj.timing = "9am to 9pm"
// obj.contact = " 305-242-0008"
// var posterinfo = new Object();
// posterinfo.name="David Guth"
// review.poster = posterinfo 
// review.comment = "Nice staff and also good parking for big rigs"
// review.rating = "3"
// reviews = review
// await recipes.addrecipe(name, obj,reviews);


// var name = "Sonny's BBQ";
// obj.name = name
// obj.description = "Long-standing fast-food chain specializing in meats slow smoked over oak, plus sides & salads."
// obj.state = "Florida"
// obj.city = "Florida City"
// obj.location = " 33505 S Dixie Hwy"
// obj.cuisine = ["American"]
// obj.timing = "9am to 9pm"
// obj.contact = "305-245-8585"
// var posterinfo = new Object();
// posterinfo.name="Millie Corso"
// review.poster = posterinfo 
// review.comment = "No delivery but they do have a drive up."
// review.rating = "1"
// reviews = review
// await recipes.addrecipe(name, obj,reviews);


// var name = "Taqueria Morelia";
// obj.name = name
// obj.description = "Informal taco spot with an extensive menu of traditional Mexican dishes plus a salsa bar."
// obj.state = "Florida"
// obj.city = "Florida City"
// obj.location = "961 W Palm Dr"
// obj.cuisine = ["American"]
// obj.timing = "9am to 9pm"
// obj.contact = "305-245-8585"
// var posterinfo = new Object();
// posterinfo.name="Cruz D Castillo"
// review.poster = posterinfo 
// review.comment = "Reasonable price and great taste."
// review.rating = "3"
// reviews = review
// await recipes.addrecipe(name, obj,reviews);

//   console.log("Done seeding database");//await db.close();
// }

// main();
const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const users = data.users;
const recipes = data.recipes;

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();
  var obj = new Object();

  var name = "Chef Of India";
  obj.description = "Homey, storefront nook with late hours preparing North & South Indian staples to eat in or take out"
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "324 Central Ave, Jersey City, NJ 07307"
  obj.cuisine = ["Indian"]
  obj.timing = ["Mon	11:00 am - 12:00 am","Tue	11:00 am - 12:00 am" ,"Wed	11:00 am - 12:00 am", "Thu	11:00 am - 12:00 am" ,"Fri	11:00 am - 12:00 am" , "Sat	11:00 am - 12:00 am" , "Sun	11:00 am - 12:00 am"]
  obj.contact = "884-125-5241"
  obj.rating = "0"
  var review = new Object();
  review.user="Amol Kurhade"
  review.comment = "The place is good near to Indian street in jersey city, you can easily find parking not like the Indian street on Newark Ave. the taste is good and the rate are also low. Two can have a snack and full dinner by $16/20. Recommended"
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "King Szechuan Palace";
  obj.description = "Informal eatery serving sushi & Sichuan-style Chinese dishes, such as dry pot chicken."
  obj.state = "New Jersey"
  obj.city = "Jersey city"
  obj.location = "83, 2446, Reservoir Ave, Jersey City, NJ 07307"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon	Closed",	"Tue	11:30 am - 10:30 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 10:30 pm" , "Fri	11:30 am - 11:00 pm", "Sat	11:30 am - 11:00 pm", "Sun	1:00 pm - 10:30 pm"]
  obj.contact = "(201) 222-6888"
  obj.rating = "0"
  var review = new Object();
  review.user="Nathan Jimenez"
  review.comment = "Super nice. Tasty but not expensive. Very good."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Amici Milano";
  obj.description = "Old-fashioned supper club with white-tablecloth dining, a lengthy wine list & weekend jazz music"
  obj.state = "New Jersey"
  obj.city = "Trenton"
  obj.location = "600 Chestnut Ave, Trenton, NJ 08611"
  obj.cuisine = ["Italian"]
  obj.timing = ["Mon	11:30 am - 10:30 pm",	"Tue	11:30 am - 10:30 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 10:30 pm" , "Fri	11:30 am - 11:00 pm", "Sat	11:30 am - 11:00 pm", "Sun	1:00 pm - 10:30 pm"]
  obj.contact = "(973) 589-4767"
  obj.rating = "0"
  var review = new Object();
  review.user ="Joseph Merlino"
  review.comment = "Great place. The owner and staff make you feel welcomed. Excellent tapas and Dominican style cuisine. Save room for dessert."
  review.rating = "4"
  var reviews = []
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "QDOBA Mexican Eats";
  obj.description = "Mexican chain for counter-serve, custom burritos, tacos & more, including health-oriented options"
  obj.state = "New Jersey"
  obj.city = "Princeton"
  obj.location = "83, 2446, Reservoir Ave, Jersey City, NJ 07307"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon	10:30 am - 11:00 pm	",	"Tue	10:30 am - 11:00 pm	" , "Wed	10:30 am - 11:00 pm	" , "Thu	10:30 am - 11:00 pm	" , "Fri	10:30 am - 3:00 am", "Sat	10:30 am - 3:00 am	", "Sun	10:30 am - 11:00 pm	"]
  obj.contact = "(201) 222-6888"
  obj.rating = "0"
  var review = new Object();
  review.user="Ryan Mitchell"
  review.comment = "First time at Princeton Qdoba. I really liked the taste of food here."
  review.rating = "4"
  var reviews = []
  await recipes.addrecipe(name, obj,reviews);

  var name = "Route 1 Diner Restaurant";
  obj.description = "Traditional family-friendly American diner with vinyl booths, jukeboxes & free WiFi, open 24 hours."
  obj.state = "New Jersey"
  obj.city = "Lawrenceville"
  obj.location = "2009 US-1, Lawrenceville, NJ 08648"
  obj.cuisine = ["American"]
  obj.timing = ["Mon Open 24 hours",	"Tue Open 24 hours" , "Wed	Open 24 hours" , "Thu	Open 24 hours" , "Fri	Open 24 hours", "Sat Open 24 hours", "Sun	Open 24 hours"]
  obj.contact = "(609)392-3500"
  obj.rating = "0"
  var review = new Object();
  review.user ="Sam Roig"
  review.comment = "Some of the best. High quality. Diner food I ever had in New Jersey. A must go place when driving through town"
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Dos Caminos";
  obj.description = "Vibrant cantina serving modern Mexican cuisine, made-to-order guacamole & tequila cocktails"
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "675 Hudson St, New York, NY 10014"
  obj.cuisine = ["Mexican"]
  obj.timing = ["Mon	11:30 am - 10:00 pm",	"Tue	11:30 am - 10:00 pm" , "Wed	11:30 am - 10:30 pm" , "Thu	11:30 am - 11:00 pm" , "Fri	11:30 am - 11:30 pm", "Sat	11:30 am - 11:30 pm", "Sun	1:00 pm - 10:00 pm"]
  obj.contact = "341-098-8123"
  obj.rating = "0"
  var review = new Object();
  review.user ="Adam"
  review.comment = "Spent the day in New York City with a friend. We stopped at Dos Camino for drinks and guacamole with chips. I enjoyed the organic margarita. It was delicious, light and refreshing.  The guacamole and chips were excellent. We ordered medium salsa, personally, it was a little too spicy for me"
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Cookshop";
  obj.description = "Energetic, greenmarket-driven hot spot by the High Line serving American fare plus a popular brunch."
  obj.state = "New York"
  obj.city = "New York City"
  obj.location = "156 10th Ave, New York, NY 10011"
  obj.cuisine = ["American"]
  obj.timing = ["Mon 8:00 am - 11:00 pm",	"Tue 8:00 am - 11:00 pm" , "Wed	8:00 am - 11:00 pm" , "Thu 8:00 am - 11:00 pm" , "Fri	8:00 am - 11:00 pm", "Sat	8:00 am - 11:00 pm", "Sun	8:00 am - 11:00 pm"]
  obj.contact = "(212) 924-4440"
  obj.rating = "0"
  var review = new Object();
  review.user ="Chris"
  review.comment = "One of the few New York City restaurants you can count on for an excellent meal regardless of circumstance. Go for any meal or for a day on the patio"
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Taste Good Chinese Restaurant";
  obj.description = "Familiar Chinese noodles, seafood & tofu dishes in a strip-mall storefront known for takeout."
  obj.state = "New York"
  obj.city = "Buffalo"
  obj.location = "12308 Delaware Ave, Buffalo, NY 14216"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(212) 741-3223"
  obj.rating = "0"
  var review = new Object();
  review.user ="Smith"
  review.comment = "Not bad. The food was fresh but didn't stand out or impress. Gone back a few times for quick pickup. I really wish they used a little more spice in the cooking. Still it's worth it if you're looking to make a quick pickup of Chinese take-out. Decent parking options"
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Phoebe's Restaurant & Coffee Lounge";
  obj.description = "Long-running skylight-topped American bistro serving a seasonal menu, with an attached coffee bar.."
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "900 E Genesee St, Syracuse, NY 13210"
  obj.cuisine = ["American"]
  obj.timing = ["Mon 8:00 am - 2:00 pm",	"Tue 8:00 am - 9:00 pm" , "Wed	8:00 am - 9:00 pm" , "Thu 8:00 am - 9:00 pm" , "Fri	8:00 am - 9:00 pm", "Sat	8:00 am - 9:00 pm", "Sun	8:00 am - 9:00 pm"]
  obj.contact = "(315) 475-5154"
  obj.rating = "0"
  var review = new Object();
  review.user ="Darcey"
  review.comment = "Love their lunch specials and daily quiche selection. Can't go wrong with the French onion soup and pheobe salad either! They always get me in and out, even when I tell them I am on a short break"
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Dosa Grill";
  obj.description = "Simply decorated Indian restaurant offering both Southern & Northern cuisine, plus a lunch buffet."
  obj.state = "New York"
  obj.city = "Syracuse"
  obj.location = "4467 E Genesee St, Syracuse, NY 13214"
  obj.cuisine = ["Indian"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "(315) 445-5555"
  obj.rating = "0"
  var review = new Object();
  review.user ="Jessica"
  review.comment = "Amazing food, truly some of the best Indian food I've had. Every dish ordered has been great."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Yume Wo Katare ";
  obj.description = "Famous Ramen Noodles"
  obj.state = "Massachusetts"
  obj.city = "Cambridge"
  obj.location = "1923 Massachusetts Ave, Cambridge, MA 02140"
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 10:00 pm"]
  obj.contact = "617-714-4008"
  obj.rating = "0"
  var review = new Object();
  review.user ="Claire H."
  review.comment = "The ramen is huge and i hope they can come up with a more sustainable way not to waste a large amount of food everyday."
  review.rating = "3"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Highland Kitchen ";
  obj.description = "A regular haunt of practically everyone who has ever lived in Somerville's Spring Hill or Union Square"
  obj.state = "Massachusetts"
  obj.city = "Somerville"
  obj.location = "150 Highland Ave,Somerville, MA 02143 "
  obj.cuisine = ["Chinese"]
  obj.timing = ["Mon 5:00 pm - 1:00 am",	"Tue 5:00 pm - 1:00 am" , "Wed	5:00 pm - 1:00 am" , "Thu 5:00 pm - 1:00 am" , "Fri	5:00 pm - 1:00 am", "Sat	15:00 pm - 1:00 am", "Sun	5:00 pm - 1:00 am"]
  obj.contact = "617-625-1131"
  obj.rating = "0"
  var review = new Object();
  review.user ="Carlos F."
  review.comment = "I always enjoy the food at highland kitchen. They have a creative menu and a friendly staff. I have never left disappointed. They're coconut curry dishes are amazing"
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  var name = "Giacomo’s Ristorante";
  obj.description = "Best Italian Meal outside of Italy!"
  obj.state = "Massachusetts"
  obj.city = "Boston"
  obj.location = "355 Hanover St, Boston, MA 02113 "
  obj.cuisine = ["Italian"]
  obj.timing = ["Mon 	4:30 pm - 10:00 pm",	"Tue 	4:30 pm - 10:00 pm" , "Wed		4:30 pm - 10:00 pm" , "Thu 	4:30 pm - 10:00 pm" , "Fri		4:30 pm - 10:00 pm", "Sat		4:30 pm - 10:00 pm", "Sun		4:30 pm - 10:00 pm"]
  obj.contact = "(617) 523-9026"
  obj.rating = "0"
  var review = new Object();
  review.user ="Fletcher D."
  review.comment = "Worth the wait. Very small inside, doesn't seat many, but that's part of the charm and they do move people in and out pretty quickly. Can't remember the name of my dish, it was on the special menu, it was delicious but I don't think it matters what you order, all 4 of our meals were excellent."
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

  
  var name = "Taqueria Jalisco";
  obj.description = "Free chips with homemade salsa!"
  obj.state = "Massachusetts"
  obj.city = "Boston"
  obj.location = "291 Bennington St, Boston, MA 02128"
  obj.cuisine = ["Mexican"]
  obj.timing = ["Mon 10:00 am - 10:00 pm",	"Tue 10:00 am - 10:00 pm" , "Wed	10:00 am - 10:00 pm" , "Thu 10:00 am - 10:00 pmm" , "Fri	10:00 am - 10:00 pm", "Sat	10:00 am - 11:00 pm", "Sun	10:00 am - 10:00 pm"]
  obj.contact = "617-567-6367"
  obj.rating = "0"
  review.user="Delaware"
  review.comment = "Burrito mojado with pork carnitas and nachos con carne with beef also excellent."
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);
  
  var name = "Surya Indian Kitchen";
  obj.description = "Great takeout spot, provides delivery, and a few spots for dining"
  obj.state = "Massachusetts"
  obj.city = "Cambridge"
  obj.location = "114 Magazine St, Cambridge, MA 02139"
  obj.cuisine = ["Indian"]
  obj.timing = ["Mon 11:15 am - 10:00 pm",	"Tue 11:15 am - 10:00 pm" , "Wed	11:15 am - 10:00 pm" , "Thu 11:15 am - 10:00 pm" , "Fri	11:15 am - 10:00 pm", "Sat	11:15 am - 10:00 pm", "Sun	11:15 am - 10:00 pm"]
  obj.contact = "617-945-5489"
  obj.rating = "0"
  review.user="Karen"
  review.comment = "Delicious, flavorful Butter Chicken, Naan, Riata and Rice Pudding!  I had it delivered and it was quick!"
  review.rating = "5"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);


  var name = "Blue Heaven";
  obj.description = "Iconic landmark for Floridian-Caribbean cuisine & key lime pie, with a funky setting."
  obj.state = "Florida"
  obj.city = "Key West"
  obj.location = "729 Thomas St, Key West, FL 33040"
  obj.cuisine = ["Mexican"]
  obj.timing = ["Mon 8:00 am - 10:30 pm",	"Tue 8:00 am - 10:30 pm" , "Wed	8:00 am - 10:30 pm" , "Thu 8:00 am - 10:30 pm" , "Fri	8:00 am - 10:30 pm", "Sat	8:00 am - 10:30 pm", "Sun	18:00 am - 10:30 pm"]
  obj.contact = "305-296-8666"
  obj.rating = "0"
  review.user ="Claudia Miller"
  review.comment = "Kick back in the shady courtyard for breakfast with the roosters. Try the Shrimp and Grits or Lobster Benedict"
  review.rating = "4"
  var reviews = []
  reviews.push(review);
  await recipes.addrecipe(name, obj,reviews);

var name = "Columbia Restaurant";
obj.description = "Traditional Spanish restaurant, a branch of a long-standing local chain dating back to 1905."
obj.state = "Florida"
obj.city = "Tampa"
obj.location = "2117 E 7th Ave, Tampa, FL 33605"
obj.cuisine = ["Mexican", "Spanish"]
obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 9:00 pm"]
obj.rating = "0"
obj.contact = "813-248-4961"
review.user="Harry Bergner"
review.comment = "It is a great place to go. You can go over and over again and not get tierd of it. Dont forget to see the Flamingo dance show."
review.rating = "5"
var reviews = []
reviews.push(review);
await recipes.addrecipe(name, obj,reviews);


var name = "Farmer's Market Restaurant";
obj.description = "Casual destination for American comfort food including hearty breakfasts, fried seafood & steaks."
obj.state = "Florida"
obj.city = "Florida City"
obj.location = " 300 S Krome Ave Ste 17 Florida City, FL 33034"
obj.cuisine = ["American", "Spanish"]
obj.timing = ["Mon 5:30 am - 9:00 pm",	"Tue 5:30 am - 9:00 pm" , "Wed	5:30 am - 9:00 pm" , "Thu 5:30 am - 9:00 pm" , "Fri	5:30 am - 9:00 pm", "Sat	5:30 am - 9:00 pm", "Sun	5:30 am - 9:00 pm"]
obj.contact = " 305-242-0008"
obj.rating = "0"
review.user = "David Guth"
review.comment = "Nice staff and also good parking for big rigs"
review.rating = "3"
var reviews = []
reviews.push(review);
await recipes.addrecipe(name, obj,reviews);

var name = "Sonny's BBQ";
obj.description = "Long-standing fast-food chain specializing in meats slow smoked over oak, plus sides & salads."
obj.state = "Florida"
obj.city = "Florida City"
obj.location = " 33505 S Dixie Hwy, Florida City, FL 33034"
obj.cuisine = ["American"]
obj.timing = ["Mon 11:00 am - 10:00 pm",	"Tue 11:00 am - 10:00 pm" , "Wed	11:00 am - 10:00 pm" , "Thu 11:00 am - 10:00 pm" , "Fri	11:00 am - 10:00 pm", "Sat	11:00 am - 10:00 pm", "Sun	11:00 am - 9:00 pm"]
obj.contact = "305-245-8585"
obj.rating = "0"
review.user="Millie Corso"
review.comment = "No delivery but they do have a drive up."
review.rating = "1"
var reviews = []
reviews.push(review);
await recipes.addrecipe(name, obj,reviews);


var name = "Taqueria Morelia";
obj.name = name
obj.description = "Informal taco spot with an extensive menu of traditional Mexican dishes plus a salsa bar."
obj.state = "Florida"
obj.city = "Florida City"
obj.location = "961 W Palm Dr, Florida City, FL 33034"
obj.cuisine = ["American"]
obj.timing = ["Mon 9:00 am - 10:00 pm",	"Tue 9:00 am - 10:00 pm" , "Wed	9:00 am - 10:00 pm" , "Thu 9:00 am - 10:00 pmm" , "Fri	9:00 am - 10:00 pm", "Sat	9:00 am - 10:00 pm", "Sun	9:00 am - 10:00 pm"]
obj.contact = "305-245-8585"
obj.rating = "0"
review.user="Cruz D Castillo"
review.comment = "Reasonable price and great taste."
review.rating = "3"
var reviews = []
reviews.push(review);
await recipes.addrecipe(name, obj,reviews);

  console.log("Done seeding database");
  //await db.close();
}

main();