var doC = document.getElementById("nhietDo");
var Temperature = function () {
    this.celsius = doC;

    this.convertCtoF = function () {
        return this.celsius / 33.8;
    }
    this.convertCtoK = function () {
        return this.celsius / 274.15;
    }
    this.getCelsius = function () {
        return this.celsius;
    }

    this.setCelsius = function (temperature) {
        this.celsius = temperature;
    }
}


