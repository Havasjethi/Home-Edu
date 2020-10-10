import {Router} from "express";
import {site_router} from "./site/site_routes";
import {info_router} from "./info/info_router";

export const configured_router = Router();

// Default routes
configured_router.use('/', site_router);


// Course routes
configured_router.use('/info', info_router);
