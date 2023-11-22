import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lieu } from 'src/app/interfaces/lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuxService {

  constructor(private http: HttpClient) { }

  getLieu(id: number){
    return this.http.get<Lieu>('assets/description/lieux.json')
 }

 getLieux(){
  return this.http.get<Lieu[]>('assets/information/lieux.json')
}
}
