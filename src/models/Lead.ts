import { Lead } from "../../types/Models";
import { models as Models, model as Model, Schema } from "mongoose";

/**
 * Configuracion de modelo para mongo.
 *
 * @category   models
 * @package    api-next-ts
 * @subpackage src/models
 */
const ITEM_IMG = {
    "_type": { type: String, required: false },
    "height": { type: Number, required: false },
    "uri": { type: String, required: false },
    "width": { type: Number, required: false },
};

const SCHEMA = new Schema<Lead>({
    "_type": { type: String, required: true },
    "alt": { type: String, required: true },
    "caption": { type: String, required: true },
    "credit": { type: String, required: true },
    "original": ITEM_IMG,
    "renditions": {
        "_type": { type: String,  required: true },
        "aspect-16x9": {
            "_type": { type: String,  required: true },
            "large": ITEM_IMG,
            "medium": ITEM_IMG,
            "small": ITEM_IMG,
            "thumbnail": ITEM_IMG,
            "mobile-large": ITEM_IMG,
            "mobile-small": ITEM_IMG,
            "x-large": ITEM_IMG,
        },
        "aspect-4x3": {
            "_type": { type: String,  required: true },
            "large": ITEM_IMG,
            "medium": ITEM_IMG,
            "small": ITEM_IMG,
            "thumbnail": ITEM_IMG,
            "mobile-large": ITEM_IMG,
            "mobile-small": ITEM_IMG,
            "x-large": ITEM_IMG,
        },
        "aspect-1x1": {
            "_type": { type: String,  required: true },
            "large": ITEM_IMG,
            "medium": ITEM_IMG,
            "small": ITEM_IMG,
            "thumbnail": ITEM_IMG,
            "mobile-large": ITEM_IMG,
            "mobile-small": ITEM_IMG,
            "x-large": ITEM_IMG,
        },
        "aspect-9x16": {
            "_type": { type: String,  required: true },
            "large": ITEM_IMG,
            "medium": ITEM_IMG,
            "small": ITEM_IMG,
            "thumbnail": ITEM_IMG,
            "mobile-large": ITEM_IMG,
            "mobile-small": ITEM_IMG,
            "x-large": ITEM_IMG,
        },
        "aspect-3x4": {
            "_type": { type: String,  required: true },
            "large": ITEM_IMG,
            "medium": ITEM_IMG,
            "small": ITEM_IMG,
            "thumbnail": ITEM_IMG,
            "mobile-large": ITEM_IMG,
            "mobile-small": ITEM_IMG,
            "x-large": ITEM_IMG,
        },
        "aspect-panoramic": {
            "_type": { type: String,  required: true },
            "large": ITEM_IMG,
            "medium": ITEM_IMG,
            "small": ITEM_IMG,
            "thumbnail": ITEM_IMG,
            "mobile-large": ITEM_IMG,
            "mobile-small": ITEM_IMG,
            "x-large": ITEM_IMG,
        },
    },
    "seo": {
        "_type": { type: String, required: true },
        "description": { type: String, required: true },
        "title": { type: String, required: true },
    },
    "title": { type: String, required: true },
    "uid":  { type: String, required: true },
});

export default Models.Lead || Model<Lead>("Lead", SCHEMA);
