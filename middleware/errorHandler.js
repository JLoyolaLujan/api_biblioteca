const errorHandler = (err, req, res, next) => {
    // checkeo si el error esta definido
    const statusCode = err.statusCode || 500;

    // objetorespuesta
    const errorResponse = {
        error: {
            message: err.message || "Error interno del server",
            code: err.code || "internal_error"
        },
    };

    // devuelvo respuesta
    return [statusCode, errorResponse];
};

// exporto

module.exports = errorHandler;