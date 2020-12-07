var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//here we use the method insertMany()
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("food_list");
  var bevmenu = [
    { id: 1, name: 'Coffee', recipe:'Mix milk, coffee, and sweetener together in a glass until sweetener is dissolved.', url: "https://www.youtube.com/watch?v=SM_dqUSJvgk"},
    { id: 2, name: 'Tea', recipe:"Heat the water (don't boil). Add tea powder and let it boil.Add elaichi and milk, and heat well (don't boil after adding milk).Add sugar in a serving cup, and pour filtered tea into the cup.", url:"https://www.youtube.com/watch?v=Ze6m-gZg3Y4"},
    { id: 3, name: 'Plain Milk', recipe:"Heat the milk in a vessel until the milk boils and the cream of the milk floats. Take a glass, filter the cream of the milk and add 2 tsp of sugar and mix.", url:"https://www.youtube.com/watch?v=WeZCMNB2YO0"},
    { id: 4, name: 'Nescafe', recipe:"Add a teaspoon of NESCAFÉ Gold Instant Coffee to your cup. If you like sugar you can add it now.Carefully pour the hot boiled water over the cup contents almost to the top. Stir to ensure coffee and sugar are fully dissolved.Add your milk, cold from the fridge and stir.", url:"https://www.youtube.com/watch?v=PSf5RCbTtyY"},
    { id: 5, name: 'Black Coffee', recipe:"Bring water to a boil.Take coffee and sugar in a cup, add little hot water and mix well.Now add more water and mix well. Serve hot.", url:"https://www.youtube.com/watch?v=MjDA9cWWmh4"},
    { id: 6, name: 'Black Tea', recipe:"Take some water in a saucepan and add sugar or cubes in water and cook on a medium flame for about two minutes, while stirring occasionally. Now as the water comes to a boil, add tea leaves and keep stirring on medium flame for about two minutes. Now let the water infuse all the goodness from the tea leaves on low flame and cover the lid for about another two minutes. Strain the black tea immediately and enjoy.", url:"https://www.youtube.com/watch?v=IYaCZHoBTjw"},
    { id: 7, name: 'Flavoured Tea- Green Tea', recipe:"Boil the drinking water and allow to cool slightly for 2-3 mins, this slightly cooler water will get the best out of your delicate tea leaves. Pour the water onto the teabag to release its delicious aroma. Leave the teabag to infuse for up to 3 minutes. If you like a stronger taste you can brew a little longer but watch out, over brewing can cause bitterness. Remove the teabag and enjoy your deliciously refreshing Lipton Green Tea!", url:"https://www.youtube.com/watch?v=x8lRdm65Eqc"},
    { id: 8, name: 'Flavoured TEA- Honey',recipe:"Pour water into a mug. Add honey and heat in the microwave for 1 minute and 30 seconds. Stir in lemon juice, mixing until honey is dissolved, then stir in the sugar.", url:"https://www.youtube.com/watch?v=tZv5TYBfbuM"},
  

  ];

  var starmenu = [
    { id: 1, name: 'Babycorn Tikka', recipe:"Add a cup of curd to a muslin cloth and hang it for 30mins.Set aside.Clean baby corn. Boil water with a pinch of turmeric powder and salt.Add baby corn and parboil it.Just cook for 2 mins.Drain , trim both the edges and slit it into 2 vertically. Further slit into 2 , this is optional as my baby corns were fat I did this.Chop into small finger size pieces, collect in a bowl. Now take hung curd along with all the ingredients listed under ‘for the spice mix’.Mix well with a whisk to form a smooth thickish batter.Now take wire rack, wrap with aluminium foil and grease it with oil.Preheat oven at 200 deg C. Now each piece of baby corn in the batter,turn over all sides to coat the batter.Now carefully arrange them in the greased sheet.Now bake it in the same temperature for 15 mins and change the mode to grill and grill it for 4mins or until the edges turn slightly black.Brush with oil and turn over the pieces in between to avoid burning. As you see the edges are starting to burn, thats the right stage.You can even tawa fry baby corn but sure it will not taste the same as oven roasted ones.", url:"https://www.youtube.com/watch?v=ui9mfRlkq_s"},
    { id: 2, name: 'Galouti Kebab', recipe:"Marinate the minced meat in the ground ingredients for 4-5 hours.Mix together the coriander leaves, green chillies, gram flour and egg. Add to the meat and work at it for some time, almost kneading it like a dough. Shape mixture into round patties of desired size, and refrigerate for half an hour or so.Heat the ghee in a heavy-based frying pan or griddle. Fry the kebabs, browning first one side and then the other, over medium heat. Arrange them on a serving dish, sprinkle lemon juice and serve.", url:"https://www.youtube.com/watch?v=yMEhhmqYYZM"},
    { id: 3, name: 'Hara Bhara Kebab', recipe:"Preheat the oven for 10 minutes at 180 degrees celsius. use both the top and bottom heating rods of the oven while preheating as well as baking.  Brush some oil on top of each kabab. Place kababs in a tray which has been sprayed or greased with some oil. Place the kebabs on a tray or wired rack in the center of the oven. Bake hara bhara kabab at 180 degrees celsius for 20 to 25 minutes or till the kabab get browned from the top. You can even change the sides after 10 to 15 minutes of baking. Better to bake both the sides of hara bhara kebab.", url:"https://www.youtube.com/watch?v=wmKpmZmeArE"},
    { id: 4, name: 'Hariyali Kebab', recipe:"Wash the chicken breast and cut into medium size chunks. Apply salt, butter, lemon juice and red chilli powder on the chicken pieces and keep aside for 10-15 minutes. In the meantime, chop the methi leaves thinly, boil in little amount of water and drain aside. Combine the boiled methi, spinach, coriander-mint leaves, ginger, garlic and green chilies. Grind into a smooth paste. Now add curd and spices in ground paste of leaves and coat the chicken pieces very well in it. Cover the marinated chicken and keep it aside at least for 20 minutes, so that chicken gets the aroma and flavors of green paste and spices. Soak the wooden skewers in normal water for about 4-5 minutes. Apply some oil on the skewers and arrange the pieces of chicken onto the skewers. Spread some more oil on top of the chicken pieces. Preheat the oven at degrees 350F for 5 minutes and place the skewers in the oven. Leave to grill for about 15-18 minutes. Keep checking and turn the skewer sticks to cook evenly from all the sides. Grill till the kabab is well done. Remove the kabab from the skewers and arrange on the serving plate. Serve hot with lemon wedges, cabbage kachumber and spicy green chutney.", url:"https://www.youtube.com/watch?v=eRSEZfpZaa8"},
    { id: 5, name: 'Sheekh Kebab', recipe:"In a bowl mix together the mutton mince and the chicken mince. Mix them with your hands.Add ginger-garlic paste to it along with onion paste, red chilli powder, coriander powder, cumin powder, powdered pepper, dried mango powder, saunth, oil, cashew paste and cream. Mix nicely. Add besan (chickpea flour) and egg yolk to bind. Mix well. Add salt to taste. Mix. Cover and keep in the fridge for 1 hour. Skewer the kebabs onto oiled skewers and grill or roast till the outside is nicely browned. Baste frequently with oil while grilling. Once the kebabs are cooked, remove to a serving platter and garnish with onion rings, fresh coriander leaves and lemon wedges.", url: "https://www.youtube.com/watch?v=ov13Yr3MLCQ"},
    { id: 6, name: 'Paneer Tikka', recipe:"Whisk the yogurt in a large bowl until smooth. I have used greek yogurt here, you can use regular yogurt just make sure to strain it for several hours until you have thick yogurt left and then use in the recipe. Add all the ingredients for marinade to the yogurt- ginger garlic paste, mustard oil, coriander powder, chaat masala, kashmiri red chili powder, garam masala, red chili powder, kasuri methi and salt. Whisk to combine everything together. Add in juice of 1 lemon along with chopped cilantro and mint. Mix well. 5- Stir in the paneer cubes, onion and bell peppers. Mix until all the paneer pieces and veggies are well coated with the marinade. Cover the bowl and refrigerate for minimum for 1 hour or up to 4 hours.  Overnight also works! After 1-2 hours, take the marinated paneer and veggies out of the refrigerator. Take a skewer and arrange paneer, onion and peppers on a skewer, alternating with each other. Make all skewers similarly. Meanwhile pre-heat oven to 450 F degrees. Make sure you pre-heat the oven for good 15-20 minutes. Arrange all the prepared skewers on a baking sheet lined with parchment paper. Spray the tikka with a oil spray. This is important so that the veggies don’t dry out. Bake at 450 F degrees for 10 minutes and then turn on the broil. Broil for 2 to 3 minutes until paneer pieces look little charred. Remove from oven, squeeze lemon juice, sprinkle chaat masala and serve with cilantro chutney. If you want the paneer to be even softer, bake at 450 F degrees for 5 minutes and then broil for 3 to 4 minutes. Don’t overcook the paneer else it will gets really tough and chewy, you want it soft.", url:"https://www.youtube.com/watch?v=hsR0JaD1TyA"},
    { id: 7, name: 'Thread Tofu or Baby Corn', recipe:"Heat 1 tablespoon of the vegetable oil in a stainless steel skillet over medium-high heat. Add the green beans. Cook the green beans, stirring only occasionally, until browned and shriveled, about six minutes. Add the pepper and cook about 2 minutes more. Remove veggies from pan and set aside. Heat the remaining 2 tablespoons of vegetable oil in the same pan. Add the tofu in a single layer and let it cook for 2 minutes without stirring. Then add 1 tablespoon of the tamari and use a metal spatula to unstick the tofu from the pan. (Don’t worry if some crispy parts separate from the rest of the tofu – all these crispy bits will go into your final dish and create a wonderful textural – and flavor-packed – element!) Cook for 4-5 minutes more, until nice and browned, stirring more frequently now, and continuing to use your spatula to unstick stuck pieces. urn into a bowl (I plopped mine into my cooked bean threads) and use your spatula to unstick any remaining crispy bits from the bottom of the pan and turn them into the bowl (see picture). In the same pan (which should now be relatively clean after your spatula work), heat the sesame oil. Add the ginger and cook for 1-2 minutes, then add the garlic and cook for 30 seconds to a minute more. Add the remaining tablespoon of gluten-free tamari – it will sizzle and thicken immediately. Turn the heat down to low right away and add the coconut aminos. Immediately add the tofu, bean threads, and veggies and stir to coat everything in the sauce you’ve made. Serve with your favorite chili paste.", url:"https://www.youtube.com/watch?v=ob2CYmTx9PM"},
    { id: 8, name: 'Paneer Satay', recipe:" Place the paneer fingers in a bowl. Add salt, soy sauce, lemon juice, garlic, ginger, brown sugar and honey and mix. Leave to marinate for one hour preferably in a refrigerator. Heat oil in a griddle or tawa. Thread the marinated paneer onto satay sticks and place on the griddle. Pour some of the excess marinade over the paneer and cook, turning the satay sticks to brown the paneer evenly on all sides. For the peanut sauce, heat the oil in a pan; add onion and sauté for a few minutes. Add ginger and garlic and continue to sauté. Add soy sauce, peanut butter and two tablespoons of water. Stir in the coconut milk, lemon juice, salt and honey. Add the fresh red chilli and remove from heat. Serve the paneer satay with the sauce.", url:"https://www.youtube.com/watch?v=EOko7yrxMFc"},
    { id: 9, name: 'Baby corn Satay', recipe:"To begin making the Spicy Baby corn Satay Recipe, first steam the baby corns over high heat in a steamer for about 3 to 4 minutes, until just about cooked. Once cooked firm, turn off the heat and keep aside. In a bowl mix combine all the ingredients for the marinade and make a thick paste. Add the baby corns to this and evenly coat them with the mixture. Allow the baby corns to marinate in the mixture for at least 20 minutes. Once the baby corns have marinated well, it's time to toss them in a pan, so the the corn get cooked and coated well with the marinade. Heat a skillet pan on medium high heat. Add a tablespoon of oil in the skillet and place the baby corns along with marinade into the pan and toss them in the oil and heat until all the marinade has thickened and the baby corn has cooked through.  Once done, remove the baby corn satay from the pan, insert skewers or picks through the center, place it in a platter and serve. Serve the Baby Corn Satay along with a peanut dipping sauce as an appetizer for parties.", url:"https://www.youtube.com/watch?v=JPGPL5Uw8Ss"},
    { id: 10, name: 'Chilly cheese balls', recipe:"Mix the maida and corn flour in water to make a smooth batter. Set aside.In a large bowl, add all the ingredients for the cheese balls. Mash with your hands such that the mixture is uniform.Grease your palm with oil and make 15-16 small sized balls with the dough.Now dip the balls in the flour batter and coat it with bread crumbs. Again dip them in the flour batter and repeat coating with bread crumbs. This will ensure that a crust is formed while frying and melted cheese doesn’t ooze out from the cheese balls.Heat oil in a pan. When heated, turn the flame to medium and fry the balls till they are light golden.Transfer them on a kitchen towel, so that excess oil is soaked out.Serve them hot with sweet chili sauce or ketchup.", url:"https://www.youtube.com/watch?v=RCbwZdg0Do4"},
   

  ];

  var salmenu = [
    { id: 1, name: 'Coleslaw Salad', recipe:"Make coleslaw dressing: In a small mixing bowl whisk together the mayonnaise, apple cider vinegar and honey. If needed season with a bit of salt. Pour dressing over shredded cabbage mixture: Place shredded coleslaw mix in a large bowl then pour the dressing mixture over. Toss together: Toss to evenly coat. Easy as that! Tip: I like to serve it right away while the cabbage is nice and crisp but if want it a little more tender let it rest 10 minutes in the fridge.", url:"https://www.youtube.com/watch?v=g127xdqC03E"},
    { id: 2, name: 'Russian Salad', recipe:"First rinse 1 medium sized carrot, 1 medium sized potato, ¼ cup french beans (chopped) and ½ cup green peas (matar) in water.In a pan or pot add enough water and boil the carrot, potato, green peas and french beans. Then drain the water. You could also microwave them till they are completely cooked. When the veggies are cooked, peel the potato and then chop them. Also chop the boiled carrots and french beans. Alternatively, you can chop the veggies first and boil them later. I usually avoid doing the latter as when we chop the veggies and then boil them, some water- soluble vitamins and minerals are lost in the process. It is better to first boil them whole and then chop them. Measure and keep all the ingredients ready for making the veg russian salad. In a bowl or vessel add ¾ cup eggless mayonnaise. Whisk with a wired whisk or spatula till the mayonnaise looks smooth. Next add the chopped carrots, potatoes, french beans and green peas.Add 1 small stick of celery (finely chopped) and salt as required.  Finally add black pepper powder (optional).Stir and mix very well.  Garnish the russian salad with some lettuce leaves and slices of tomato, cucumber or capsicum. Serve the Russian salad with your regular meals or you can also have it plain any time of the day when you are feeling hungry. ", url:"https://www.youtube.com/watch?v=948mcYdlhRk"},
    { id: 3, name: 'Pasta Salad', recipe:"In a large pot of salted boiling water, cook pasta until al dente, rinse under cold water and drain. Whisk together the salad spice mix and Italian dressing. In a salad bowl, combine the pasta, cherry tomatoes, bell peppers and olives. Pour dressing over salad; toss and refrigerate overnight.", url:"https://www.youtube.com/watch?v=XI8CxKOxNFk"},
    
 ];

  var mcmenu = [
    { id: 1, name: 'Veg Flat Noodles', recipe: "Into a bowl, add the tamarind water, other pad Thai sauce ingredients and stir well. Add as much or as little Chilli sauce as you prefer, but don't skimp on the sugar (you need it to balance the sourness of the tamarind). Set this Pad Thai sauce mixture aside. Place your wok over medium-high heat. Add a tablespoon of oil plus the garlic and onions. Stir fry for about a minute to release the fragrance. Add the Bok Choy, carrots, bell peppers & broccoli and stir-fry 2 minutes until the vegetables are lightly softened and yet crisp. Stir in the tofu and toss for a fe seconds. Next push the ingredients to the side of the wok and add the drained noodles and 1/3 of the pad thai sauce. Stir-fry everything together for 1 minute using 2 ladles and a tossing motion (like tossing a salad). Add a little more sauce and continue stir-frying in the same way for 1-2 more minutes, or until the noodles begin to soften. Add the bean sprouts plus the remaining sauce. Stir-fry to incorporate everything together into the vegetarian pad thai for 1-3 more minutes, or until noodles are cooked. Noodles are cooked to perfection when they are soft but still deliciously chewy and a little bit sticky. Remove from heat and taste-test, adding more pad thai sauce or soy sauce or chill sauce if desired for more salt or flavor. To serve, scoop noodles onto a serving platter. Sprinkle with the green onion, coriander and peanuts. Add wedges of fresh-cut lime on the side.", url:"https://www.youtube.com/watch?v=h9HmkZlDlzM" },
    { id: 2, name: 'Special Noodles', recipe:"To make this easy recipe, begin with par-boiling the noodles. Once done, drain the excess water and keep aside. In the meantime, heat a pan over medium flame. Once the oil is sufficiently hot, add the ginger-garlic paste and fry for some time. If you like to make it more delicious, add some finely chopped green chillies. You can also use chillies soaked in vinegar. Then add the onions, beans and green chillies in the same pan and saute for a minute or two. Add the carrots, cabbage, salt, pepper powder, soy sauce and Ajinomoto. Stir-fry the ingredients for some time. Once done, add the boiled noodles and break the eggs into the pan. Mix well and cook for a few minutes. If you like smoky flavours, stir the veggies mix on a high flame. Cover the pan with a lid and allow it to cook for around 2-3 minutes. Once done, transfer the dish to a serving bowl and garnish with coriander leaves. Serve hot and enjoy with your family and friends. You can also pair Egg Noodles with spicy gravy of your choice." , url:"https://www.youtube.com/watch?v=aQHr9Zsnzbw"},
    { id: 3, name: 'Malaysian Noodles', recipe: "Line a plate with a triple layer of paper towels; top with tofu. Place a triple layer of paper towels on top of tofu; top with another plate. Let stand 20 minutes. Cut tofu into 1/2-inch cubes. Cook noodles in a large pan of boiling water 3 minutes or until done; drain in a colander over a bowl, reserving 1 cup cooking liquid. Wipe pan with paper towels. Heat oil in pan over medium heat. Add garlic to pan; cook 30 seconds, stirring constantly. Add salt and bok choy; cook 30 seconds, stirring frequently. Stir in 1/2 cup reserved cooking liquid; bring to a boil. Reduce heat, and cook 4 minutes. Combine sugar and remaining ingredients, stirring until combined. Add noodles, remaining 1/2 cup cooking liquid, and sugar mixture to pan; toss to combine. Cook 30 seconds or until thoroughly heated, tossing to coat. Add tofu; toss to combine. Serve immediately.", url:"https://www.youtube.com/watch?v=MYkPzaBLzP4"},
    { id: 4, name: 'Manchurian', recipe:"1. Take the finely chopped or grated veggies in a bowl.  you will need ½ cup finely chopped red cabbage, ½ cup grated carrot, ¼ cup finely chopped capsicum (green bell pepper), ¼ cup finely chopped french beans and ¼ cup finely chopped spring onions. You can also add regular green cabbage instead of red or purple cabbage. Then add the dry ingredients – 2 tablespoons corn starch, 2 tablespoons all purpose flour (maida), ½ teaspoon black pepper and ½ teaspoon salt or add as required. Mix and gather the whole mixture together. Then kind of mix and knead so that the veggies leave the water and you get a dough-like mixture. But do not knead like that a bread or roti dough. Gluten strands can form that will give a dense chewy texture in the fried veggie balls. So just mix very well and press so that the veggies release their juices. Then take a small portion of the mixture in your hands.Press and roll it in your palm and make a round veggie ball. Make all veggie balls this way and keep aside. You can spread some oil on your palms while making the vegetable balls. Heat oil for deep frying in a kadai or pan. Add a small piece of a ball to the hot oil. If the balls does not stick or settle down at the bottom of the pan, but comes up steadily the oil is ready for frying these veggie balls. If the balls break, then some more binding agent is required. So you can add 2 to 3 teaspoons of some more all-purpose flour (maida).Gently place the balls in the hot oil. The oil has to be medium hot. Too much heat and the manchurian balls will be browned from top and uncooked from inside. Less hot oil will make the balls absorb too much oil.When cooked from one side, turn the balls with a slotted spoon.  Fry the balls till crisp and golden turning them over a couple of times. Remove them with a slotted or perforated spoon and drain as much as oil as possible. Place the fried manchurian balls on kitchen paper towels. For a low-fat version, you can cook the veggie balls in an appe-appam pan or æbleskiver pan. Fry the veg balls this way in batches and keep aside. In a small bowl take the following three sauces – ½ tablespoon soy sauce (or 1.5 teaspoons soy sauce), 1 tablespoon tomato ketchup, 2 to 3 teaspoons of red chilli sauce. The red chilli sauce is spicy and not sweet.Mix the sauces very well and keep aside. In another small bowl take 1 tablespoon cornflour (corn starch) and 2 tablespoons water. Mix very well and keep aside. Heat 1 to 1.5 tablespoons oil in a pan or wok. Add 4 tablespoons chopped spring onions (scallions), 1 tablespoon finely chopped ginger, 1 tablespoon finely chopped garlic, 2 green chilies (finely chopped) and ¼ cup finely chopped capsicum (green bell pepper). Adding capsicum is optional. You can use toasted sesame oil or sunflower oil or any neutral tasting oil. Stir fry on medium flame till the onions turn translucent.Now add the mixed sauces.Stir and mix very well. Add 1 to 1.25 cups water. Let the mixture come to a boil. Mix the corn flour paste again in the bowl (as the corn flour settles at the bottom) and then add in the pan. As soon as you add corn flour paste, mix very well so that there are no lumps. Continue to stir and mix when the manchurian gravy is cooking. Simmer till the manchurian sauce thickens and you see a glaze in it. There should be no raw taste of the cornflour in the sauce. Cooking sauce or gravy takes about 3 to 4 minutes on a medium flame. If the sauce is too thick, then you add some water. If it is too thin, then you can add some cornflour. When the manchurian gravy thickens, add ½ teaspoon black pepper powder.Season with a bit of salt. Do keep in mind that the soy sauce, chilli sauce and tomato ketchup already has salt in it. So add less salt and as per your taste preferences. Add ¼ to ½ teaspoon sugar or more if required. Mix very well. hen add the fried vegetable balls. Also add 1 teaspoon rice vinegar or regular vinegar or apple cider vinegar. Gently stir and coat the fried vegetable balls in the gravy.  Switch off the flame and add chopped spring onion greens. Serve Veg Manchurian Gravy hot garnished with some spring onion greens (scallion greens). It goes well with veg fried rice or schezwan fried rice or plain steamed rice or noodles and even bread or roti.", url:"https://www.youtube.com/watch?v=2-uu7l3Qwuo" },
    { id: 5, name: 'Schezuan Manchurian', recipe:"Take a mixing bowl, add chopped vegetables, chopped ginger, salt, red chili paste, a pinch of food color, corn flour, Maida/all-purpose flour and mix well. Divide the mixture into equal parts or into small lemon-sized balls and keep aside. Heat oil for deep-frying. When the oil is hot, leave the veg balls one by one carefully into the oil. Fry until they turn nice orange-red color and take them onto a paper towel and keep aside. Mix 1tbsp of corn flour with 1 cup(250 ml) water and keep aside. Heat oil in a pan. Add chopped ginger garlic, spring onion bulbs, capsicum and sauté for a minute. Add a little salt, vinegar, dark soy sauce, black pepper powder, red chili powder, red chili paste and mix well. Add the cornstarch and mix until it starts bubbling. When it starts to bubble, add the fried veg balls, mix well and cook until the gravy disappears. Add finely chopped spring onion before you turn off the flame and serve hot.", url:"https://www.youtube.com/watch?v=HfkXjjrghB8" },
    { id: 6, name: 'Corn Bharta', recipe:"1. Grill the whole tomatoes over an open gas flame until the skin is charred and the tomato softens or rrill the tomatoes in an oven for 20 mins. Turn them every 7-8 mins. Allow the tomatoes to cool, then peel and puree them. Grill an onion on the open flame until the skin is charred or it can also be grilled along with the tomatoes in the oven. Once the onion is cool, peel it. Blend it along with garlic and ginger into a smooth puree. Add a little water to help the blending if required. Boil the corn until done. Takes around 4-5 mins in the microwave. Heat oil in a pan and add the cumin seeds. Once the cumin seeds brown slightly, add the onion-ginger-garlic paste and fry until it turns light brown. Add the tomato puree and add the red chilli powder, turmeric powder, cumin powder and coriander powder. Cook until the oil separates or for 8-10 mins on low flame while stirring frequently. Add water to achieve the desired consistency and cook for another 2 mins. Add the salt and corn and simmer for 1 min.  Serve hot with rotis", url:"https://www.youtube.com/watch?v=61uu1tcFx64" },
    { id: 7, name: 'Paratha', reciepe:"In a bowl take whole wheat flour. Add salt, oil and water. Mix and then knead into a smooth soft dough. Add more water if required while kneading. Cover and keep the dough aside for 30 minutes. Pinch a medium-sized ball from the dough. Flatten and dust with some flour.With a rolling pin, roll into a circle of about 4 inches diameter. Spread some ghee on the dough circle. Fold in a half. Now spread some ghee on this half folded dough.  Fold sideways and this time you will get a folded triangle. Dust some flour on the folded triangle.  Now begin to roll the folded triangle. Add some flour if required and roll into a circle or triangle of about 6 to 7 inches diameter.Roll a medium-sized ball on a lightly dusted board to a circle of about 4 to 5 inches in diameter. Spread some ghee on the rolled dough. Bring one side of the rolled dough towards the center and press lightly. now spread again some ghee on the folded part. Fold the opposite side of the rolled dough on top of the folded part. Press lightly. again spread some ghee on this second folded part. Fold the right side and bring it towards the center. Spread some ghee on this fold too. Lastly fold the left side on top of the right fold.Sprinkle some flour on the folded paratha. Begin to roll. Add some more flour if required while rolling. Roll into a square paratha. Heat a tawa (skillet) and place the paratha on the tawa. The tawa should be medium hot. You will soon see the paratha puffing up from the base at some places. Flip the paratha when the base is ¼ cooked. Spread some ghee.  Flip again when the second side is about ½ cooked. You will see brown spots now. Spread some ghee on this side now. lip again a couple of times till you see more brown spots and the paratha is cooked evenly. Make all parathas this way. Either serve the plain paratha hot or stack them in a roti basket. take care that the edges of the paratha are cooked well. You can press the edges with spatula or spoon to do this and use enough oil or ghee to fry them. Also if you want more crisp parathas then fry them more to get more brown crisp spots. Serve the plain paratha hot with dal makhani or mango pickle or green chilli pickle or any Indian vegetable curry. ", url:"https://www.youtube.com/watch?v=47fRmufjdQ4" },
    { id: 8, name: 'Stuffed Paratha', recipe:"Rinse, peel and chop the veggies.Then steam or boil the veggies in a pressure cooker or steamer till they are thoroughly cooked. If you are mixing the raw vegetables with water while cooking, then do not discard the water. Some of this water can be added to the dough while kneading. Also you can add this water to make soups or dals. When the veggies cool down, then mash with a potato masher. Mash very well. Add finely chopped spinach. If you do not have spinach, then you can add other green like amaranth or fenugreek (methi). Add chopped coriander leaves, green chilies and ginger. Add cumin powder, coriander powder, red chili powder, garam masala powder, asafoetida and salt. Mix the spices and salt very well with the mashed veggie mixture. Add whole wheat flour (atta). Make a well and add oil or ghee. Bring everything together and start to knead. No need to add water while kneading. Add water only if its a must. Otherwise the dough becomes sticky.in case if the dough becomes sticky then add some more flour. Knead to a smooth dough. Pinch medium sized ball from the dough. Flatten & sprinkle some flour all over it. Gently roll to a size of a chapati or roti. Add more flour if required while rolling.", url:"https://www.youtube.com/watch?v=rYnYuBAmV-I" },
    { id: 9, name: 'Special Fried Rice', recipe:" Using a small pat of butter, scramble some eggs in a large sauté pan, breaking them into small pieces as you go.  Then transfer the eggs to a separate plate, and set aside. Return your sauté pan to the heat, and sauté the onions, carrots, peas and garlic until soft and cooked through. Then turn the burner to high heat.  Scooch the veggies over to one side of the pan, melt the remaining butter in the other half, and add the chilled rice, soy sauce, and oyster sauce (if using).  Then stir to combine with the veggies and continue sautéing the rice, stirring every 15-20 seconds or so for 3 minutes, or until you notice the rice and veggies starting to brown slightly. Remove pan from heat. And stir in your green onions, sesame oil, and scrambled eggs. Give the rice a taste, and season with salt and pepper, plus any extra soy sauce or sesame oil if needed.Then dish it up and serve nice and warm!" , url:"https://www.youtube.com/watch?v=aWArcqFI9ag&t=122s"},
    { id: 10, name: 'Schezuan Fried Rice', recipe:"Rinse the basmati rice, till the water runs clear of the starch. Then soak the rice in water for 30 mins. Drain and keep aside. Bring water, salt and a few drops of oil to a gentle boil.Add the drained soaked rice. Simmer on a low flame, till the rice grains are just cooked.  Strain the rice in a colander. Rinse the rice with water so that the rice grains stop cooking. Gently with your hands, move the cooked rice grains, while rinsing them with water. Drain completely. Cover and keep aside. Chop all the vegetables finely. Remember to chop the french beans very finely. They take more time to cook than other veggies. You can also blanch them first and then cook. Another option is to add the beans first and then add the other vegetables.Heat oil in a pan. Add the chopped garlic and saute for about 15 to 20 seconds. Now increase the flame to its highest, add all the vegetables including the spring onions and celery. Keep on stirring the veggies, till they start getting browned from the edges. It took me about 9 minutes for the vegetables to cook. Now add the schezwan sauce. Stir well. Add the rice in parts and keep on stirring. Stir gently as you don’t want the rice grains to break. Season with salt, pepper and vinegar. Mix and stir fry for 2 to 3 minutes tossing the rice so that the sauce coats each and every rice grain well. Check the taste and add more salt, pepper and schezwan sauce if required. Garnish with spring onion greens and Serve the schezwan fried rice hot with any Indo Chinese sauce like mushroom manchurian or gobi manchurian.", url:"https://www.youtube.com/watch?v=OUhyJPJlfS8" },
    { id: 11, name: 'Ghee Rice', recipe:"firstly, in a large kadai heat 1 tbsp ghee and roast 8 cashew and 2 tbsp raisins. roast the cashew to golden brown and keep aside. now in the same kadai saute 1 bay leaf, 1 inch cinnamon, 2 pods cardamom, 5 cloves and ½ tsp pepper. also, add ½ onion, 1 chilli and saute until the onions turn golden brown. now add 1 cup basmati rice (soaked 20 minutes) and roast for 1 minute without breaking rice grains. further, add 2 cup water, 1 tsp lemon juice and 1 tsp salt. stir well and get the water to a boil. cover and simmer for 20 minutes or pressure cook for 2 whistles. after 20 minutes, fluff the rice gently without breaking rice grains. add fried nuts and mix well. finally, enjoy ghee rice with kurma.", url:"https://www.youtube.com/watch?v=0fsQAbxiNdk" },
 ];

  var desmenu = [
    { id: 1, name: 'Cassata', recipe:"Mix currants with Amaretto or rum. Stand while preparing other ingredients. Scoop ice cream into a large bowl and microwave for 40-60 seconds or leave to soften on bench for 10 minutes. Work with a heavy spoon to soften just enough for ingredients to be mixed through (do not allow to thaw fully). Add all other ingredients and work quickly to combine evenly. Return mixture to freezer container or individual moulds, cover and freeze for at least 4 hours. Serve in slices or scoops. If desired, garnish with diced pistachios and spoon around vanilla syrup or maple syrup. Cassata will keep in the freezer for up to 2 months. Do not refreeze if melted. ", url:"https://www.youtube.com/watch?v=Krh2m6O7zrc"},
    { id: 2, name: 'Mango Madness', recipe:" Place all ingredients(2 large mangos, peeled and cubed (3 cups),2 cups ice cubes, 1/2 cup orange juice, 1& 1/2 teaspoons McCormick® Raspberry Extract,1 teaspoon McCormick® Imitation Rum Extract) in blender container; cover. Blend on high speed until smooth. Serve immediately. Garnish as desired.", url:"https://www.youtube.com/watch?v=kv9Qux0IEno"},
    { id: 3, name: 'Peach Passion',recipe:"In a cocktail shaker add 3 oz. Skyy Georgia Peach Vodka, 1/2 oz. passion fruit puree, 1 oz. triple sec and a splash of cranberry juice. Shake vigorously. Strain into a chilled cocktail glass and garnish with a peach slice.", url:"https://www.youtube.com/watch?v=jpFcoCuaFYY"},
    { id: 4, name: 'Sizzling Brownie', recipe:"Take all ingredients given for cake(All purpose flour / Maida - 2 tblsp, Cocoa Powder - 1 tblsp, Brown Sugar - 2 tblps, Baking Powder - 1/8 tsp,Milk - 2 to 3 tblsp, Oil - 1 tsp) in a bowl and mix well. Spoon it into a greased microwave safe bowl and microwave on high power for 1 min. Remove and cool for 5 mins. Unmould and keep aside. Melt chocolate in microwave for 1 min. Add cream and mix well. Take sizzle plate and heat the iron plate till smoking. PLace it on the wooden plate. Place brownie over it. Place a scoop of icecream on it. Pour sauce over it and serve.", url:"https://www.youtube.com/watch?v=ngDqanR_1iU"},
    
    ];

  dbo.collection("beverage").insertMany(bevmenu, function(err, res) {
    if (err) throw err;
    console.log("Number of beverages inserted: " + res.insertedCount);
    db.close();
  });

  dbo.collection("starters").insertMany(starmenu, function(err, res) {
    if (err) throw err;
    console.log("Number of starters inserted: " + res.insertedCount);
    db.close();
  });

  dbo.collection("salad").insertMany(salmenu, function(err, res) {
    if (err) throw err;
    console.log("Number of salad inserted: " + res.insertedCount);
    db.close();
  });

  dbo.collection("main-course").insertMany(mcmenu, function(err, res) {
    if (err) throw err;
    console.log("Number of main course inserted: " + res.insertedCount);
    db.close();
  });

  dbo.collection("dessert").insertMany(desmenu, function(err, res) {
    if (err) throw err;
    console.log("Number of dessert inserted: " + res.insertedCount);
    db.close();
  });
});