import vine from '@vinejs/vine';

const foodUserIDSchema = vine.object({
    food: vine.number(),
    user_mail: vine.string().trim()
});

const foodUserToAddSchema = vine.object({
    food: vine.number(),
    user_mail: vine.string().trim(),
    quantity: vine.number().min(1),
    storagetype: vine.string().trim().optional(),
    expirationdate: vine.date().optional()
});

const foodUserToUpdateSchema = vine.object({
    food: vine.number(),
    user_mail: vine.string().trim(),
    quantity: vine.number().min(1).optional(),
    storagetype: vine.string().trim().optional(),
    expirationdate: vine.date().optional()
});

const foodUserToAddMeSchema = vine.object({
    food: vine.number(), 
    quantity: vine.number().min(1),
    storagetype: vine.string().trim().optional(),
    expirationdate: vine.date().optional()
});

const foodUserToUpdateMeSchema = vine.object({
    food: vine.number(), 
    quantity: vine.number().min(1).optional(),
    storagetype: vine.string().trim().optional(),
    expirationdate: vine.date().optional()
});

const foodUserToDeleteMeSchema = vine.object({
    food: vine.number() 
});

export const
    searchedFoodUser = vine.compile(foodUserIDSchema),
    foodUserToAdd = vine.compile(foodUserToAddSchema),
    foodUserToUpdate = vine.compile(foodUserToUpdateSchema),
    foodUserToDelete = vine.compile(foodUserIDSchema),
    foodUserToAddMe = vine.compile(foodUserToAddMeSchema),
    foodUserToUpdateMe = vine.compile(foodUserToUpdateMeSchema),
    foodUserToDeleteMe = vine.compile(foodUserToDeleteMeSchema);
