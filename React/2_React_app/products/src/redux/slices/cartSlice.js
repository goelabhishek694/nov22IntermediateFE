import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartQuantity: 0,
        cartProducts: [] //an array of object -> will store the product details . 
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartQuantity++;
            const productToBeAdded=action.payload;
            const requiredProduct=state.cartProducts.find(product=>product.id==productToBeAdded.id)
            //check if new prod -> add qty -> 1
            if(requiredProduct==undefined){
                productToBeAdded.indQty=1;
                state.cartProducts.push(productToBeAdded);
            }
            // else increment the qty by 1 
            else{
                requiredProduct.indQty++;
            }
        },
        removeFromCart: (state, action) => {
            const productToBeRemoved=action.payload;
            const productIdx=state.cartProducts.findIndex(product=>product.id==productToBeRemoved.id);
            if(productIdx!=-1) { //pr
                if(state.cartProducts[productIdx].indQty==1){
                    state.cartQuantity--;
                    state.cartProducts[productIdx].indQty--;
                    //remove from ui 
                    state.cartProducts.splice(productIdx,1)
                }
                else{
                    state.cartQuantity--;
                    state.cartProducts[productIdx].indQty--;
                }
            }
        }
    }
})
export const actions = cartSlice.actions;
export default cartSlice