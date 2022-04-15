import {Request, Response} from 'express';

class FirstController {
     public home(req: Request, res: Response) {
        res.json({
            message: 'Hello world', 
        });
     }

     public register(req: Request, res: Response) {
         res.render('index')
     }
}


export const firstController = new FirstController();
