import { info } from './info.js';
import { path } from './books/index.js'
import { Components } from './components.js';
export const swaggerConfig = {
    ...info,
    ...path,
    ...Components
};