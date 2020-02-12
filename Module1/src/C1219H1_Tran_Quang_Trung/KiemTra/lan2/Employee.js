function Employee() {
    this.setNameEmployee = function (nameEmployee) {
        this.nameEmployee = nameEmployee;
    };

    this.getNameEmployee = function () {
        return this.nameEmployee;
    };

    this.setDayWork = function (dayWork) {
        this.dayWork= dayWork;
    };

    this.getDayWork = function () {
        return this.dayWork;
    };

    this.setBaseSalary = function (baseSalary) {
        this.baseSalary = baseSalary;
    };

    this.getBaseSalary = function () {
        return this.baseSalary;
    };

    this.finalSalary = function () {
        let finalSalary = Number.parseInt(this.baseSalary) * Number.parseInt(this.dayWork);
        return finalSalary;
    }
}