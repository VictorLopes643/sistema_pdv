import { th } from "@faker-js/faker"
import { StoreDAO } from "../../infra/repository/StoreDAO"
import Store from "../../domain/entity/Store"



export default class NewStore {

    constructor(readonly storeDAO: StoreDAO) {
    }

    async execute(inputStore: Input) {
        const store = await this.storeDAO.getStoreByName(inputStore.name)
        if (store) throw new Error("Store already exists")
        const storeCreated = Store.create(inputStore.name, inputStore.description)
    console.log(storeCreated)
        await this.storeDAO.newStore(storeCreated)
    }
}

type Input = {
    name: string
    description: string
}