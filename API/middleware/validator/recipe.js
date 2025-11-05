import vine from "@vinejs/vine";

const recipeIDSchema = vine.object({
    id: vine.number().nonNegative(),
})

const addRecipeSchema = vine.object({
  label: vine.string().trim(),
  description: vine.string().trim(),
  caloricIntake: vine.number().positive(),
  timeToMake: vine.number().positive().optional(),
  ingredients: vine.array(
    vine.object({
      label: vine.string().trim(),
      diet: vine.string().optional(),
      nutriScore: vine.string().trim().maxLength(1).optional(),
      quantity: vine.number().min(1),
    })
  ).min(1),
});

export const
    searchedRecipe = vine.compile(recipeIDSchema),
    addRecipe = vine.compile(addRecipeSchema);