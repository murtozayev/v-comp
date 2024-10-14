import { model, Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    catalog: {
        type: String,
        required: true
    },
    catalogIcon: {
        type: String,
        required: true
    },
    favourite: {
        type: Boolean,
        default: false
    },
    rate: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    pcType: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    }
})

export const PRODUCTS =  model("products", productSchema)