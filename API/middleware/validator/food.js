import vine from '@vinejs/vine';

const foodIDSchema = vine.object({
    id: vine.number()
});

const foodToAddSchema = vine.object({
    label: vine.string().trim(),
    expirationDate: vine.date(),
    quantity: vine.number().min(1),
    nutriScore: vine.string().maxLength(1),
    storageType: vine.string(),
    diet: vine.string(),
});

const foodToUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().trim().optional(),
    expirationDate: vine.date().optional(),
    quantity: vine.number().optional(),
    nutriScore: vine.string().maxLength(1).optional(),
    storageType: vine.string().optional(),
    diet: vine.string().optional(),
});


export const
    searchedFood = vine.compile(foodIDSchema),
    foodToAdd = vine.compile(foodToAddSchema),
    foodToUpdate = vine.compile(foodToUpdateSchema),
    foodToDelete = vine.compile(foodIDSchema);
