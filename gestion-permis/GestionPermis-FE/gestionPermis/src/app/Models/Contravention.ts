import { Permis } from "./Permis";

export interface Contravention {
    id: number;
    motif: string;
    permis: Permis;
    retaitPoints:number;
    date: Date;

}

