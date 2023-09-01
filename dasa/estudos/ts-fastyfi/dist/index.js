"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = require("./routes/user.router");
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)({ logger: true });
app.register(user_router_1.userRouter, { prefix: '/api/user' });
app.listen({ port: 3000 }, async (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening on ${address}`);
});
