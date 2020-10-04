// Type definitions for mongodb-core 3.2.7
// Project: mongodb-core
// Definitions by: mathstracted https://github.com/mathstracted


declare module 'mongodb-core' {

    type ServerOption = {
        host: string;
        port: number;
    } & Partial<{
        reconnect: boolean;
        size: number;
        keepAlive: boolean;
        connectionTimeout: number;
        ssl: boolean;
        checkServerIdentity: boolean;
        appname: string;
    }>;

    type ServerEvents = 'connect';


    class Server {
        constructor(options: ServerOption): Server
        on(event: ServerEvents, cb): any;
        connect();
    }
}



// /*~ If this module exports functions, declare them like so.
//  */
// export function myFunction(a: string): string;
// export function myOtherFunction(a: number): number;

// /*~ You can declare types that are available via importing the module */
// export interface SomeType {
//   name: string;
//   length: number;
//   extras?: string[];
// }

// /*~ You can declare properties of the module using const, let, or var */
// export const myField: number;