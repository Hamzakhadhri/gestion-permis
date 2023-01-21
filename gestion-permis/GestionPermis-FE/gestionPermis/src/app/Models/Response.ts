import { Conducteur } from "./Conducteur"

export interface Response{
    status: number;
    data : {
        conducteurs?: Conducteur[];
        conducteur?:Conducteur;
        
    }
}