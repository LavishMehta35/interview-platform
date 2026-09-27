import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4006;

const __dirname = path.resolve();

app.get("/api", (req, res) => {
    res.json({
        message: "how are you sweetheart"
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../FRONTEND/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(
            path.join(__dirname, "../FRONTEND/dist/index.html")
        );
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});