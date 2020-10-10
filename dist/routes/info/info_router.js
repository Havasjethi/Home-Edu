"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info_router = void 0;
const express_1 = require("express");
const program_router_1 = require("./gyakorlati/programozas/program_router");
exports.info_router = express_1.Router();
// Route: /Info
exports.info_router.get('/', ((req, res) => {
    res.render('courses/info/index.twig');
}));
exports.info_router.use('/prog/', program_router_1.programing_router);
//# sourceMappingURL=info_router.js.map