import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CkeditorModule } from "../ckeditor.module";
import { AdminGuard } from "../authentication/guards/admin.guard";
import { AuthenticationModule } from "../authentication/authentication.module";

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
        CkeditorModule,
        AuthenticationModule,
        RouterModule.forChild([
            { path: 'products/create', component: ProductCreateComponent ,canActivate: [AdminGuard]},
            { path: 'products', component: ProductListComponent },
            { path: 'products/:productId', component: ProductComponent },
            { path: 'products/category/:categoryId', component: ProductListComponent},
            ])
    ],
    exports: [
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent
    ]
})
export class ProductsModule {
}