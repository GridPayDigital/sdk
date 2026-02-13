import express from "express";
import walletRoutes from "./routes/wallet.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import healthRoutes from "./routes/health.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();
app.use(express.json());

app.use("/api/wallet", walletRoutes);
app.use("/api/tx", transactionRoutes);
app.use("/api/health", healthRoutes);

app.use(errorMiddleware);

export default app;
