import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./pages/produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./pages/bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./pages/recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./pages/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'produit/:id',
    loadChildren: () => import('./pages/detail-produits/detail-produits.module').then( m => m.DetailProduitsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information-produit/information-produit.module').then( m => m.InformationProduitPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
