import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/usersRoute.js";
import callbackRoute from "./routes/callbacksRoutes.js";
import walletRoute from "./routes/walletsRoute.js";
import billsRoute from "./routes/billsRoute.js";
import cors from "cors"
// import { getLatestStmt } from "./controllers/walletsController.js";
// import { getLatest } from "./controllers/walletsController.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
// middlewares
app.use(express.json());

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error :" + error);
    });

// create users
app.use("/api/users", usersRoute);

app.use("/api/callbacks", callbackRoute);

app.use("/api/wallet", walletRoute);

app.use("/api/bills", billsRoute);

// getLatest("676661a08c1d5741ed40946f")
//     .then((data) => {
//         const [{ balance }] = data;
//         console.log(balance);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
