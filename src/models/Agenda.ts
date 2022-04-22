import { Agenda } from "../../types/Models";
import { models as Models, model as Model, Schema } from "mongoose";

/**
 * Configuracion de modelo para mongo.
 *
 * @category   models
 * @package    api-next-ts
 * @subpackage src/models
 */
const SCHEMA = new Schema<Agenda>({
    name: { type: String, default: "Nombre" },
    lastName: { type: String, default: "Apellidos" },
    email: { type: String, default: "Correo Electronico" },
    phoneNumber: { type: String, default: "00-00-00-00-00" },
});

export default Models.Agenda || Model<Agenda>("Agenda", SCHEMA);
