export type Dish = {
    id: number,
    name: string,
    description: string,
    price: number,
    category: "Starter" | "Main" | "Dessert"
}