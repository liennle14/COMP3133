class Customer {
    private firstname: string;
    private lastname: string;

    constructor(firstName: string, lastName: string){
        this.firstname = firstName;
        this.lastname = lastName;
    }
    
    public greeter(){
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

let customer1 = new Customer("John", "Smith");
customer1.greeter();