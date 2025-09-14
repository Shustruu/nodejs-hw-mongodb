const cookieParser = require('cookie-parser');
const express = require('express');
const pino = require('pino-http');
const cors = require('cors');
const router = require('./routers/index');
const { getEnvVar } = require('./utils/getEnvVar');
const { errorHandler } = require('./middlewares/errorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler');

const PORT = Number(getEnvVar('PORT', '3000'));

const setupServer = () => {
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use(
        pino({
            transport: {
                target: 'pino-pretty',
            },
        }),
    );

    app.use(cookieParser());

    app.get('/', (req, res) => {
        res.json({
            message: 'Hello World!',
        });
    });

    app.use(router);

    app.use(notFoundHandler);

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

module.exports = { setupServer };
