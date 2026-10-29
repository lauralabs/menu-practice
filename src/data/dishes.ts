import type { Dish } from "../types/dish"



export const dishes: Dish[] = [
    {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread with tomato, basil and olive oil.",
        price: 7.5,
        category: "Starter"
        
    },
    {
        id: 2,
        name: "Margherita Pizza",
        description: "Tomato sauce, mozzarella and fresh basil.",
        price: 12.5,
        category: "Main",
    },
    {
        id: 3,
        name: "Mushroom Risotto",
        description: "Creamy risotto with mushrooms and Parmesan.",
        price: 14,
        category: "Main",
    },
    {
        id: 4,
        name: "Tiramisu",
        description: "Coffee-soaked biscuits with mascarpone cream.",
        price: 6.5,
        category: "Dessert",
    }
]