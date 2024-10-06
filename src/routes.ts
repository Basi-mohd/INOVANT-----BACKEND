import { UserController } from "./controller/UserController"
import {createProduct,deleteProduct, getAllProducts, getProductById, deleteProductImage, updateProductById,} from './controller/ProductController';
import express, { Request, Response } from "express";
const router = express.Router();
import { upload } from "./config/multer";
import { createType, getAllTypes } from "./controller/TypeController";

  
router.get('/products',getAllProducts);
router.get('/products/:id',getProductById);
router.post('/add-products',upload,createProduct);
router.delete('/products/:id', deleteProduct);
router.delete('/products/:id/images/:imageId', deleteProductImage);
router.put('/edit-products/:id',upload,updateProductById);
router.post('/add-type',upload,createType);
router.get('/types',getAllTypes);


export default router;