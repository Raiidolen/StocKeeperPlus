import vine from "@vinejs/vine";

const recipeIDSchema = vine.object({
    id: vine.number().nonNegative(),
})

const addRecipeSchema = vine.object({
  label: vine.string().trim(),
  description: vine.string().trim().optional(),
  caloricintake: vine.number().positive().optional(),
  nbeaters: vine.number().positive().optional(),
  timetomake: vine.number().positive().optional(),
  ingredients: vine.array(
    vine.object({
      label: vine.string().trim(),
      diet: vine.string().optional(),
      nutriscore: vine.string().trim().maxLength(1).optional(),
      quantity: vine.number().min(1),
    })
  )
});

export const
    searchedRecipe = vine.compile(recipeIDSchema),
    addRecipe = vine.compile(addRecipeSchema);