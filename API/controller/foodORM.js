/**
 * @swagger
 * components:
 *  schemas:
 *      Food:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  example: 1
 *              label:
 *                  type: string
 *                  example: "Pâtes complètes"
 *              diet:
 *                  type: string
 *                  nullable: true
 *                  example: "vegetarien"
 *              nutriscore:
 *                  type: string
 *                  nullable: true
 *                  maxLength: 1
 *                  example: "A"
 *              measuringunit:
 *                  type: string
 *                  example: "gram"
 *              barcode:
 *                  type: string
 *                  example: "1234567890123"
 *              imagepath:
 *                  type: string
 *                  nullable: true
 *                  example: "/images/default.jpg"
 */
/**
 * @swagger
 * components:
 *  responses:
 *      getFood:
 *          description: the food
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Food'
 */
/**
 * @swagger
 * components:
 *  responses:
 *      getFoodByBarcode:
 *          description: the food found by barcode
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Food'
 */
/**
 * @swagger
 * components:
 *  responses:
 *      getAllFood:
 *          description: list of foods
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Food'
 */
/**
 * @swagger
 * components:
 *  responses:
 *      addFood:
 *          description: food created
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer                          
 */
/**
 * @swagger
 * components:
 *  responses:
 *      updateFood:
 *          description: food updated
 */
/**
 * @swagger
 * components:
 *  responses:
 *      deleteFood:
 *          description: food deleted
 */

import prisma from '../database/databaseORM.js';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';
import { errorHandeling } from '../utils/errorHandeling.js';

export const getFood = async (req, res)=> {
    try {
        const food = await prisma.food.findUnique({
            where: {
                id: req.val.id
            }
        });
        if(food){
            res.send(food);
        } else {
            return errorHandeling(res, { code: 'P2025' });
        }
    } catch (err) {
        errorHandeling(err, res);
    }
};

export const getFoodByBarcode = async (req, res)=> {
    try {
        const food = await prisma.food.findUnique({
            where: {
                barcode: req.val.barcode
            }
        });
        if(food){
            res.send(food);
        } else {
           return errorHandeling(res, { code: 'P2025' });
        }
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const getAllFood = async (_req, res)=> {
    try {
        const foods = await prisma.food.findMany({
            orderBy: {
                id: 'asc',
            }
        });
        res.send(foods);
    } catch (err) {
        return errorHandeling(res, err);
    }
}

export const addFood = async (req, res) => {
    try {
        const {label, diet, nutriscore, measuringunit, barcode} = req.val;

        let imagepath = '/images/default.jpg';

        if (barcode) {
            try {
                const offResponse = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
                const offData = await offResponse.json();
                const product = offData.product;

                if (product) {
                    const imageUrl = product.image_url || product.image_front_small_url;
                    if (imageUrl) {
                        const imageResponse = await fetch(imageUrl);
                        const arrayBuffer = await imageResponse.arrayBuffer();
                        const buffer = Buffer.from(arrayBuffer);

                        const extension = path.extname(imageUrl).split('?')[0] || '.jpg';
                        const fileName = `${uuidv4()}${extension}`;
                        const uploadDir = path.join('uploads', 'images');
                        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
                        const filePath = path.join(uploadDir, fileName);
                        fs.writeFileSync(filePath, buffer);
                        imagepath = `/images/${fileName}`;
                    }
                }
            } catch (err) {
                return errorHandeling(res, err);
            }
        }

        const id = await prisma.food.create({
            data: {
                label,
                diet,
                nutriscore,
                measuringunit,
                barcode,
                imagepath
            },
            select: {
                id: true
            }
        });
        res.status(201).send(id);
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const updateFood = async (req, res) => {
    try {
        const {id, label, diet, nutriscore, measuringunit, barcode, imagepath} = req.val;
        await prisma.food.update({
            data: {
                label,
                diet,
                nutriscore,
                measuringunit,
                barcode,
                imagepath
            },
            where: {
                id
            }
        });
        res.sendStatus(204);
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const deleteFood = async (req, res) => {
    try {
        const { id } = req.val;

        const food = await prisma.food.findUnique({
            where: { id },
            select: { imagepath: true }
        });

        if (!food) {
            return errorHandeling(res, { code: 'P2025' });
        }

        if (
            food.imagepath &&
            food.imagepath !== '/images/default.jpg'
        ) {
            const imageFilePath = path.join(
                'uploads',
                food.imagepath
            );

            if (fs.existsSync(imageFilePath)) {
                fs.unlinkSync(imageFilePath);
            }
        }

        await prisma.food.delete({
            where: { id }
        });

        res.sendStatus(204);
    } catch (err) {
        return errorHandeling(res, err);
    }
};