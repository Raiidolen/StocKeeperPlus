import vine from "@vinejs/vine";

const IngredientAmountIDSchema = vine.object({
    recipe_id: vine.number().positive(),
    food_id: vine.number().positive()
});

const addOrUpdateIngredientAmountSchema = vine.object({
    recipe_id: vine.number().positive(),
    food_id: vine.number().positive(),
    quantity: vine.number().positive()
})

export const
    searchedIngredientAmount = vine.compile(IngredientAmountIDSchema),
    addOrUpdateIngredientAmount = vine.compile(addOrUpdateIngredientAmountSchema),
    deleteIngredientAmount = vine.compile(IngredientAmountIDSchema);