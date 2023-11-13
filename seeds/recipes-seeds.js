const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_name: "Breakfast Fried Rice",
    cook_time: 5,
    category_id: 1,
    recipe_Ingredient: `2 Eggs, 5 Slices of Bacon, 3 green onions (thinly sliced), 3 cups day-old cooked rice, 1/3 cup low-sodium soy sauce, 1 TBSP rice vinegar, 1 TBSP toasted sesame seeds, 1/4 tsp crushed red pepper flakes, 1 TBSP unsalted butter`,
    recipe_text: `In a heavy-bottomed skillet over medium heat, cook the bacon, turning it until it's browned evenly. Remove the bacon from the pan and let drain on paper towels. Once the bacon is cool enough to handle, roughly chop.
    In a large skillet over medium heat, warm the sesame oil until shimmering. Add 2 of the sliced green onions, and cook for 2 to 3 minutes.
    Stir in the cooked rice, breaking up any large clumps. Add the soy sauce, rice vinegar, bacon, toasted sesame seeds, and crushed red pepper flakes. Stir to fully incorporate the ingredients and cook for 5 minutes, or until warmed through.
    In a non-stick skillet over medium heat, add the butter. Crack the eggs into the skillet and immediately cover the pan with a lid. Cook until the egg white is cooked through and the egg yolk is barely set, approximately 5 minutes.
    Place a fried egg on top of each bowl of breakfast fried rice and garnish with the remaining sliced green onion. Serve immediately, being sure to break the yolk over the rice so it can act like a sauce.`,
    picture: "breakfast_fried_rice.jpg" ,
  },
  {
    recipe_name: "Ham and Cheese Omelette",
    cook_time: 5,
    category_id: 1,
    recipe_Ingredient: `3 Eggs, 1/3-1/2 cup shredded Cheese, 1/3 cup chopped Ham, 1 TBSP unsalted butter, 1 TBSP cream, Pinch of Salt`,
    recipe_text: `Whisk the eggs with a pinch of salt and cream or milk (if using). Whisk well until fully combined and a bit foamy. Use a non stick 24cm/9.5″ wide pan, or thereabouts (18cm/7 1/4″ flat base). You will need at least 
    1 rubber spatula for cooking, though 2 will make your omelette folding life a whole lot easier! Melt a tiny dab of butter in the pan over medium heat. Once foaming, swirl/spread then, using a rubber spatula (which we need for the omelette), cook the ham just for a minute 
    or two until it is warmed through. Transfer to a bowl and set aside. Return the pan to the stove and melt the remaining butter until foaming. We want the stove on moderate heat; which might be medium low or low for you, depending on the strength of your stove and the size 
    of the stove ring you are using. We don't want it too high else you'll have to deal with the surface burning before the inside cooks through. Too low, and the omelette takes so long to cook it kind of turns rubbery. We need to find the happy medium! Give the eggs a quick whisk 
    then pour into the pan. Leave it for 15 seconds or until you see the edges just start to set. Then, using the rubber spatula, start making long, leisurely strokes, scraping the cooked eggs off the base to allow the uncooked egg to run, until the eggs are partially cooked. Spread 
    the custardy semi-scrambled eggs across the base of the skillet and roughly smooth the surface.  Sprinkle half the omelette with the cheese, then the warmed ham. Ensure the naked side of the omelette is not stuck by running the rubber spatula around the edge (it won't be, because 
    you are using a good non-stick pan!). Then using 2 rubber spatulas, fold the omelette over. Hecking again to ensure the omelette is not stuck to the pan. Then either slide the omelette out like a normal person or be a bit cheffy and flip it out onto the plate. `,
    picture: "ham-and-cheese_omlette.jpg",
  },
  {
    recipe_name: "Smashed Avocado Toast With Egg",
    cook_time: 20,
    category_id: 1,
    recipe_Ingredient: `1 Slice of Bread (toasted), 1/2 ripe medium Avocado, 1 hard-boiled Egg, Olive Oil, Salt(to taste)`,
    recipe_text: `Use a fork to smash the avocado down onto the toasted bread slice. Scatter a small squeeze of lemon juice 
    over the avocado. Slice the hard-boiled egg into coins, and then place them on top of the smashed avocado. Finish by sprinkling 
    a little pepper, salt, and a very light drizzle of olive oil on top of the egg.`,
    picture: "smashed-avocado-toasts-with-egg.jpg",
  },
  {
    recipe_name: "Quick Overnight Oats",
    cook_time: 5,
    category_id: 1,
    recipe_Ingredient: `1/2 cup rolled oats, 1/2 cup milk (dairy or dairy-free), 1/4 cup Greek Yogurt (dairy or dairy-free), 1 TBSP Chia Seeds, 1 TBSP Maple Syrup`,
    recipe_text: ` In a small jar, stir together the oats, milk, yogurt, chia seeds, and maple syrup. Place the jar in the fridge to let the oats soak for at least 
    2 hours, though overnight is best.The next morning, add your favorite toppings and enjoy! Alternatively, you can scoop the oats out into a bowl and add toppings from there.`,
    picture: "Easy-Overnight-Oats.jpg",
  },
  {
    recipe_name: "Easy Blueberry Muffins",
    cook_time: 25,
    category_id: 1,
    recipe_Ingredient: `1 1/2 cups All-Purpose Flour, 3/4 Granulated Sugar, 1/2 tsp salt, 2 tsp baking powder, 1/3 cup vegetable oil, 1 Egg, 1/3-1/2 cup milk, 1 1/2 TSP Vanilla Extract, 1 cup frozen blueberries`,
    recipe_text: `Preheat oven to 400º F (Makes 12 regular size muffins). In a large bowl whisk flour, sugar, baking powder and salt. Use a measuring cup that holds at least 1 cup and add vegetable oil, add the egg and 
    then fill the cup to the 1-cup line with milk (about ⅓ to a ½ cup of milk). Add vanilla and whisk until combined. Add milk mixture to the bowl with all purpose flour and sugar (the dry ingredients) then use a fork to combine. Do not over mix. (The muffin batter will be pretty thick).
    Add blueberries and use a spatula or spoon to gently fold the blueberries into the muffin batter. Divide the batter between the muffin cups filling about ½ full using your ice cream scoop. Sprinkle a little granulated sugar on top of each muffin. 
    Bake for 15-20 minutes or until a toothpick insert comes out clean.`,
    picture: "Easy-Blueberry-Muffin.jpg",
  },
  {
    recipe_name: "Ground Beef and Rice Skillet",
    cook_time: 30,
    category_id: 2,
    recipe_Ingredient: `1.5lb Ground Beef, 1 Yellow Onion, 1 Red Bell Pepper, 2 minced cloves garlic, 1 TSP Salt, 1 TSP Pepper, 10oz Rotel Diced Tomatoes & Green Chilies (undrained), 1 1/2 cups Beef Broth, 1 cup Long Grain Rice, 2 TBSP Worchestershire Sauce, 1 cup shredded Cheddar Cheese`,
    recipe_text: `In a large skillet, brown ground beef over medium-high heat. Drain and return to skillet. While meat is browning, dice onion and bell pepper. Add onion, pepper, garlic, salt, and pepper to meat and stir to mix. Cook 3 minutes stirring occasionally.
    Add beef broth, rice, Rotel, and Worcestershire to the skillet and stir to mix. Bring to a boil, reduce heat and cover. Simmer for 20 minute or until rice is tender. Remove from heat and sprinkle with cheese. Serve with chopped parsley if desired.`,
    picture: "ground-beef-and-rice-skillet.jpg",
  },
  {
    recipe_name: "Juicy BLT",
    cook_time: 10,
    category_id: 2,
    recipe_Ingredient: `4 Thick-Cut Bacon, 1 Heirloom Tomato, 1 TSP red wine vinegar, 1 1/2 TBSP Extra-Virgin Olive Oil, Salt, Pepper, 2 Slices of Bread, 1/3 Cup Mayonnaise, 3 Butter Lettuce Leaves`,
    recipe_text: `Heat a cast iron skillet over medium heat and melt the butter in the pan.
    Place each piece of bread face down on the skillet and cook on one side until golden and toasted. Repeat with all the pieces of bread. Set aside.
    In a small bowl, combine the mayonnaise and garlic and whisk together. Slice your tomatoes fairly thick and season well with salt and pepper.
    Prepare your lettuce. Assemble your sandwiches right before serving by spreading the mayo mixture on the untoasted side of all the pieces of bread.
    Top one piece of mayo'd bread with several pieces of lettuce, slices of seasoned tomatoes and as much bacon as you want. Then place another piece of mayo'd bread on top (mayo side down of course!) Serve and enjoy!`,
    picture: "BLT.jpg",
  },
  {
    recipe_name: "Tuna Melt",
    cook_time: 5,
    category_id: 2,
    recipe_Ingredient: `1 can Albacore White Tuna (drained), 1/3 cup Mayonnaise, 2 TBSP chopped red onion, 2 TSP lemon juice, Salt, Pepper, 2 Slices of Bread, 2 Slices of Cheese")`,
    recipe_text: `In a medium bowl, combine tuna, mayonnaise, onion, lemon juice, and oregano and stir until thoroughly combined. Add more mayo if you want mixture wetter. Season with salt and pepper, to taste.
    Butter outsides of bread slices. Layer tuna mixture on inside portion of bread. Add cheese, desired toppings, then another piece of cheese and top with bread. Heat a skillet over medium-low heat. Add sandwiches 
    and cook until bottom bread is toasted, and cheese is warm. Flip and cook on the other side until bread is toasted and cheese has melted.`,
    picture: "tuna_melt.jpg",
  },
  {
    recipe_name: "Easy Pasta Salad",
    cook_time: 30,
    category_id: 2,
    recipe_Ingredient: `1 bottle of Italian Pasta Salad Dressing, 1lb Uncooked Pasta, 3 cups cherry tomatoes (cut in half), 8oz fresh mozzarella cheese balls (cut in half), 1lb salami (cut in cubes), 3/4 kalamata olives (sliced), 3/4 cup sliced Kalamata Olives, 3/4 cup pepperoncini, 1/2 cup sliced red onion, 1/2 fresh parsley (chopped)`,
    recipe_text: `Cook pasta according to package directions, in salted water for more flavor. Allow to cool slightly and toss with a little oil to prevent sticking.
    Blend up the dressing, or shake together in a jar. Toss all ingredients together! Use about three-fourths of the dressing, and then save the rest of the dressing to
    add to leftovers. Keep in the fridge for 2-3 days. It actually tastes best the day AFTER you make it.`,
    picture: "Pasta-Salad.jpg",
  },
  {
    recipe_name: "Chicken Caesar Salad",
    cook_time: 20,
    category_id: 2,
    recipe_Ingredient: `1 bottle of Caesar Dressing, 4 chicken breasts, 2 TBSP Olive Oil, 2 TBSP Cajun Seasoning, 8 cups romaine lettuce (washed & dried), 1 1/2 cups croutons, 3/4 cup parmesan cheese (grated)`,
    recipe_text: `Combine all dressing ingredients and set aside. Combine the chicken breasts and 1 tablespoon olive oil in a small bowl. Season with cajun spice, making sure to cover all of the chicken.
    Heat up a large pan with remaining olive oil, add the chicken once hot and cook on each side ensuring that a dark crust is forming, "blackening" the chicken.
    Cook until chicken has reached 165°F internally or place in the oven to finish them. Once cooled, cut chicken breasts into slices. In a large bowl, cut romaine 
    lettuce into bite size pieces. Add croutons, parmesan cheese, and prepared chicken. Top with dressing and toss.`,
    picture: "chicken-caesar-salad.jpg",
  },
  {
    recipe_name: "Chicken and Mushroom Risotto",
    cook_time: 40,
    category_id: 3,
    recipe_Ingredient: `1 TBSP Olive Oil, 2.5oz Bacon, 12 oz Chicken Thigh Fillets, 13 oz Mushrooms, 2 TBSP Unsalted Butter, 2 Minced Garlic Cloves, 1 Onion, 1/2 cup White Wine, 1 1/4 cups uncooked arborio risotto rice, 4 cups Chicken Broth`,
    recipe_text: `Heat 1 tsp oil in a pot or skillet over high heat. Add bacon and cook until golden. Transfer to small microwave-proof bowl.
    Leave about 1 tbsp bacon fat in pot - discard excess. Add chicken* and cook until browned and cooked through. Transfer to separate bowl.
    Add mushrooms* and cook until light golden. Add to bowl with chicken. Turn heat down to medium and return pot to the stove. Add butter, and melt. Add garlic and onion. Sauté for 3 minutes or until softened.
    Turn heat up to high, add rice and stir until the grains become partially translucent - no longer than 1 minute. 
    Add wine and cook, scraping the bottom of the pot (to get any brown bits), until the alcohol smell evaporates ~ 2 minutes.
    Turn heat down to medium low. Add about 3 cups of stock. Then leave it, uncovered, stirring just once or twice, until most of the liquid has been absorbed.
    Check firmness of rice and add 1/2 cup of stock at a time, stirring in between until absorbed, until the rice is cooked to your taste. 
    Add chicken and mushrooms back into the risotto towards the end, just to heat through. Right at the end when the risotto is ready, add a splash of chicken broth to make the risotto to make it slightly soupy, then take it off the stove.
    Add butter (the more the better!) and parmesan, then stir vigorously (activates the starch and makes it super creamy). The excess liquid will evaporate quickly, so add more if you want a soupier risotto, like what you get at posh restaurants.
    Serve Immediately. Garnish with reheated bacon, and extra parmesan and parsley if desired.`,
    picture: "Chicken-and-Mushroom-Risotto.jpg",
  },
  {
    recipe_name: "Clam Chowder in a Bread Bowl",
    cook_time: 45,
    category_id: 3,
    recipe_Ingredient: `6 strips bacon (diced), 1 cups onion (diced), 1 cups celery (diced), 1/2 cups carrots (sliced), 3 cups baby red potatoes (diced),  2 Minced Garlic Cloves, 2 TBSP Butter, 1/3 cup flour, 16oz bottle of clam juice, 2 cups of seafood/or chicken stock, 1/2 TBSP fresh thyme, 2 bay leaves, 2 cups heavy cream, 13 oz. chopped clams`,
    recipe_text: `In a large stock pot or dutch oven, cook bacon on medium low heat to slowly render out the fat, and make bacon crispy. Remove cooked bacon with a slotted spoon, saving back 2 tablespoons of the rendered fat in the pot.
    Saute onion, celery and carrots in the fat until soft and translucent, about 6-8 minutes. Add in minced garlic and salt and cook for another 30 seconds.
    Add flour to make a roux and cook for 1-2 minutes, whisking constantly. Whisk in clam juice, broth, thyme and bay leaves until smooth and combined. Add in potatoes and bring to a boil, simmer until potatoes are tender 10-12 minutes. Scrape the bottom of the pot frequently with a wood spoon to prevent scorching.
    Add in heavy cream and canned clams, bring to a low simmer to warm through, but do not bring to a full boil.
    To serve in a bread bowl: cut the tops off of the bread bowl, about ¼ of the way down the bowl. Scoop out most of the inside of the bread, and ladle in soup, top with reserved bacon. Serve with the top and inside bread pieces for dipping.`,
    picture: "clam-chowder-bread-bowl.jpg",
  },
  {
    recipe_name: "Baked Rigatoni Pasta",
    cook_time: 75,
    category_id: 3,
    recipe_Ingredient: `2 TSP Olive Oil, 1lb Ground Beef, 1lb mild ground Italian Sausage, 1/2 cup onion (finely chopped), 2 TSP garlic (minced), 24oz jar marinara sauce, 8oz can tomato sauce, Salt, Pepper`,
    recipe_text: `Preheat the oven to 350 degrees F. Coat a 9"x13" pan with cooking spray.
    FOR THE SAUCE: 
    Heat the oil in a large pan over medium high heat. Add the ground beef and sausage to the pan. Season the meat with salt and pepper.
    Cook the meat for 3-4 minutes, breaking it up into small pieces with a spoon. Add the onion to the pan. Cook for an additional 5 minutes or until meat is browned and cooked through and onion is softened.
    Add the garlic and cook for 30 seconds. Add the marinara sauce and tomato sauce to the pan and bring the sauce to a simmer.
    Let the sauce simmer for 5 minutes or until just thickened.
   
    FOR ASSEMBLY;
    Toss the cooked rigatoni with the sauce.
    Pour the pasta mixture into the prepared pan and top with mozzarella cheese.
    Bake covered for 20 minutes, then uncover and bake for another 15-20 minutes or until pasta is bubbly and cheese is melted and browned.
    
    Sprinkle with parsley. Let stand for 5 minutes, then serve.`,
    picture: "Baked-Rigatoni.jpg",
  },
  {
    recipe_name: "5-Minute Kimchi Ramen",
    cook_time: 5,
    category_id: 3,
    recipe_Ingredient: `1 package Korean Instant Ramen, 1/2 cup chopped kimchi, 1/2 TBSP Korean Chili Flakes, 2oz Canned Tuna in Oil, 1 chopped green onion, 1 TSP Sesame Oil, 1 1/2 TSP toasted sesame seeds`,
    recipe_text: `Bring water to a boil over high heat. Add 3/4 of the seasoning powder packet and chopped kimchi.
    When the water returns to a boil, reduce the heat to medium and add the ramen noodles, dried vegetable flakes, canned tuna (about 1/4 to 1/2 amount per serving), and Korean chili flakes (optional).
    Use chopsticks or kitchen tongs to lift up the noodles a few times while boiling to separate them and ensure even cooking. Cook until the noodles reach your desired doneness, usually around 3-4 minutes.
    Turn off the heat, add green onion (or Asian leek), and drizzle with sesame oil and toasted sesame seeds. Serve immediately and enjoy your delicious Kimchi Ramen.`,
    picture: "kimchi-ramen.jpg",
  },
  {
    recipe_name: "BBQ Chicken Pizza",
    cook_time: 35,
    category_id: 3,
    recipe_Ingredient: `1lb refrigerated pizza dough (divided into 2 pieces), 2 cups cooked shredded chicken, 3/2 cup BBQ Sauce, 1/2 medium red onion (thinly sliced), 1/3 cup shredded gouda, 2 TBSP freshly chopped cilantro, Pinch crushed red pepper flakes (optional)`,
    recipe_text: `Preheat oven to 500°. Line two large baking sheets with parchment paper and grease with cooking spray. In a medium bowl, stir together chicken and 1/4 cup barbecue sauce. On a lightly floured surface, roll out pizza dough into a large circle, then slide 
    onto prepared baking sheet. Top each pizza with 1/4 cup barbecue sauce, then half the chicken mixture, spreading in an even layer and leaving 1" around the edge bare. Next add an even layer of mozzarella and red onion, then top with gouda. Sprinkle with crushed red pepper 
    flakes if using. Bake until cheese is melty and dough is cooked through, 20 to 25 minutes. Garnish with cilantro before serving.`,
    picture: "BBQ-Chicken-Pizza.jpg",
  },
  {
    recipe_name: "Thin and Crispy Chocolate Chip Cookies",
    cook_time: 30,
    category_id: 8,
    recipe_Ingredient: `1 1/3 cup all purpose flour, 1/2 TSP baking soda, 1/4 TSP fine salt, 1 stick unsalted butter (melted and cooled), 1/2 cup grandulated sugar, 1/3 packed light brown sugar, 2 TBSP light corn syrup, 1 large egg, 1 TBSP milk, 2 TSP vanilla extract, 1 cup semisweet chocolate chips`,
    recipe_text: `Preheat the oven to 350°F. Line baking sheets with parchment paper.  In a medium bowl, whisk together the flour, baking soda, and salt.
    In a large bowl, vigorously beat the butter, granulated sugar, brown sugar, and corn syrup with a spatula until very well combined. Add the egg, milk, and vanilla and beat vigorously until very well combined. Gradually add the flour mixture and stir until just combined, being careful not to over-mix. Gently stir in the chocolate chips. The dough will be very loose, sticky, and more like batter in consistency.
    Using a medium (1 1/2-tablespoon size) spring-loaded scoop, drop balls of dough onto the prepared baking sheets, spacing at least 2 1/2 inches apart. Don't worry if the dough isn't perfectly round. Bake for about 12 minutes, or until golden brown and flat, rotating the sheets halfway through baking. Bake one sheet at a time for even cooking. When you remove the baking sheet from the oven, tap it against the counter.
    Let the cookies cool on the baking sheets for 5 minutes before using a thin spatula to remove to wire racks to cool completely. Store in an airtight container for up to 3 days at room temperature. If desired, reheat the cookies in a 350°F oven for 3 to 5 minutes, or until warmed through.`,
    picture: "Thin-and-Crispy-Chocolate-Chip-Cookies.jpg",
  },
  {
    recipe_name: "Berry Ice Cream",
    cook_time: 10,
    category_id: 8,
    recipe_Ingredient: `3 ripe bananas (peeled and frozen), 1 cup fresh blueberries, 1 1/2 cups fresh strawberries, 1 TSP Pure Orange Extract`,
    recipe_text: `Add all ingredients to a high powered blender or food processor. Cover and blend until completely creamy. If you have a tamper, use the tamper to mash the fruit to help it blend. If necessary, add 2 to 4 tablespoons of non-dairy milk, such as canned coconut milk, to help the fruit blend. Serve immediately or freeze in a freezer-safe container for later.`,
    picture: "berry_icecream.jpg",
  },
  {
    recipe_name: "No-Bake Peanut Butter Bars",
    cook_time: 25,
    category_id: 8,
    recipe_Ingredient: `1 cup unsalted melted butter, 2 cups animal cracker crumbs (or graham crackers), 2 cups powdered sugar, 1 1/2 cups creamy peanut butter, For the Topping: 1/4 cup peanut butter and 10oz semi-sweet chocolate (chopped)`,
    recipe_text: `In a mixer or a food processor, combine the first four ingredients until smooth. Spread into a 13x9 baking pan.
    For the topping, melt the chocolate and peanut butter together in the microwave for 1 minute. Stir. If not completely melted you can heat in 10 second intervals until smooth. Spread over the top of the peanut butter layer.
    Chill dessert in the refrigerator for about an hour, or in the freezer for 15 minutes. Cut into bars and serve.`,
    picture: "no-bake-pb-bars.jpg",
  },
  {
    recipe_name: "One Bowl Chocolate Chip Banana Bread",
    cook_time: 50,
    category_id: 8,
    recipe_Ingredient: `3 ripe banans, 1/3 cup butter (melted), 1/2 cup sugar, 1 Large Egg, 1 TSP vanilla extract, 1 TSP baking soda, pinch of salt, 1 1/2 cups all-purpose flour, 1/2 mini chocolate chips"`,
    recipe_text: `Preheat oven to 350 degrees F. Spray a 8"x5" (or similar size) loaf pan with baking spray (the kind with flour in it) and set aside.
    In a large bowl mash the bananas until completely smooth. Stir in the melted butter until smooth.
    Add the sugar, egg, vanilla, baking soda, salt and flour and stir until the batter is thick and combined. Fold in the chocolate chips then pour/scoop the batter into the prepared loaf pan.
    Bake for 50 minutes to 1 hour, or until toothpick inserted in center comes out clean. Let cool completely on a wire rack. Slice and enjoy!`,
    picture: "chocolatechip_banana_bread.jpg",
  },
  {
    recipe_name: "Easy Chocolate Mousse",
    cook_time: 5,
    category_id: 8,
    recipe_Ingredient: `1 1/2 cups Heavy Whipping Cream, 1/4 cup cocoa powder, 1/2 cup powdered sugar, 1/4 TSP almond extract`,
    recipe_text: `In a chilled mixing bowl, begin whipping cream.  Whip until frothy and slightly thicken.
    Add powdered sugar and cocoa powder. Carefully mix until soft peaks form.
    Add almond extract if desired. Whip until stiff peaks form.
    Spoon into plastic bag or piping bag with piping tip. Pip into serving bowls or glasses.
    Enjoy immediately or refrigerate until ready to serve.`,
    picture: "Chocolate_Mousse.jpg",
  },
  {
    recipe_name: "Mexican Rice",
    cook_time: 30,
    category_id: 4,
    recipe_Ingredient: `2 TBSP Olive Oil, 1 small yellow onion (chopped), 1 large jalapeno pepper (stemmed, seeded, and minced), 2 large minced garlic cloves, 2 TBSP Tomato Paste, 1 1/2 cups white long grain rice, 3 1/3 cups low-sodium chicken broth, 1 TSP salt, 1/4 TSP freshly ground black pepper, 1/2 TSP chili powder, 1/2 TSP cumin, 1/2 cup frozen peas (defrosted), 1/4 cup finely chopped cilantro, 2 TSP fresh lime juice`,
    recipe_text: `Heat the olive oil in a large pot over medium-low heat. Add the onions and jalapeño and cook, stirring frequently, until onions are softened and translucent, about 5 minutes.
    Turn the heat up to medium and add the tomato paste, garlic and rice; cook, stirring frequently, for about 3 minutes.
    Add the chicken broth, salt, pepper, chili powder and cumin; turn the heat up and bring to a boil.
    Reduce the heat to low, cover the pot and simmer until all the liquid is absorbed, about 20 minutes.
    Add the peas, cilantro and lime juice and fluff the rice with a fork to mix. Let the rice sit for a few moments to "dry out" and lose that wet, just-steamed texture. Taste and adjust seasoning with salt, pepper and lime if necessary.`,
    picture: "mexican-rice.jpg",
  },
  {
    recipe_name: "Pan-Fried Brussel Sprouts with Balsamic Glaze",
    cook_time: 25,
    category_id: 4,
    recipe_Ingredient: `1lb Brussel Sprouts, 1 TBSP Olive Oil, 1/2 TSP salt, 2 TBSP Balsamic Vinegar, 1 TSP Brown Sugar`,
    recipe_text: `Rinse and cut the stems off the Brussels sprouts. Remove any extra leaves that fall off. Cut in half.
    Heat olive oil in a large pan over medium-high heat. Add the Brussels sprouts. Saute for 5 minutes without touching the sprouts. Toss the sprouts in the pan and cook an additional 5 minutes.
    Add the balsamic and sugar to a bowl and stir to combine. Add the mixture to the pan.
    Toss to coat. Cook for 1 minute. Toss again. Repeat. Once the glaze has thickened, remove from heat.`,
    picture: "brussel_sprouts-with_balsamic_vinegar.jpg",
  },
  {
    recipe_name: "Homemade Garlic Bread",
    cook_time: 20,
    category_id: 4,
    recipe_Ingredient: `1 Baguette, 1/2 cup unsalted butter, 2 TBSP Olive oil, 1/4 cup freshly grated Parmesan Cheese, 2 Garlic cloves (finely minced), 2 TBSP Italian parlsey (freshly minced), Generous pinch of Kosher Salt`,
    recipe_text: `Preheat the oven to 425° and have ready 2 sheet pans. Using a sharp bread knife, cut the loaf on a bias into thick 1" slices. See notes if you'd rather halve the loaf lengthwise.
    In a small mixing bowl, whisk together the butter and olive oil. Stir in the Parmesan cheese, garlic, parsley, and salt. Apply a thin layer of the mixture to each slice of bread and transfer to the baking sheets, buttered side up.
    Bake 5-8 minutes, or until golden. Serve right away and enjoy.`,
    picture: "homemade-garlic-bread.jpg",
  },
  {
    recipe_name: "Mac & Cheese",
    cook_time: 30,
    category_id: 4,
    recipe_Ingredient: `1/2 lb uncooked elbow macaroni, 3 TBSP butter, 2 TBSP All-Purpose Flour, 1/8 tsp ground black pepper, 1 1/2 cup milk (any kind), 3/4 cup Half-and-Half, 2 1/2 cups shredded cheddar cheese`,
    recipe_text: `Preheat to 325 degrees and lightly grease a square baking dish. Cook the macaroni. Slightly undercook your noodles (about 1 minute under al-dente). Drain and set aside.
    Make the roux. Melt the butter in a medium saucepan over medium heat. Blend in the flour, salt, and pepper. Cook for 2 minutes.
    Add milk and cheese.  Stir in milk and half and half, slowly, stirring constantly. Remove from heat. Add 1 cup shredded cheese to the sauce and stir just until melted. Add the cooked macaroni noodles and toss to coat them in the sauce.
    Pour into baking dish.  Pour half or the pasta mixture into the prepared baking dish. Sprinkle ½ cup cheese over the top. Pour remaining pasta over it and sprinkle with remaining cheese.`,
    picture: "mac_and_cheese.jpg",
  },
  {
    recipe_name: "Roasted Garlic Butter Parmesan Potates",
    cook_time: 25,
    category_id: 4,
    recipe_Ingredient: `3lb Baby Red Potatoes (washed and quartered), 1/4 cup olive oil, 6 large garlic cloves (minced), Salt, Pepper, 1 TBSP Italian seasoning, 3/4 freshly grated Parmesan cheese, 1/2 cup unsalted butter, Fresh chopped parsley (for garnish)`,
    recipe_text: `To prepare your roasted garlic potatoes: Preheat your oven to 400ºF (200°C). Grease a large baking sheet with non-stick spray or olive oil and set aside.
    Parboil baby red potatoes in boiling water for 5 to 8 minutes to precook them. The potatoes will be more tender on the inside when roasting.
    In a large bowl, combine 1/4 cup of olive oil, garlic, salt, herbs, pepper, and parmesan cheese together, mixing to combine. Add a little more olive oil if the parmesan cheese has absorbed most of it.
    Toss parboiled potatoes through the garlic parmesan mixture to evenly coat.
    Arrange the coated potatoes cut side down in a single layer onto the prepared baking sheet. Place the baking sheet on the bottom rack of the oven. Bake your garlic butter parmesan potatoes for 25 minutes, turning after 15 minutes with tongs or a spatula, until potatoes are browned and crisped at the edges.
    In the meantime, gently melt butter in the microwave and combine with fresh chopped parsley. Remove the roasted potatoes from the oven, and drizzle with the butter parsley sauce. Add bacon bits, toss to coat well, and serve your roasted potatoes with garlic butter parmesan immediately. Enjoy!`,
    picture: "roasted-garlic-butter-paremsan-potatoes.jpg",
  },
  {
    recipe_name: "Classic Mimosa",
    cook_time: 2,
    category_id: 9,
    recipe_Ingredient: `1 bottle of Champagne Prosecco, or Cava, 3 cups Orange Juice`,
    recipe_text: `Pour the sparkling wine into the Champagne flutes, filling each glass about half full. Pour the orange juice on top to fill each glass and serve.`,
    picture: "mimosa.jpg",
  },
  {
    recipe_name: "Fresh Strawberry Margarita",
    cook_time: 5,
    category_id: 9,
    recipe_Ingredient: `1 cup fresh strawberries(stems removed and halved), 2 TBSP Maple Syrup, 1/4 cup tequila, 1/2 cup ice, 1/4 cup lime juice`,
    recipe_text: `To a high-speed blender, add your sliced strawberries, maple syrup, tequila, ice, and lime juice. Blend on high until smooth. Serve over ice or straight up!
    Can be made up to 1 day ahead and stored in the refrigerator. Or, freeze into ice cubes and blend with a small amount of extra water.`,
    picture: "fresh-strawberry-margarita.jpg",
  },
  {
    recipe_name: "Iced Brown Sugar Oatmilk Shaken Espresso",
    cook_time: 15,
    category_id: 9,
    recipe_Ingredient: `Brown Sugar Syrup: 4 TBSP lightly packed brown sugar, 1/2 TSP ground cinnamon, 6 TBSP water, 1 TSP vanilla extract ; 
    Lattes: 2 Double Shots Expresso, 1 Mason Jar with a few ice cubes, 2 glassed filled halfway with ice, Oat Milk`,
    recipe_text: `In a small frying pan or pot on the stove, add the syrup ingredients and heat on medium-high, whisking to combine. Once it starts simmering, lower the heat to medium-low and simmer about 3-5 minutes, stirring frequently, until sugar has completely dissolved and syrup has thickened just slightly. Remove from the heat and set aside.
    Brew two shots of espresso or about 1/2 cup of very strong coffee. Add to the mason jar with 3 tbsp of syrup and a few ice cubes and shake vigorously for about 1-2 minutes.
    Add some more ice to each glass. Divide the espresso mixture between the glasses. Add oat milk to top it up. Stir and enjoy!`,
    picture: "IcedBrownSugarOatmilkShakenEspresso5.jpg",
  },
  {
    recipe_name: "Fresh Mango Smoothie With Yogurt",
    cook_time: 10,
    category_id: 9,
    recipe_Ingredient: `1 cup Mango (peeled and diced), 1 cup Plain Nonfat Yogurt (or Vanilla Yogurt), 1/2 cup crushed ice, Milk or Water (optional)`,
    recipe_text: `Gather the ingredients. Place the diced mango, yogurt, and ice in a blender. Blend or process until smooth.
    If the smoothie is too thick, add a little milk or water and blend again.Serve immediately. Enjoy.`,
    picture: "mango-smoothie-with-yogurt.jpg",
  },
  {
    recipe_name: "Orange Spinach Banana Smoothie",
    cook_time: 5,
    category_id: 9,
    recipe_Ingredient: `1 cup Spinach, 3/4 cup coconut water, 1/2 Lemon (peeled), 1/2 Banana, 1 Orange (peeled), Optional: 1 serving protein powder`,
    recipe_text: `Peel and slice oranges to help blend easier. Blend spinach, coconut water and orange together until smooth. Add remaining ingredients and blend again.`,
    picture: "orange-spinach-banana-smoothie.jpg",
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
