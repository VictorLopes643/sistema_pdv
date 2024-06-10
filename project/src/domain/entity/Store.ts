import { v4 as uuidv4 } from 'uuid';


export default class Store {
    private constructor(readonly store_id: string,readonly name: string, readonly description: string) {
    }

    static create(name: string, description: string) {
        const storeId = uuidv4()

        return new Store(storeId ,name, description)
    }

    static restore(storeId: string ,name: string, description: string) {
        return new Store(storeId,name, description)
    }
}