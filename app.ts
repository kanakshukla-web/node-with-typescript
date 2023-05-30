import express, { Application, Request, Response } from "express";
//import 'dotenv/config';

const app: Application = express();

const HOSTNAME: string = '127.0.0.1';
const PORT: number = 1337;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send(`<h3>Hello World !! Server is listening your requests.</h3>`)
})

app.get('/users', (req: Request, res: Response) => {
    res.json({ Response: { users: ["Kanak", "Gaurav", "Himanshu", "Suman"] } })
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at port ${PORT}`);
})