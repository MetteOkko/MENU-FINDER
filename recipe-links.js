const recipeLinks = {
    veganBowl_appetizer : "https://www.bhf.org.uk/informationsupport/support/healthy-living/healthy-eating/recipe-finder/hummus-with-vegetable-crudites",
    veganBowl_main : "https://ohsheglows.com/the-big-vegan-bowl/",
    veganBowl_dessert : "https://chocolatecoveredkatie.com/avocado-chocolate-mousse-vegan-healthy/",
    veganBowl_drink : "https://www.allrecipes.com/recipe/230642/healthy-green-juice/",

    butterChicken_appetizer : "https://www.indianhealthyrecipes.com/samosa-recipe-make-samosa/",
    butterChicken_main : "https://www.recipetineats.com/butter-chicken/",
    butterChicken_dessert : "https://www.indianhealthyrecipes.com/rice-kheer-recipe-chawal-ki-kheer/",
    butterChicken_drink : "https://www.simplyrecipes.com/recipes/mango_lassi/",

    paneerTikka_appetizer : "https://www.recipetineats.com/pakora-indian-vegetable-fritters/",
    paneerTikka_main : "https://www.indianhealthyrecipes.com/paneer-tikka-on-stove-top/",
    paneerTikka_dessert : "https://www.indianhealthyrecipes.com/gulab-jamun-recipe-using-milk-powder/",
    paneerTikka_drink : "https://www.indianhealthyrecipes.com/masala-tea-chai/",

    spicyBeefSkewer_appetizer : "https://www.recipetineats.com/lebanese-fattoush-salad/",
    spicyBeefSkewer_main : "https://www.shepaused4thought.com/beef-skewers/",
    spicyBeefSkewer_dessert : "https://natashaskitchen.com/baklava-recipe/",
    spicyBeefSkewer_drink : "https://www.themediterraneandish.com/mint-lemonade-recipe/",

    greekSalad_appetizer : "https://bakingthegoods.com/pita-bread-with-tzatziki-sauce/",
    greekSalad_main : "https://www.loveandlemons.com/greek-salad/",
    greekSalad_dessert : "https://www.mycookinghut.com/recipes/greek-yogurt-with-honey",
    greekSalad_drink : "https://www.tasteatlas.com/best-rated-white-wines-in-greece",

    moussaka_appetizer : "https://www.mygreekdish.com/recipe/saganaki-pan-seared-greek-cheese-appetizer/",
    moussaka_main : "https://www.recipetineats.com/moussaka-greek-eggplant-beef-bake/",
    moussaka_dessert : "https://natashaskitchen.com/baklava-recipe/",
    moussaka_drink : "https://fi.wikipedia.org/wiki/Ouzo",

    spanishGazpacho_appetizer : "https://www.seriouseats.com/pan-con-tomate-tomato-bread-spanish-recipe",
    spanishGazpacho_main : "https://www.loveandlemons.com/gazpacho-recipe/",
    spanishGazpacho_dessert : "https://www.bascofinefoods.com/spanish-recipes/churros-con-chocolate-recipe/?srsltid=AfmBOopl5TJau9TkbjcqlzRmgkwxC6ZD1N2vYq1IYG7vY5oXGYKV0XUU",
    spanishGazpacho_drink : "https://tastesbetterfromscratch.com/horchata/",

    paellaValenciana_appetizer : "https://foodmatch.com/recipes/detail/spanish-tapas-platter",
    paellaValenciana_main : "https://spanishsabores.com/traditional-spanish-paella-recipe/",
    paellaValenciana_dessert : "https://www.acozykitchen.com/classic-flan",
    paellaValenciana_drink : "https://minimalistbaker.com/easy-traditional-red-sangria/",

    frenchRatatouille_appetizer : "https://www.bbcgoodfood.com/recipes/salade-nicoise",
    frenchRatatouille_main : "https://www.howtocook.recipes/homemade-ratatouille-recipe/",
    frenchRatatouille_dessert : "https://preppykitchen.com/french-macarons/",
    frenchRatatouille_drink : "https://www.alko.fi/en/products/rose-wine?seed=1300148454",

    coqAuVin_appetizer : "https://www.gimmesomeoven.com/classic-french-onion-soup/",
    coqAuVin_main : "https://www.recipetineats.com/coq-au-vin/",
    coqAuVin_dessert : "https://natashaskitchen.com/quick-creme-brulee-recipe/",
    coqAuVin_drink : "https://www.alko.fi/en/products/red-wine?certificateId=certificate_008&seed=3254412344",

    beefTeriyaki_appetizer : "https://www.kitchenstories.com/en/recipes/edamame-with-sesame-and-sea-salt",
    beefTeriyaki_main : "https://meaningfuleats.com/30-minute-beef-teriyaki-gluten-free/",
    beefTeriyaki_dessert : "https://www.allrecipes.com/recipe/112876/green-tea-cheesecake/",
    beefTeriyaki_drink : "https://www.alko.fi/fi/tuotteet/saket?seed=219798678",

    padThai_appetizer : "https://healthynibblesandbits.com/fresh-vietnamese-spring-rolls-with-video/",
    padThai_main : "https://tastesbetterfromscratch.com/pad-thai/",
    padThai_dessert : "https://hot-thai-kitchen.com/mango-sticky-rice/",
    padThai_drink : "https://whiteonricecouple.com/thai-tea-recipe/",

    margheritaPizza_appetizer : "https://www.sipandfeast.com/antipasto-platter/",
    margheritaPizza_main : "https://www.bbcgoodfood.com/recipes/pizza-margherita-4-easy-steps",
    margheritaPizza_dessert : "https://www.allrecipes.com/recipe/72567/panna-cotta/",
    margheritaPizza_drink : "https://www.aperol.com/aperol-spritz-cocktail/",

    pastaCarbonara_appetizer : "https://www.bbcgoodfood.com/recipes/tomato-bruschetta",
    pastaCarbonara_main : "https://www.bbcgoodfood.com/recipes/ultimate-spaghetti-carbonara-recipe",
    pastaCarbonara_dessert : "https://tastesbetterfromscratch.com/easy-tiramisu/",
    pastaCarbonara_drink : "https://www.alko.fi/en/products/red-wine?statusId=U&certificateId=certificate_001&countryId=ITA&seed=1789568085",

    lambKebab_appetizer : "https://www.themediterraneandish.com/baba-ganoush-recipe/",
    lambKebab_main : "https://www.recipetineats.com/turkish-lamb-kebab-koftas/",
    lambKebab_dessert : "https://www.aspicyperspective.com/the-tastiest-turkish-delight-recipe-lokum/",
    lambKebab_drink : "https://foolproofliving.com/how-to-make-turkish-coffee/",

    lentilSoup_appetizer : "https://www.bbc.co.uk/food/recipes/spicyovenbakedbread_88054",
    lentilSoup_main : "https://cookieandkate.com/best-lentil-soup-recipe/",
    lentilSoup_dessert : "https://buttermilkbysam.com/cardamom-cookies/",
    lentilSoup_drink : "https://www.teaforturmeric.com/masala-chai-recipe/",

    salmonFillet_appetizer : "https://chezlerevefrancais.com/canapes-with-smoked-salmon/",
    salmonFillet_main : "https://www.recipetineats.com/garlic-butter-salmon-recipe/",
    salmonFillet_dessert : "https://www.recipetineats.com/lemon-tart/",
    salmonFillet_drink : "https://www.alko.fi/en/products/white-wine?grapeId=grape_sauvignon_blanc&regionId=FRA_languedoc-roussillon&seed=1907275832",

    capreseSalad_appetizer : "https://natashaskitchen.com/classic-bruschetta-recipe/",
    capreseSalad_main : "https://www.iheartnaptime.net/caprese-salad/",
    capreseSalad_dessert : "https://natashaskitchen.com/panna-cotta/",
    capreseSalad_drink : "https://www.sanpellegrino.com/",

    thaiGreenCurry_appetizer : "https://hot-thai-kitchen.com/crispy-spring-rolls/",
    thaiGreenCurry_main : "https://www.recipetineats.com/thai-green-curry/",
    thaiGreenCurry_dessert : "https://hot-thai-kitchen.com/mango-sticky-rice/",
    thaiGreenCurry_drink : "https://whiteonricecouple.com/thai-tea-recipe/",

    mushroomRisotto_appetizer : "https://www.ambitiouskitchen.com/the-best-garlic-bread-recipe/",
    mushroomRisotto_main : "https://www.loveandlemons.com/mushroom-risotto/",
    mushroomRisotto_dessert : "https://tastesbetterfromscratch.com/easy-tiramisu/",
    mushroomRisotto_drink : "https://www.alko.fi/en/products/white-wine?tasteStyleId=tasteStyle_006&countryId=ITA&seed=1851300734",

    grilledChickenBreast_appetizer : "https://natashaskitchen.com/caesar-salad-recipe/",
    grilledChickenBreast_main : "https://www.onceuponachef.com/recipes/perfectly-grilled-chicken-breasts.html",
    grilledChickenBreast_dessert : "https://www.bbcgoodfood.com/recipes/lemon-cheesecake",
    grilledChickenBreast_drink : "https://www.k-ruoka.fi/kauppa/tuote/minea-sparkling-wat-lemon-vesi-033l-tlk-6417348171660",

    finnishMeatballs_appetizer : "https://www.simplyrecipes.com/recipes/georges_light_rye_bread/",
    finnishMeatballs_main : "https://feelslikefinland.com/blogs/finnish-food-recipes/finnish-meatballs-with-brown-sauce-and-mashed-potatoes-lihapullat-ja-perunamuusi?srsltid=AfmBOoq8ha3uL7n3kqt_-4xQ4hhLluSX8Uh8x-gDPpNOxh4VO0B9Lbvp",
    finnishMeatballs_dessert : "https://www.allrecipes.com/recipe/56443/karjalan-pies/",
    finnishMeatballs_drink : "https://petersfoodadventures.com/kompot/",


};