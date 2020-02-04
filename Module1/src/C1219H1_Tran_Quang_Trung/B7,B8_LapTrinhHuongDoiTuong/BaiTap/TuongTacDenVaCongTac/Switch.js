var SwitchButton = function () {
    this.checkStatus = function (ElectricLamp) {
        return ElectricLamp.getStatus()
    }
    this.switchButton = function (ElectricLamp) {
        for (var i = 0 ; i < 10 ; i++){
            if (ElectricLamp.getStatus() == "on"){
                ElectricLamp.setStatus(ElectricLamp.turnOff());
            }
            if (ElectricLamp.getStatus() == "off"){
                ElectricLamp.setStatus(ElectricLamp.turnOn());
            }
            document.writeln(ElectricLamp.getStatus());
        }
    }

}