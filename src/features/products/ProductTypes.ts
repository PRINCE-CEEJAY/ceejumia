export type ProductType = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    status: "sold" | "avaiable",
}
export type StateType = {
    products: ProductType[]
}