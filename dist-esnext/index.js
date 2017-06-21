import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
// import path from 'path';
import BaseRoutes from './config/routes/Routes';
import logFile from 'ptz-log-file';
const log = logFile({ dir: './logs' });
const env = process.env.NODE_ENV || 'developement';
const app = express();
log('starting server');
const PORT = process.env.PORT || 3010;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', new BaseRoutes().routes);
const renderIndex = (req, res) => {
    res.json({
        error: req.url,
        message: '404'
    });
};
app.get('/*', renderIndex);
if (env === 'developement') {
    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error,
            message: req
        });
        next(res);
    });
}
app.use((req, res, next) => {
    const error = new Error('Not Found' + req + res);
    next(error);
});
app.use((error, res) => {
    res.status(error.status || 500);
    res.json({
        error: {},
        message: error.message
    });
});
(async () => {
    try {
        const server = await http.createServer(app);
        app.listen(PORT, async () => {
            await server.address();
            console.log('This express server is listening on port:' + PORT);
        });
    }
    catch (e) {
        log(e);
    }
})();
//# sourceMappingURL=index.js.map