import Connection from "./Connection";
import { ResponseFormatData, TypeMessage } from '../../types/Utilities';
import { Messages } from "@Utils";
import { ResponseApi } from '../../types/controller';

/**
 * Operaciones basicas dentro de la DataBase.
 *
 * @category   Utilities.
 * @package    api-next-ts.
 * @subpackage src/controllers
 */
class Api extends Connection {
    private static classInstance: Api | null = null;
    private MongoModel: any;
    private settings: ResponseFormatData;

    /**
     * Permite crear una instancia unica de la clase Api.
     *
     * @return  {Api}
     */
    static  get instance(): Api{
        if (!Api.classInstance) {
            Api.classInstance = new Api();
        }
        return Api.classInstance;
    }

    /********************************************/
    /*             Metodos publicos.            */
    /********************************************/

    /**
     * Permite crear un nuevo registro en el modelo seleccionado
     *
     * @param   {ResponseFormatData<ResponseApi>}  settings  Parametros de configuración.
     *
     * @return  {Promise<ResponseApi>}
     */
    public async create(settings: ResponseFormatData): Promise<ResponseApi> {
        this.reset(settings);
        const IS_LOAD: boolean = await this.loadModule();
        let response: ResponseApi = {  success: IS_LOAD, data: {} };
        if (IS_LOAD) {
            const { data } = settings;
            const CREATE = new this.MongoModel(data);
            response = CREATE.save();
        }

        return response;
    }

    /**
     * Permite realizar la consulta de registros
     *
     * @param   {ResponseFormatData<ResponseApi>}  settings  Parametros de configuración.
     *
     * @return  {Promise<ResponseApi>}
     */
    public async read(settings: ResponseFormatData): Promise<ResponseApi> {
        this.reset(settings);
        const IS_LOAD: boolean = await this.loadModule();
        let response: ResponseApi = { success: IS_LOAD, data: {} };
        if (IS_LOAD) {
            const { query = {} } = settings;
            response.data = await this.MongoModel.find(query);
        }
        return response;
    }

    /**
     * Permite actualizar registros existentes.
     *
     * @param   {ResponseFormatData<ResponseApi>}  settings  Parametros de configuración.
     *
     * @return  {Promise<ResponseApi>}
     */
    public async update(settings: ResponseFormatData): Promise<ResponseApi> {
        this.reset(settings);
        const IS_LOAD: boolean = await this.loadModule();
        let response: ResponseApi = {  success: IS_LOAD, data: {} };
        if (IS_LOAD) {
            const { query = {}, data } = settings;
            response.data = await this.MongoModel.updateOne(query, data);
        }
        return response;
    }

    /**
     * Permite la actualizacion de registros
     *
     * @param   {ResponseFormatData<ResponseApi>}  settings  Parametros de configuración.
     *
     * @return  {Promise<ResponseApi>}
     */
    public async delete(settings: ResponseFormatData): Promise<ResponseApi> {
        this.reset(settings);
        const IS_LOAD: boolean = await this.loadModule();
        let response: ResponseApi = {  success: IS_LOAD, data: {} };
        if (IS_LOAD) {
            const { query = {}, data } = settings;
            response.data = await this.MongoModel.deleteOne(query);
        }
        return response;
    }


    /********************************************/
    /*             Metodos privados.            */
    /********************************************/

    /**
     * Inicializador de la clase
     *
     * @return  {void}
     */
    private constructor() {
        super();
        this.settings = {
            data: null,
            model: "",
            params: {},
            query: {},
        };
    }

    /**
     * Permite la carga dinamica de los modulos segun el paremtro de la url
     *
     * @return  {<Promise><boolean>}
     */
    private async loadModule(): Promise<boolean> {
        let lodedModel: boolean = false;
        const { model } = this.settings;
        Messages(`Buscando el modelo ${model}`);
        try {
            const MODEL: any = await import("@Models");
            this.MongoModel = MODEL[model] || null;
            if (this.MongoModel) {
                Messages("Modelo cargado", TypeMessage.Success);
                lodedModel = true;
            }
            else Messages("El modelo no existe", TypeMessage.Error);
        } catch (ErrorLoad) {
            Messages("Problemas al cargar el modelo", TypeMessage.Error);
        }
        return lodedModel;
    }

    /**
     * Permite resetear todos los valores.
     *
     * @param {ResponseFormatData} settings Valores iniciales de configuracion.
     *
     * @return {void}
    */
    private reset(settings: ResponseFormatData | null = null): void {
        this.MongoModel = null;
        this.settings = {
            data: null,
            model: "",
            params: {},
            query: {},
        };
        if (settings) this.settings = settings;
    }
}

export default Api;
