import cron from 'node-cron';
import prisma from '../database/databaseORM.js';
import admin from './firebaseConfig.js';


const getTopicFromEmail = (email) => {
    return `user_${email.replace(/[@.]/g, '_')}`;
};

const initCronJobs = () => {
    cron.schedule('* * * * *', async () => {
        try {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);

            const afterTomorrow = new Date();
            afterTomorrow.setDate(afterTomorrow.getDate() + 2);
            afterTomorrow.setHours(0, 0, 0, 0);

            
            const expiringItems = await prisma.fooduser.findMany({
                where: {
                    expirationdate: {
                        gte: tomorrow,
                        lte: new Date(new Date(afterTomorrow).setHours(23, 59, 59, 999))
                    }
                },
                include: {
                    food_fooduser_foodTofood: true 
                }
            });

            if (expiringItems.length === 0) {
                return;
            }

            for (const item of expiringItems) {
                const productName = item.food_fooduser_foodTofood.label;
                const userMail = item.user_mail; 
                
                const expDate = new Date(item.expirationdate);
                expDate.setHours(0, 0, 0, 0);
                const isTomorrow = expDate.getTime() === tomorrow.getTime();
                const timeText = isTomorrow ? "demain" : "après-demain";

                const topic = getTopicFromEmail(userMail);

                const message = {
                    notification: {
                        title: 'Anti-gaspillage 🌿',
                        body: `${productName} périme ${timeText} !`
                    },
                    data: {
                        foodId: item.food.toString()
                    },
                    topic: topic
                };

                await admin.messaging().send(message);
                
            }

        } catch (error) {
            console.error('Erreur Cron :', error);
        }
    });
};

export default initCronJobs;