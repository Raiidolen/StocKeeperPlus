import vine from '@vinejs/vine';

const foodIDSchema = vine.object({
    id: vine.number()
});

const foodToAddSchema = vine.object({
    label: vine.string().trim(),
    expirationdate: vine.date(),
    quantity: vine.number().min(1),
    nutriscore: vine.string().maxLength(1),
    storagetype: vine.string(),
    diet: vine.string(),
    user_mail: vine.string()
});

const foodToUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().trim().optional(),
    expirationdate: vine.date().optional(),
    quantity: vine.number().min(1).optional(),
    nutriscore: vine.string().maxLength(1).optional(),
    storagetype: vine.string().optional(),
    diet: vine.string().optional(),
    user_mail: vine.string().optional()
});


export const
    searchedFood = vine.compile(foodIDSchema),
    foodToAdd = vine.compile(foodToAddSchema),
    foodToUpdate = vine.compile(foodToUpdateSchema),
    foodToDelete = vine.compile(foodIDSchema);
