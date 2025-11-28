import zlib from "zlib";
import { promisify } from "util";
const gzip = promisify(zlib.gzip);
const gunzip = promisify(zlib.gunzip);
