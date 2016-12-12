import { Injectable } from '@angular/core';

export interface IStorageService {
  write(key: any, value: any): void;
  read(key: any): any;
  remove(key: any): void;
}

@Injectable()
export class StorageService implements IStorageService {

  public write(key: any, value: any): void {
    localStorage.setItem(key, value);
  }

  public read(key: any): any {
    return localStorage.getItem(key);
  }

  public remove(key: any): void {
    localStorage.removeItem(key);
  }
}