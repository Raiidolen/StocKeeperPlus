import vine from "@vinejs/vine";

const recipeIDSchema = vine.object({
    id: vine.number().nonNegative()
})

export const
    searchedRecipe = vine.compile(recipeIDSchema);