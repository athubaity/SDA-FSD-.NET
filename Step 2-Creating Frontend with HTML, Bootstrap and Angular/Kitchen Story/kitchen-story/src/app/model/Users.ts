export class User{
    constructor(
        public id: number,
        public type: number,
        public fname: string,
        public lname: string,
        public email: string,
        public password: string,
        public phone: string){
            this.id=id;
            this.type=type;
            this.email=email;
            this.fname=fname;
            this.lname=lname;
            this.password=password;
            this.phone=phone;
        }
}