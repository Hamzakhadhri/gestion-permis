import { Conducteur } from "./Conducteur";
export enum Type {
    A ,
    B ,
    C ,
  }


export interface Permis {
    id: number;
    type: Type ;
    dateEmission: Date;
    dateExpiration:Date;
    points: number;
    conducteur : Conducteur
}
