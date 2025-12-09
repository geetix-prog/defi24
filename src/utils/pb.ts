import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

const pb = new PocketBase("http://defi24.mathis-guellati.fr:8091") as TypedPocketBase;

export default pb;
