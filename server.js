// import express from "express";
// import colors from "colors";
// import dotenv from 'dotenv';
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from './routes/productRoutes.js';

// import cors from "cors";

// //configure env 
// dotenv.config();

// // Log MONGO_URL for debugging
// console.log("Connecting to MongoDB...");


// //database config
// connectDB();
// //rest object
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));

// app.use(express.json({ limit: '50mb' }));  // Rrit kufirin për kërkesat JSON
// app.use(express.urlencoded({ limit: '50mb', extended: true }));  // Rrit kufirin për kërkesat formash (application/x-www-form-urlencoded)


// //routes
// app.use("/api/v1/auth",authRoutes);
// app.use("/api/v1/category",categoryRoutes);
// app.use("/api/v1/product",productRoutes);

// //rest api 
// app.get('/', (req,res)=> {
//     res.send("<h1>Welcome to ecommerce app</h1>");
    
//     });


// //PORT
// const PORT = process.env.PORT || 5000;

// //run listen
// app.listen(PORT, ()=>{
//     console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
// });

import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from './routes/productRoutes.js';
import cors from "cors";

// Konfiguroni mjedisin (env)
dotenv.config();

// Log MONGO_URL për debug
console.log("Connecting to MongoDB...");

// Konfigurimi i bazës së të dhënave
connectDB();

// Krijoni objektin e aplikacionit
const app = express();

// Përdorni middleware-t
app.use(cors());
app.use(morgan('dev'));

// Përdorni express.json për të trajtuar kërkesat JSON
app.use(express.json({ limit: '50mb' }));  // Rrit kufirin për kërkesat JSON
app.use(express.urlencoded({ limit: '50mb', extended: true }));  // Rrit kufirin për kërkesat formash (application/x-www-form-urlencoded)

// Rrugët
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Rruga kryesore për testim
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

// Konfigurimi i portit
const PORT = process.env.PORT || 5000;

// Nisni serverin
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
