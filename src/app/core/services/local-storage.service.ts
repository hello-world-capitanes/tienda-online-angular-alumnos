import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string): string | null {
    if (!key || key.length <= 0) {
      return null;
    }
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    if (!key || key.length <= 0 || !value || value.length <= 0) {
      return;
    }
    localStorage.setItem(key, value);
  }
}
