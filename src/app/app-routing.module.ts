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
    path: 'delabrise',
    loadChildren: () => import('./pages/listeBateaux/delabrise/delabrise.module').then( m => m.DelabrisePageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./pages/listeBateaux/saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'gast',
    loadChildren: () => import('./pages/listeBateaux/gast/gast.module').then( m => m.GastPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./pages/listeBateaux/aquilon/aquilon.module').then( m => m.AquilonPageModule)
  },
  {
    path: 'gascon',
    loadChildren: () => import('./pages/listeRestaurants/gascon/gascon.module').then( m => m.GasconPageModule)
  },
  {
    path: 'fous',
    loadChildren: () => import('./pages/listeRestaurants/fous/fous.module').then( m => m.FousPageModule)
  },
  {
    path: 'landais',
    loadChildren: () => import('./pages/listeRestaurants/landais/landais.module').then( m => m.LandaisPageModule)
  },
  {
    path: 'villa',
    loadChildren: () => import('./pages/listeRestaurants/villa/villa.module').then( m => m.VillaPageModule)
  },
  {
    path: 'sommelier',
    loadChildren: () => import('./pages/listeRestaurants/sommelier/sommelier.module').then( m => m.SommelierPageModule)
  },
  {
    path: 'homard',
    loadChildren: () => import('./pages/listeRecettes/homard/homard.module').then( m => m.HomardPageModule)
  },
  {
    path: 'jacques',
    loadChildren: () => import('./pages/listeRecettes/jacques/jacques.module').then( m => m.JacquesPageModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./pages/listeRecettes/bar/bar.module').then( m => m.BarPageModule)
  },
  {
    path: 'tourteau',
    loadChildren: () => import('./pages/listeRecettes/tourteau/tourteau.module').then( m => m.TourteauPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./pages/listeRecettes/recette/recette.module').then( m => m.RecettePageModule)
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
