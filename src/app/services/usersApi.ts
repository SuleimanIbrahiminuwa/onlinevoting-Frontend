import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users }  from '../classes/userClass'
@Injectable()
export class UserService{

constructor(private httpclient: HttpClient){}   

createUsers(users: Users): Observable<any>{
 return this.httpclient.post('localhost:8085/api/vote/user/register', users);
}    

}