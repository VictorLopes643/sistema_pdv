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
    expect(store?.getName()).toBe(inputStore.name);
    expect(store?.getDescription()).toBe(inputStore.description);
})

test.skip("Não deve criar uma loja com Descripton menor que 10 caracters", async function () {   

    const storeDAO = await new StoreDAODatabase()
    const inputStore = {
        name:  faker.company.name(),
        description: 'menor'
    }
    let outputNewStore = await new NewStore(storeDAO)
    await expect(() => outputNewStore.execute(inputStore)).rejects.toThrow(new Error("Description must have at least 10 characters"));

});