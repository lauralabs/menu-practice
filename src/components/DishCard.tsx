import type {Dish} from "../types/dish"

type DishCardProps = {
    dish: Dish
}


export default function DishCard ({dish}: DishCardProps){
    return(
        <article className="dish-card">
            <span className="dish-category" >{dish.category}</span>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p className="dish-price">{dish.price.toFixed(2)} €</p>
        </article>

    )
}