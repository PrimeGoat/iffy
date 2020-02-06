function FtoC(f) {
    f = Number(f);
    return (f - 32) * 5 / 9;
}
function CtoF(c){
    c = Number(c);
    return (c *9/5) + 32;
}

module.exports = { FtoC: FtoC, CtoF: CtoF };
