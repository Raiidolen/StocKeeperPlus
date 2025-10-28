import vine from '@vinejs/vine';

const productIDSchema = vine.object({
    id: vine.number()
});

const productToAddSchema = vine.object({
    label: vine.string().trim(),
    expirationDate: vine.date(),
    quantity: vine.number(),
    nutriScore: vine.string().maxLength(1),
    storageType: vine.string(),
    diet: vine.string(),
});

const productToUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().trim().optionnal(),
    expirationDate: vine.date().optionnal(),
    quantity: vine.number().optionnal(),
    nutriScore: vine.string().maxLength(1).optionnal(),
    storageType: vine.string().optionnal(),
    diet: vine.string().optionnal(),
});


export const
    searchedProduct = vine.compile(productIDSchema),
    productToAdd = vine.compile(productToAddSchema),
    productToUpdate = vine.compile(productToUpdateSchema),
    productToDelete = vine.compile(productIDSchema);
