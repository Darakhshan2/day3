import { Product } from "../components/type";

export const AddtoCart = (products:Product)=> {
    const cart:Product[] = JSON.parse(localStorage.getItem('cart')|| '[]') // used parse for save item in local storage

    const existingProductIndex = cart.findIndex(item => item._id === products._id) // index find kr rhy hen products parameter sy aya hai

    if (existingProductIndex > -1) { // totle product mn sy aik - minus krwayaen gy
        cart[existingProductIndex].inventory +=1
    } else (
        cart.push({
            ...products,inventory : 1
        })
    )
    localStorage.setItem("cart" , JSON.stringify(cart))
}

export const removeItem = (productId:string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') ||  '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem("cart" , JSON.stringify(cart))
}

export const updatecartQuantity = (productId:string , quantity:number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || "[]")
    const productIndex = cart.findIndex(item => item._id === productId)

    if (productIndex > -1) { // totle product mn sy aik - minus krwayaen gy
        cart[productIndex].inventory = quantity
        localStorage.setItem("cart" , JSON.stringify(cart))
    }
}

export const GetCartItem = () : Product[]   => {
    return JSON.parse(localStorage.getItem('cart')||"[]")
}