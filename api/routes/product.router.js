import express from 'express';
// import { verifyAdmin } from '../middleware/verifyAdmin.js';
//import upload from '../cloud/multerConfig.js'; // Correctly import multer configuration
import { createProduct, deleteProduct, updateProduct, viewProducts, viewProduct } from '../controller/product.controller.js';
import {authenticateToken} from '../middleware/verify.js';

const router = express.Router();
// console.log("hallo")
// upload.single('image')
router.post('/create',authenticateToken, createProduct);
router.get('/view/:id', viewProduct);
router.put('/update/:id', authenticateToken,updateProduct);
router.delete('/delete/:id',authenticateToken,deleteProduct);
router.get('/view', viewProducts);

export default router;