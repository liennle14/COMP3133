export class Customer {
    private firstname: string;
    private lastname: string;
    private _age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstname = firstName;
        this.lastname = lastName;
        this._age = age;
    }
    
    public greeter(){
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }

    public GetAge() {
        console.log('Age: ' + this._age);
    }
}