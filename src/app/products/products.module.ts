import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CkeditorModule } from "../ckeditor.module";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent
    ],
    imports: [
        RouterModule, 
        CommonModule,
        FormsModule,
        CkeditorModule
    ],
    exports: [
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent
    ]
})
export class ProductsModule {
}