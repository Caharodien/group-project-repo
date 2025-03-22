import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
