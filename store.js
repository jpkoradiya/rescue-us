import create from "zustand";

export const useStore = create((set, get) => ({
    tips: [],
    addToTips: (item) => set((state) => (
        { tips: [...state.tips, item] }
    )),

    shoppingList: [],
    // functions
    addToShoppingList: (item) => set((state) => (
        { shoppingList: [...state.shoppingList, item] }
    )),
    removeFromShoppingList: (item) => set((state) => ({
        shoppingList: state.shoppingList.filter((slItem) => slItem !== item)
    })),
    toggleCompleted: (item) => {
        set((state) => ({
            shoppingList: state.shoppingList.map((el) =>
                el === item ? ({ ...el, completed: !el.completed }) : el
            )
        }))
    },

    pantryList: [],
    addToPantryList: (item) => set((state) => (
        { pantryList: [...state.pantryList, item] }
    )),

    // increase the quantity of an item in the pantry list
    increaseQuantity: (item) => set((state) => ({
        pantryList: state.pantryList.map((el) =>
            el.id === item.id ? ({ ...el, quantity: el.quantity + 1 }) : el
        )
    })),
    // decrease the quantity of an item in the pantry list
    decreaseQuantity: (item) => set((state) => ({
        pantryList: state.pantryList.map((el) =>
            el.id === item.id ? ({ ...el, quantity: el.quantity - 1 }) : el
        )
    })),
    // remove an item from the pantry list
    removeFromPantryList: (item) => set((state) => ({
        pantryList: state.pantryList.filter((el) => el.id !== item.id)
    })),
    // remove all items from the pantry list
    removeAllFromPantryList: () => set((state) => ({
        pantryList: []
    })),
    // remove all items from the shopping list
    removeAllFromShoppingList: () => set((state) => ({
        shoppingList: []
    })),
    // remove all items from the pantry list and the shopping list
    removeAll: () => set((state) => ({
        shoppingList: [],
        pantryList: []
    })),

}))