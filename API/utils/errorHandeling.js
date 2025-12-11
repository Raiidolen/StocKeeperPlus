export function errorHandeling(res, error, genericMessage) {
    // Tentative de récupérer les messages détaillés
    const validationErrors = error.messages || error.errors || [];
    
    // Le message générique utilisé par authFetch
    const message = genericMessage || "Validation échouée. Voir 'details' pour plus d'informations.";

    // Envoyer la réponse 400 avec le format standardisé
    return res.status(400).json({ 
        message: message,
        details: validationErrors 
    });
}