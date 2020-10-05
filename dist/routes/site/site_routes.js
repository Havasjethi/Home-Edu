"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.site_router = void 0;
const express_1 = require("express");
exports.site_router = express_1.Router();
exports.site_router.get('/', ((req, res, next) => {
    res.render('site/index.twig');
}));
exports.site_router.get('/about', ((req, res, next) => {
    res.render('site/about.twig');
}));
//# sourceMappingURL=site_routes.js.map