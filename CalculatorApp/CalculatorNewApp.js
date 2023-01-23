class CalculaterApp {
    static no = 0;
    constructor(operations, results) {
    this.id = ++CalculaterApp.no;
    this.operations = operations;
    this.results = results;
}
}

    class CalculatorRepo {

    calArray = [];

    addData = (data) => this.calArray.push(data);

    getData = () => this.calArray;

}

    const obj = new CalculatorRepo();