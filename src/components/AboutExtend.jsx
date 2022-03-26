import '../scss/blogs.scss';

const title = {
  title: "Acerca de mi",
  subtitle: "25 de Marzo de 2022 - 6:22 AM"
}

function AboutExtend() {
  return (
    <div className='displaySection adjustPage'>

      <div className='containerTitleBlack'>
        <h1 id='title'>{title.title}</h1>
        <h2 id='subTitle'>{title.subtitle}</h2>
      </div>

      <div className='sectionText sectionTextNotes'>

        <section className='parragraphs'>
          <p >Hola, soy Nicolás, estudiante de la carrera Analista programador
            y un entusiasta del desarrollo frontend desde hace 4 años. Gracias por leer estas líneas, te agradezco que lo estes haciendo.</p>
        </section>

        <section className='parragraphs'>
          <p > Te cuento un poco sobre mí? En 2017 decidí retomar mis estudios, luego de que varias personas cercanas influenciaran
            positivamente en mi vida. Gracias a ellos me inscribí en el liceo para culminar el bachillerato.
            Mientras realizaba mis estudios descubri el área de desarrollo front-end, la mezcla de creatividad,
            diseño y lógica lo hizo un área interesante para mí, por lo cual decidí aprender todo lo posible sobre
            JavaScript, HTML y CSS.</p>
        </section>

        <section className='parragraphs'>
          <p >Luego de terminar el bachillerato, seguí aprendiendo en páginas como W3Schools, Udemy, freeCodeCamp
            o con libros como el de John Duckett. En ese entonces comencé a maquetar mis primeras web, sin tener
            mucha idea de lo que hacía, pero gracias a prueba y error de a poco interiorizaba conceptos.
            Hacia sitios simples, solo para ver qué era posible hacer, por lo que me entusiasmó y al mismo tiempo
            me dio la oportunidad de aprender más. En ese momento estaba trabajando como auxiliar de archivo en un
            supermercado, pero quería hacer algo que me gustara, que me permitiera seguir aprendiendo y que pudiese dejar volar la creatividad.</p>
        </section>

        <section className='parragraphs'>
          <p > Al buscar información sobre carreras relacionadas encontré la universidad ORT, que me ofrecía formarme como analista programador.
            La elección de esta carrera se debió a que es una mezcla perfecta de creatividad y lógica, dos ingredientes claves para mí.
            Al culminar el primer semestre comencé con React JS, utilizándolo con la colección de desafíos webs tanto para móvil,
            tableta y computadoras de escritorio que brinda Frontend Mentor.</p>
        </section>

        <section className='parragraphs'>
          <p >Actualmente, estoy cursando el segundo semestre, aprendiendo programación orientada a objetos con C#, .NET, a como
            modelar bases de datos con el Modelo Relación Entidad y más adelante llevarlo a SQL y a como diseñar interfaces web con HTML y CSS.
          </p>
        </section>

      </div>
    </div>
  )
}

export default AboutExtend;