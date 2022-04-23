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