import { connect as Connect } from "mongoose";
import { OptionMongoose } from '../../types/controller';
import { Messages } from '@Utils';
import { TypeMessage } from '../../types/Utilities';

/**
 * Permite conseguir la conexión con mongo.
 *
 * @category   Controllers
 * @package    api-next-ts
 * @subpackage src/controllers
 */
class Connection {

    /**
     * Constructor de la clase.
     *
     * @return  {void}
     */
    constructor() {
        Messages("Iniciando conexión con Mongo");
        this.connection;
    }

    /**
     * Estableciendo la conexion con MongoDBAtlas
     *
     * @return  {void}
     */
    private get connection(): void {
        Connect(process.env.MONGO_URI, this.options, (MongoError) => {
            if (MongoError) {
                Messages("Problemas con la conexion", TypeMessage.Error);
                console.error(MongoError);
            } else {
                Messages("📡 Conexion estableciada . . .", TypeMessage.Success);
            }
        });
        return;
    }

    /**
     * Listado de opciones para conectar a mongo.
     *
     * @return  {OptionMongoose}
     */
    private get options(): OptionMongoose {
        return {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: true,
        }
    }
}

export default Connection;
