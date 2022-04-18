import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/user';
import { apiRouter } from './router/apiRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.get('/users', async (_req:Request, res:Response) => {
    const users = await getManager().getRepository(User).find({ relations: ['posts'] });
    console.log(users);
    res.json(users);
});
// app.get('/users', async (_req:Request, res:Response) => {
//     const users = await getManager().getRepository(User)
//         .createQueryBuilder('user')
//         .leftJoin('posts', 'posts', 'posts.userId=user.id')
//         .where('posts.text = "asdfg"')
//         .getMany();
//     res.json(users);
// });

// app.post('/users', async (req, res) => {
//     console.log(req.body);
//     const createdUser = await getManager().getRepository(User).save(req.body);
//     res.json(createdUser);
// });

app.patch('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    console.log(req.body);
    const createdUser = await getManager()
        .getRepository(User)
        .update({ id: Number(req.params.id) }, {
            password,
            email,
        });
    res.json(createdUser);
});

// Обычное удаление

app.delete('/users/:id', async (req, res) => {
    console.log(req.body);
    const createdUser = await getManager()
        .getRepository(User)
        .softDelete({ id: Number(req.params.id) });
    res.json(createdUser);
});

// Обычное удаление

// app.delete('/users/:id', async (req, res) => {
//     console.log(req.body);
//     const createdUser = await getManager()
//         .getRepository(User)
//         .softDelete({ id: Number(req.params.id) });
//     res.json(createdUser);
// });

const { PORT } = process.env;

app.listen(PORT, async () => {
    console.log(`Server has started 🚀🚀🚀 on Port:${PORT}`);
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
