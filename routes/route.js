import express from "express"
import Control from "../controllers/Control.js"
const router = express.Router()

router.post("/slide", Control.postSlide)

router.get('/getSlides', Control.getSlide)

router.delete("/delSlide/:id", Control.delSlides)

router.post("/products", Control.postProducts)

router.get("/getProducts", Control.getProducts)

router.delete("/removeProducts/:id", Control.deleteProducts)

router.put("/updateProduct/:id", Control.putProducts)

router.get("/oneproduct/:id", Control.getOneProduct)

router.get("/game", Control.getGame)

router.get("/search/:title", Control.searchProduct)

export default router