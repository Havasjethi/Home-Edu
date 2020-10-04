import {Router} from "express";

export const datatype_router = Router();

datatype_router.get('/integer', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/integer.twig');
});
datatype_router.get('/boolean', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/boolean.twig');
});
datatype_router.get('/list', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/list.twig');
});
datatype_router.get('/string', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/string.twig');
});
datatype_router.get('/cast', (req, res, next) => {
    res.render('courses/info/gyakorlat/prog/datatypes/cast.twig');
});
