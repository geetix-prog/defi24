import PocketBase from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";

const pb = new PocketBase("http://37.59.112.36:8091") as TypedPocketBase;

export default pb;
