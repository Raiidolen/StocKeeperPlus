/**
 * @swagger
 * components:
 *  schemas:
 *      FoodIDSchema:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *          required:
 *              - id
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      FoodToAddSchema:
 *          type: object
 *          properties:
 *              label:
 *                  type: string
 *              diet:
 *                  type: string
 *              nutriscore:
 *                  type: string
 *                  maxLength: 1
 *                  pattern: "^[A-Ea-e]$"
 *              measuringunit:
 *                  type: string
 *              barcode:
 *                  type: string
 *                  pattern: "^(?:\\d{8}|\\d{13})$"
 *          required:
 *              - label
 *              - measuringunit
 *              - barcode
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      FoodToUpdateSchema:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *              label:
 *                  type: string
 *              diet:
 *                  type: string
 *              nutriscore:
 *                  type: string
 *                  maxLength: 1
 *                  pattern: "^[A-Ea-e]$"
 *              measuringunit:
 *                  type: string
 *              barcode:
 *                  type: string
 *                  pattern: "^(?:\\d{8}|\\d{13})$"
 *              imagepath:
 *                  type: string
 *          required:
 *              - id
 *              - barcode
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      FoodBarcodeSchema:
 *          type: object
 *          properties:
 *              barcode:
 *                  type: string
 *                  pattern: "^(?:\\d{8}|\\d{13})$"
 *          required:
 *              - barcode
 */

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
    measuringunit: vine.string().trim(),
    barcode: vine.string().regex(/^(?:\d{8}|\d{13})$/).trim()
});

const foodToUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().trim().optional(),
    diet: vine.string().trim().optional(),
    nutriscore: vine.string().regex(new RegExp('^[A-Ea-e]+$')).trim().maxLength(1).optional(),
    measuringunit: vine.string().trim().optional(),
    barcode: vine.string().regex(/^(?:\d{8}|\d{13})$/).trim().optional(),
    imagepath: vine.string().trim().optional(),
});


export const
    searchedFood = vine.compile(foodIDSchema),
    searchedFoodByBarcode = vine.compile(FoodBarcodeSchema),
    foodToAdd = vine.compile(foodToAddSchema),
    foodToUpdate = vine.compile(foodToUpdateSchema),
    foodToDelete = vine.compile(foodIDSchema);
