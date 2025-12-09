import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

const getBaseUrl = () => {
    // En développement local
    if (import.meta.env.DEV) {
        return "http://127.0.0.1:8090";
    }
    
    // En production, utilise l'URL Netlify qui redirigera vers PocketBase
    return "/api";
};

const pb = new PocketBase(getBaseUrl()) as TypedPocketBase;

export default pb;
