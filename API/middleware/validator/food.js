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
    label: vine.string().trim().optionnal(),
    expirationDate: vine.date().optionnal(),
    quantity: vine.number().optionnal().min(1),
    nutriScore: vine.string().maxLength(1).optionnal(),
    storageType: vine.string().optionnal(),
    diet: vine.string().optionnal(),
});


export const
    searchedFood = vine.compile(foodIDSchema),
    foodToAdd = vine.compile(foodToAddSchema),
    foodToUpdate = vine.compile(foodToUpdateSchema),
    foodToDelete = vine.compile(foodIDSchema);
