function Student() {
    this.setIdStudent = function (idStudent) {
        this.idStudent= idStudent;
    };

    this.getIdStudent = function () {
        return this.idStudent;
    };

    this.setNameStudent = function (nameStudent) {
        this.nameStudent= nameStudent;
    };

    this.getNameStudent = function () {
        return this.nameStudent;
    };

    this.setBirthdayStudent = function (birthdayStudent) {
        this.birthdayStudent= birthdayStudent;
    };

    this.getBirthdayStudent = function () {
        return this.birthdayStudent;
    };

    this.setFinalPoint = function (finalPoint) {
        this.finalPoint = finalPoint;
    };

    this.getFinalPoint = function () {
        return this.finalPoint;
    };

    this.finalReview = function () {
        let finalReview = "";
        if (this.getFinalPoint() > 8){
            finalReview = "Gioi";
        }
        else if (this.getFinalPoint() >= 6.5 && this.getFinalPoint() < 8){
            finalReview = "Kha";
        }
        else if (this.getFinalPoint() >= 5 && this.getFinalPoint() < 6.5){
            finalReview = "TB";
        }
        else if (this.getFinalPoint() >= 3.5 && this.getFinalPoint() < 5){
            finalReview = "Yeu";
        }
        else if (this.getFinalPoint() < 3.5){
            finalReview = "Kem";
        }
        return finalReview;
    }
}