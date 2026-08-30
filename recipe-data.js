const recipes = {
  
  "spicy-beef-skewer": {
    name: "Spicy Beef Skewer",
    tags: ["meat", "spicy", "middle eastern"],
    appetizer: {
      name: "Fattoush Salad",
      description: "Crispy pita chips mixed with fresh greens, tomatoes, cucumbers, and sumac dressing.",
      id: "spicyBeefSkewer_appetizer" 
    },
    mainCourse: {
      name: "Spicy Beef Skewer",
      description: "Tender beef with aromatic spices, grilled to perfection. Served with rice and grilled vegetables.",
      id: "spicyBeefSkewer_main" 
    },
    dessert: {
      name: "Baklava",
      description: "Layers of phyllo pastry, nuts, and honey syrup - a classic Middle Eastern treat.",
      id: "spicyBeefSkewer_dessert" 
    },
    drink: {
      name: "Mint Lemonade",
      description: "Cooling mint and fresh lemon juice with a touch of rose water and sparkling water.",
      id: "spicyBeefSkewer_drink" 
    }
  },
  
  "finnish-meatballs": {
    name: "Finnish Meatballs",
    tags: ["meat", "not spicy", "finnish"],
    appetizer: {
      name: "Rye Bread with Butter",
      description: "Hearty Finnish rye bread served with creamy butter and lingonberry jam.",
      id: "finnishMeatballs_appetizer" 
    },
    mainCourse: {
      name: "Finnish Meatballs",
      description: "Classic Nordic comfort food with creamy sauce. Served with mashed potatoes and pickled cucumber.",
      id: "finnishMeatballs_main" 
    },
    dessert: {
      name: "Karelian Pasty",
      description: "Traditional Finnish pastry with rye crust and rice pudding filling.",
      id: "finnishMeatballs_dessert" 
    },
    drink: {
      name: "Berry Kompot",
      description: "Traditional Nordic berry drink made with lingonberries, cloudberries, and a touch of cinnamon.",
      id: "finnishMeatballs_drink" 
    }
  },
  "buddha-bowl": {
    name: "Buddha Bowl",
    tags: ["vegan", "not spicy"],
    appetizer: {
      name: "Edamame with Sea Salt",
      description: "Steamed young soybeans sprinkled with sea salt and sesame seeds.",
      id: "buddhaBowl_appetizer" 
    },
    mainCourse: {
      name: "Buddha Bowl",
      description: "Quinoa, roasted vegetables, and tahini dressing. Includes sweet potato, broccoli, and kale.",
      id: "buddhaBowl_main" 
    },
    dessert: {
      name: "Coconut Mango Sorbet",
      description: "Refreshing dairy-free sorbet made from fresh mango and coconut milk.",
      id: "buddhaBowl_dessert" 
    },
    drink: {
      name: "Turmeric Golden Milk",
      description: "Warm golden milk with turmeric, ginger, and coconut milk - naturally anti-inflammatory.",
      id: "buddhaBowl_drink" 
    }
  },
  "grilled-chicken-breast": {
    name: "Grilled Chicken Breast",
    tags: ["meat", "mild"],
    appetizer: {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with parmesan cheese and creamy Caesar dressing.",
      id: "grilledChickenBreast_appetizer" 
    },
    mainCourse: {
      name: "Grilled Chicken Breast",
      description: "Succulent grilled chicken with herb marinade. Served with roasted potatoes and seasonal vegetables.",
      id: "grilledChickenBreast_main" 
    },
    dessert: {
      name: "Lemon Cheesecake",
      description: "Creamy cheesecake with bright lemon flavor and graham cracker crust.",
      id: "grilledChickenBreast_dessert" 
    },
    drink: {
      name: "Sparkling Lemon Water",
      description: "Crisp sparkling water with fresh lemon, lime, and a touch of honey.",
      id: "grilledChickenBreast_drink" 
    }
  },
  "mushroom-risotto": {
    name: "Mushroom Risotto",
    tags: ["vegetarian", "mild", "italian"],
    appetizer: {
      name: "Garlic Bread",
      description: "Toasted Italian bread with garlic, butter, and fresh parsley.",
      id: "mushroomRisotto_appetizer" 
    },
    mainCourse: {
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and parmesan. Finished with truffle oil.",
      id: "mushroomRisotto_main" 
    },
    dessert: {
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream.",
      id: "mushroomRisotto_dessert" 
    },
    drink: {
      name: "Italian White Wine",
      description: "Crisp Pinot Grigio from Northern Italy to complement the earthy risotto.",
      id: "mushroomRisotto_drink" 
    }
  },
  "thai-green-curry": {
    name: "Thai Green Curry",
    tags: ["vegan", "spicy"],
    appetizer: {
      name: "Thai Spring Rolls",
      description: "Fresh rice paper rolls filled with tofu, vegetables, and herbs. Served with peanut sauce.",
      id: "thaiGreenCurry_appetizer" 
    },
    mainCourse: {
      name: "Thai Green Curry",
      description: "Coconut milk, green peppers, and basil with tofu. Served over jasmine rice with a spicy kick.",
      id: "thaiGreenCurry_main" 
    },
    dessert: {
      name: "Mango Sticky Rice",
      description: "Sweet sticky rice with fresh mango and coconut cream - a beloved Thai classic.",
      id: "thaiGreenCurry_dessert" 
    },
    drink: {
      name: "Thai Iced Tea",
      description: "Traditional Thai iced tea with condensed milk and a subtle spice blend.",
      id: "thaiGreenCurry_drink" 
    }
  },
  "caprese-salad": {
    name: "Caprese Salad",
    tags: ["vegetarian", "not spicy"],
    appetizer: {
      name: "Bruschetta",
      description: "Toasted bread slices topped with tomato, garlic, basil, and olive oil.",
      id: "capreseSalad_appetizer" 
    },
    mainCourse: {
      name: "Caprese Salad",
      description: "Fresh tomatoes, mozzarella, and basil with balsamic reduction. A simple Italian favorite.",
      id: "capreseSalad_main" 
    },
    dessert: {
      name: "Panna Cotta with Berry Sauce",
      description: "Creamy Italian custard with fresh raspberry and strawberry coulis.",
      id: "capreseSalad_dessert" 
    },
    drink: {
      name: "Italian Sparkling Water",
      description: "Crisp San Pellegrino with a fresh lemon twist to cleanse the palate.",
      id: "capreseSalad_drink" 
    }
  },
  "salmon-fillet": {
    name: "Salmon Fillet",
    tags: ["meat", "mild"],
    appetizer: {
      name: "Smoked Salmon Canapés",
      description: "Crispy crackers topped with smoked salmon, cream cheese, and fresh dill.",
      id: "salmonFillet_appetizer" 
    },
    mainCourse: {
      name: "Salmon Fillet",
      description: "Pan-seared salmon with lemon and dill. Served with asparagus and wild rice.",
      id: "salmonFillet_main" 
    },
    dessert: {
      name: "Lemon Tart",
      description: "Buttery pastry tart filled with silky lemon custard and topped with powdered sugar.",
      id: "salmonFillet_dessert" 
    },
    drink: {
      name: "White Wine Sauvignon Blanc",
      description: "Crisp Sauvignon Blanc with citrus notes that pairs beautifully with salmon.",
      id: "salmonFillet_drink" 
    }
  },
  "lentil-soup": {
    name: "Lentil Soup",
    tags: ["vegan", "spicy"],
    appetizer: {
      name: "Spiced Naan Bread",
      description: "Warm flatbread infused with cumin and served with chili oil for dipping.",
      id: "lentilSoup_appetizer"
    },
    mainCourse: {
      name: "Lentil Soup",
      description: "Hearty red lentils with vegetable broth and spices. A warming and aromatic dish.",
      id: "lentilSoup_main"
    },
    dessert: {
      name: "Cardamom Cookies",
      description: "Fragrant cookies infused with cardamom spice, with a hint of ginger.",
      id: "lentilSoup_dessert"
    },
    drink: {
      name: "Spiced Chai Tea",
      description: "Aromatic chai tea with cardamom, cinnamon, ginger, and black pepper.",
      id: "lentilSoup_drink"
    }
  },
  "lamb-kebab": {
    name: "Lamb Kebab",
    tags: ["meat", "spicy", "middle eastern"],
    appetizer: {
      name: "Baba Ganoush",
      description: "Roasted eggplant dip with tahini, garlic, and lemon. Served with pita bread.",
      id: "lambKebab_appetizer"
    },
    mainCourse: {
      name: "Lamb Kebab",
      description: "Marinated lamb skewers with yogurt sauce. Served with grilled onions and tomatoes.",
      id: "lambKebab_main"
    },
    dessert: {
      name: "Turkish Delight",
      description: "Soft, fragrant Turkish delight dusted with powdered sugar and pistachio.",
      id: "lambKebab_dessert"
    },
    drink: {
      name: "Turkish Coffee",
      description: "Strong, aromatic Turkish coffee served in a traditional small cup with cardamom.",
      id: "lambKebab_drink"
    }
  },
  
  "pasta-carbonara": {
    name: "Pasta Carbonara",
    tags: ["meat", "mild", "italian"],
    appetizer: {
      name: "Bruschetta al Pomodoro",
      description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil.",
      id: "pastaCarbonara_appetizer"
    },
    mainCourse: {
      name: "Pasta Carbonara",
      description: "Creamy Roman pasta with bacon and pecorino cheese. A classic Italian comfort dish.",
      id: "pastaCarbonara_main"
    },
    dessert: {
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream.",
      id: "pastaCarbonara_dessert"
    },
    drink: {
      name: "Italian Red Wine",
      description: "Smooth Chianti wine to complement the rich, creamy pasta.",
      id: "pastaCarbonara_drink"
    }
  },
  "margherita-pizza": {
    name: "Margherita Pizza",
    tags: ["vegetarian", "mild", "italian"],
    appetizer: {
      name: "Antipasto Platter",
      description: "Selection of cured meats, cheeses, olives, and marinated vegetables.",
      id: "margheritaPizza_appetizer"
    },
    mainCourse: {
      name: "Margherita Pizza",
      description: "Classic Italian pizza with tomato, mozzarella, and fresh basil. Wood-fired crust.",
      id: "margheritaPizza_main"
    },
    dessert: {
      name: "Panna Cotta",
      description: "Silky Italian custard dessert topped with mixed berry compote.",
      id: "margheritaPizza_dessert"
    },
    drink: {
      name: "Aperol Spritz",
      description: "Light and refreshing Italian cocktail with Prosecco, Aperol, and a splash of soda.",
      id: "margheritaPizza_drink"
    }
  },

  "pad-thai": {
    name: "Pad Thai",
    tags: ["vegan", "spicy", "asian"],
    appetizer: {
      name: "Vietnamese Spring Rolls",
      description: "Fresh rice paper rolls with herbs, vegetables, and tofu. Served with peanut sauce.",
      id: "padThai_appetizer"
    },
    mainCourse: {
      name: "Pad Thai",
      description: "Stir-fried noodles with vegetables and tofu. Topped with peanuts and lime.",
      id: "padThai_main"
    },
    dessert: {
      name: "Mango Sticky Rice",
      description: "Sweet sticky rice with fresh mango and coconut cream.",
      id: "padThai_dessert"
    },
    drink: {
      name: "Thai Iced Tea",
      description: "Traditional Thai iced tea with condensed milk and spiced tea blend.",
      id: "padThai_drink"
    }
  },

  "beef-teriyaki": {
    name: "Beef Teriyaki",
    tags: ["meat", "mild", "asian"],
    appetizer: {
      name: "Edamame with Sea Salt",
      description: "Steamed young soybeans with sea salt and sesame seeds.",
      id: "beefTeriyaki_appetizer"
    },
    mainCourse: {
      name: "Beef Teriyaki",
      description: "Glazed beef with sesame and ginger. Served with steamed rice and vegetables.",
      id: "beefTeriyaki_main"
    },
    dessert: {
      name: "Green Tea Cheesecake",
      description: "Creamy cheesecake with matcha green tea flavor.",
      id: "beefTeriyaki_dessert"
    },
    drink: {
      name: "Sake",
      description: "Premium Japanese rice wine served warm or chilled.",
      id: "beefTeriyaki_drink"
    }
  },

  "coq-au-vin": {
    name: "Coq au Vin",
    tags: ["meat", "mild", "french"],
    appetizer: {
      name: "French Onion Soup",
      description: "Rich beef broth with caramelized onions and crusty bread topped with melted cheese.",
      id: "coqAuVin_appetizer"
    },
    mainCourse: {
      name: "Coq au Vin",
      description: "Chicken braised in red wine with mushrooms and pearl onions.",
      id: "coqAuVin_main"
    },
    dessert: {
      name: "Crème Brûlée",
      description: "Silky custard with a caramelized sugar crust.",
      id: "coqAuVin_dessert"
    },
    drink: {
      name: "Burgundy Red Wine",
      description: "Classic French Burgundy wine to pair with this traditional dish.",
      id: "coqAuVin_drink"
    }
  },

  "french-ratatouille": {
    name: "Ratatouille",
    tags: ["vegetarian", "mild", "french"],
    appetizer: {
      name: "Salade Niçoise",
      description: "Mixed greens with tomatoes, olives, and hard-boiled eggs.",
      id: "frenchRatatouille_appetizer"
    },
    mainCourse: {
      name: "Ratatouille",
      description: "Layered vegetable medley with eggplant, zucchini, and bell peppers in herbs.",
      id: "frenchRatatouille_main"
    },
    dessert: {
      name: "Macarons",
      description: "Delicate French almond meringue cookies in assorted flavors.",
      id: "frenchRatatouille_dessert"
    },
    drink: {
      name: "Rosé Wine",
      description: "Refreshing French Rosé wine from Provence.",
      id: "frenchRatatouille_drink"
    }
  },

  "paella-valenciana": {
    name: "Paella Valenciana",
    tags: ["meat", "mild", "spanish"],
    appetizer: {
      name: "Spanish Tapas Platter",
      description: "Selection of cured jamón, chorizo, patatas bravas, and marinated vegetables.",
      id: "paellaValenciana_appetizer"
    },
    mainCourse: {
      name: "Paella Valenciana",
      description: "Saffron-infused rice with chicken, rabbit, and beans.",
      id: "paellaValenciana_main"
    },
    dessert: {
      name: "Flan",
      description: "Spanish custard dessert with caramel sauce.",
      id: "paellaValenciana_dessert"
    },
    drink: {
      name: "Spanish Sangria",
      description: "Red wine punch with fresh fruit and cinnamon.",
      id: "paellaValenciana_drink"
    }
  },

  "spanish-gazpacho": {
    name: "Gazpacho",
    tags: ["vegetarian", "not spicy", "spanish"],
    appetizer: {
      name: "Pan con Tomate",
      description: "Toasted bread rubbed with tomato, garlic, and olive oil.",
      id: "spanishGazpacho_appetizer"
    },
    mainCourse: {
      name: "Gazpacho",
      description: "Refreshing cold tomato soup with cucumber and bell peppers.",
      id: "spanishGazpacho_main"
    },
    dessert: {
      name: "Churros con Chocolate",
      description: "Fried dough pastries served with thick Spanish hot chocolate.",
      id: "spanishGazpacho_dessert"
    },
    drink: {
      name: "Horchata",
      description: "Creamy sweet rice milk drink, perfect complement to gazpacho.",
      id: "spanishGazpacho_drink"
    }
  },

  "moussaka": {
    name: "Moussaka",
    tags: ["meat", "mild", "greek"],
    appetizer: {
      name: "Saganaki",
      description: "Golden fried halloumi cheese with lemon and oregano.",
      id: "moussaka_appetizer"
    },
    mainCourse: {
      name: "Moussaka",
      description: "Layered eggplant and spiced lamb with béchamel sauce.",
      id: "moussaka_main"
    },
    dessert: {
      name: "Baklava",
      description: "Phyllo pastry with nuts and honey syrup.",
      id: "moussaka_dessert"
    },
    drink: {
      name: "Greek Ouzo",
      description: "Traditional anise-flavored Greek spirit served with water.",
      id: "moussaka_drink"
    }
  },

  "greek-salad": {
    name: "Greek Salad",
    tags: ["vegetarian", "not spicy", "greek"],
    appetizer: {
      name: "Tzatziki with Pita",
      description: "Yogurt and cucumber dip served with warm pita bread.",
      id: "greekSalad_appetizer"
    },
    mainCourse: {
      name: "Greek Salad",
      description: "Fresh tomatoes, cucumbers, olives, and feta cheese with olive oil dressing.",
      id: "greekSalad_main"
    },
    dessert: {
      name: "Greek Yogurt with Honey",
      description: "Creamy Greek yogurt topped with honey and walnuts.",
      id: "greekSalad_dessert"
    },
    drink: {
      name: "Greek White Wine",
      description: "Crisp Assyrtiko wine from the Greek islands.",
      id: "greekSalad_drink"
    }
  },

  "butter-chicken": {
    name: "Butter Chicken",
    tags: ["meat", "spicy", "indian"],
    appetizer: {
      name: "Samosas",
      description: "Crispy fried pastries filled with spiced potatoes and peas.",
      id: "butterChicken_appetizer"
    },
    mainCourse: {
      name: "Butter Chicken",
      description: "Tender chicken in creamy tomato-based curry with warming spices.",
      id: "butterChicken_main"
    },
    dessert: {
      name: "Kheer",
      description: "Indian rice pudding with cardamom, raisins, and nuts.",
      id: "butterChicken_dessert"
    },
    drink: {
      name: "Mango Lassi",
      description: "Creamy yogurt drink with fresh mango and cardamom.",
      id: "butterChicken_drink"
    }
  },

  "paneer-tikka": {
    name: "Paneer Tikka",
    tags: ["vegetarian", "spicy", "indian"],
    appetizer: {
      name: "Pakora",
      description: "Vegetable fritters with gram flour and spices, served with chutney.",
      id: "paneerTikka_appetizer"
    },
    mainCourse: {
      name: "Paneer Tikka",
      description: "Spiced cottage cheese marinated in yogurt and grilled on skewers.",
      id: "paneerTikka_main"
    },
    dessert: {
      name: "Gulab Jamun",
      description: "Soft milk balls in warm cardamom-infused syrup.",
      id: "paneerTikka_dessert"
    },
    drink: {
      name: "Masala Chai",
      description: "Aromatic spiced tea with milk and warming spices.",
      id: "paneerTikka_drink"
    }
  }
};
