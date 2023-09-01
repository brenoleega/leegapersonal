"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = async (request, reply) => {
    try {
        const { username, password } = request.body;
        console.log("teste");
    }
    catch (err) {
    }
};
exports.login = login;
