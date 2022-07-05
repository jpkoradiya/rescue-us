import create from "zustand";

export const useStore = create(set => ({
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
    ))

}))