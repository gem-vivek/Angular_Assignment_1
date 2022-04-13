import { Injectable } from '@angular/core';
import { userDetails } from './userdetails';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData: userDetails[] = [];
  constructor() {
  }
}