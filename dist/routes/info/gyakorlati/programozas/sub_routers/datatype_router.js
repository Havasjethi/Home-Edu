"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datatype_router = void 0;
const express_1 = require("express");
exports.datatype_router = express_1.Router();
exports.datatype_router.get('/integer', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/integer.twig');
});
exports.datatype_router.get('/boolean', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/boolean.twig');
});
exports.datatype_router.get('/list', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/list.twig');
});
exports.datatype_router.get('/string', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/string.twig');
});
exports.datatype_router.get('/cast', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/cast.twig');
});
//# sourceMappingURL=datatype_router.js.map