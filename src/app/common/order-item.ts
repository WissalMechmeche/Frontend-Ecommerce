import { CartItem } from 'src/app/common/cart-item';
export class OrderItem {
    product : number ;
    qty : number ;
    price : number ;
    
    constructor (cartItem : CartItem){
        this.qty = cartItem.quantity ;
        this.price = cartItem.unitPrice ;
        this.product = cartItem.id ;
    }
}
