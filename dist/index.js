"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_CSS = exports.BASE_VIEWS = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
const twig_1 = require("twig");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const app = express_1.default();
exports.BASE_VIEWS = path_1.default.join(__dirname, '../src', 'views');
exports.BASE_CSS = path_1.default.join(__dirname, '../src', 'static', 'css');
twig_1.extendFunction('some', () => 'some works');
twig_1.extendFunction('create_nav', () => {
    let nav_creator = (n) => `<li><a href="${n.path}">${n.name}</a></li>`;
    return `<ul>${a.map(nav_creator).join('')}</ul>`;
});
const a = [
    { name: 'about', path: '/about' },
    { name: 'info', path: '/info' },
];
// app.set("twig options", {
//     allow_async: true, // Allow asynchronous compiling
//     strict_variables: false
// });
app.set('view engine', 'twig');
app.set('views', exports.BASE_VIEWS);
app.get('**', (req, res, next) => {
    const url = req.url;
    const parts = url.split('.');
    if (req.method == 'GET' && parts.pop() === 'css') {
        const style_sheet = exports.BASE_CSS + parts.join('.') + '.css';
        if (fs_1.existsSync(style_sheet)) {
            res.sendFile(style_sheet);
        }
    }
    else {
        next();
    }
});
app.use('/', router_1.configured_router);
const port = 3000;
app.listen(port, () => console.log(`App is listening to: http://localhost:${port}`));
//# sourceMappingURL=index.js.map