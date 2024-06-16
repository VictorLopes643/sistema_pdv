import { StoreDAO } from "../../infra/repository/StoreDAO"

export default class getStore {

    constructor(readonly storeDAO: StoreDAO) {
    }

    async execute(inputStore: Input) {
        const store = await this.storeDAO.getStoreByName(inputStore.name)
        if (!store) throw new Error("Store not found")
        return store
    }
}

type Input = {
    name: string
}