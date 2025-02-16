import { build } from "vite";
import {dirname, resolve} from 'path'

export default {
    //config option
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contacto: resolve (__dirname, 'contacto.html'),
                nosotros: resolve (__dirname, 'nosotros.html') 
                 
            }
        }
    }
}
