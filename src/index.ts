import express from "express";
import {configured_router} from "./routes/router";
import {extendFunction} from "twig";
import path from "path";
import {INavigationItem} from "./interfaces/INavigationItem";
import { existsSync } from "fs";

const app = express();
export const BASE_VIEWS = path.join(__dirname, '../src', 'views');
export const BASE_CSS = path.join(__dirname, '../src', 'static', 'css');

extendFunction('some', () => 'some works');

extendFunction('create_nav', () => {
    let nav_creator = (n: INavigationItem) =>
        `<li><a href="${n.path}">${n.name}</a></li>`;

    return `<ul>${ a.map(nav_creator).join('') }</ul>`;
});

const a: INavigationItem[] = [
    {name: 'about', path: '/about'},
    {name: 'info', path: '/info'},
];

// app.set("twig options", {
//     allow_async: true, // Allow asynchronous compiling
//     strict_variables: false
// });

app.set('view engine', 'twig');
app.set('views', BASE_VIEWS);

app.get('**', (req, res, next) => {
    const url = req.url;
    const parts = url.split('.');
    if (req.method == 'GET' && parts.pop() === 'css') {
        const style_sheet = BASE_CSS + parts.join('.') + '.css';
        if (existsSync(style_sheet)) {
            res.sendFile(style_sheet);
        }
    } else {
        next();
    }
});

app.use('/', configured_router);

const port = 3000;
app.listen(port, () => console.log(`App is listening to: http://localhost:${port}`));
