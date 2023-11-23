// global-error-handler.service.ts
import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private toastController: ToastController, private router: Router) {}

  handleError(error: any): void {
    // Log or handle the error as needed
    console.error('Une erreur s\'est produite :', error);

    // Afficher un toast générique pour toutes les erreurs
    this.afficherToast('Votre requête est actuellement indisponible, veuillez réessayer ultérieurement.');
    this.router.navigate(['./home'])
  }

  async afficherToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
