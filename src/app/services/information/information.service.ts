import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from 'src/app/interfaces/information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getInformation(nom: string){
    return this.http.get<Information>('assets/information/'+nom+'.json')
 }
}
