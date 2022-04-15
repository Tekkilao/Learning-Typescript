import { Router, Request, Response } from  'express';
import { firstController } from './controllers/first';

const router: Router = Router();


//routes 
router.get('/', firstController.home); 


export { router };