import { userRouter } from './routes/user.router'
import fastify, {FastifyInstance} from "fastify";

const app: FastifyInstance = fastify(
    {logger: true}
);

app.register(userRouter, { prefix: '/api/user'})

app.listen({port: 3000}, async (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening on ${address}`);
});