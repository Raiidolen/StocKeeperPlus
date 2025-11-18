import prisma from '../database/databaseORM.js';

export const getFoodUser = async (req, res)=> {
    try {
        const {food_id, user_mail} = req.val;
        const foodUser = await prisma.fooduser.findUnique({
            where: {
                food_user_mail: {
                    food: food_id,
                    user_mail: user_mail
                }
            }
        });
        if(foodUser){
            res.send(foodUser);
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
        if(foodsUser){
            res.send(foodsUser);
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
        const {food_id, user_mail, quantity, storagetype, expirationdate} = req.val;
        const foodUser = await prisma.fooduser.create({
            data: {
                food: food_id,
                user_mail,
                quantity,
                storagetype,
                expirationdate,
            }
        });
        res.status(201).send({foodUser});
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

export const updateFoodUser= async (req, res) => {
    try {
        const {food_id, user_mail, quantity, storagetype, expirationdate} = req.val;
        await prisma.fooduser.update({
            data: {
                food: food_id,
                user_mail,
                quantity,
                storagetype,
                expirationdate,
            },
            where: {
                food_user_mail: {
                    food: food_id,
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

export const deleteFoodUser = async (req, res) => {
    try {
        const {food_id, user_mail} = req.val;
        await prisma.fooduser.delete({
            where: {
                food_user_mail: {
                    food: food_id,
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
        where: {
            user_mail
        },
        include: {
            food_fooduser_foodTofood: true
        }
        });

        if (foodsUser.length === 0) {
            return res.sendStatus(404);
        }

        const formatted = foodsUser.map(f => ({
            id: f.food,
            label: f.food_fooduser_foodTofood.label,
            quantity: f.quantity,
            expirationDate: f.expirationdate
        }));

        res.send(formatted);

    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
