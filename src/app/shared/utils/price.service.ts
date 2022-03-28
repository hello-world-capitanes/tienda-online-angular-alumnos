import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PriceService {

    getPrice(number: number) {
        return (!Number.isNaN(number) ? "-" : number.toFixed(2)) + " €";
    }

}
