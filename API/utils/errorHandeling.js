import { Prisma } from '../../generated/prisma/client.js';

export function errorHandeling(res, error, genericMessage) {
    
    let message = genericMessage || "Une erreur est survenue";
    let details = error.messages || error.errors || [];

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
            case 'P2002':
                message = "Cette liaison existe déjà.";
                break;
            case 'P2003':
                message = "Erreur de relation : un élément lié n'existe pas.";
                break;
            case 'P2025':
                message = "L'élément demandé n'a pas été trouvé.";
                break;
            default:
                message = `Erreur base de données (${error.code})`;
        }
        
    }

    return res.status(500).json({ 
        message: message,
        details: details 
    });
}