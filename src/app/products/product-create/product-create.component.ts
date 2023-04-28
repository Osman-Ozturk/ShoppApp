import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../categories/category.model';
import { CategoryService } from '../../categories/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [CategoryService]
})
export class ProductCreateComponent implements OnInit {

  categories: Category[] = [];
  error: string = "";
  model: any = {
    name: "iphone 17",
    price: 20000,
    categoryId: "0"
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  saveProduct(form: NgForm) {

    const extensions = ["jpeg","jpg","png"];
    const extension = this.model.imageUrl.split(".").pop();

    if(extensions.indexOf(extension) == -1) {
      this.error ="Die Erweiterung von Image ist jpeg, jpg oder png.";
      return;
    }

    if(this.model.categoryId == "0") {
      this.error ="Sie sollen eine Kategorie auswählen.";
      return;
    }

    const product = { 
      id: 1, 
      name: this.model.name, 
      price: this.model.price, 
      imageUrl: this.model.imageUrl, 
      description: this.model.description, 
      isActive: this.model.isActive, 
      categoryId: this.model.categoryId
    }

    if(form.valid) {
      this.productService.createProduct(product).subscribe(data => {
        this.router.navigate(['/products']);
      });
    } else {
      this.error ="Sie sollen Form korrekt ausfüllen.";
    }

    console.log(this.model);



  }

}
