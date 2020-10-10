"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.control_router = void 0;
const express_1 = require("express");
exports.control_router = express_1.Router();
exports.control_router.get('/ciklusok-manipulalasa', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/break-continue.twig');
});
exports.control_router.get('/ciklusok', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/for-ciclye.twig');
});
exports.control_router.get('/fuggvenyek', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/functions.twig');
});
exports.control_router.get('/elagazas', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/if-else.twig');
});
//# sourceMappingURL=control_router.js.map