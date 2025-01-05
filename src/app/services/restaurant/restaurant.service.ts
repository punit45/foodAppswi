import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  restaurants = [
    {
      banner: "20% OFF UPTO ₹50",
      img: "../../assets/belgianWaffle.avif",
      title: "The Belgian Waffle Co.",
      rating: "4.6",
      time: "45-50 mins",
      food: "Waffle, Desserts, Ice Cream, Beverages",
      address: " SriNagar Colony, Hyderabad",
      menu: [
        {
          menu_category: 'Waffles',
          food_items: [
            {
              food_name: 'Classic Waffle',
              food_price: 150,
              food_description: 'A crispy waffle topped with syrup and fruits.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Classic+Waffle',
              nonveg: false
            },
            {
              food_name: 'Chocolate Waffle',
              food_price: 180,
              food_description: 'Waffle topped with melted chocolate and whipped cream.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chocolate+Waffle',
              nonveg: false
            }
          ]
        },
        {
          menu_category: 'Ice Cream',
          food_items: [
            {
              food_name: 'Vanilla Ice Cream',
              food_price: 120,
              food_description: 'Creamy vanilla ice cream served with a cherry on top.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Vanilla+Ice+Cream',
              nonveg: false
            },
            {
              food_name: 'Chocolate Ice Cream',
              food_price: 140,
              food_description: 'Rich chocolate ice cream with chocolate chunks.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chocolate+Ice+Cream',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "₹151 OFF ABOVE ₹349",
      img: "../../assets/AdilHotel.avif",
      title: "Adil Hotel",
      rating: "4.4",
      time: "45-50 mins",
      food: "North Indian, Biryani, Tandoori, Dosa, Idly",
      address: "Ashok Nagar, Hyderabad",
      menu: [
        {
          menu_category: 'Biryani',
          food_items: [
            {
              food_name: 'Chicken Biryani',
              food_price: 250,
              food_description: 'Aromatic basmati rice cooked with chicken and spices.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chicken+Biryani',
              nonveg: true
            },
            {
              food_name: 'Mutton Biryani',
              food_price: 280,
              food_description: 'Tender mutton cooked in basmati rice with spices.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Mutton+Biryani',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Tandoori',
          food_items: [
            {
              food_name: 'Tandoori Chicken',
              food_price: 220,
              food_description: 'Spicy tandoori chicken marinated in yogurt and spices.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Tandoori+Chicken',
              nonveg: true
            },
            {
              food_name: 'Paneer Tandoori',
              food_price: 200,
              food_description: 'Cottage cheese marinated and grilled in tandoor.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Paneer+Tandoori',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "50% OFF ON ALL ITEMS",
      img: "../../assets/greenveg.avif",
      title: "Green Veggie",
      rating: "4.7",
      time: "30-35 mins",
      food: "Vegetarian, Salad, Beverages",
      address: "Hi-Tech CIty, Hyderabad",
      menu: [
        {
          menu_category: 'Salads',
          food_items: [
            {
              food_name: 'Greek Salad',
              food_price: 150,
              food_description: 'Crisp vegetables and feta cheese in olive oil dressing.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Greek+Salad',
              nonveg: false
            },
            {
              food_name: 'Caesar Salad',
              food_price: 180,
              food_description: 'Crunchy lettuce, croutons, and Caesar dressing.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Caesar+Salad',
              nonveg: false
            }
          ]
        },
        {
          menu_category: 'Smoothies',
          food_items: [
            {
              food_name: 'Berry Smoothie',
              food_price: 120,
              food_description: 'A refreshing smoothie made with mixed berries.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Berry+Smoothie',
              nonveg: false
            },
            {
              food_name: 'Mango Smoothie',
              food_price: 130,
              food_description: 'Creamy mango smoothie with a tropical twist.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Mango+Smoothie',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "₹100 OFF ON YOUR FIRST ORDER",
      img: "../../assets/IndianCoffee.avif",
      title: "City Cafe",
      rating: "4.5",
      time: "20-30 mins",
      food: "Coffee, Sandwiches, Pastries, Desserts",
      address: "MindSpace, Hyderabad",
      menu: [
        {
          menu_category: 'Sandwiches',
          food_items: [
            {
              food_name: 'Cheese Sandwich',
              food_price: 120,
              food_description: 'Grilled cheese sandwich with tomatoes and lettuce.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Cheese+Sandwich',
              nonveg: false
            },
            {
              food_name: 'Chicken Sandwich',
              food_price: 160,
              food_description: 'Grilled chicken with cheese and veggies in a toasted sandwich.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chicken+Sandwich',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Pastries',
          food_items: [
            {
              food_name: 'Chocolate Pastry',
              food_price: 180,
              food_description: 'Rich chocolate pastry topped with whipped cream.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chocolate+Pastry',
              nonveg: false
            },
            {
              food_name: 'Fruit Pastry',
              food_price: 150,
              food_description: 'Fresh fruit pastry with a creamy topping.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Fruit+Pastry',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "Flat 30% OFF on All Orders",
      img: "../../assets/pizzaplace.avif",
      title: "The Pizza Place",
      rating: "4.8",
      time: "35-40 mins",
      food: "Pizza, Pasta, Beverages",
      address: "Kondapur, Hyderabad",
      menu: [
        {
          menu_category: 'Pizzas',
          food_items: [
            {
              food_name: 'Margherita Pizza',
              food_price: 250,
              food_description: 'Classic pizza with fresh mozzarella and basil.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Margherita+Pizza',
              nonveg: false
            },
            {
              food_name: 'Pepperoni Pizza',
              food_price: 300,
              food_description: 'Spicy pepperoni with mozzarella cheese.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Pepperoni+Pizza',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Pasta',
          food_items: [
            {
              food_name: 'Spaghetti Aglio e Olio',
              food_price: 180,
              food_description: 'Spaghetti in garlic and olive oil sauce.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Spaghetti+Aglio+e+Olio',
              nonveg: false
            },
            {
              food_name: 'Penne Arrabbiata',
              food_price: 200,
              food_description: 'Penne pasta with a spicy tomato sauce.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Penne+Arrabbiata',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "Buy 1 Get 1 Free",
      img: "../../assets/susshi.avif",
      title: "Sushi World",
      rating: "4.7",
      time: "40-45 mins",
      food: "Sushi, Japanese, Asian",
      address: "Shipla Park, Hyderabad",
      menu: [
        {
          menu_category: 'Sushi Rolls',
          food_items: [
            {
              food_name: 'California Roll',
              food_price: 350,
              food_description: 'Crab meat, avocado, and cucumber sushi.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=California+Roll',
              nonveg: true
            },
            {
              food_name: 'Veggie Roll',
              food_price: 300,
              food_description: 'Cucumber, avocado, and carrots wrapped in seaweed.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Veggie+Roll',
              nonveg: false
            }
          ]
        },
        {
          menu_category: 'Sides',
          food_items: [
            {
              food_name: 'Miso Soup',
              food_price: 80,
              food_description: 'Warm miso soup with tofu and seaweed.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Miso+Soup',
              nonveg: false
            },
            {
              food_name: 'Edamame',
              food_price: 120,
              food_description: 'Steamed edamame beans with sea salt.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Edamame',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "20% OFF on First Order",
      img: "../../assets/brew.avif",
      title: "Barista Brew",
      rating: "4.5",
      time: "20-30 mins",
      food: "Coffee, Cakes, Pastries",
      address: "Madhapur, Hyderabad",
      menu: [
        {
          menu_category: 'Coffee',
          food_items: [
            {
              food_name: 'Cappuccino',
              food_price: 150,
              food_description: 'Espresso with steamed milk and foam.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Cappuccino',
              nonveg: false
            },
            {
              food_name: 'Latte',
              food_price: 160,
              food_description: 'Espresso with steamed milk and a little foam.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Latte',
              nonveg: false
            }
          ]
        },
        {
          menu_category: 'Cakes',
          food_items: [
            {
              food_name: 'Chocolate Cake',
              food_price: 200,
              food_description: 'Moist chocolate cake with layers of cream.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chocolate+Cake',
              nonveg: false
            },
            {
              food_name: 'Red Velvet Cake',
              food_price: 220,
              food_description: 'Soft and fluffy red velvet cake with cream cheese frosting.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Red+Velvet+Cake',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "40% OFF on All Orders",
      img: "../../assets/burgerfry.avif",
      title: "Burger King",
      rating: "4.6",
      time: "20-30 mins",
      food: "Burgers, Fries, Beverages",
      address: "Manikonda, Hyderabad",
      menu: [
        {
          menu_category: 'Burgers',
          food_items: [
            {
              food_name: 'Whopper',
              food_price: 250,
              food_description: 'Grilled beef patty with lettuce, tomato, and special sauce.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Whopper',
              nonveg: true
            },
            {
              food_name: 'Veggie Burger',
              food_price: 180,
              food_description: 'Grilled veggie patty with fresh veggies and sauce.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Veggie+Burger',
              nonveg: false
            }
          ]
        },
        {
          menu_category: 'Fries',
          food_items: [
            {
              food_name: 'Regular Fries',
              food_price: 80,
              food_description: 'Golden crispy fries served with ketchup.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Regular+Fries',
              nonveg: false
            },
            {
              food_name: 'Cheese Fries',
              food_price: 120,
              food_description: 'Fries topped with melted cheese and seasoning.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Cheese+Fries',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "Flat 50% OFF on All Items",
      img: "../../assets/RaajBagh.avif",
      title: "Shake Shack",
      rating: "4.4",
      time: "15-25 mins",
      food: "Burgers, Milkshakes, Hot Dogs",
      address: "Bugum Bazaar, Hyderabad",
      menu: [
        {
          menu_category: 'Burgers',
          food_items: [
            {
              food_name: 'ShackBurger',
              food_price: 250,
              food_description: 'Cheese, lettuce, tomato, and ShackSauce on a fresh bun.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=ShackBurger',
              nonveg: true
            },
            {
              food_name: 'ShroomBurger',
              food_price: 240,
              food_description: 'Crispy mushroom patty with cheese and ShackSauce.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=ShroomBurger',
              nonveg: false
            }
          ]
        },
        {
          menu_category: 'Milkshakes',
          food_items: [
            {
              food_name: 'Chocolate Milkshake',
              food_price: 160,
              food_description: 'Rich chocolate milkshake topped with whipped cream.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chocolate+Milkshake',
              nonveg: false
            },
            {
              food_name: 'Vanilla Milkshake',
              food_price: 150,
              food_description: 'Creamy vanilla milkshake topped with whipped cream.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Vanilla+Milkshake',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "20% OFF for Students",
      img: "../../assets/kfc.avif",
      title: "KFC",
      rating: "4.7",
      time: "25-35 mins",
      food: "Fried Chicken, Burgers, Sides",
      address: "Kokapet, Hyderabad",
      menu: [
        {
          menu_category: 'Fried Chicken',
          food_items: [
            {
              food_name: 'Chicken Bucket',
              food_price: 350,
              food_description: 'A bucket of crispy fried chicken with fries.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chicken+Bucket',
              nonveg: true
            },
            {
              food_name: 'Popcorn Chicken',
              food_price: 150,
              food_description: 'Crispy chicken bites served with a dipping sauce.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Popcorn+Chicken',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Burgers',
          food_items: [
            {
              food_name: 'Zinger Burger',
              food_price: 180,
              food_description: 'Crispy fried chicken with fresh veggies and mayo.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Zinger+Burger',
              nonveg: true
            },
            {
              food_name: 'Veggie Burger',
              food_price: 140,
              food_description: 'Crispy veggie patty with fresh veggies and mayo.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Veggie+Burger',
              nonveg: false
            }
          ]
        }
      ]
    },
    {
      banner: "Free Drink with Every Meal",
      img: "../../assets/MoMo.avif",
      title: "Chinese Express",
      rating: "4.2",
      time: "30-40 mins",
      food: "Chinese, Asian, Noodles",
      address: "Rajiv Gandhi Road, Hyderabad",
      menu: [
        {
          menu_category: 'Noodles',
          food_items: [
            {
              food_name: 'Hakka Noodles',
              food_price: 150,
              food_description: 'Stir-fried noodles with vegetables.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Hakka+Noodles',
              nonveg: false
            },
            {
              food_name: 'Chicken Noodles',
              food_price: 180,
              food_description: 'Stir-fried noodles with chicken and vegetables.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chicken+Noodles',
              nonveg: true
            }
          ]
        },
        {
          menu_category: 'Rice',
          food_items: [
            {
              food_name: 'Veg Fried Rice',
              food_price: 130,
              food_description: 'Fragrant rice stir-fried with vegetables.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Veg+Fried+Rice',
              nonveg: false
            },
            {
              food_name: 'Chicken Fried Rice',
              food_price: 160,
              food_description: 'Fragrant rice stir-fried with chicken and vegetables.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Chicken+Fried+Rice',
              nonveg: true
            }
          ]
        }
      ]
    },
    {
      banner: "Free Side with Any Pizza",
      img: "../../assets/pasta.avif",
      title: "Pasta World",
      rating: "4.9",
      time: "30-40 mins",
      food: "Pasta, Salads, Pizza",
      address: "Gandhi Nagar, Hyderabad",
      menu: [
        {
          menu_category: 'Pasta',
          food_items: [
            {
              food_name: 'Fettuccine Alfredo',
              food_price: 200,
              food_description: 'Creamy alfredo sauce with fettuccine pasta.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Fettuccine+Alfredo',
              nonveg: false
            },
            {
              food_name: 'Baked Ziti',
              food_price: 220,
              food_description: 'Baked pasta with marinara sauce and melted cheese.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Baked+Ziti',
              nonveg: false
            }
          ]
        },
        {
          menu_category: 'Salads',
          food_items: [
            {
              food_name: 'Caesar Salad',
              food_price: 120,
              food_description: 'Crispy romaine lettuce with Caesar dressing.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Caesar+Salad',
              nonveg: false
            },
            {
              food_name: 'Greek Salad',
              food_price: 130,
              food_description: 'Tomatoes, cucumbers, olives, and feta cheese.',
              food_photo: 'https://via.placeholder.com/300x300.png?text=Greek+Salad',
              nonveg: false
            }
          ]
        }
      ]
    }

  ];
  
  

  getRestaurants() {
    return this.restaurants;
  }

  
  getTopRestaurants(limit: number) {
    return this.restaurants
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)) 
      .slice(0, limit);
  }

  private restaurantInfo:any;
  constructor() { }

  setRestaurantInfo(details:any){
    this.restaurantInfo=details;
    console.log(details);
  }

  getRestaurantInfo(){
    if (!this.restaurantInfo.title) {
      this.restaurantInfo = { ...this.restaurantInfo, title: "Taj Mahal" };
    }
    
    return this.restaurantInfo;
  }

  getRestuarantsByName(name:string[]){
    return this.restaurants.filter(
      restaurant=>name.includes(restaurant.title));
  }
}
