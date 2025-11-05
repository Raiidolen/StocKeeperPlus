import vine from '@vinejs/vine';

const foodIDSchema = vine.object({
    id: vine.number()
});

const foodToAddSchema = vine.object({
    label: vine.string().trim(),
    diet: vine.string().trim().optional(),
    nutriscore: vine.string().trim().maxLength(1).optional()
});

const foodToUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().trim().optional(),
    diet: vine.string().trim().optional(),
    nutriscore: vine.string().trim().maxLength(1).optional()
});


export const
    searchedFood = vine.compile(foodIDSchema),
    foodToAdd = vine.compile(foodToAddSchema),
    foodToUpdate = vine.compile(foodToUpdateSchema),
    foodToDelete = vine.compile(foodIDSchema);
