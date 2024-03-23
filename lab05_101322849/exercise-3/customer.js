var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    };
    return Customer;
}());
var customer1 = new Customer("John", "Smith");
customer1.greeter();
