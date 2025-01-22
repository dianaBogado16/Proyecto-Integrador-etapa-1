import { resolve } from 'path' /* node */
// https://vite.dev/config/
// https://vite.dev/config/shared-options.html#css-devsourcemap
// https://vite.dev/guide/build.html#multi-page-app
export default {
    // config options
    css: {
        devSourcemap: true // configuramos par ver en que línea y donde está escrita la regla css cuando estamos en inspeccionar viendo el codigo
    },
    build: { /* Agregamos eso por el tema del multipage: cuando tenemos varias ventanas(otros html disponibles) para que no me apareciera luego pagina not found cuando lo subo a vite */
        rollupOptions: {
            input: resolve(__dirname, 'index.html') /* va a buscar el archivo index y lo tiene en cuenta */
        }
    }
}
