

function FtoC(f) {
    return (f - 32) * 5 / 9;
}
function CtoF(c){
    return (c *9/5) + 32;
}

module.exports = { FtoC: FtoC, CtoF: CtoF };
