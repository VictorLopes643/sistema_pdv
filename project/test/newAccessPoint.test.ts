import { faker } from "@faker-js/faker";
import { StoreDAODatabase } from "../src/infra/repository/StoreDAO";
import NewStore from "../src/application/usecase/NewStore";
import NewAcessPoint from "../src/application/usecase/NewAccessPoint";
import { AccessPointDAODatabase } from "../src/infra/repository/AccessPointDAO";


test("Deve Criar um ponto de venda", async function () {   
    const accessPointDAO = await new AccessPointDAODatabase()
    const storeDAO = await new StoreDAODatabase()
    const inputStore = {
        name:  faker.company.name(),
        description: faker.company.buzzPhrase()
    }
    await new NewStore(storeDAO).execute(inputStore);
    const store = await storeDAO.getStoreByName(inputStore.name);
    const storeId = store?.getStoreId();
    const inputAccessPoint = {
        name:  'Ponto de Venda 1',
        storeId: storeId? storeId : ''
    }
    await new NewAcessPoint(accessPointDAO).execute(inputAccessPoint);

});


test.only("Deve listar um ponto de venda", async function () {   
    const accessPointDAO = await new AccessPointDAODatabase()
    const storeDAO = await new StoreDAODatabase()
    const inputStore = {
        name:  faker.company.name(),
        description: faker.company.buzzPhrase()
    }
    await new NewStore(storeDAO).execute(inputStore);
    const store = await storeDAO.getStoreByName(inputStore.name);
    const storeId = store?.getStoreId();
    const inputAccessPoint = {
        name:  'Ponto de Venda 1',
        storeId: storeId? storeId : ''
    }
    await new NewAcessPoint(accessPointDAO).execute(inputAccessPoint);
    const accessPoint = await accessPointDAO.getAccesPointByStoreId(inputAccessPoint.storeId);
    console.log("accessPoint", accessPoint)
    expect(accessPoint).toBeDefined()
});
