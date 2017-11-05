import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderListPage } from '../order-list/order-list'
import { Product } from '../../app/shared/app.product-data.type';
import { ProductSelectionService } from '../../app/shared/app.product-selection.service';
import { ProductService} from '../../app/shared/app.product.services';

@Component({
    selector: 'page-calculator',
    templateUrl: 'calculator.html',
    providers: [ProductService]
})
export class CalculatorPage implements OnInit {

   products : Product[];

   constructor(
       public navCtrl: NavController,
       private productSelectionService : ProductSelectionService, 
       private productService: ProductService
       ){
   }

   ngOnInit(){
       this.productService.getProducts().then(res => {
           this.products = res;
        });
   }

   addProduct(product: Product){
       this.productSelectionService.addProduct(product);
   }

   getSum(): number {
       let result = 0;
       this.productSelectionService.getSelection().forEach(productSelection => {
           let sum = productSelection.amount * productSelection.product.price;
           result += sum;
       });

       return result;
   }

   goToSummary(){
       this.navCtrl.push(OrderListPage);
   }

}