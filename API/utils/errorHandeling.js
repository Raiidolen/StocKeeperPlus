import { Prisma } from '../../generated/prisma/client.js'; 

export function errorHandeling(res, error, genericMessage) {
    
    let message = genericMessage || "Une erreur est survenue"; 
    let details = error.messages || error.errors || []; 

    let statusCode = 500;

    const errorCode = error?.code;

    if (error instanceof Prisma.PrismaClientKnownRequestError || errorCode) {
        statusCode = 400; 

        switch (errorCode) {
            case 'P2002':
                message = "Cette liaison existe déjà."; 
                break;
            case 'P2003':
                message = "Erreur de relation : un élément lié n'existe pas."; 
                break;
            case 'P2025':
                message = "L'élément demandé n'a pas été trouvé."; 
                statusCode = 404;
                break;
            default:
                if (error instanceof Prisma.PrismaClientKnownRequestError) {
                    message = `Erreur base de données (${errorCode})`; 
                }
        }
    }

    return res.status(statusCode).json({ 
        message: message,
        details: details 
    });
}