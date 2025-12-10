import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";

const pb = new PocketBase('https://defi24.mathis-guellati.fr') as TypedPocketBase;

// Important : configurer CORS dans PocketBase
pb.autoCancellation(false);

export default pb;