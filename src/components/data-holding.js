class dataHolding {

    constructor() {
        this.data = {};
    }

    getData(data) {
        this.data = data;
    }

    setData() {
        return this.data;
    }

}
export default new dataHolding();