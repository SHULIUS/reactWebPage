import React from 'react'
import '../App.css'

export default function Frame_Container() {
    return (
        <div class='card mb-3'>
            <table>
                <tbody>
                    <tr>
                        <td><a href="http://www.easiercomp.com/webapp/arcss" target="iframe_a">Aplicación de hojas de estilo (CSS)</a></td>
                        <td><a href="/webapp/introjava" target="iframe_a">Introducción a Javascript</a></td>
                        <td><a href="/webapp/react" target="iframe_a">React</a></td>
                    </tr>
                    <tr>
                        <td><a href="/webapp/cliente" target="iframe_a">Manipulación de información en el lado del cliente</a></td>
                        <td><a href="/webapp/webapps" target="iframe_a">WebApps</a></td>
                        <td><a href="/webapp/nodejs" target="iframe_a">NodeJS. Comunicación síncrona y asíncrona</a></td>
                    </tr>
                    <tr>
                        <td><a href="/webapp/servidor" target="iframe_a">Javascript del lado del servidor</a></td>
                        <td><a href="/webapp/sockets" target="iframe_a">Sockets</a></td>
                        <td><a href="/webapp/conexiondb" target="iframe_a">Conexión con bases de datos</a></td>
                    </tr>
                    <tr>
                        <td><a href="/webapp/htmlcon" target="iframe_a"></a></td>
                        <td><a href="/webapp/creaapi" target="iframe_a">Creación de APIs</a></td>
                        <td><a href="/webapp/mvc" target="iframe_a">Qué es MVC</a></td>
                    </tr>
                    <tr>
                        <td><a href="/webapp/frameworks" target="iframe_a">Frameworks MVC populares en la actualidad</a></td>
                        <td><a href="/webapp/introspring" target="iframe_a">Introducción al desarrollo con Spring Frameworks</a></td>
                        <td><a href="/webapp/construspring" target="iframe_a">Construcción de servicios web con Spring</a></td>
                    </tr>
                    <tr>
                        <td><a href="/webapp/conectaspring" target="iframe_a">Conexión a bases de datos con Spring</a></td>
                        <td><a href="/webapp/vistas" target="iframe_a">Plantillas y generadores de vistas</a></td>
                        <td><a href="Files/WebI.pdf" target="iframe_a">Información sobre el curso</a></td>
                    </tr>
                </tbody>
            </table>

            <table>
                <tr>
                    <td class="containerFrame">
                        <iframe class="iframeExtend" src="/" name="iframe_a" title="Iframe Example"></iframe>
                    </td>
                </tr>
            </table>

        </div>
    )
}
