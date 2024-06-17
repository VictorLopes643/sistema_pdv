import AccessPoint from "../../domain/entity/AccessPoint";
import { AccessPointDAODatabase } from "../../infra/repository/AccessPointDAO";


export default class NewAcessPoint {
    constructor(readonly acessPointDAO: AccessPointDAODatabase) {
    }

    async execute(input: Input) {
        const acessPoint = AccessPoint.create(input)
        await this.acessPointDAO.newAccesPoint(acessPoint);
    }

    async getAccessPointByStoreId(storeId: string) {
        return await this.acessPointDAO.getAccesPointByStoreId(storeId);
    }
}
type Input = {
    name:  string,
    storeId: string
}