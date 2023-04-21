const sequelize = require('./connection');
const { Product, User, Cart } = require('../models');

const snackums = [
    {
        "item_name": "Takis Fuego",
        "price_usd": 1.49,
        "country": "mexico",
        "description": "Spicy rolled tortilla chips with a fiery flavor that's hard to resist."
    },
    {
        "item_name": "Sabritones",
        "price_usd": 1.99,
        "country": "mexico",
        "description": "Puffed wheat snacks with a zesty chili and lime flavor."
    },
    {
        "item_name": "Chamoy-covered apples",
        "price_usd": 2.99,
        "country": "mexico",
        "description": "Tart green apples covered in a sweet and tangy chamoy sauce."
    },
    {
        "item_name": "Tajin Seasoning",
        "price_usd": 3.99,
        "country": "mexico",
        "description": "A zesty and tangy seasoning made with chili powder, lime, and salt."
    },
    {
        "item_name": "Churros",
        "price_usd": 2.49,
        "country": "mexico",
        "description": "Crispy fried dough coated in cinnamon and sugar, perfect for dipping in hot chocolate or caramel sauce."
    },
    {
        "item_name": "Elote (Mexican corn on the cob)",
        "price_usd": 3.99,
        "country": "mexico",
        "description": "Grilled corn on the cob brushed with mayonnaise, cotija cheese, and chili powder."
    },
    {
        "item_name": "Mango con chile y limon",
        "price_usd": 2.99,
        "country": "mexico",
        "description": "Fresh mango slices dusted with chili powder and lime juice for a sweet and spicy snack."
    },
    {
        "item_name": "Chamoy Gummies",
        "price_usd": 1.99,
        "country": "mexico",
        "description": "Chewy gummy candies with a sweet and tangy chamoy flavor."
    },
    {
        "item_name": "Flautas",
        "price_usd": 4.99,
        "country": "mexico",
        "description": "Rolled tortillas filled with seasoned chicken or beef and deep-fried until crispy and golden brown."
    },
    {
        "item_name": "Dulce de Leche-filled Wafers",
        "price_usd": 3.49,
        "country": "mexico",
        "description": "Thin and crispy wafer cookies filled with sweet and creamy dulce de leche."
    },
    {
        "item_name": "Mexican Hot Chocolate",
        "price_usd": 5.99,
        "country": "mexico",
        "description": "Rich and creamy hot chocolate flavored with cinnamon, vanilla, and a touch of chili powder."
    },
    {
        "item_name": "Mexican-style roasted peanuts",
        "price_usd": 1.99,
        "country": "mexico",
        "description": "Roasted peanuts with a spicy and smoky seasoning blend."
    },
    {
        "item_name": "Quesadillas",
        "price_usd": 4.49,
        "country": "mexico",
        "description": "Grilled flour tortillas filled with melted cheese and your choice of meat or vegetables."
    },
    {
        "item_name": "Chicharrones",
        "price_usd": 2.99,
        "country": "mexico",
        "description": "Crispy pork rinds seasoned with chili powder and lime juice."
    },
    {
        "item_name": "Salsa and chips",
        "price_usd": 3.99,
        "country": "mexico",
        "description": "Freshly made salsa with diced tomatoes, onions, cilantro, and jalapeño peppers served with crispy tortilla chips."
    },
    {
        "item_name": "Pocky",
        "price_usd": 3.99,
        "country": "japan",
        "description": "A thin, crunchy biscuit stick coated in various flavors of chocolate, such as strawberry, matcha, and chocolate."
    },
    {
        "item_name": "KitKat",
        "price_usd": 4.99,
        "country": "japan",
        "description": "A chocolate-covered wafer biscuit that comes in a variety of unique and unusual flavors, such as green tea, sake, and wasabi."
    },
    {
        "item_name": "Calbee Jagabee Potato Sticks",
        "price_usd": 2.99,
        "country": "japan",
        "description": "Crispy, crunchy potato sticks that come in a variety of flavors, such as butter soy sauce and honey butter."
    },
    {
        "item_name": "Umaibo",
        "price_usd": 1.99,
        "country": "japan",
        "description": "A puffed corn snack that comes in various flavors, such as cheese, teriyaki burger, and corn potage."
    },
    {
        "item_name": "Hello Panda",
        "price_usd": 3.49,
        "country": "japan",
        "description": "A crunchy, bite-sized biscuit with a creamy chocolate or strawberry filling that's shaped like a panda face."
    },
    {
        "item_name": "Dagashi Snacks",
        "price_usd": 5.99,
        "country": "japan",
        "description": "A variety of traditional Japanese sweets and snacks, such as senbei rice crackers, mochi, and hi-chew candy."
    },
    {
        "item_name": "Pretz",
        "price_usd": 2.99,
        "country": "japan",
        "description": "A savory biscuit stick that comes in various flavors, such as pizza, salad, and garlic."
    },
    {
        "item_name": "Lotte Koala's March",
        "price_usd": 3.49,
        "country": "japan",
        "description": "A biscuit snack with a creamy chocolate or strawberry filling that's shaped like a koala face."
    },
    {
        "item_name": "Dorayaki",
        "price_usd": 6.99,
        "country": "japan",
        "description": "A traditional Japanese sweet made of two pancake-like layers with a sweet red bean filling in the center."
    },
    {
        "item_name": "Onigiri",
        "price_usd": 4.99,
        "country": "japan",
        "description": "A triangular-shaped rice ball wrapped in seaweed and filled with various ingredients, such as salmon, tuna, or pickled plum."
    },
    {
        "item_name": "Yatsuhashi",
        "price_usd": 7.99,
        "country": "japan",
        "description": "A traditional Kyoto sweet made of mochi (sticky rice cake) filled with sweet red bean paste and flavored with cinnamon."
    },
    {
        "item_name": "Sakura Mochi",
        "price_usd": 6.99,
        "country": "japan",
        "description": "A traditional Japanese sweet made of mochi (sticky rice cake) filled with sweet red bean paste and wrapped in a pickled cherry blossom leaf."
    },
    {
        "item_name": "Ramune",
        "price_usd": 2.99,
        "country": "japan",
        "description": "A carbonated soft drink that comes in a unique glass bottle sealed with a marble, with flavors like original, strawberry, and melon."
    },
    {
        "item_name": "Haribo Goldbears",
        "price_usd": 1.99,
        "country": "germany",
        "description": "A classic gummy candy that comes in a variety of fruity flavors."
      },
      {
        "item_name": "Ritter Sport Milk Chocolate",
        "price_usd": 2.49,
        "country": "germany",
        "description": "Creamy milk chocolate with a snap of the distinctive square shape."
      },
      {
        "item_name": "Bahlsen Leibniz Cookies",
        "price_usd": 3.99,
        "country": "germany",
        "description": "Buttery, crispy biscuits that are perfect for snacking or dipping in coffee."
      },
      {
        "item_name": "Lorenz Crunchips",
        "price_usd": 1.79,
        "country": "germany",
        "description": "Crispy, flavorful potato chips in a variety of different flavors."
      },
      {
        "item_name": "Milka Chocolate Bar",
        "price_usd": 1.99,
        "country": "germany",
        "description": "Creamy milk chocolate made with Alpine milk and a variety of other delicious flavors."
      },
      {
        "item_name": "Knoppers Wafers",
        "price_usd": 2.99,
        "country": "germany",
        "description": "Crispy wafers with a creamy nougat filling and a milk chocolate coating."
      },
      {
        "item_name": "Manner Wafers",
        "price_usd": 2.49,
        "country": "germany",
        "description": "Thin and crispy wafer cookies with a layer of hazelnut cream filling."
      },
      {
        "item_name": "Kinder Chocolate",
        "price_usd": 1.99,
        "country": "germany",
        "description": "Smooth milk chocolate with a creamy milk filling."
      },
      {
        "item_name": "Hanuta Hazelnut Sandwich",
        "price_usd": 2.99,
        "country": "germany",
        "description": "A delicious hazelnut cream filling between two crispy wafer layers."
      },
      {
        "item_name": "Bahlsen Hit Cocoa Cream Sandwich Cookies",
        "price_usd": 3.49,
        "country": "germany",
        "description": "Soft cocoa cookies with a rich chocolate filling."
      },
      {
        "item_name": "Maggi Seasoning",
        "price_usd": 3.99,
        "country": "germany",
        "description": "A versatile seasoning sauce that can be used in a variety of dishes."
      },
      {
        "item_name": "Milka Alpine Milk Chocolate with Whole Hazelnuts",
        "price_usd": 2.99,
        "country": "germany",
        "description": "Creamy milk chocolate with whole hazelnuts."
      },
      {
        "item_name": "Milka Choco Wafer",
        "price_usd": 1.99,
        "country": "germany",
        "description": "Crunchy wafer cookies with a milk chocolate coating."
      },
      {
        "item_name": "Paprika Chips",
        "price_usd": 1.49,
        "country": "germany",
        "description": "Savory potato chips with a bold paprika flavor."
      },
      {
        "item_name": "Maultaschen",
        "price_usd": 4.99,
        "country": "germany",
        "description": "Traditional German pasta pockets filled with ground meat, spinach, and spices."
      },
      {
        "item_name": "Stollen",
        "price_usd": 5.99,
        "country": "germany",
        "description": "A traditional German fruitcake made with dried fruit, nuts, and spices."
      },
      {
        "item_name": "Schneeballen",
        "price_usd": 3.99,
        "country": "germany",
        "description": "A sweet pastry made from shortcrust dough that is tasty"
      },
      {
        "item_name": "Tim Tams",
        "price_usd": 3.99,
        "country": "australia",
        "description": "A classic Australian chocolate biscuit with a creamy filling sandwiched between two crunchy chocolate biscuits."
      },
      {
        "item_name": "Shapes",
        "price_usd": 2.99,
        "country": "australia",
        "description": "Savory baked crackers in a variety of flavors, such as BBQ, pizza, and cheese and bacon."
      },
      {
        "item_name": "Caramello Koalas",
        "price_usd": 1.99,
        "country": "australia",
        "description": "Milk chocolate koala-shaped treats with a soft caramel center."
      },
      {
        "item_name": "Milo",
        "price_usd": 7.99,
        "country": "australia",
        "description": "A chocolate and malt powder mix that can be enjoyed hot or cold as a refreshing beverage or added to desserts."
      },
      {
        "item_name": "Vegemite",
        "price_usd": 4.99,
        "country": "australia",
        "description": "A salty and savory spread made from yeast extract, perfect on toast or sandwiches."
      },
      {
        "item_name": "Freddo Frogs",
        "price_usd": 1.49,
        "country": "australia",
        "description": "Milk chocolate frog-shaped treats that are a childhood favorite in Australia."
      },
      {
        "item_name": "Allen's Snakes",
        "price_usd": 2.99,
        "country": "australia",
        "description": "Chewy gummy candies in the shape of snakes with fruity flavors like raspberry and blackcurrant."
      },
      {
        "item_name": "Red Rock Deli Chips",
        "price_usd": 3.99,
        "country": "australia",
        "description": "Gourmet-style potato chips with unique flavors like sweet chili and sour cream, honey soy chicken, and sea salt."
      },
      {
        "item_name": "Arnott's Tiny Teddy Biscuits",
        "price_usd": 1.99,
        "country": "australia",
        "description": "Cute bear-shaped biscuits in a variety of flavors, such as honey and chocolate."
      },
      {
        "item_name": "Fantales",
        "price_usd": 2.49,
        "country": "australia",
        "description": "Caramel-filled chocolates with trivia questions on the wrapper, a favorite among moviegoers in Australia."
      },
      {
        "item_name": "Smith's Chips",
        "price_usd": 2.99,
        "country": "australia",
        "description": "Thin and crispy potato chips in classic flavors like salt and vinegar, chicken, and BBQ."
      },
      {
        "item_name": "Chicos",
        "price_usd": 1.99,
        "country": "australia",
        "description": "Chewy black jelly babies with a unique licorice flavor that's popular in Australia."
      },
      {
        "item_name": "Minties",
        "price_usd": 2.99,
        "country": "australia",
        "description": "Chewy mint-flavored candies that have been a favorite in Australia for over 90 years."
      },
      {
        "item_name": "Cheezels",
        "price_usd": 2.99,
        "country": "australia",
        "description": "Ring-shaped corn snacks coated in cheese-flavored powder, a classic snack in Australia."
      },
      {
        "item_name": "Redskin Lollies",
        "price_usd": 1.99,
        "country": "australia",
        "description": "Chewy raspberry-flavored candies that are a childhood favorite in Australia."
      }
    ]
sequelize.sync({ force: true }).then(() =>
Product.bulkCreate(snackums));


