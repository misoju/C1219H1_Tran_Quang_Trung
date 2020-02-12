let Customer = function () {
    this.setNameCustomer = function (nameCustomer) {
        this.nameCustomer = nameCustomer;
    };

    this.getNameCustomer = function () {
        return this.nameCustomer;
    };

    this.setIdCard = function (IdCard) {
        this.IdCard = IdCard;
    };

    this.getIdCard = function () {
        return this.IdCard;
    };

    this.setDateOfBirth = function (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    };

    this.getDateOfBirth = function () {
        return this.dateOfBirth;
    };

    this.setEmailCustomer = function (emailCustomer) {
        this.emailCustomer = emailCustomer;
    };

    this.getEmailCustomer = function () {
        return this.emailCustomer;
    };

    this.setAddressCustomer = function (addressCustomer) {
        this.addressCustomer = addressCustomer;
    };

    this.getAddressCustomer = function () {
        return this.addressCustomer;
    };

    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };

    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };

    this.setDiscount = function (discount) {
        this.discount = discount;
    };

    this.getDiscount = function () {
        return this.discount;
    };

    this.setPax = function (pax) {
        this.pax = pax;
    };

    this.getPax = function () {
        return this.pax;
    };

    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };

    this.getTypeRoom = function () {
        return this.typeRoom;
    };

    this.setRentDay = function (rentDay) {
        this.rentDay = rentDay;
    };

    this.getRentDay = function () {
        return this.rentDay;
    };

    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };

    this.getTypeService = function () {
        return this.typeService;
    };

    this.totalPays = function () {
        let moneyPerDays = 0;
        if (this.getTypeService() === "Villa"){
            moneyPerDays = 500;
        }
        else if (this.getTypeService() === "House"){
            moneyPerDays = 300;
        }
        else {
            moneyPerDays = 100;
        }
        return moneyPerDays * parseFloat(this.getRentDay())*(1 - parseFloat(this.getDiscount())/100);
    }
}