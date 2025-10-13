<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Juegos de roles en los niños y las niñas de la primera infancia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En el universo infantil, el juego no es solo una forma de entretenimiento: es una herramienta vital para comprender el mundo. Dentro de ese universo, el juego de roles ocupa un lugar privilegiado, pues permite a los niños y las niñas ponerse en el lugar de otros, explorar situaciones de la vida cotidiana y expresar emociones, pensamientos e ideas con libertad.
          p Se propone, en esta sección, abrir la mirada hacia los múltiples sentidos que encierra el juego de roles como experiencia pedagógica. 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.tarjeta.p-5.h-100(data-aos="fade-left")
          h5(data-aos="fade-left").mb-5 ¿Qué ocurre cuando un niño actúa como si fuera un maestro, una médica o un panadero? 
          h5.mb-5 ¿Qué habilidades se desarrollan cuando se representa un personaje y se interactúa con otros en un mundo imaginado?
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px")
    
    p A través de este recorrido, se invita a reconocer cómo el juego de roles no solo enriquece la comunicación, la empatía y la creatividad, sino que también fortalece los lazos sociales y aporta a la construcción de ambientes inclusivos, solidarios y participativos. Explorar este tema es dar un paso más en la comprensión del desarrollo infantil y del rol que tiene el educador en su acompañamiento.
    p.mb-5 ¿Listo el espacio para imaginar, crear y reflexionar? El recorrido comienza ahora.


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Diferencias entre juego simbólico y juego de roles
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué significa cuando un lápiz se convierte en varita mágica o cuando una niña afirma ser la médica que curará a su oso de peluche?
        p(data-aos="fade-left") Esta pregunta permite adentrarse en un aspecto fascinante del desarrollo infantil: el juego como forma de representación simbólica. Según Carbonero (2016), en la primera infancia, el juego no es solo entretenimiento; es lenguaje, pensamiento y expresión. Comprender las diferencias entre el juego simbólico y el juego de roles permite enriquecer la intervención pedagógica, favoreciendo procesos de desarrollo más intencionados y contextualizados.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Comprensión del juego simbólico: la representación libre")
            p El juego simbólico surge hacia los 18 meses y se consolida entre los 2 y 3 años. En esta etapa, el niño o la niña comienza a utilizar un objeto, acción o palabra para representar otra cosa. Este acto implica el desarrollo de la función semiótica, es decir, la capacidad de sustituir la realidad por una representación mental (Vygotsky, 1966; Piaget, 1962).
            p <b>Ejemplo común</b>: un plátano se convierte en teléfono, o una caja en una nave espacial.
            p Este tipo de juego es espontáneo, abierto, y no necesariamente sigue una narrativa. Es altamente individual, aunque puede compartirse con otros sin necesidad de roles diferenciados. Su valor pedagógico radica en que:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Estimula la creatividad sin restricciones.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ejercita la abstracción y el pensamiento simbólico.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Favorece el desarrollo del lenguaje, especialmente el expresivo.
    
          .div(titulo="El juego de roles: asumir personajes y explorar lo social")
            p El juego de roles se desarrolla entre los 3 y 6 años. A diferencia del juego simbólico, aquí no solo se representa un objeto, sino que se adopta un rol específico, como ser papá, maestra, bombero o veterinaria. Este tipo de juego implica comprender reglas sociales, reproducir discursos de adultos, resolver conflictos y construir historias.
            p Ejemplo típico: organizar una “escuela” en casa, donde uno de los niños hace de docente, otros de estudiantes, y se desarrolla una rutina escolar.
            p Este juego es más estructurado, narrativo y colaborativo. Sus beneficios son amplios:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Desarrolla empatía y comprensión de roles sociales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Permite explorar normas, emociones y relaciones.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Refuerza la autorregulación y la resolución de problemas.
            p Estudios recientes destacan que los juegos de roles tienen impacto directo en el desarrollo de la teoría de la mente, la comprensión moral y la conciencia emocional.
    
    p.mb-5 La siguiente tabla presenta una comparación entre juego simbólico y juego de roles:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación juego simbólico y juego de roles.
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-10.text-white.text-center Característica
            th.bg-color-10.text-white.text-center Juego simbólico
            th.bg-color-10.text-white.text-center Juego de roles
        tbody.bg-color-8
          tr
            td Edad aproximada de inicio.
            td 18-24 meses.
            td 3-4 años.
          tr
            td Enfoque principal.
            td Transformación simbólica de objetos.
            td Asunción de personajes y recreación de escenas.
          tr
            td Estructura narrativa.
            td Espontáneo, sin secuencia definida.
            td Narrativo, con guion social o ficticio.
          tr
            td Interacción social.
            td Puede ser individual o paralela.
            td Predomina el juego colaborativo y dialogado.
          tr
            td Función pedagógica.
            td Desarrollo de la imaginación y el pensamiento abstracto.
            td Aprendizaje social, moral y emocional.
          tr
            td Ejemplos.
            td Usar un bloque como auto.
            td Jugar a ser enfermera y paciente.
    
    h2(data-aos="fade-left") Claves pedagógicas para fomentar ambos tipos de juego
    p.mb-5 Desde el enfoque de educación infantil, se recomienda:

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center 01 
              p.mb-0.text-center Ofrecer materiales abiertos y no estructurados para favorecer el juego simbólico (telas, cajas, muñecos).
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center 02 
              p.mb-0.text-center Crear rincones temáticos que imiten contextos sociales reales para el juego de roles (consultorio, casa, mercado).
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
              h5.text-center 03 
              p.mb-0.text-center Observar sin interferir, pero intervenir cuando el juego requiere orientación, sin dirigirlo.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center 04
              p.mb-0.text-center Registrar las interacciones para reflexionar luego sobre los intereses, emociones y aprendizajes en juego.
    
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              h5 Reflexionemos: 
              p.mb-0 Identificar las diferencias entre juego simbólico y de roles, permite diseñar ambientes que respeten los ritmos de desarrollo y potencien experiencias más significativas. Ambos tipos de juego se entrelazan y se enriquecen mutuamente, y su correcta interpretación guía al educador en la creación de contextos donde el aprendizaje ocurre de manera natural, divertida y transformadora.
            p(data-aos="fade-left") Como lo señala el Ministerio de Educación Nacional (2014), el juego debe ser un eje estructurante del currículo en la educación inicial, no solo como metodología, sino como forma de vida y expresión infantil.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Características del juego de roles en la educación inicial
    
    p.mb-5 El juego de roles en la educación inicial representa una oportunidad privilegiada para transformar la imaginación infantil en experiencias significativas de aprendizaje.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Características del juego de roles en la educación inicial
            p.mb-4(data-aos="fade-right") En el PDF <b>Características del juego de roles en la educación inicial</b>, se analizan los elementos fundamentales que configuran esta forma de juego simbólico, destacando cómo la representación, la narrativa, la interacción social y la expresión emocional se articulan para favorecer el desarrollo integral de los niños y niñas. A través de este recurso, se invita a los educadores a comprender el valor pedagógico del juego de roles y a diseñar estrategias que promuevan la participación activa, la creatividad y la construcción de ciudadanía desde las primeras etapas del desarrollo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Características del juego de roles en la educación inicial.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Etapas evolutivas del juego de roles en la primera infancia
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Cómo evoluciona el juego de roles conforme avanza el desarrollo infantil y qué implicaciones tiene para el aprendizaje y la socialización?
    
        .bg-color-5.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El juego de roles constituye una práctica fundamental en la primera infancia, puesto que permite a los niños y las niñas explorar, experimentar y comprender el mundo social que los rodea. Este proceso se desarrolla progresivamente, con características que cambian conforme maduran las habilidades cognitivas, emocionales y sociales.
        p Analizar estas etapas permite identificar estrategias educativas que promuevan ambientes participativos, inclusivos y solidarios, adaptados a cada momento del desarrollo. 
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Juego pre-simbólico o sensoriomotor (0-18 meses)")
            p En esta etapa inicial, el juego de roles no se manifiesta de manera explícita, pero se establecen los fundamentos del pensamiento simbólico a través de la exploración sensorial y motriz. El/la niño/a imita sonidos, gestos y acciones simples, desarrollando la capacidad de representar el entorno.
            p Este periodo es crucial para la construcción del “yo” y del “otro”, pues se sientan las bases para la diferenciación entre realidad y representación, aspecto indispensable para el juego simbólico posterior (Vygotsky, 1978).

    
          .div(titulo="Juego simbólico temprano o juego funcional (18-24 meses)")
            p El juego de roles comienza a tomar forma cuando el niño o la niña utiliza objetos para representar otros, por ejemplo, simular que una caja es un coche. Aún predomina el uso concreto y directo del objeto, y las acciones repetitivas facilitan la consolidación de esquemas mentales.
            p Durante esta fase, la interacción social comienza a cobrar importancia, aunque predominan los juegos paralelos, donde se juega al lado de otros sin mucha cooperación directa (Piaget, 1962).

    
          .div(titulo="Juego de roles simple o preoperacional (2-3 años)")
            p A partir de los dos años, el juego simbólico se vuelve más intencionado y consciente. Se observan representaciones claras de roles familiares o sociales, como ser mamá, papá o médico. En este momento, la imaginación permite la creación de pequeños escenarios, aunque con una estructura narrativa limitada.
            p La interacción social mejora y comienzan a emerger los primeros intentos de juego cooperativo, permitiendo practicar habilidades sociales básicas como turnarse y compartir (Piaget, 1962).


    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Juego sociodramático o de roles complejo (3-5 años)")
            p En esta etapa, el juego de roles se vuelve más elaborado y dinámico. Los niños y las niñas crean historias complejas con múltiples personajes, conflictos y resoluciones. Se desarrolla el lenguaje narrativo y la capacidad de empatía, porque se ponen en el lugar del otro para comprender diferentes perspectivas.
            p El juego sociodramático es un motor para el desarrollo cognitivo, emocional y social, permitiendo practicar la regulación emocional, la negociación y la resolución de problemas en un contexto seguro y lúdico (Bodrova & Leong, 2020; Vygotsky, 1978).

    
          .div(titulo="Juego de roles estructurado o reglado (5-6 años)")
            p En la etapa final de la primera infancia, los juegos de roles incorporan normas explícitas y reglas definidas. Los niños y las niñas demuestran habilidades avanzadas para planificar y organizar el juego, respetar turnos y acuerdos, y mantener la coherencia narrativa.
            p Este nivel de juego anticipa competencias necesarias para la escolarización formal, como el pensamiento lógico, la cooperación avanzada y la comprensión de normas sociales más complejas.

    p.mb-5 Ahora, estudiemos la siguiente tabla resumen de etapas evolutivas del juego de roles:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Etapas evolutivas del juego de roles
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-10.text-white.text-center Etapa
            th.bg-color-10.text-white.text-center Edad aproximada
            th.bg-color-10.text-white.text-center Características principales
        tbody.bg-color-8
          tr
            td Juego pre-simbólico.
            td 0-18 meses.
            td Exploración sensoriomotora, primeras imitaciones.
          tr
            td Juego simbólico temprano.
            td 18-24 meses.
            td Uso simbólico de objetos, juegos funcionales.
          tr
            td Juego de roles simple.
            td 2-3 años.
            td Representación intencional, juegos paralelos y cooperativos incipientes.
          tr
            td Juego sociodramático complejo.
            td 3-5 años.
            td Historias elaboradas, empatía, regulación emocional.
          tr
            td Juego estructurado.
            td 5-6 años.
            td Reglas explícitas, planificación, cooperación avanzada.

    .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              h5 Reflexionemos: 
              p.mb-0 La comprensión profunda de las etapas evolutivas del juego de roles permite diseñar ambientes de aprendizaje que no solo respetan el ritmo de desarrollo, sino que potencian habilidades esenciales para el crecimiento integral. Al crear espacios seguros y estimulantes, donde se propicie la interacción y el juego simbólico, se favorecen ambientes participativos y solidarios, claves en la educación infantil contemporánea.
            p(data-aos="fade-left") El acompañamiento adulto debe ser activo, sensible y respetuoso, favoreciendo la autonomía progresiva y promoviendo aprendizajes significativos que impacten en la formación social y emocional de los niños y las niñas.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Personajes, situaciones y objetos en el juego de roles
    
    p.mb-5 Los elementos simbólicos que componen el juego de roles —personajes, situaciones y objetos— desempeñan un papel esencial en la construcción de experiencias significativas durante la primera infancia.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Personajes, situaciones y objetos en el juego de roles
            p.mb-4(data-aos="fade-right") En el PDF <b>Personajes, situaciones y objetos en el juego de roles</b>, se analiza cómo cada uno de estos componentes contribuye al desarrollo cognitivo, emocional, social y comunicativo de los niños y niñas, y cómo su integración permite generar ambientes de aprendizaje participativos, inclusivos y solidarios. A través de este análisis, se invita a los educadores a reflexionar sobre el valor pedagógico del juego de roles como una herramienta activa para potenciar la empatía, la creatividad, la resolución de conflictos y la construcción colectiva de conocimiento en contextos educativos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Personajes, situaciones y objetos en el juego de roles.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Juego de roles como herramienta para fortalecer vínculos sociales y solidarios
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿De qué manera el juego de roles puede favorecer la construcción de vínculos sociales sólidos y fomentar la solidaridad desde los primeros años de vida?
    
        .bg-color-5.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿De qué manera el juego de roles puede favorecer la construcción de vínculos sociales sólidos y fomentar la solidaridad desde los primeros años de vida?
        p Según investigaciones recientes en neurodesarrollo y pedagogía infantil, esta modalidad de juego permite a los niños y las niñas experimentar múltiples perspectivas, lo cual fortalece su capacidad empática y su comprensión de las emociones propias y ajenas. 
        h5 Es importante señalar que:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7
              p Durante el juego de roles, los niños deben negociar y acordar roles, reglas y situaciones, proceso que estimula la comunicación asertiva, la cooperación y la resolución pacífica de conflictos. Estos procesos sociales son esenciales para el desarrollo de competencias socioemocionales, que la Organización Mundial de la Salud (OMS, 2020), reconoce como fundamentales para el bienestar y la salud mental desde la infancia.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/21.png")
            .col-lg-7
              p Además, la solidaridad emerge de manera natural en estos espacios lúdicos cuando los niños aprenden a escuchar, apoyar y cuidar a sus compañeros, reconociendo sus emociones y necesidades. La investigación en psicología educativa resalta que, a través del “hacer como si”, los niños internalizan normas sociales y valores colectivos, lo que fortalece el sentido de pertenencia y el compromiso hacia el bienestar común. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7
              p En este contexto, el rol del adulto mediador es clave para facilitar un ambiente seguro, inclusivo y flexible, que promueva la participación voluntaria, la creatividad y el respeto mutuo. La intervención educativa debe enfocarse en guiar sin imponer, proporcionando recursos que enriquezcan el juego sin limitar la espontaneidad infantil.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5(data-aos="fade-left").mb-3
          p.mb-0 De esta forma, el juego de roles se convierte en una estrategia pedagógica eficaz para fomentar ambientes participativos y solidarios, donde se promueven habilidades lingüísticas, emocionales y cognitivas integradas en experiencias significativas. Estas experiencias no solo impactan el desarrollo individual, sino que también fortalecen el tejido social que sustenta la convivencia armónica y colaborativa en las comunidades educativas y más allá.
        p(data-aos="fade-left") Anton, Blanch y Edo (2016), señalan que, incorporar el juego de roles en la educación infantil no solo responde a un enfoque lúdico, sino a una necesidad pedagógica basada en evidencia científica que apoya el desarrollo integral, la inclusión y la justicia social desde los primeros años de vida. 
    
    .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/24.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              h5 Reflexionemos: 
              p.mb-0 El juego de roles no es solo una actividad lúdica, sino un poderoso escenario donde los niños y las niñas exploran y practican las habilidades sociales que serán fundamentales a lo largo de su vida. En este espacio, aprenden a ponerse en el lugar del otro, a comunicarse con respeto, a cooperar y a construir relaciones basadas en la solidaridad. 
            p(data-aos="fade-left") Por tanto, reconocer y valorar el juego de roles como una estrategia pedagógica es esencial para promover ambientes educativos inclusivos y participativos, donde se cultiven no solo conocimientos, sino también valores y competencias para la convivencia democrática. ¿Cómo se puede, entonces, potenciar este tipo de juego en el contexto educativo para garantizar que cada niño y niña se sienta parte activa y valiosa de su comunidad?

    #t_2_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.6] Observación pedagógica del juego de roles: técnicas e instrumentos
    
    p.mb-5 La observación pedagógica es una herramienta clave para interpretar con profundidad los procesos de aprendizaje en la primera infancia, especialmente cuando se centra en el juego de roles como manifestación privilegiada del desarrollo integral.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Observación pedagógica del juego de roles: técnicas e instrumentos
            p.mb-4(data-aos="fade-right") En el PDF <b>Observación pedagógica del juego de roles</b>, se presentan estrategias para registrar y analizar de forma sistemática las interacciones simbólicas y expresivas de los niños y niñas durante el juego, con el fin de identificar sus capacidades, intereses y necesidades. Este enfoque promueve una práctica educativa más consciente, empática y contextualizada, orientada a fortalecer ambientes pedagógicos donde el juego se reconoce como fuente legítima de conocimiento, expresión y participación activa.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Observación pedagógica del juego de roles: técnicas e instrumentos.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/25.png', alt='')
    
    #t_2_7.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.7] Diseño de propuestas educativas basadas en el juego de roles
    
    p.mb-5 El diseño de propuestas educativas que integren el juego de roles representa una oportunidad valiosa para promover aprendizajes significativos, inclusivos y centrados en la experiencia infantil.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Diseño de propuestas educativas basadas en el juego de roles
            p.mb-4(data-aos="fade-right") En el PDF <b>Diseño de propuestas educativas basadas en el juego de roles</b>, se presentan orientaciones prácticas para estructurar actividades que articulen objetivos pedagógicos con el desarrollo de habilidades sociales, emocionales y cognitivas. A través de una planificación consciente, el uso de materiales simbólicos, la mediación respetuosa del adulto y la evaluación formativa, estas propuestas buscan fortalecer ambientes donde el juego se convierta en un vehículo para la expresión, la empatía y la construcción de comunidades participativas y solidarias desde la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Diseño de propuestas educativas basadas en el juego de roles.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/26.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/63327 " target="_blank" rel="noopener noreferrer") Herrador Sánchez, J. (2013). Juegos populares y tradicionales de la infancia a través de la filatelia: ( ed.). Wanceulen Editorial.  

 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://luzaro.net/wp-content/uploads/juego_simbolico.pdf " target="_blank" rel="noopener noreferrer") Landeira, S. (1998). El juego simbólico en el niño: explicación e interpretación en J. Piaget y en S. Freud. Revista Digital-Buenos Aires, 14(134), 1-6. 

 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/2010/201021093004.pdf" target="_blank" rel="noopener noreferrer") De Prado, M. G., & García, V. A. (2010). Los juegos de rol en el aula. Teoría de la Educación. Educación y Cultura en la Sociedad de la Información, 11(3), 56-84.  




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.eespppiura.edu.pe/handle/EESPPPIURA/46 " target="_blank" rel="noopener noreferrer") Ambulay, J., & Estefani, Y. (2024). El juego de Roles en el Nivel Inicial 2022. 

 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://alicia.concytec.gob.pe/vufind/Record/ULAD_4b3470e4ceb3e71bdaa5855538c4352f " target="_blank" rel="noopener noreferrer") Ponte, A., & Uvi, W. (2018). Los juegos de roles como estrategia en el desarrollo de las habilidades blandas de los niños y niñas de 5 años de la institución educativa del nivel inicial N° 071 del distrito de Llumpa, provincia Mariscal Luzuriaga, Ancash-2018.  




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.um.es/pantarei/article/view/508811 " target="_blank" rel="noopener noreferrer") Sampedro-Martín, S., & Giménez, J. E. (2022). Concepciones de docentes de Educación Primaria sobre el juego de rol como herramienta para la enseñanza del patrimonio. Panta Rei. Revista digital de Historia y Didáctica de la Historia, 16, 217-240. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.aeiotu.com/blogs/aprender-jugando-para-el-futuro-de-colombia/?gad_source=1&amp;gad_campaignid=22005582609&amp;gbraid=0AAAAA9uaC3Rq8TqmLlNHo-WnytOQ--7Iv&amp;gclid=EAIaIQobChMIrImbuJ_SjQMVciezAB0GqjT-EAAYASAAEgKTrfD_BwE" target="_blank" rel="noopener noreferrer") Aprender jugando para el futuro de Colombia - aeioTU. (s.f.). aeioTU - aeioTU.  




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.healthychildren.org/Spanish/family-life/power-of-play/Paginas/pretend-play-ways-children-can-exercise-their-imagination.aspx?gad_source=1&amp;gad_campaignid=8703909966&amp;gbraid=0AAAAADyMpZGN3wmhGZRpMLY5pcYdEnUFR&amp;gclid=EAIaIQobChMI0sjCzJ_SjQMVGw6zAB2xSB3aEAAYASAAEgJJB_D_BwE " target="_blank" rel="noopener noreferrer") Juegos de rol o simulación: distintas formas en que los niños pueden ejercitar su imaginación. (s.f.). HealthyChildren.org. 




            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.highspeedtraining.co.uk/hub/role-play-in-early-years/" target="_blank" rel="noopener noreferrer") Benefits of Role Play in Early Years: Advice for Teachers. (s.f.). The Hub | High Speed Training.  





            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PIlfhIHlVyc " target="_blank" rel="noopener noreferrer") UniRíoTV. (2017, 17 de agosto). EL ROL DEL JUEGO EN LA EDUCACIÓN INICIAL - VERONA BATIUK [Video]. YouTube. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=u6ntXYMw0bA " target="_blank" rel="noopener noreferrer") Facultad de Psicología Universidad de la República. (2018, 17 de septiembre). El juego en la Infancia: derecho de los niños o estrategia docente. Lic Ana Malajovich [Video]. YouTube. 

  

  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=12Wu4a4n20E" target="_blank" rel="noopener noreferrer") Carla W. (2014b, 3 de mayo). Juego simbólico noticiero infantil [Video]. YouTube.  




          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es uno de los principales propósitos de los juegos dramáticos en la primera infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Enseñar matemáticas básicas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la expresión emocional y la creatividad. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Repetir normas de convivencia.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Memorizar diálogos complejos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué elemento es fundamental en los juegos de roles en la infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El uso obligatorio de disfraces.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La reproducción literal de escenas reales.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La imaginación para asumir personajes y situaciones. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La intervención constante del adulto.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué se espera del docente durante la observación de juegos de roles?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluar el rendimiento académico del niño.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Corregir constantemente los errores.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Interrumpir para dirigir el juego.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Observar con atención y analizar interacciones y comportamientos. ',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes beneficios se asocia a los juegos dramáticos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducción de la actividad física.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Desarrollo de la memoria mecánica.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Mejora de la expresión verbal y corporal. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Aumento del silencio en el aula.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿¿Qué tipo de ambiente debe promover el docente para facilitar la expresión dramática en la infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Estructurado y rígido.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Abierto, seguro y participativo. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Silencioso y competitivo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Individual y centrado en el docente.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
