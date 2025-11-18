import vine from "@vinejs/vine";

const getIngredientAmountSchema = vine.object({
    recipe_id: vine.number().positive(),
    food_id: vine.number().positive()
});

const addOrUpdateIngredientAmountSchema = vine.object({
    recipe_id: vine.number().positive(),
    food_id: vine.number().positive(),
    quantity: vine.number().positive()
})

export const
    searchedIngredientAmount = vine.compile(getIngredientAmountSchema),
    addOrUpdateIngredientAmount = vine.compile(addOrUpdateIngredientAmountSchema);