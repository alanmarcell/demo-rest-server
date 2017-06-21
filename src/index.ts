import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { MongoClient } from 'mongodb';
import Schema from './core/schema';

import MONGO_URL from './mongoDbUrl';

import { UserApp } from 'ptz-user-app';
import { UserRepository } from 'ptz-user-repository';

import logFile from 'ptz-log-file';
const log = logFile({ dir: './logs' });

const app = express();
app.use(cors());

log('starting server');

const PORT = process.env.PORT || 3000;

function getRunningUrl(path) {
    return `http://localhost:${PORT}${path}`;
}

// async function createGraphqlSchema(schema) {
//     const json = await graphql(schema, introspectionQuery);
//     const file = '/public/schema.json';
//     fs.writeFile(`.${file}`, JSON.stringify(json, null, 2), err => {
//         if (err) throw err;

//         log('Json schema created!', getRunningUrl(file));
//     });

//     app.use('/public', express.static('public'));
// }

(async () => {
    try {
        const db = await MongoClient.connect(MONGO_URL);

        const userApp = new UserApp({
            userRepository: new UserRepository(db),
            log
        });

        await userApp.seed();

        const schema = Schema(userApp, log);

        const graphqlFolder = '/graphql';
        app.use(graphqlFolder, GraphQlHttp({
            schema,
            graphiql: true
        }));

        await createGraphqlSchema(schema);

        app.listen(PORT, () => {
            const url = getRunningUrl(graphqlFolder);
            log(`Running on ${url}`);
        });
    } catch (e) {
        log(e);
    }
})();