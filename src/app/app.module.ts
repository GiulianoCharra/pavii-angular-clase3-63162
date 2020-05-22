import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from "./menu/menu.component";
import { PrincipalComponent } from "./principal/principal.component";
import { ArticulosListaComponent } from "./articulos-lista/articulos-lista.component";
import { ArticulosCargaComponent } from "./articulos-carga/articulos-carga.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "listaarticulos/:id", component: ArticulosListaComponent },
      { path: "listaarticulos", component: ArticulosListaComponent },
      { path: "cargaarticulos", component: ArticulosCargaComponent },
      { path: "pricipal", component: PrincipalComponent },
      { path: "", component: PrincipalComponent }
    ])
  ],
  declarations: [
    MenuComponent,
    PrincipalComponent,
    ArticulosListaComponent,
    ArticulosCargaComponent
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
