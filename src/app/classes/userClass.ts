export class Users{
   firstName: string;
   lastName: string;
   phoneNumber:string;
   email:string;
   password:string;
   
   constructor(firstName: string, lastName: string, phoneNumber: string, email: string, password: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
   }
}