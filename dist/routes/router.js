"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configured_router = void 0;
const express_1 = require("express");
const site_routes_1 = require("./site/site_routes");
const info_router_1 = require("./info/info_router");
exports.configured_router = express_1.Router();
// Default routes
exports.configured_router.use('/', site_routes_1.site_router);
// Course routes
exports.configured_router.use('/info', info_router_1.info_router);
//# sourceMappingURL=router.js.map