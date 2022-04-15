import express from 'express';
import {router} from './router';
import * as exphbs from 'express-handlebars';
import * as bodyParser from 'body-parser';
import * as path from 'path';


export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
        this.engine();
        this.set();
        
    }

    private middleware() {
        this.server.use(express.json());
    }

    public router() {
        this.server.use(router);
    }
    private engine() {
        this.server.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
    }
    private set() {
        this.server.set('view engine','handlebars');
        this.server.set('views', path.join(__dirname, 'views'))
        
        this.server.use(bodyParser.urlencoded({extended: false}));
    }
}