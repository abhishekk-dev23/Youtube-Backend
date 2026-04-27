import swaggerAutogenInit from "swagger-autogen";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const swaggerAutogen = swaggerAutogenInit();

const doc = {
    info: {
        title: "Youtube Backend API",
        description: "API documentation for the Youtube Backend application",
    },
    host: process.env.HOST || "localhost:8000",
    schemes: ["https", "http"],
    tags: [
        { name: "Users", description: "User management and authentication" },
        { name: "Videos", description: "Video upload and management" },
        { name: "Comments", description: "Comment on videos and tweets" },
        { name: "Likes", description: "Like and unlike content" },
        { name: "Playlists", description: "Playlist creation and management" },
        { name: "Tweets", description: "Tweet management" },
        { name: "Subscriptions", description: "Subscribe to channels" },
        { name: "Dashboard", description: "Channel dashboard statistics" },
        { name: "Healthcheck", description: "System health monitoring" }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "Enter token in format (Bearer <token>)",
        },
    },
    security: [{ bearerAuth: [] }],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    const swaggerData = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
    
    for (const path in swaggerData.paths) {
        const pathParts = path.split('/');
        if (pathParts.length > 3) {
            const section = pathParts[3];
            const tag = section.charAt(0).toUpperCase() + section.slice(1); 
            
            
            for (const method in swaggerData.paths[path]) {
                swaggerData.paths[path][method].tags = [tag];
            }
        }
    }
    
    fs.writeFileSync(outputFile, JSON.stringify(swaggerData, null, 2));
    console.log("Swagger JSON generated!");
});
