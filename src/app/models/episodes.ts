import { Info } from "./characters";

export interface Episodes {
    info:    Info;
    results: Result[];
}

interface Result {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
