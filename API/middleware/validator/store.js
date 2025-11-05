import vine from '@vinejs/vine';

const storeIDSchema = vine.object({
    id: vine.number()
});

const storeToAddSchema = vine.object({
    name: vine.string().trim(),
    latitude: vine.number(),
    longitude: vine.number(),
    address: vine.string().trim()
});

const storeToUpdateSchema = vine.object({
    id: vine.number(),
    name: vine.string().trim(),
    latitude: vine.number(),
    longitude: vine.number(),
    address: vine.string().trim()
});

const storeToGetAllSchema = vine.object({});

const storeToGetInRangeSchema = vine.object({
    minLatitude: vine.number().min(-90).max(90),
    maxLatitude: vine.number().min(-90).max(90),
    minLongitude: vine.number().min(-180).max(180),
    maxLongitude: vine.number().min(-180).max(180)
});// TODO because it's been regenerated automatically, we need to add validation to ensure min < max

export const 
    storeToAdd = vine.compile(storeToAddSchema),
    storeToUpdate = vine.compile(storeToUpdateSchema),
    storeToDelete = vine.compile(storeIDSchema),
    storeToGet = vine.compile(storeIDSchema),
    storeToGetAll = vine.compile(storeToGetAllSchema),
    storeToGetInRange = vine.compile(storeToGetInRangeSchema);
