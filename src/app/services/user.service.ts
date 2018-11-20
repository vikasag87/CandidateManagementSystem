import { Injectable } from '@angular/core';
import { User } from '../Models/data-model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Candidate } from "../Models/data-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  resultedUser: User;

  constructor(private http: Http, private router: Router) {
  }

  validateUser(username: string, password: string) {

    var body = JSON.stringify({ username: username, password: password });
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });

    return this.http.post('http://localhost:55505/api/User/ValidateUser', body, requestOptions).pipe(map((data: Response) => {
      return data.json() as User;
    }));
  }

  registerUser(user:User){
    
    var body = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:55505/api/User/AddUser', body,
      requestOptions).pipe(map(res => res.json()));
  }
  
  getUserList(){
    return this.http.get('http://localhost:55505/api/User/GetUsers').pipe(map((data : Response) =>{
      return data.json() as User[];
    }))
  }
}
