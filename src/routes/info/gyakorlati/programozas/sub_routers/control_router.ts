import {Router} from "express";

export const control_router = Router();

control_router.get('/ciklusok-manipulalasa', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/break-continue.twig');
});
control_router.get('/ciklusok', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/for-ciclye.twig');
});
control_router.get('/fuggvenyek', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/functions.twig');
});
control_router.get('/elagazas', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/control_flow/if-else.twig');
});
