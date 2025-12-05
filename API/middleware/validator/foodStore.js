import vine from '@vinejs/vine';

const foodStoreIDSchema = vine.object({
    food: vine.number(),
    store: vine.number()
});

const foodStoreToAddSchema = vine.object({
    food: vine.number(),
    store: vine.number(),
    quantity: vine.number().min(0),
    price: vine.number().min(0)
});

const foodStoreToUpdateSchema = vine.object({
    food: vine.number(),
    store: vine.number(),
    quantity: vine.number().min(0),
    price: vine.number().min(0)
});

export const
    foodStoreToAdd = vine.compile(foodStoreToAddSchema),
    foodStoreToUpdate = vine.compile(foodStoreToUpdateSchema),
    foodStoreToGet = vine.compile(foodStoreIDSchema),
    foodStoreToDelete = vine.compile(foodStoreIDSchema);