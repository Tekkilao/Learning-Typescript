import { Router, Request, Response } from  'express';
import { firstController } from './controllers/first';

const router: Router = Router();


//routes 
router.get('/', firstController.home); 
router.get('/register', firstController.register)


export { router };