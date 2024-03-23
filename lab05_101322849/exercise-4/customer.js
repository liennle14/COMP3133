"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstname = firstName;
        this.lastname = lastName;
        this._age = age;
    }
    Customer.prototype.greeter = function () {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    };
    Customer.prototype.GetAge = function () {
        console.log('Age: ' + this._age);
    };
    return Customer;
}());
exports.Customer = Customer;
