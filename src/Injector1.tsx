export  class Injector1 {

    private static registery: {[key: string]: any} = {};

    static getRegistered(key: string) {
        var registered = Injector1.registery[key];
        if (registered) {
            return registered;
        } else {
            throw new Error(`Error: ${key} was not registered.`);
        }
    }

    static register(key: string, value: any) {
        var registered = Injector1.registery[key];
        if (registered) {
            console.log(`Overriding registered value at ${key}.`);
        } else {
            console.log(`Registered value at ${key}.`);
        }
        Injector1.registery[key] = value;
    }
}




