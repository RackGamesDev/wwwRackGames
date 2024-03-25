import dotenv from 'dotenv';
try{
    dotenv.config();
} catch (err){
    console.log("problema con dotenv.   " + err);
}

import { readFileSync } from 'fs';
import path from 'path';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express  from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const formarPagina = (pagina) => {//devuelve una pagina entera, juntando la cabecera, lo principal y el footer
    const fileUp = path.join(process.cwd(), 'views', 'up.html');
    const stringifiedUp = readFileSync(fileUp, 'utf8');
    const fileDown = path.join(process.cwd(), 'views', 'down.html');
    const stringifiedDown = readFileSync(fileDown, 'utf8');
    const file = path.join(process.cwd(), 'views', pagina);
    const stringified = readFileSync(file, 'utf8');
    const final = stringifiedUp + stringified + stringifiedDown;
    return final;
}

app.get('/public/stylesheet.css', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'stylesheet.css');
    //const stringified = readFileSync(file, 'utf8');
    //res.end(stringified);
    res.setHeader('Content-type', 'text/css');
    res.write(readFileSync(file));
    res.end();
});
app.get('/public/RackWrite-Regular.ttf', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'RackWrite-Regular.ttf');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/LogoPng8.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'LogoPng8.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/LogoGrandeO.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'LogoGrandeO.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/pao128.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'pao128.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/err404pao.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'err404pao.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/favicon.ico', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'favicon.ico');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/AnarchatLogo.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'AnarchatLogo.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/logos/DiscordL.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'logos', 'DiscordL.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/logos/GamejoltL.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'logos', 'GamejoltL.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/logos/GithubL.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'logos', 'GithubL.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/logos/ItchioL.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'logos', 'ItchioL.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/logos/SteamL.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'logos', 'SteamL.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/logos/YoutubeL.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'logos', 'YoutubeL.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/changertone.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'changertone.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/hectikal.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'hectikal.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/ippg.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'ippg.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/ippg2.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'ippg2.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/juegocuadraos.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'juegocuadraos.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/pairedsteps.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'pairedsteps.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/plaixits.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'plaixits.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});
app.get('/public/portadas-cuadro/spritznaya.png', (req, res) => {
    const file = path.join(process.cwd(), 'public', 'portadas-cuadro', 'spritznaya.png');
    const stringified = readFileSync(file);
    res.end(stringified);
});






app.get("/", (req, res) => {
    res.send(formarPagina('index.html'));
});
app.get("/contacts", (req, res) => {
    res.send(formarPagina('contacts.html'));
});
app.get("/games", (req, res) => {
    res.send(formarPagina('games.html'));
});
app.get("/about", (req, res) => {
    res.send(formarPagina('about.html'));
});
app.get("/morestuff", (req, res) => {
    res.send(formarPagina('morestuff.html'));
});
app.get("/s", (req, res) => {
    res.send(formarPagina('s.html'));
});




app.get("/*", (req, res) => {//err404
    console.log("no");
    res.send(formarPagina('err404.html'));
});
app.listen(PORT, () => console.log("levantado en " + PORT));
console.log("todo operativo :)");
