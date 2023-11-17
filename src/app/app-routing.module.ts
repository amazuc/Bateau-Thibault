import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'delabrise',
    loadChildren: () => import('./listeBateaux/delabrise/delabrise.module').then( m => m.DelabrisePageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./listeBateaux/saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'gast',
    loadChildren: () => import('./listeBateaux/gast/gast.module').then( m => m.GastPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./listeBateaux/aquilon/aquilon.module').then( m => m.AquilonPageModule)
  },
  {
    path: 'gascon',
    loadChildren: () => import('./listeRestaurants/gascon/gascon.module').then( m => m.GasconPageModule)
  },
  {
    path: 'fous',
    loadChildren: () => import('./listeRestaurants/fous/fous.module').then( m => m.FousPageModule)
  },
  {
    path: 'landais',
    loadChildren: () => import('./listeRestaurants/landais/landais.module').then( m => m.LandaisPageModule)
  },
  {
    path: 'villa',
    loadChildren: () => import('./listeRestaurants/villa/villa.module').then( m => m.VillaPageModule)
  },
  {
    path: 'sommelier',
    loadChildren: () => import('./listeRestaurants/sommelier/sommelier.module').then( m => m.SommelierPageModule)
  },
  {
    path: 'homard',
    loadChildren: () => import('./listeRecettes/homard/homard.module').then( m => m.HomardPageModule)
  },
  {
    path: 'jacques',
    loadChildren: () => import('./listeRecettes/jacques/jacques.module').then( m => m.JacquesPageModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./listeRecettes/bar/bar.module').then( m => m.BarPageModule)
  },
  {
    path: 'tourteau',
    loadChildren: () => import('./listeRecettes/tourteau/tourteau.module').then( m => m.TourteauPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./listeRecettes/recette/recette.module').then( m => m.RecettePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
