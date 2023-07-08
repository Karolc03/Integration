const http = require('http')
const data = require('./utils/data');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if(url.includes("/rickandmorty/character")){
        const id = url.split("/").at(-1)
        const character = data.find(char => char.id==id)
        res.end(`Estoy en la ruta con el id: ${id}`);

        if(character){
            res.writeHead(200, {"content-type": "application/json"});
            return res.end(json.stringify (character));
        } else {
            res.writeHead(404, {"content-type": "application/json"});
            return res.end(json.stringify ({error: "Not Found"}));
        }
    }
}).listen(3001, "localhost")