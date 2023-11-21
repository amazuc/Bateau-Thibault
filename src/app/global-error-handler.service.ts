// global-error-handler.service.ts
import { Injectable, ErrorHandler } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private toastController: ToastController) {}

  handleError(error: any): void {
    // Log or handle the error as needed
    console.error('Une erreur s\'est produite :', error);

    // Afficher un toast générique pour toutes les erreurs
    this.afficherToast('Votre requête est actuellement indisponible, veuillez réessayer ultérieurement.');
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
