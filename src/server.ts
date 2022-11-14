import express from 'express';
import { Express } from 'express';
import * as dotenv from "dotenv/config";
import chalk from 'chalk';
import app from './app.js';

const server: Express = express();
server.use(app)

server.listen(process.env.PORT, () => {
    console.log(chalk.bold("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.="))
    console.log(chalk.green(`Running on port ${process.env.PORT}...`))
    console.log(chalk.bold("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.="))
});