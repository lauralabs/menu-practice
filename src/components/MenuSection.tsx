import { useState } from "react"
import {dishes} from "../data/dishes"
import DishCard from "./DishCard"



type Category = "All" | "Starter" | "Main" | "Dessert"


export default function MenuSection(){

    const[selectedCategory, setSelectedCategory] = useState<Category>("All")

    const filteredDishes =
        selectedCategory === "All"
            ? dishes
            : dishes.filter(
                (dish) => dish.category === selectedCategory

            )



    return(

        <section className="menu-section">
            <h2>Our Menu</h2>
            <div className="menu-filters">
                {(["All","Starter", "Main", "Dessert"] as const).map(
                    (category) => (
                        <button
                        key={category}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}          
                        >
                            {category}
                        </button>
                    )

                )

                }


            </div>

            <div className="menu-grip">
                {filteredDishes.map((dish) => (
                    <DishCard key={dish.id} dish = {dish} />

                ))}
            </div>
        </section>



    )
}