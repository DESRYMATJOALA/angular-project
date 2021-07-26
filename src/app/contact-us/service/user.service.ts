import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
    constructor(private httpService:Http){}

    getUserDataList():Observable<any>{
        const dbServerUrl = 'assets/data/user-data.json';
        return this.httpService.get(dbServerUrl);
    }

    

}

