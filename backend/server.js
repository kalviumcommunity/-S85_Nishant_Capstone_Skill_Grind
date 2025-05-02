import app from "./app.js"; // ✅ now using default import
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
