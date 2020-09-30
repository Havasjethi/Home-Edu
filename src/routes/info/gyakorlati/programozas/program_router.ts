import {Router} from "express";

export const programing_router = Router();


// Route: /info/prog.twig

programing_router.get('/', ((req, res, next) => {
    res.render('courses/info/gyakorlat/prog/prog_index.twig');
}));

/////////////////////////////////////////////
////////////////     MOVE THIS ON SCALE   ///
/////////////////////////////////////////////

programing_router.get('/integer', (req, res, next) => {
   res.render('courses/info/gyakorlat/prog/datatypes/integer.twig');
});
programing_router.get('/boolean', (req, res, next) => {
   res.render('courses/info/gyakorlat/prog/datatypes/boolean.twig');
});
programing_router.get('/list', (req, res, next) => {
   res.render('courses/info/gyakorlat/prog/datatypes/list.twig');
});
programing_router.get('/string', (req, res, next) => {
   res.render('courses/info/gyakorlat/prog/datatypes/string.twig');
});
programing_router.get('/cast', (req, res, next) => {
   res.render('courses/info/gyakorlat/prog/datatypes/cast.twig');
});
