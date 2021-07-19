import { User } from './../model/Users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  users: User[]=[];
  constructor(private http:HttpClient) {
    this.getUsers().subscribe((response)=> {
      this.users = response;
    });
   }

  Userurl: string = "http://localhost:3000/User";

  Login(email: any, password: any){
    for(let i = 0, len = this.users.length; i < len; i++){
      if(this.users[i].email === email && this.users[i].password === password){
        localStorage.setItem('myuser', JSON.stringify(this.users[i]));
        console.log(this.users[i]);
      }
    }
  }

  Logout(){
    localStorage.removeItem("myuser");
  }
  getMyUser(){
    const myData = JSON.parse(localStorage.getItem('myuser') || '{}');
    console.log(myData);
    return myData;
  }

  isLoggedin(): any{
    if(localStorage.getItem('myuser')?.valueOf === undefined){
      console.log('null');
      return false;
    }else if(localStorage.getItem('myuser')?.valueOf !== undefined){
      console.log('not null');
      return true;
    }
  }
  addUser(user: User){
    return this.http.post<User>(this.Userurl, user).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  getUserType() : number{
    const myData = JSON.parse(localStorage.getItem('myuser') || '{}');
    console.log(myData.type);
    return myData.type;
  }
  getUsers(){
    return this.http.get<User[]>(this.Userurl);
  }

  resetPassword(newPass: string){
    const myData = JSON.parse(localStorage.getItem('myuser') || '{}');
    myData.password = newPass;
    this.updateUser(myData);
  }

  updateUser(user: any){
    this.http.put(`${this.Userurl}/${user.id}`, user).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
