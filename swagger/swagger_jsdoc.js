import {default as swaggerJSDoc} from "swagger-jsdoc";
import * as fs from "node:fs";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0.0",
        },
    },
    
    apis: [
        "./API/controller/*.js",
        "./API/middleware/validator/*.js",
        "./API/middleware/identification/*.js",
        "./API/route/v1/*.js",
    ],
};

const swaggerSpec = swaggerJSDoc(options);
fs.writeFileSync("./swagger/spec.json", JSON.stringify(swaggerSpec));