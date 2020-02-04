var ElectricLamp = function () {
    this.status = "on";
    this.turnOff = function () {
        this.status = "off"
    };
    this.turnOn = function () {
        this.status = "on"
    };
    this.getStatus = function () {
        return this.status;
    }
    this.setStatus = function (status) {
        this.status = status;
    }
};