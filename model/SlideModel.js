import { model, Schema } from "mongoose"

const Slide = new Schema({
    slideUrl: {
        type: String,
        required: true
    }
})

export const SLIDE = model("Slide", Slide)