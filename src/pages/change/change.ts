import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductSelectionService } from "../../app/shared/app.product-selection.service";
import { OrderListPage } from '../order-list/order-list';
import { CalculatorPage } from "../calculator/calculator";

 @Component({
     selector: 'page-change',
     templateUrl: 'change.html'
 })
 export class ChangePage implements OnInit{
     
    sum: number;
    moneyIn: number;
    change: number;

    constructor (
        public navCtrl: NavController,
        private productSelectionService: ProductSelectionService
    ){

    }

    ngOnInit(): void {
        this.sum = this.initSum();
        this.change = this.sum*(-1);
    }    

    calcChange() : void{
        let tmpMoneyIn;
        if(this.moneyIn == undefined){
             tmpMoneyIn = 0;
        } else {
            tmpMoneyIn = this.moneyIn;
        }

        this.change = tmpMoneyIn - this.sum;

    }

    getSum() : any {
        return this.sum;
    }
    getChange() : any {
        return this.change;
    }

    roundSum() : any {
        let fractional = this.sum - Math.trunc(this.sum);
        console.log("fract:" + fractional);
        console.log("abs: " + Math.trunc(this.sum));
        console.log("round 0.5: " + (Math.trunc(this.sum) + 0.5));
        console.log(" Math.trunc(this.sum) + 1: " +  Math.trunc(this.sum) + 1);
        if(fractional < 0.5){
            this.sum = (Math.trunc(this.sum) + 0.5);

        } else {
            this.sum = Math.trunc(this.sum) + 1;
            console.log(this.sum);
        }
        this.calcChange();
    }

    undo(): void {
        this.sum = this.initSum();
        this.calcChange();
    }

    private initSum(): number {
        let result = 0;
        this.productSelectionService.getSelection().forEach(productSelection => {
            let sum = productSelection.amount * productSelection.product.price;
            result += sum;
        });

        return result;
    }

    goBack(): void {
        this.navCtrl.push(OrderListPage);
    }

    reset(): void {
        this.productSelectionService.reset();
        this.navCtrl.push(CalculatorPage);
    }

 }