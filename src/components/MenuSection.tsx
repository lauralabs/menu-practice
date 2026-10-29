import {dishes} from "../data/dishes"
import DishCard from "./DishCard"


export default function MenuSection(){



    return(

        <section className="menu-section">
            <h2>Our Menu</h2>

            <div className="menu-grip">
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish = {dish} />

                ))}
            </div>
        </section>



    )
}