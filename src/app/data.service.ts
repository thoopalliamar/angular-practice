import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getMessage(){ 
    return "this is from service";
  }
  constructor() { }
}
