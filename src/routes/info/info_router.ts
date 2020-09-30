import {Router} from "express";
import {programing_router} from "./gyakorlati/programozas/program_router";

export const info_router = Router();

// Route: /Info

info_router.get('/', ((req, res) => {
    res.render('courses/info/index.twig');
}));

info_router.use('/prog/', programing_router);
