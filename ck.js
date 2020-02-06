function CtoK (celsiusNumber) {
    return celsiusNumber + 273.15;
}
function KtoC (kelvinNumber) {
    return kelvinNumber - 273.15;
}

module.exports = { CtoK: CtoK, KtoC: KtoC };