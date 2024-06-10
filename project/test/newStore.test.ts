import { faker } from "@faker-js/faker";
import { StoreDAODatabase } from "../src/infra/repository/StoreDAO";
import NewStore from "../src/application/usecase/NewStore";


test("Deve criar uma loja", async function () {   

    const storeDAO = await new StoreDAODatabase()
    const inputStore = {
        name:  faker.company.name(),
        description: faker.company.buzzPhrase()
    }
    await new NewStore(storeDAO).execute(inputStore);
    const store = await storeDAO.getStoreByName(inputStore.name);
    expect(store?.name).toBe(inputStore.name);



});