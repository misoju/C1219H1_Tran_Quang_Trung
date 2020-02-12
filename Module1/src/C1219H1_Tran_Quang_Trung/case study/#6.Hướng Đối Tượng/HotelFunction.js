let listCustomers = [];
let checkDeleteCustomer = false;
let checkEditCustomer = false;
let checkDisplayTotalPay =  false;
let validateBirthday = /^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/;
let validateEmail = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
function displayMainMenu() {
    let choose = prompt(
        "1. Add new customer" +
        "\n2. Display Infomation Customer" +
        "\n3. Display Customer Total Pay" +
        "\n4. Edit Customer Info" +
        "\n5. Delete Customer" +
        "\n6. Exit");
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomers();
            break;
        case "3":
            chooseDisplayTotalPay();
            break;
        case "4":
            choiceEditCustomers();
            break;
        case "5":
            choiceDeleteCustomers();
            break;
        case "6":
            return;
        default:
            displayMainMenu();
            break;
    }
}
function addNewCustomer() {
    let checkBirthday = false;
    let checkEmail = false;
    let cus = new Customer();
    cus.setNameCustomer(prompt("Enter name customer: "));
    cus.setIdCard(prompt("Enter id customer: "));
    do {
        cus.setDateOfBirth(prompt("Enter customer birthday (dd/mm/yyyy):"));
        if (validateBirthday.test(cus.getDateOfBirth())){
            checkBirthday = true
        }else{
            alert("Date Of Birth invalid !")
        }
    }
    while (!checkBirthday);
    do {
        cus.setEmailCustomer(prompt("Enter customer email: "));
        if (validateEmail.test(cus.getEmailCustomer())){
            checkEmail = true
        }else{
            alert("Email invalid !")
        }
    }
    while (!checkEmail);
    cus.setAddressCustomer(prompt("Enter customer address: "));
    cus.setTypeCustomer(prompt("Enter customer type: "));
    cus.setDiscount(prompt("Enter discount: "));
    cus.setPax(prompt("Enter number of people: "));
    cus.setTypeRoom(prompt("Enter room type:"));
    cus.setRentDay(prompt("Enter number day stay: "));
    cus.setTypeService(prompt("Enter service type: "));
    listCustomers.push(cus);
    displayMainMenu();
}
function displayCustomers() {
    let result = "";
    for (var i = 0; i < listCustomers.length; i++){
        result += "\n" + (i+1) + ". " + "Name :"+ listCustomers[i].getNameCustomer() + "\n" + "Id customer: "
            + listCustomers[i].getIdCard() ;
    }
    result = "\n" + (listCustomers.length + 1) + ".Bach to menu";
    let chooseDisplayInfo = prompt(result);

    if (!checkEditCustomer) {
        let choiceDisplayInfo = prompt(result + "\nchoice customer you want to edit:");
        displayCustomersInfo(choiceDisplayInfo - 1);
    }
    else if (!checkDeleteCustomer) {
        let choiceDisplayInfo = prompt(result + "\nchoice customer you want to delete:");
        deleteCustomer(choiceDisplayInfo - 1);
    }
    else {
        checkEditCustomer = false;
        checkDeleteCustomer = false;
        let choiceDisplayInfo = prompt(result + "\nchoice customer you want to see:");
        displayCustomersInfo(choiceDisplayInfo - 1);
    }
}
function displayCustomersInfo(index) {
    if (checkEditCustomer){
        let choiceEditInfo = prompt("1.Name :" + listCustomers[index].getNameCustomer()+
            "\n2.Id card : " + listCustomers[index].getIdCard()+
            "\n3.Dob : " + listCustomers[index].getDateOfBirth()+
            "\n4.Email : " + listCustomers[index].getEmailCustomer()+
            "\n5.Address : " + listCustomers[index].getAddressCustomer()+
            "\n6.Customer type : " + listCustomers[index].getTypeCustomer()+
            "\n7.Discount : " + listCustomers[index].getDiscount()+
            "\n8.Pax : " + listCustomers[index].getPax()+
            "\n9.Type room : " + listCustomers[index].getTypeRoom()+
            "\n10.Rent day : " + listCustomers[index].getRentDay()+
            "\n11.Type service : " + listCustomers[index].getTypeService()+
            "\n.Back "
        );
        if (choiceEditInfo <= 6) {
            editCustomer(Number.parseInt(choiceEditInfo) - 1);
        }else{
            checkEditCustomer = false;
            displayCustomers();
        }
    }
    else {
        alert("Infomation of customer : \n" +
            "Name :" + arrListCustomers[index][0] +
            "\nId card : " + arrListCustomers[index][1] +
            "\nDob : " + arrListCustomers[index][2] +
            "\nEmail : " + arrListCustomers[index][3] +
            "\nAddress : " + arrListCustomers[index][4] +
            "\nCustomer type : " + arrListCustomers[index][5]
        );
    }
}

displayMainMenu();