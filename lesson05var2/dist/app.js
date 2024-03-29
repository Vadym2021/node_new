"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// app.get('/users', async (_req:Request, res:Response) => {
//     const users = await getManager().getRepository(User).find({ relations: ['posts'] });
//     console.log(users);
//     res.json(users);
// });
app.get('/users', async (_req, res) => {
    const users = await (0, typeorm_1.getManager)().getRepository(user_1.User)
        .createQueryBuilder('user')
        .leftJoin('posts', 'posts', 'posts.userId=user.id')
        .where('posts.text = "asdfg"')
        .getMany();
    res.json(users);
});
app.post('/users', async (req, res) => {
    console.log(req.body);
    const createdUser = await (0, typeorm_1.getManager)().getRepository(user_1.User).save(req.body);
    res.json(createdUser);
});
app.patch('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    console.log(req.body);
    const createdUser = await (0, typeorm_1.getManager)()
        .getRepository(user_1.User)
        .update({ id: Number(req.params.id) }, {
        password,
        email,
    });
    res.json(createdUser);
});
// Обычное удаление
app.delete('/users/:id', async (req, res) => {
    console.log(req.body);
    const createdUser = await (0, typeorm_1.getManager)()
        .getRepository(user_1.User)
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
app.listen(5500, async () => {
    console.log('Server has started 🚀🚀🚀');
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
//# sourceMappingURL=app.js.map