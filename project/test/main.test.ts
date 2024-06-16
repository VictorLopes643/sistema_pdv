import { faker } from '@faker-js/faker';
import axios from "axios";

test("Deve listar os produtos", async function () {
    const inputStore = {
        name:  faker.company.name(),
        description: faker.company.buzzPhrase()
    }
    const response = await axios.post('http://app:3000/store', inputStore);
    console.log("response", response.data)
    const output = await axios.get(`http://app:3000/store/${inputStore.name}`);
    console.log("output", output.data)
    expect(output).toBeDefined();
    expect(response).toBeDefined();
});

