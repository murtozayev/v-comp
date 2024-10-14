import { PRODUCTS } from "../model/Products.js";
import { SLIDE } from "../model/SlideModel.js";

class Controls {

    /* For Slides */

    async postSlide(req, res) {

        const { image } = req.body;

        try {

            if (image) {

                const newSlide = await SLIDE.create({ slideUrl: image })

                return res.status(201).json(newSlide)


            }

            return res.status(404).json({ message: "Slide not found" })

        } catch (error) {

            console.log(error);

            return res.status(500).json({ message: error })

        }


    }

    async getSlide(req, res) {

        const slides = await SLIDE.find()

        try {

            if (slides) {

                return res.status(200).json(slides)

            }

            return res.status(404).json({ message: "There is no slide" })

        } catch (error) {

            console.log(error);

            return res.status(500).json({ message: error })

        }

    }

    async delSlides(req, res) {

        const { id } = req.params

        try {

            if (!id) {

                return res.status(400).json({ message: "Slide id is required" })

            }

            await SLIDE.findByIdAndDelete(id)

            return res.status(201).json({ message: "Slide Removed" })

        } catch (error) {

            console.log(error);

            return res.status(500).json({ message: error })

        }

    }

    /* For Slides */

    /* For Products */
    async postProducts(req, res) {

        const {
            title,
            catalog,
            catalogIcon,
            favourite,
            rate,
            price,
            desc,
            type,
            pcType,
            quantity
        } = req.body

        try {

            if (!title || !catalog || !catalogIcon || !price || !desc || !type || !pcType) {

                return res.status(400).json({ message: "This types  of fields are required" })

            }

            const newProducts = await PRODUCTS.create({ title, catalog, catalogIcon, price, desc, type, pcType, favourite, rate, quantity })

            return res.status(201).json({ message: "Product Created", newProducts })

        } catch (error) {

            console.log(error);

            return res.status(500).json({ message: error })


        }

    }

    async getProducts(req, res) {

        const products = await PRODUCTS.find()

        try {

            if (!products) {

                return res.status(404).json({ message: "No products found" })

            }

            return res.status(200).json(products)


        } catch (error) {

            console.log(error);

            return res.status(500).json({ message: error })


        }


    }

    async deleteProducts(req, res) {
        const id = req.params.id

        try {

            if (!id) {

                return res.status(404).json({ message: "Product not found" })

            }

            await PRODUCTS.findByIdAndDelete(id)

            return res.status(201).json({ message: "Product removed" })

        } catch (error) {

            console.log(error);

            return res.status(500).json({ message: error })


        }

    }

    async putProducts(req, res) {

        const id = req.params.id

        try {

            if (!id) {

                return res.status(404).json({ message: "Product not found" })

            }

            const product = await PRODUCTS.findByIdAndUpdate(id, req.body, { new: true })

            return res.status(201).json(product)



        } catch (error) {

            console.log(error);

            res.status(500).json({ message: error })

        }
    }

    async getOneProduct(req, res) {

        const id = req.params.id

        try {

            if (!id) {

                return res.status(404).json({ message: "Product not found" })

            }

            const foundItem = await PRODUCTS.findById(id)

            return res.status(201).json(foundItem)


        } catch (error) {

            console.log(error);

            return res.status(500).json({ message: error })

        }

    }

    async getGame(req, res) {

        const gameDev = await PRODUCTS.find({ catalog: "Game" })

        try {

            if (!gameDev) {

                return res.status(404).json({ message: "Game not found" })

            }

            return res.status(201).json(gameDev)


        } catch (error) {

            return res.status(500).json({ message: error })

        }
    }

    async searchProduct(req, res) {

        const { title } = req.params;

        const products = await PRODUCTS.find({ title: { $regex: title, $options: 'i' } });


        try {

            if (!products) {

                return res.status(404).json({ message: "Product not found" })

            }

            return res.json(products)

        } catch (error) {

            return res.status(500).json({ message: error })


        }


    }

    /* For Products */

}

export default new Controls