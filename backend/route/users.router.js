import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUserForSidebar } from '../controller/users.controller.js';

const Router = express.Router();

Router.get("/",protectRoute, getUserForSidebar)

export default Router;