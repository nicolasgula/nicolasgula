import '../../scss/blogs.scss';

const title = {
    title: "C# - Sintaxis Basica",
    subtitle: "26 de Marzo de 2022 - 16:41 PM"
}

function Sintaxis() {
    return (
        <div className='displaySection adjustPage'>
            <div className='containerTitleBlack'>
                <h1 id='title'>{title.title}</h1>
                <h2 id='subTitle'>{title.subtitle}</h2>
            </div>
            <div className="sectionText sectionTextNotes">
                <section className="parragraphs">
                    <p>C# es un lenguaje de programacion orientado a objetos
                        y con <a href="https://es.wikipedia.org/wiki/Seguridad_de_tipos#:~:text=%22Un%20lenguaje%20es%20de%20tipo,por%20el%20tipo%20de%20datos%22.">seguridad de tipos</a>.
                        Permite a los desarolladores crear aplicaciones solidas y seguras que se ejecutan en <a href="https://es.wikipedia.org/wiki/Microsoft_.NET">.NET</a>.
                        C# tiene sus raices em la famila de lenguajes C. Este recorrido proporicoa una descripcion
                        general de las caracteristicas de su sintaxis.</p>
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Sensitivo</h3>
                    <p>C# es case sensitive, es sensible a mayusculas y minusculas</p>
                    <img className="imgBlog"  src='sintaxis/sensitivo.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Terminaciones de linea</h3>
                    <p>Todas las sentencias deben de terminar con ' ; '.</p>
                    <img className="imgBlog" src='sintaxis/terminaciones.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Comentarios</h3>
                    <p>Hay dos tipos de comentarios en C# : De una sola linea
                        y de bloque</p>
                        <img className="imgBlog" src='sintaxis/comentarios.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Variables</h3>
                    <p>Las variables son nuestros contenedores fundamentales para
                        almacenar valores.<br />En .NET :
                        <ul className='listasBlog'>
                            <li>Pueden ser declaradas en cualquier lugar del codigo.</li>
                            <li>Todas deben tener un tipo</li>
                            <li>El contenido de la variable tiene que ser acorde con su definicion.</li>
                            <li>Fuertemente tipadas.</li>
                            <li>Deben ser inicializadas antes de ser usadas.</li>
                        </ul>
                        Sin embargo, puede agregar la palabra clave <code>const</code> si no desea que se sobreescriba
                        el valor existente.</p>
                        <img className="imgBlog" src='sintaxis/variables.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Conversion de tipos</h3>
                    <p>La conversion ( o fundicion ) de tipos es cuando se asigna un valor de un tipo
                        de datos a otro tipo. En C# hay dos tipos de conversion:
                        <ul className='listasBlog'>
                            <li>Casting Implicito(automatico): De un tipo mas pequeno a uno mas grande.<br></br>
                                <code>char&rarr;int&rarr;long&rarr;float&rarr;double</code>
                            </li>
                            <li>Casting Explicito(manualmente): De un tipo mas grande a uno mas pequeno.<br />
                                <code>double&rarr;float&rarr;long&rarr;int&rarr;char</code>
                            </li>
                        </ul>
                        <img className="imgBlog" src='sintaxis/conversion.png' />
                        </p>
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Salida por consola de datos</h3>
                    <p>Para imprimir en consola se usa el metodo <code>Console.WriteLine()</code>
                        pero tambien puede usar <code>Console.Write().</code>. La diferencia radica en que <code>WriteLine()</code>
                        imprime la salida en una nueva linea mientras que <code>Write()</code> imprime en la misma linea.</p>
                        <img className="imgBlog" src='sintaxis/saltoDeLinea.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Entrada del usuario</h3>
                    <p>Para solicitar un numero al usuario utilizo el metodo <code>ReadLine().
                        Este metodo, devuelve un string.</code>Para eso debo "parsear" el string a un numero.</p>
                        <img className="imgBlog" src='sintaxis/tryparse.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Excepciones</h3>
                    <p>Al ejecutar codigo, pueden ocurrir diferentes errores: de codificacion, por una entrada
                        incorrecta u otros imprevistos. Cuando esto ocurre, el programa se detendra y generara un mensaje de error.
                        El termino tecnico de esto es : lanzar una excepcion (throw an exception).
                        La sentencia para manejar errores es Try-Catch, que se utiliza en programacion .Net para evitar romper
                        el flujo de trabajo de una aplicacion. La declaracion <code>try</code> se encarga de encapsular todas
                        las operaciones. La instruccion <code>catch</code> le permite definir un bloque de codigo que se ejecutara si ocurre un
                        error en el bloque <code>try</code>.
                        <img className="imgBlog" src='sintaxis/tryCatch1.png' />
                        <img className="imgBlog" src='sintaxis/tryCatch2.png' />
                        </p>
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Estructuras de decision</h3>
                    <img className="imgBlog" src='sintaxis/if.png' />
                    <img className="imgBlog" src='sintaxis/ifElse.png' />
                    <img className="imgBlog" src='sintaxis/ifElseIfElse.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Operadores logicos</h3>
                    <img className="imgBlog" src='sintaxis/operadores.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Estructuras de iteracion</h3>
                    <p>Cuando sabes exactamente cuantas veces desea recorrer un bloque de codigo,
                        use el bucle <code>for</code> en lugar de un <code>while</code>.
                    <img className="imgBlog" src='sintaxis/while.png' />
                        Tambien esta el bucle <code>foreach</code> que se usa exclusivamente para recorrer elementos en una matriz.
                    <img className="imgBlog" src='sintaxis/ifElse.png' />
                    <img className="imgBlog" src='sintaxis/forEachAction.png' />
                        <br />
                        El bucle <code>while</code> recorre un bloque de codigo siempre que una condicion especifica sea <code>True</code>.<br />
                        El bucle <code>do/while</code> ejecutara el bloque de codigo una vez, antes de verificar si la condicion es verdadera,
                        luego repetira el ciclo mientras la condicion sea verdadera.</p>
                    <img className="imgBlog" src='sintaxis/doWhile.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Interpolacion de cadenas</h3>
                    <p>
                        Se sustituyen los valores de las variables en marcadores de posicion de cadena.
                    </p>
                    <img className="imgBlog" src='sintaxis/interpolacion.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Operador ternario</h3>
                    <p>Tiene 3 partes. La expresion boleana, la cual nos devolvera verdadero o falso.
                        Sentencia 1 , que es la expresion que se va a devolver en caso de que la expresion booleana sea <code>true</code>. Y la sentencia 2
                        que va a devolver en caso de que la expresion sea <code>false</code>.</p>
                        <img className="imgBlog" src='sintaxis/ternario.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Operador nullable</h3>
                    <p>Mediante este operador puedo saber si un valor es <code>null</code></p>
                    <img className="imgBlog" src='sintaxis/nullable.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'>Array</h3>
                    <p>Se utlizan para almacenar multiples valores en una sola variable.Para definir una matriz hay
                        que definir el tipo de variables con corchetes.Para insertarle valores, usamos una matriz literal, colocando los valores
                        en una lista separada por comas dentro de llaves.</p>
                    <img className="imgBlog" src='sintaxis/matriz.png' />
                </section>
                <section className="parragraphs">
                    <h3 className='subtitlesPost'> Links de interes para profundizar mas en C#</h3>
                    <ul className='listasBlog'>
                        <li><a href="https://www.youtube.com/playlist?list=PLU8oAlHdN5BmpIQGDSHo5e1r4ZYWQ8m4B">Pildoras informaticas - Curso C#</a></li>
                        <li><a href="https://www.w3schools.com/cs/index.php">w3schools - Tutorial C#</a></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Sintaxis;