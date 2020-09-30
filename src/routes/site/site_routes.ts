import {Router} from "express";

export const site_router = Router();

site_router.get('/', ((req, res, next) => {
    res.render('site/index.twig');
}));

site_router.get('/about', ((req, res, next) => {
    res.render('site/about.twig');
}));
