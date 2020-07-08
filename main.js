var firstRecipe = {
    title: 'Spinach Chicken',
    servings: 4,
    ingredients: ['1 lb- ground chicken', '1- small onion, diced', '2 cloves- garlic, minced', '1- egg white', '1 tbsp- olive oil', '2 tbsp- tomato paste', '1/2 cup- tomato sauce', '1 cup- chopped spinach', '1 cup- spinach', '1 tbsp- Italian seasoning', '3 tbsp- chopped parsley', '2 tbsp- basil, chopped', 'pinch- salt and pepper'],
    instructions: '',
};

// html
title.innerHTML = firstRecipe.title;
for (var i = 0; i < firstRecipe.ingredients.length; i++) {
  var list = document.getElementById("list");
  list.innerHTML += firstRecipe.ingredients[i] + "<br>";
  }
servings.innerHTML = 'Servings: ' + firstRecipe.servings; 




var secondRecipe = {
  title1: 'Pesto Chicken',
  count: 4,
  ingredients: ['1/4 cup - grated parmesan', '1/4 cup - pesto', '1tbsp - olive oil', '1tsp - chili powder', '1 pound - chicken tenders', '1/2 cup - basil leaves'],
};

title1.innerHTML = secondRecipe.title1;
for (var i = 0; i < secondRecipe.ingredients.length; i++) {
var item = document.getElementById("item");
item.innerHTML += secondRecipe.ingredients[i] + "<br>";
}
count.innerHTML = 'Servings: ' + secondRecipe.count; 