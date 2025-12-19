import prisma from '../database/databaseORM.js';
import { errorHandeling } from '../utils/errorHandeling.js';

const formatDate = (date) => date ? date.toISOString().split("T")[0] : null;

export const getFoodUser = async (req, res)=> {
    try {
        const {food, user_mail} = req.val;
        const foodUser = await prisma.fooduser.findUnique({
            where: {
                food_user_mail: {
                    food: food,
                    user_mail: user_mail
                }
            }
        });
        if(foodUser){
            res.send({
                ...foodUser,
                expirationdate: formatDate(foodUser.expirationdate)
            });
        } else {
            return errorHandeling(res, { code: 'P2025' });
        }
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const getAllFoodUser = async (_req, res)=> {
    try {
        const foodsUser = await prisma.fooduser.findMany({
            orderBy: [{
                user_mail: 'asc',
            },
            {
                food: 'asc'
            }
            ]
        });

        res.send(
            foodsUser.map(f => ({
                ...f,
                expirationdate: formatDate(f.expirationdate)
            }))
        );

    } catch (err) {
        return errorHandeling(res, err);
    }
}

export const addFoodUser = async (req, res) => {
    try {
        const {food, user_mail, quantity, storagetype, expirationdate} = req.val;
        const exp = expirationdate ? new Date(expirationdate) : null;
        if(exp) exp.setHours(12, 0, 0, 0);
        const foodUser = await prisma.fooduser.create({
            data: {
                food: food,
                user_mail,
                quantity,
                storagetype,
                expirationdate: exp
            },
            select: {
                food: true,
                user_mail: true
            }
        });
        res.status(201).send({foodUser});
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const updateFoodUser= async (req, res) => {
    try {
        const {food, user_mail, quantity, storagetype, expirationdate} = req.val;
        const exp = expirationdate ? new Date(expirationdate) : null;
        if(exp) exp.setHours(12, 0, 0, 0);
        const updated = await prisma.fooduser.update({
            data: {
                quantity,
                storagetype,
                expirationdate: exp,
            },
            where: {
                food_user_mail: {
                    food: food,
                    user_mail: user_mail
                }
            }
        });
        res.sendStatus(204);
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const deleteFoodUser = async (req, res) => {
    try {
        const {food, user_mail} = req.val;
        await prisma.fooduser.delete({
            where: {
                food_user_mail: {
                    food: food,
                    user_mail: user_mail
                }
            }
        });
        res.sendStatus(204);
    } catch (err) {
        return errorHandeling(res, err);
    }
};

export const getFoodUserByMail = async (req, res)=> {
    try {
        const { user_mail } = req.params;

        const foodsUser = await prisma.fooduser.findMany({
            where: { user_mail },
            include: { food_fooduser_foodTofood: true }
        });

        if (foodsUser.length === 0) {
            return res.json([]);
        }

        const formatted = foodsUser.map(f => ({
            id: f.food,
            label: f.food_fooduser_foodTofood.label,
            quantity: f.quantity,
            expirationDate: formatDate(f.expirationdate)
        }));

        res.send(formatted);

    } catch (err) {
        return errorHandeling(res, err);
    }
};
