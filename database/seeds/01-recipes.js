exports.seed = function (knex) {
  return knex('recipes')
    .del()
    .then(function () {
      return knex('recipes').insert([
        {
          id: 1,
          title: 'Classic Lasagna',
          creator:
            'https://www.delish.com/cooking/recipe-ideas/recipes/a51337/classic-lasagna-recipe/',
          ingredients:
            '3/4 lb. lasagna noodles, 1 tsp. extra-virgin olive oil (plus more for drizzling), 2 lb. ground beef, 4 cloves garlic (minced), 2 tsp. dried oregano, Kosher salt, Freshly ground black pepper, 2 (32-0z.) jars marinara, 16 oz. whole milk ricotta, 1/2 c. freshly grated Parmesan (divided), 1/4 c. chopped parsley (plus more for garnish), 1 large egg, 2 lb. sliced mozzarella',
          directions:
            '1. Preheat oven to 375º. In a large pot of salted boiling water, cook pasta according to package directions until al dente, less 2 minutes. Drain and drizzle a bit of olive oil to prevent noodles from sticking together. 2. Meanwhile, in a large pot over medium-high heat, heat oil. Cook ground beef until no longer pink, breaking up with a wooden spoon. Remove from heat and drain fat. Return beef to skillet and add garlic and oregano and cook, stirring, for 1 minute. Season with salt and pepper, then add marinara and stir until warmed through. 3. Combine ricotta, 1/4 cup Parmesan, parsley, and egg in a large mixing bowl and season with salt and pepper. Set aside. 4. In a large casserole dish, evenly spread a quarter of the meat sauce across the bottom of the dish, then top with a single layer of lasagna noodles, a layer of ricotta mixture, a single layer of mozzarella, and a layer of meat sauce. Repeat layers, topping the last layer of noodles with meat sauce, Parmesan, and mozzarella. 5. Cover with foil and bake for 15 minutes, then increase temperature to 400º and bake uncovered for 18 to 20 minutes. 6. Garnish with parsley before serving.',
          category: 'Dinner',
        },
        {
          id: 2,
          title: 'Mexican Street Tacos',
          creator: 'https://damndelicious.net/2019/04/18/mexican-street-tacos/',
          ingredients:
            '2 tablespoons reduced sodium soy sauce, 2 tablespoons freshly squeezed lime juice, 2 tablespoons canola oil (divided), 3 cloves garlic (minced), 2 teaspoons chili powder, 1 teaspoon ground cumin, 1 teaspoon dried oregano, 1 1/2 pounds skirt steak (cut into 1/2-inch pieces), 12 mini flour tortillas (warmed), 3/4 cup diced red onion, 1/2 cup chopped fresh cilantro leaves, and 1 lime (cut into wedges)',
          directions:
            '1. In a medium bowl, combine soy sauce, lime juice, 1 tablespoon canola oil, garlic, chili powder, cumin and oregano. 2. In a gallon size Ziploc bag or large bowl, combine soy sauce mixture and steak; marinate for at least 1 hour up to 4 hours, turning the bag occasionally. 3. Heat remaining 1 tablespoon canola oil in a large skillet over medium high heat. Add steak and marinade, and cook, stirring often, until steak has browned and marinade has reduced, about 5-6 minutes, or until desired doneness. 4. Serve steak in tortillas, topped with onion, cilantro and lime.',
          category: 'Dinner',
        },
        {
          id: 3,
          title: 'IHOP Cinn-a-Stack Pancakes',
          creator: 'IHOP, https://copykat.com/ihop-cinn-a-stack-pancakes/',
          ingredients:
            'Cinnamon Layer: 1/2 cup butter (softened), 1 cup packed brown sugar, 1 tablespoon ground cinnamon, 2 teaspoons cake flour (you can use all-purpose), 1/8 teaspoon salt, 1/4 teaspoon vanilla extract. Cream Cheese Icing: 2 ounces butter, 4 ounces cream cheese, 1 cup powdered sugar, 1 tablespoon milk, 1/2 teaspoon vanilla extract. Pankcakes: 1 1/4 cup all-purpose flour, 1 1/2 teaspoons baking powder, 2 1/2 teaspoons sugar, 1/2 teaspoon salt, 1 1/2 cup buttermilk, 2 tablespoons vegetable oil, 1 egg (slightly beaten)',
          directions:
            '1. To Make the Cinnamon Layer: In a small bowl combine the butter, brown sugar, cake flour, cinnamon, salt, and vanilla. Stir until well blended; set aside. Please note this should make a nice thick paste. 2. To make the cream cheese icing: Use a mixer to blend together the cream cheese and the butter until light and fluffy. Slowly add the powdered sugar. When the powder sugar has been incorporated blend in the milk and the vanilla. 3. To make the pancakes: Place the dry pancake ingredients (flour, sugar, salt, and baking soda) into a bowl, and stir to blend the dry ingredients. Add buttermilk, oil, and egg. Use a spoon to mix the pancake batter and beat until just smooth. Heat a skillet or an electric griddle to 350 and spray with non-stick spray. Pour about 1/2 cup of batter to form a 4-inch pancake. 4. When the pancakes start to show small bubbles on top, turn them over to finish cooking. You can assemble the stacks just before servings. Spread 2 teaspoons of the cinnamon mixture over one pancake, layer another pancake on top, spread 2 more teaspoons of cinnamon mixture over the top, and then drizzle with the cream cheese icing. The leftover cinnamon mixture goes great on toast too!',
          category: 'Breakfest, Dinner',
        },
        {
          id: 4,
          title: 'Best Classic Burger',
          creator: 'https://www.thewholesomedish.com/the-best-classic-burger/',
          ingredients:
            '1 1/2 pounds 80% lean 20% fat ground beef or ground chuck, 1 tablespoon Worcestershire sauce, 1 1/2 teaspoons seasoning salt, 1 teaspoon garlic powder, 1/2 teaspoon ground black pepper, Optional: 4 slices of cheese, 4 hamburger buns, Optional: hamburger toppings - lettuce tomato, onion, pickles, ketchup, mustard, mayo, etc.',
          directions:
            '1. Preheat the grill to 375 degrees F (medium-high). 2. In a large bowl, add the beef. Sprinkle evenly with the Worcestershire sauce, seasoning salt, garlic powder, and pepper. Use your hands to mix the ingredients until they are just combined. 3. Divide the meat mixture into fourths. Take 1/4 of the meat mixture and use your hands to press it into the shape of a hamburger patty that is about 3/4 inch thick. Make an indention in the middle of the patty to prevent bulging in the center of the hamburger as it cooks. Repeat with the remaining meat mixture, making 4 hamburgers. 4. Place the burgers on the grill. Cook 4-5 minutes on the first side. Flip the burgers over and cook an additional 4-5 minutes, until the burgers have reached the desired doneness.* 5. If adding cheese, lay a slice of cheese on each burger patty about 1 minute before taking the burgers off the grill, so the cheese has a chance to melt. 6. Serve the burgers on hamburger buns with optional hamburger toppings.',
          category: 'Lunch, Dinner',
        },
        {
          id: 5,
          title: 'Homemade Cheese Pizza',
          creator: 'https://www.acouplecooks.com/homemade-cheese-pizza/',
          ingredients:
            '1 ball Best Pizza Dough (or Food Processor Dough or Thin Crust Dough), 1/3 cup Easy Pizza Sauce, 4 ounces fresh mozzarella cheese, 4 ounces (1 cup) shredded mozzarella cheese, 1/4 teaspoon garlic powder, 1 teaspoon dried oregano, Kosher salt, Semolina flour or cornmeal, for dusting the pizza peel',
          directions:
            '1. Make the pizza dough: Follow the Best Pizza Dough recipe to prepare the dough. (This takes about 15 minutes to make and 45 minutes to rest.) 2. Place a pizza stone in the oven and preheat to 500°F. OR preheat your pizza oven (here’s the pizza oven we use). 3. Make the pizza sauce: Make the Easy Pizza Sauce. 4. Prepare the toppings: Slice or tear the fresh mozzarella into small pieces. 5. Bake the pizza: When the oven is ready, dust a pizza peel with cornmeal or semolina flour. (If you don’t have a pizza peel, you can use a rimless baking sheet or the back of a rimmed baking sheet. But a pizza peel is well worth the investment!) Stretch the dough into a circle; see How to Stretch Pizza Dough for instructions. Then gently place the dough onto the pizza peel. 6. Spread the pizza sauce over the dough using the back of a spoon to create a thin layer. Add the pieces of fresh mozzarella cheese evenly across the dough, then top with the shredded mozzarella cheese. Sprinkle evenly with the garlic powder, dried oregano, and a few pinches of kosher salt. 7. Use the pizza peel to carefully transfer the pizza onto the preheated pizza stone. Bake the pizza until the cheese and crust are nicely browned, about 5 to 7 minutes in the oven (or 1 minute in a pizza oven). Slice into pieces and serve immediately.',
          category: 'Lunch, Dinner',
        },
        {
          id: 6,
          title: 'Perfect Pot Roast',
          creator:
            'https://www.foodnetwork.com/recipes/ree-drummond/perfect-pot-roast-recipe-2118771',
          ingredients:
            'Salt and freshly ground black pepper, One 3- to 5-pound chuck roast, 2 or 3 tablespoons olive oil, 2 whole onions (peeled and halved), 6 to 8 whole carrots (unpeeled, cut into 2-inch pieces), 1 cup red wine (optional), 3 cups beef broth, 2 or 3 sprigs fresh rosemary, 2 or 3 sprigs fresh thyme',
          directions:
            '1. Preheat the oven to 275 degrees F. 2. Generously salt and pepper the chuck roast. 3. Heat the olive oil in large pot or Dutch oven over medium-high heat. Add the halved onions to the pot, browning them on both sides. Remove the onions to a plate. 4. Throw the carrots into the same very hot pot and toss them around a bit until slightly browned, about a minute or so. Reserve the carrots with the onions. 5. If needed, add a bit more olive oil to the very hot pot. Place the meat in the pot and sear it for about a minute on all sides until it is nice and brown all over. Remove the roast to a plate. 6. With the burner still on high, use either red wine or beef broth (about 1 cup) to deglaze the pot, scraping the bottom with a whisk. Place the roast back into the pot and add enough beef stock to cover the meat halfway. 7. Add in the onions and the carrots, along with the fresh herbs. 8. Put the lid on, then roast for 3 hours for a 3-pound roast. For a 4 to 5-pound roast, plan on 4 hours. The roast is ready when its fall-apart tender.',
          category: 'Dinner',
        },
      ]);
    });
};
