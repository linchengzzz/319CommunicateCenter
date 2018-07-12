var Demo = (function () {
    function Demo(a, b) {
        this.a = a;
        this.b = b;
    }
    Demo.prototype.sum = function () {
        return this.a + this.b;
    };
    return Demo;
}());
export { Demo };
