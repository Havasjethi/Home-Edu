"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.python_router = void 0;
const express_1 = require("express");
exports.python_router = express_1.Router();
const base_path = 'courses/info/gyakorlat/prog/python_specific/';
exports.python_router.get('/objektumok', (req, res, next) => {
    res.render(base_path + 'objects.twig');
});
exports.python_router.get('/blokkok', (req, res, next) => {
    res.render(base_path + 'blocks.twig');
});
//# sourceMappingURL=python_spec_router.js.map