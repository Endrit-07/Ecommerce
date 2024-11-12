
import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from './routes/productRoutes.js';
import cors from "cors";


dotenv.config();

// Log MONGO_URL për debug
console.log("Connecting to MongoDB...");

// Konfigurimi i bazes se te dhenave
connectDB();

//middleware
const app = express();

// Përdorni middleware-t
app.use(cors());
app.use(morgan('dev'));


app.use(express.json({ limit: '50mb' }));  
app.use(express.urlencoded({ limit: '50mb', extended: true }));  

// Rruget
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Rruga kryesore per testim
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

// Konfigurimi i portit
const PORT = process.env.PORT || 5000;

// Nisja e serverit
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
