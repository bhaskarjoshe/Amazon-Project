export const cart=[];



export function addToCart(productId){
let matchingItem;
cart.forEach((cartItem)=>{
if(cartItem.productId===productId){
matchingItem=cartItem;
}
});
if(matchingItem){
matchingItem.quantity+=selectedQuantity(productId);}
else{cart.push({
productId:productId,
quantity:selectedQuantity(productId)
});}
}

function selectedQuantity(productId){
return(parseInt(document.querySelector(`.js-quantity-selector-${productId}`).value))
}