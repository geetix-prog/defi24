import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";

const pb = new PocketBase('https://defi24.mathis-guellati.fr') as TypedPocketBase;

pb.autoCancellation(false);

export default pb;