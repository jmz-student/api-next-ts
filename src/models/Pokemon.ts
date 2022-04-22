import { Pokemon } from "../../types/Models";
import { models as Models, model as Model, Schema } from "mongoose";

/**
 * Configuracion de modelo para mongo.
 *
 * @category   models
 * @package    api-next-ts
 * @subpackage src/models
 */
const SCHEMA = new Schema<Pokemon>({
abilities: [String],
    evolution: [String],
    height: { type: String, default: "0′0″ (0.0m)" },
    name: { type: String, required: true },
    species: { type: String, required: true },
    stats: {
        attack: Number,
        defense: Number,
        hp: Number,
        sp: {
            atk: Number,
            def: Number,
        },
        speed: Number,
        total: Number,
    },
    types: [String],
    weight: { type: String, default: "0 lbs (0 kg)" },
    img: {
        type: String,
        default: "",
    },
});

export default Models.Pokemon || Model<Pokemon>("Pokemon", SCHEMA);
