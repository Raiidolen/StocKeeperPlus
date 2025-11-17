import vine from "@vinejs/vine";

const ingredientAmountSchema = vine.object({
    recipe_id: vine.number().positive(),
    food_id: vine.number().positive()
});

export const
    searchedIngredientAmount = vine.compile(ingredientAmountSchema);