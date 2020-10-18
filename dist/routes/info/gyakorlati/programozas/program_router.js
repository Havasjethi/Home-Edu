"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.programing_router = void 0;
const express_1 = require("express");
const datatype_router_1 = require("./sub_routers/datatype_router");
const control_router_1 = require("./sub_routers/control_router");
const python_spec_router_1 = require("./sub_routers/python_spec_router");
// Route: /info/prog
exports.programing_router = express_1.Router();
exports.programing_router.get('/', ((req, res, next) => {
    res.render('courses/info/gyakorlat/prog/prog_index.twig');
}));
exports.programing_router.use('/', datatype_router_1.datatype_router);
exports.programing_router.use('/', control_router_1.control_router);
exports.programing_router.use('/', python_spec_router_1.python_router);
//# sourceMappingURL=program_router.js.map