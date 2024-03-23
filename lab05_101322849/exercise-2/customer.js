var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    };
    return Customer;
}());
var customer1 = new Customer();
customer1.firstname = 'John';
customer1.lastname = 'Smith';
customer1.greeter();
