import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

app.get('/api/v1', (req, res) => {
    res.end('Welcome to the Hospital Management System API');
});
const PORT = process.env.PORT || 5000;
app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        
    }
)
