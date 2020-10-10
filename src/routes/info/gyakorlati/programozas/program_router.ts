import {Router} from "express";
import {datatype_router} from "./sub_routers/datatype_router";
import {control_router} from "./sub_routers/control_router";

// Route: /info/prog

export const programing_router = Router();

programing_router.get('/', ((req, res, next) => {
    res.render('courses/info/gyakorlat/prog/prog_index.twig');
}));

programing_router.use('/', datatype_router);

programing_router.use('/', control_router);
