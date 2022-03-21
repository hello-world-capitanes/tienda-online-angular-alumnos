import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    protected readonly API_URL = environment.apiUrl;
  
    constructor() {}
  
}  