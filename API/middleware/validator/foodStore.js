import vine from '@vinejs/vine';

const foodStoreIDSchema = vine.object({
    food_id: vine.number(),
    store_id: vine.number()
});

const foodStoreToAddSchema = vine.object({
    food_id: vine.number(),
    store_id: vine.number(),
    price: vine.number().min(0)
});

const foodStoreToUpdateSchema = vine.object({
    food_id: vine.number(),
    store_id: vine.number(),
    price: vine.number().min(0)
});

export const
    foodStoreToAdd = vine.compile(foodStoreToAddSchema),
    foodStoreToUpdate = vine.compile(foodStoreToUpdateSchema),
    foodStoreToGet = vine.compile(foodStoreIDSchema),
    foodStoreToDelete = vine.compile(foodStoreIDSchema);