import { v4 as uuidv4 } from 'uuid';

export default class AccessPoint {
    private constructor(readonly accessPoint_id: string,private storeId: string, private name: string) { 
    }
    static create(input: accessPointInput) {
        const cartId = uuidv4()
        return new AccessPoint(cartId, input.storeId, input.name)
    }

    static restore(accessPoint_id: string ,storeId: string, name: string) {
        return new AccessPoint(accessPoint_id, storeId, name)
    }

    getAccessPointId() {
        return this.accessPoint_id
    }
    getStoreId() {
        return this.storeId
    }
    getName() {
        return this.name
    }
}

type accessPointInput = {
    storeId: string,
    name: string
}