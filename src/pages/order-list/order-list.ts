import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductSelection } from '../../app/shared/app.product-data.type';
import { ProductSelectionService } from '../../app/shared/app.product-selection.service';
import { CalculatorPage } from '../calculator/calculator';
import { ChangePage } from '../change/change';

 @Component({
     selector: 'page-order-list',
     templateUrl: 'order-list.html'
 })
 export class OrderListPage implements OnInit{

    selectedProduct: ProductSelection;

    constructor(
        public navCtrl: NavController,
        private productSelectionService: ProductSelectionService, 
        ){

    }

    ngOnInit(){
         this.productSelectionService.getSelection();
    }

    getSelection() : ProductSelection[]{
        return this.productSelectionService.getSelection();
    }

    getSum(): number {
        let result = 0;
        this.productSelectionService.getSelection().forEach(productSelection => {
            let sum = productSelection.amount * productSelection.product.price;
            result += sum;
        });

        return result;
    }

    goBack(): void {
        this.navCtrl.push(CalculatorPage);
    }

    goChange(): void {
        this.navCtrl.push(ChangePage);
    }

    increaseAmount(productSelection : ProductSelection){
        this.productSelectionService.addProduct(productSelection.product);
    }

    decreaseAmount(productSelection : ProductSelection){
        this.productSelectionService.removeProduct(productSelection.product);
    }

    onSelect(product: ProductSelection): void{
        if (this.selectedProduct != product){
            this.selectedProduct = product;
        } else {
            this.selectedProduct = undefined;
        }
    }

    reset(): void {
        this.productSelectionService.reset();
        this.navCtrl.push(CalculatorPage);
    }

 }