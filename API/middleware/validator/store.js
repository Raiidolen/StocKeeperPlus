import vine from '@vinejs/vine';

const storeIDSchema = vine.object({
    id: vine.number()
});

const storeToAddSchema = vine.object({
    label: vine.string().trim(),
    latitude: vine.number(),
    longitude: vine.number(),
});

const storeToUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().trim().optional(),
    latitude: vine.number().optional(),
    longitude: vine.number().optional(),
});

const storeToGetAllSchema = vine.object({});

const storeToGetInRangeSchema = vine.object({
    latitude: vine.number(),
    longitude: vine.number(),
    range: vine.number()
});

export const 
    storeToAdd = vine.compile(storeToAddSchema),
    storeToUpdate = vine.compile(storeToUpdateSchema),
    storeToDelete = vine.compile(storeIDSchema),
    storeToGet = vine.compile(storeIDSchema),
    storeToGetAll = vine.compile(storeToGetAllSchema),
    storeToGetInRange = vine.compile(storeToGetInRangeSchema);
