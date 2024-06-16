export default class Description {
    constructor(readonly description: string) {
        if(description.length < 10) throw new Error("Description must have at least 10 characters")
    }
    getValue() {
        return this.description
    }
}