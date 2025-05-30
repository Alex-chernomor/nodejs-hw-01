import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pathURL = fileURLToPath(import.meta.url);
const dirname = path.dirname(pathURL);
export const PATH_DB = path.join(dirname, '..', 'db', 'db.json');