function CtoK (celsiusNumber) {
    celsiusNumber = Number(celsiusNumber);
    return celsiusNumber + 273.15;
}
function KtoC (kelvinNumber) {
    kelvinNumber = Number(kelvinNumber);
    return kelvinNumber - 273.15;
}

module.exports = { CtoK: CtoK, KtoC: KtoC };