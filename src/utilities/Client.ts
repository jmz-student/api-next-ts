import { ValidMethods, FetchResponse, DeleteResponse } from '../../types/Client';
import { Lead } from '../../types/Models';
const API_URL: string = `${process.env.HOST}/api/lead`;

class Client {
    private static classInstance: Client | null = null;
    private method: ValidMethods = ValidMethods.DEFAULT;
    private params: string = "";
    private body: string = "{}";

    public async create(){
        this.method = ValidMethods.POST;
    }
    public async read(): Promise<FetchResponse>{
        this.method = ValidMethods.GET;
        return await this.sendData();
    }
    public async update(){
        this.method = ValidMethods.PUT;
    }
    public async delete(id: string): Promise<FetchResponse>{
        this.method = ValidMethods.DELETE;
        this.params = `/_id/${id}`;
        return await this.sendData();
    }

    private async sendData ( body = null): Promise<FetchResponse> {
        const OPTIONS: RequestInit = {
            method: this.method,
        };

        if (body) OPTIONS.body = JSON.stringify(body);
        console.log(`${API_URL}${this.params}`);
        const FETCH = await fetch(`${API_URL}${this.params}`, OPTIONS);
        const RESPONSE = FETCH.json();
        return RESPONSE;
    }


    /************************************/
    /* Patron Singleton                 */
    /************************************/
    private constructor () {}

    static get instance(): Client {
        if (!this.classInstance) {
            this.classInstance = new Client();
        }
        return this.classInstance;
    }



}

export default Client;
