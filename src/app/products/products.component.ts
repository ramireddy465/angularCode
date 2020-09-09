import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products :any

  allproducts:boolean = true;
  cagegory1:boolean = false;
  cagegory2:boolean = false;
  cagegory3:boolean = false

  sports = []

  Comfort = []

  Zone = []
  searchText;

  cartItems = []

  items:number = 0 

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    
    this.productService.getAllProducts().subscribe(products=>{

      this.products = products
      console.log(this.products)

      this.products.forEach(product => {

        if(product.Collection === 'Sport')

        this.sports.push(product)
      //  console.log(this.sports)

        if(product.Collection === 'Simple Comfort')

        this.Comfort.push(product)
        console.log(this.Comfort)

        if(product.Collection === 'Zone')

        this.Zone.push(product)
        console.log(this.Zone)


        
      });



    })
  }



  addtocart(product){

    

    this.cartItems.push(product)
    console.log(this.cartItems)
   // let items 
    this.items = this.cartItems.length

  }

  cat1(){

    this.cagegory1 = true;
    this.allproducts = false
    this.cagegory2 = false;
    this.cagegory3 = false;

  }

  cat2(){
    this.cagegory1 = false;
    this.allproducts = false
    this.cagegory2 = true;
    this.cagegory3 = false;
  }

  cat3(){
    this.cagegory1 = false;
    this.allproducts = false;
    this.cagegory2 = false;
    this.cagegory3 = true;
  }

}
