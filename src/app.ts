import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mount your user routes on /api/users
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
