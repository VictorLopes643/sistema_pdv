import { v4 as uuidv4 } from 'uuid';
import Name from '../vo/Name';
import Description from '../vo/Description';


export default class Store {
    private constructor(readonly store_id: string,private name: Name, private description: Description) {
    }

    static create(name: string, description: string) {
        const storeId = uuidv4()
        return new Store(storeId ,new Name(name), new Description(description))
    }

    static restore(storeId: string ,name: string, description: string) {
        return new Store(storeId, new Name(name), new Description(description))
    }

    getName() {
        return this.name.getValue()
    }
    
    getDescription() {      
        return this.description.getValue()
    }

    setNewName(name: string) {
        return this.name = new Name(name)
    }

    setNewDescription(description: string) {
        return this.description = new Description(description)
    }

}