import React from 'react'
import '../App.css'

export default function Frame_Container() {
    return (
        <div class='card mb-3'>
            <table>
                <tbody>
                    <tr>
                        <td><a href="http://www.easiercomp.com/webapp/arcss" target="iframe_a">Aplicación de hojas de estilo (CSS)</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/introjava" target="iframe_a">Introducción a Javascript</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/react" target="iframe_a">React</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.easiercomp.com/webapp/cliente" target="iframe_a">Manipulación de información en el lado del cliente</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/webapps" target="iframe_a">WebApps</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/nodejs" target="iframe_a">NodeJS. Comunicación síncrona y asíncrona</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.easiercomp.com/webapp/servidor" target="iframe_a">Javascript del lado del servidor</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/sockets" target="iframe_a">Sockets</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/conexiondb" target="iframe_a">Conexión con bases de datos</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.easiercomp.com/webapp/htmlcon" target="iframe_a">Html</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/creaapi" target="iframe_a">Creación de APIs</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/mvc" target="iframe_a">Qué es MVC</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.easiercomp.com/webapp/frameworks" target="iframe_a">Frameworks MVC populares en la actualidad</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/introspring" target="iframe_a">Introducción al desarrollo con Spring Frameworks</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/construspring" target="iframe_a">Construcción de servicios web con Spring</a></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.easiercomp.com/webapp/conectaspring" target="iframe_a">Conexión a bases de datos con Spring</a></td>
                        <td><a href="http://www.easiercomp.com/webapp/vistas" target="iframe_a">Plantillas y generadores de vistas</a></td>
                        <td><a href="http://www.easiercomp.com/Files/WebI.pdf" target="iframe_a">Información sobre el curso</a></td>
                    </tr>
                </tbody>
            </table>

            <table>
                <tr>
                    <td class="containerFrame">
                        <iframe class="iframeExtend" src="https://shulius.github.io/reactWebPage/" name="iframe_a" title="Iframe Example"></iframe>
                    </td>
                </tr>
            </table>

        </div>
    )
}
