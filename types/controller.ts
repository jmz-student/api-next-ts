import { AllModel } from './Utilities';

/**
 * Respuesta de mongo al actualizar un registro
 */
interface UpdateData {
	"acknowledged": boolean,
	"modifiedCount": number,
	"upsertedId": null,
	"upsertedCount": number,
	"matchedCount": number
};

/**
 * Respuesta de mongo al acutalizar un registro
 */
interface DeleteData {
    "acknowledged": boolean,
	"deletedCount": number
}

/**
 * Configuracion especial para mongoose
 */
export interface OptionMongoose {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    bufferCommands: boolean;
}

/**
 * Respuesta del invocador general del api
 */
export interface ResponseApi {
    success: boolean;
    data: Array<AllModel> | AllModel | UpdateData | DeleteData | {};
};

