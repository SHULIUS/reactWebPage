import React from 'react'

export default function Frame_Container() {
  return (
    <div class="container bg-light">
            <table style="width:100%;">
                <tbody><tr>
                    <td><a href="/webapp/arcss" target="iframe_a" style="color:black;">Aplicación de hojas de estilo (CSS)</a></td>
                    <td><a href="/webapp/introjava" target="iframe_a" style="color:black;">Introducción a Javascript</a></td>
                    <td><a href="/webapp/react" target="iframe_a" style="color:black;">React</a></td>
                </tr>
                <tr>
                    <td><a href="/webapp/cliente" target="iframe_a" style="color:black;">Manipulación de información en el lado del cliente</a></td>
                    <td><a href="/webapp/webapps" target="iframe_a" style="color:black;">WebApps</a></td>
                    <td><a href="/webapp/nodejs" target="iframe_a" style="color:black;">NodeJS. Comunicación síncrona y asíncrona</a></td>
                </tr>
                <tr>
                    <td><a href="/webapp/servidor" target="iframe_a" style="color:black;">Javascript del lado del servidor</a></td>
                    <td><a href="/webapp/sockets" target="iframe_a" style="color:black;">Sockets</a></td>
                    <td><a href="/webapp/conexiondb" target="iframe_a" style="color:black;">Conexión con bases de datos</a></td>
                </tr>
                <tr>
                    <td><a href="/webapp/htmlcon" target="iframe_a" style="color:black;"></a></td>
                    <td><a href="/webapp/creaapi" target="iframe_a" style="color:black;">Creación de APIs</a></td>
                    <td><a href="/webapp/mvc" target="iframe_a" style="color:black;">Qué es MVC</a></td>
                </tr>
                <tr>
                    <td><a href="/webapp/frameworks" target="iframe_a" style="color:black;">Frameworks MVC populares en la actualidad</a></td>
                    <td><a href="/webapp/introspring" target="iframe_a" style="color:black;">Introducción al desarrollo con Spring Frameworks</a></td>
                    <td><a href="/webapp/construspring" target="iframe_a" style="color:black;">Construcción de servicios web con Spring</a></td>
                </tr>
                <tr>
                    <td><a href="/webapp/conectaspring" target="iframe_a" style="color:black;">Conexión a bases de datos con Spring</a></td>
                    <td><a href="/webapp/vistas" target="iframe_a" style="color:black;">Plantillas y generadores de vistas</a></td>
                    <td><a href="Files/WebI.pdf" target="iframe_a" style="color:black;">Información sobre el curso</a></td>
                </tr>
            </tbody></table>
            <table style="width:100%">
                <tbody>
                    <tr style="vertical-align:top;">
                        <td style="width:20% ;background-color: rgba(56, 142, 240, 0.989);">
                        </td>

                    </tr>
                    <tr><td>
                        <iframe src="/" name="iframe_a" title="Iframe Example" style="width: 100%;height: 1000px;"></iframe>
                    </td>
                </tr></tbody>
            </table>



            
        <table style="width:100%">
            <tr>
                <td style="width:20%">
                    <p><a href="/contact" target="iframe_a">Tema uno</a></p>
                    <p><a href="/contact" target="iframe_a">Tema dos</a></p>
                </td>
                <td style="width:80%"><iframe src="/contact" name="iframe_a" title="Iframe Example"></iframe></td>
            </tr>
        </table>
        </div>
  )
}
