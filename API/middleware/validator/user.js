import vine from '@vinejs/vine';

const userIDSchema = vine.object({
    mail: vine.string().trim()
});

const userToAddSchema = vine.object({
    mail: vine.string().trim(),
    username: vine.string().trim(),
    password: vine.string().trim(),
    isadmin: vine.boolean()
});

const userToUpdateSchema = vine.object({
    mail: vine.string().trim(),
    username: vine.string().trim().optional(),
    password: vine.string().trim().optional(),
    isadmin: vine.boolean().optional()
});


export const
    searchedUser = vine.compile(userIDSchema),
    userToAdd = vine.compile(userToAddSchema),
    userToUpdate = vine.compile(userToUpdateSchema),
    userToDelete = vine.compile(userIDSchema);
