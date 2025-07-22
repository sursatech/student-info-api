import express from 'express';
import studentRoutes from './routes/studentRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/students', studentRoutes);

app.get('/', (_req, res) => {
  res.send('Student Info API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 