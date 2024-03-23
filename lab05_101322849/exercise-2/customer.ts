class Customer {
    firstname: string;
    lastname: string;

    public greeter(){
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

let customer1 = new Customer();
customer1.firstname = 'John';
customer1.lastname = 'Smith';
customer1.greeter(); 

