interface TableDefault {
    _id?: string,
};

export interface TableDynamic extends TableDefault {
    [key: string]: string | boolean | number | undefined;
};
