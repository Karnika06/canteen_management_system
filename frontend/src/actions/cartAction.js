//add items to cart
export const AddItemsToCart = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

//remove item from cart
export const RemoveItemFromCart = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
}

//remove individual item
export const RemoveSingleItem = (item) => {
    return {
        type: "REMOVE_ONE",
        payload: item
    }
}

export const SetTotal = (price) => {
    return {
        type: "SET_TOTAL",
        payload: price
    }
}

//update item quantity
// export const UpdateQuantityOfItem = (item) => {
//     return {
//         type: "UPDATE_QTY",
//         payload: item
//     }
// }