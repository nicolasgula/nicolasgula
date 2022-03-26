import React from 'react'

function POO() {
  return (
    <div>
        <h1>Programacion Orientada a Objetos</h1>

        <p>La POO propone resolver problemas de la realidad identificando objetos y relaciones entre ellos.
            Parte del concepto de "objetos" como base, los cuales tienen informacion en forma de campos(atributos o propiedades)
            y codigo en forma de metodos.
            Los objetos son capaces de interactuar y modificar los valores contenidos en sus atributos(ESTADOS/CARACTERISTICAS) a traves de sus metodos(COMPORTAMIENTO).
        </p>

        <h3>Clases y objetos</h3>
        <p>
            Las clases y los objetos son los dos aspectos principales de la POO.

            Una CLASE es una plantilla que define las caracteristicas y comportaminetos
            que van a tener las instancias de esa clase (OBJETOS)/
            Cuando se crea un objeto, este hereda todos los atributos y metodos de la clase.

            Todo en C# esta asociado con clases y objetos, junto con sus atributos y metodos.
            Ejemplo: En la vida real, una moto es un objeto. La moto tiene ATRIBUTOS, como el color 
            y la marca, y METODOS, como acelerar o frenar.
            Cada clase se codifica en un archivo separado. (cs)
            Un OBJETO se crea a partir de una clase. Son unicos aunque tengan los mismos datos.
            Al tener la clase Moto, ahora puedo usarla para
            crear objetos.
        </p>

        <h3>Atributos</h3>
        <p>Los atributos representan la informacion que nos interesa guarda de un objeto.
          Pueden ser de instancia o de clase.
        </p>

        <h3>Metodos</h3>
        <p>Los metodos normalmente pertenecen a una clase y definen como se comporta un objeto de una clase.
          Para acceder a este debe ser <code>public</code>.
        </p>

        <h3>Properties y Encapsulacion</h3>
        <p>La ENCAPSULACION es asegurarse de que los datos "sensible" esten ocultos para los usuarios.
          Para esto <ul>
            <li>Se declaran ATRIBUTOS como <code>private</code></li>
            <li>Proporcionar metodos publicos <code>get</code> y <code>set</code>a traves de Properties, para
            acceder y actualizar el valor de un campo privado.</li>
          </ul>
        </p>
        <p>Son metodos que permiten al usuario recuperar(GET) o indicar un valor a un atributo
          del objeto(SET).
          La propiedad Marca esta asociada con el atributo marca.El metodo get devuelve el valor del atributo marca.
          El metodo set asigna valu al atributo marca. value representa el valor que se le asigna al atributo.
        </p>

        <h3>Crear un objeto</h3>
        <p>
          Un objeto se crea a partir de una clase. Para crearlo, se especifica el nombre de la clase, seguido 
          del nombre del objeto y utilizar el operador new.
          El objeto se crea en memoria y para utilizarlo se guarda la referencia a este en una variable declarada con 
          el tipo de la clase que vamos a instanciar.
        </p>

        <h3>Constructor</h3>
        <p>Un constructor es un método especial que se utiliza para inicializar objetos. La ventaja de un constructor 
          es que se llama cuando se crea un objeto de una clase. Se puede utilizar para establecer valores iniciales para los atributos.
          Todas las clases tienen constructores de forma predeterminada: si no crea un constructor de clase usted mismo, 
          C# crea uno para usted.</p>

          <h3>ToString()</h3>
          <p>Metodo que retorna una cadena de texto con los datos que se desean mostrar de los objetos de esa clase.</p>

          <h3>Metodos de Clase y de Instancia</h3>
          <p>Los metodos de Instancia se pueden usar desde la instancia del objeto creado, ese
            objeto llama a un metodo para hacer una tarea. <code>nombreObjeto.nombreMetodo</code>.
            Los metodos de clase se pueden usar con miembros de la clase, el metodo se llama desde la 
            propia clase, se invocan con el <code>nombreClase.nombreMetodo</code> y no requiren de una instancia de objetos
            para poder ser invocado.
            Atributos y metodos de clase, se declaran con la palabra <code>static</code>
          </p>

          <h3>Equals</h3>
          <p>Este metodo retorna un dato bool que permite establecer si un objeto es igual a otro.</p>

          <h3>GetHashCode</h3>
          <p>Es un valor unico que se utiliza para identificar un objeto durante pruebas de igualdad.</p>
    </div>
  )
}

export default POO