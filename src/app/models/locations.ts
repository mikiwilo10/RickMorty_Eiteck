import { Info } from "./characters";

export interface Locations {
    info:    Info;
    results: Result[];
}



interface Result {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}
