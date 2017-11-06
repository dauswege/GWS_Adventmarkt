import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Settings } from './app.settings.type';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SettingsService{
    
    settings: Promise<Settings> = undefined;

    // constructor(){
    constructor(private http: Http){

    }

    getSettings(): Promise<Settings> {
        if(this.settings == undefined) {
             this.settings = this.http.get("https://api.myjson.com/bins/trgqn")
            .toPromise().then(response => response.json() as Settings);
            
        }

        return this.settings;
    }

}