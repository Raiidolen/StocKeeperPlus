import prisma from '../database/databaseORM.js';

export const getNotifications = async (req, res) => {
    try {
        const userId = req.user.id; // Supposant que le middleware checkJWT peuple req.user

        // 1. Récupérer les produits qui périment dans les 3 prochains jours
        const expiringFoods = await prisma.food.findMany({
            where: {
                userId: userId,
                expirationDate: {
                    gte: new Date(), // Pas encore périmé
                    lte: new Date(new Date().setDate(new Date().getDate() + 3)) // Périme dans <= 3 jours
                }
            },
            include: { product: true } // Pour avoir le nom du produit
        });

        
        const notifications = [
            ...expiringFoods.map(f => ({
                id: `exp-${f.id}`,
                type: 'EXPIRATION',
                title: 'Attention au gaspillage !',
                message: `Votre ${f.product.name} périme le ${f.expirationDate.toLocaleDateString()}`,
                date: f.expirationDate,
                read: false 
            }))
        ];

        // Optionnel : Trier par date
        notifications.sort((a, b) => new Date(b.date) - new Date(a.date));

        return res.status(200).json(notifications);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur lors de la récupération des notifications" });
    }
};

