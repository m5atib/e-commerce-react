export type ProductData = {
    id:number,
    category:string,
    productName:string,
    productPrice : number
    description:string,
    isOff :boolean,
    offPercentage?:number,
    productImage: string,
    isAvailable : boolean,
    productImageList : (typeof import("*.png"))[]
}