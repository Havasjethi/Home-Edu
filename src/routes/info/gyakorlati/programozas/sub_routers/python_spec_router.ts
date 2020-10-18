import {Router} from "express";

export const python_router = Router();

const base_path = 'courses/info/gyakorlat/prog/python_specific/';

python_router.get('/objektumok', (req, res, next) => {
    res.render(base_path + 'objects.twig');
});
python_router.get('/blokkok', (req, res, next) => {
    res.render(base_path + 'blocks.twig');
});
