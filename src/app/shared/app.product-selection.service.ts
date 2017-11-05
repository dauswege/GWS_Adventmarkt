import { Injectable } from '@angular/core';
import { Product, ProductSelection } from '../../app/shared/app.product-data.type';

@Injectable()
export class ProductSelectionService {
    private list: ProductSelection[];

    constructor(){
        this.list = new Array<ProductSelection>();
    }

    addProduct(productToAdd: Product): void {
        
        let productSelection = this.findProductSelectionByProduct(productToAdd);
        if(productSelection==undefined){
            productSelection = new ProductSelection();
            productSelection.product = productToAdd;
            productSelection.amount = 0;
            this.list.push(productSelection);
        }
        productSelection.amount++;
        
    }

    removeProduct(productToAdd: Product): void {
        let productSelection = this.findProductSelectionByProduct(productToAdd);

        if(productSelection.amount>1){
            productSelection.amount--;
        } else {
            this.list.splice(this.list.indexOf(productSelection), 1);
        }
    }

    reset(): void {
        this.list = new Array<ProductSelection>();
    }

    getSelection(): ProductSelection[] {
        return this.list;
    }

    private findProductSelectionByProduct(product: Product): ProductSelection{
        let result : ProductSelection = undefined;
        this.list.forEach(p => {
            if(p.product.name == product.name){
                result = p;
                return p;
            }
        });
        return result;
    }

    
}