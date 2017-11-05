import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Product } from './app.product-data.type'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService{

    //     public products : Product[] = [
    //     {
    //         name: 'Bier / Radler (0,5l)',
    //         price: 2.50
    //     },
    //     {
    //         name: 'Limo',
    //         price: 1.50
    //     },
    //     {
    //         name: '1/4l Wein',
    //         price: 3.50
    //     },
    //     {
    //         name: '1/4l Spritzer',
    //         price: 2.50
    //     },
    //     {
    //         name: '1 Fl. Wein',
    //         price: 9.00
    //     },
    //     {
    //         name: 'Frankfurter',
    //         price: 2.50
    //     },
    //     {
    //         name: 'Kuchen',
    //         price: 1.50
    //     },
    //     {
    //         name: 'Kaffee',
    //         price: 1.50
    //     },
    //     {
    //         name: 'Schnaps',
    //         price: 1.00
    //     },
    // ];

    // constructor(){
    constructor(private http: Http){

    }

    getProducts(): Promise<Product[]> {
        // this.http.get("https://jsonblob.com/78ed0d3d-50c5-11e7-ae4c-13ee7a64f9f0")
        // .subscribe(res => {
        //     console.log(res.json);
        // });
        return this.http.get("https://api.myjson.com/bins/f900r")
            .toPromise()
            .then(response => response.json() as Product[]);
            // .subscribe(res => {
            //     this.products = <Product[]> res;
            // })
    }

}