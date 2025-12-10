import vine from '@vinejs/vine';

const foodIDSchema = vine.object({
    id: vine.number()
});

const FoodBarcodeSchema = vine.object({
    barcode: vine.string().regex(/^(?:\d{8}|\d{13})$/).trim()
});

const foodToAddSchema = vine.object({
    label: vine.string().trim(),
    diet: vine.string().trim().optional(),
    nutriscore: vine.string().regex(new RegExp('^[A-Ea-e]+$')).trim().maxLength(1).optional(),
    measuringunit: vine.string().trim().optional(),
    barcode: vine.string().regex(/^(?:\d{8}|\d{13})$/).trim()
});

const foodToUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().trim().optional(),
    diet: vine.string().trim().optional(),
    nutriscore: vine.string().regex(new RegExp('^[A-Ea-e]+$')).trim().maxLength(1).optional(),
    measuringunit: vine.string().trim().optional(),
    barcode: vine.string().regex(/^(?:\d{8}|\d{13})$/).trim()
});


export const
    searchedFood = vine.compile(foodIDSchema),
    searchedFoodByBarcode = vine.compile(FoodBarcodeSchema),
    foodToAdd = vine.compile(foodToAddSchema),
    foodToUpdate = vine.compile(foodToUpdateSchema),
    foodToDelete = vine.compile(foodIDSchema);
