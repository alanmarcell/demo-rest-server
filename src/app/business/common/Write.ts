interface IWrite<T> {
    create: (item: T, callback: (error: any, result: any ) => void) => void;
    // tslint:disable:variable-name
    update: (_id: string, item: T, callback: (error: any, result: any) => void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
}

export default IWrite;
