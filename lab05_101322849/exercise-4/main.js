"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer1 = new customer_1.Customer("John", "Smith", 30);
console.log(customer1.greeter());
console.log(customer1.GetAge());
