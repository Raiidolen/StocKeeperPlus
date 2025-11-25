import prisma from '../database/databaseORM.js';

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
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const getAllFoodUser = async (_req, res)=> {
    try {
        const foodsUser = await prisma.fooduser.findMany();
        if(foodsUser.length){
            res.send(
                foodsUser.map(f => ({
                    ...f,
                    expirationdate: formatDate(f.expirationdate)
                }))
            );
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
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
            }
        });
        res.status(201).send({
            ...foodUser,
            expirationdate: formatDate(foodUser.expirationdate)
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
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
        res.send({
            ...updated,
            expirationdate: formatDate(updated.expirationdate)
        });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
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
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
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
            return res.sendStatus(404);
        }

        const formatted = foodsUser.map(f => ({
            id: f.food,
            label: f.food_fooduser_foodTofood.label,
            quantity: f.quantity,
            expirationDate: formatDate(f.expirationdate)
        }));

        res.send(formatted);

    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
