/**
 * cuerpo de respuesta del modelo agenda
 */
export interface Agenda {
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    _id?:string;
    __v?:number;
}

/**
 * Schema que representa al modelo pokemon
 */

interface SP {
    "sp": {
        "atk": number,
        "def": number,
    },
};

interface GralSP {
    "attack": number,
    "defense": number,
    "hp": number,
    "speed": number,
    "total": number,
};

type GlobalSp = GralSP & SP;

export interface Pokemon {
    stats: GlobalSp;
    abilities: Array<string>;
    evolution: Array<string>;
    types: Array<string>;
    _id?: string;
    id?: string;
    height: string;
    name: string;
    species: string;
    weight: string;
    img: string;
    pid: number;
    __v?: number;
};

/**
 * Schema para crear un widget de BSP
 */
export interface ItemImage {
    "_type": string,
    "height": number,
    "uri": string,
    "width": number
};

interface Seo {
    "_type": string,
    "description": string,
    "title": string
};

interface Aspects {
    "_type": string,
    "large"? : ItemImage,
    "medium"? : ItemImage,
    "small"? : ItemImage,
    "thumbnail"? : ItemImage,
    "mobile-large"? : ItemImage,
    "mobile-small"? : ItemImage,
    "x-large"? : ItemImage
}

interface Renditions {
    "_type": string,
    "aspect-16x9": Aspects,
    "aspect-9x16": Aspects,
    "aspect-4x3": Aspects,
    "aspect-1x1": Aspects,
    "aspect-3x4": Aspects,
    "aspect-panoramic": Aspects,
}

export interface Lead {
    "_type": string,
    "alt": string,
    "caption": string,
    "credit": string,
    "original": ItemImage,
    "renditions": Renditions,
    "seo": Seo,
    "title": string,
    "uid": string,
    _id?:string,
    __v?:number,
};
