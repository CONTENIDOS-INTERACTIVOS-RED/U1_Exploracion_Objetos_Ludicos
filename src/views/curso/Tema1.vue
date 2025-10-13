<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Juegos dramáticos con los niños y las niñas de la primera infancia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿Alguna vez se ha observado a un niño transformar una escoba en un caballo, o una manta en una capa mágica? En esos momentos ocurre algo poderoso: se activa la imaginación, se construyen mundos simbólicos y se desarrolla el pensamiento creativo. Este es el universo del juego dramático, un territorio donde el "como si" se convierte en una herramienta fundamental del aprendizaje en la primera infancia.
    
        .bg-color-5.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este recorrido, se invita a descubrir cómo los juegos dramáticos no solo entretienen, sino que estimulan el lenguaje, fortalecen vínculos sociales, promueven la expresión emocional y despiertan la empatía. Comprender el sentido pedagógico del juego dramático, permitirá diseñar experiencias significativas que respondan a las necesidades reales de los niños y las niñas, desde una mirada sensible y respetuosa.
        p Se abre la puerta a una forma de enseñar que se construye desde la creatividad, el juego libre y la escucha activa. Se propone observar, reflexionar y crear con el juego como protagonista. Porque educar en la infancia también es saber acompañar la magia de imaginar y jugar.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] ¿Cuál es la expresión dramática en la primera infancia?
    
    p.mb-5 La expresión dramática en la primera infancia constituye una herramienta clave para el desarrollo integral, al permitir que los niños y las niñas representen, exploren y comuniquen sus experiencias, emociones y pensamientos mediante el juego simbólico y el uso creativo del cuerpo, la voz y los objetos.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") ¿Cuál es la expresión dramática en la primera infancia?
            p.mb-4(data-aos="fade-right") En el PDF <b>Cuál es la expresión dramática en la primera infancia</b>, se abordan los fundamentos teóricos y pedagógicos de esta forma de expresión, destacando su valor como medio de aprendizaje y construcción de sentido desde la vivencia infantil. Esta reflexión invita a reconocer la dramatización no como un fin estético, sino como un proceso transformador que fortalece la comunicación, la empatía, la convivencia y la imaginación desde los primeros años de vida.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> ¿Cuál es la expresión dramática en la primera infancia?.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Sentido pedagógico del juego dramático en el desarrollo infantil
    
    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") ¿Por qué el juego dramático es fundamental para el desarrollo integral en la primera infancia?
        
            .bg-color-1.p-5(data-aos="fade-left")
              p El juego dramático es una manifestación esencial en la infancia, no solo porque entretiene, sino porque constituye un espacio privilegiado para la construcción de aprendizajes significativos.
              p En él, el niño y la niña exploran y expresan emociones, representando roles y situaciones que reflejan su entorno, cultura y experiencias personales. Este proceso tiene una profunda función pedagógica, dado que facilita el desarrollo cognitivo, social y emocional, integrando las múltiples dimensiones del ser humano desde la primera infancia (Macías, 2011).
              p.mb-0 El juego dramático se configura como un lenguaje simbólico que posibilita la exploración de la realidad a través de la ficción y la representación. Desde la perspectiva de la neuroeducación, se sabe que los procesos de juego promueven la plasticidad cerebral, favoreciendo conexiones neuronales que potencian el pensamiento creativo, la memoria y la regulación emocional.
        
        h5 Además, al dramatizar situaciones, los niños y las niñas:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/5.svg" alt="" style="width: 90px")
              h5.text-center 01 
              p.mb-0.text-center Desarrollan funciones ejecutivas como la planificación, la inhibición de impulsos y la flexibilidad cognitiva.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/6.svg" alt="" style="width: 90px")
              h5.text-center 02 
              p.mb-0.text-center Practican habilidades sociales esenciales, tales como la negociación, la cooperación y la empatía, que son claves para la convivencia y la participación democrática.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/7.svg" alt="" style="width: 90px")
              h5.text-center 03 
              p.mb-0.text-center Experimentan la regulación emocional al poner en palabras y acciones sus sentimientos, lo cual contribuye a su bienestar afectivo y resiliencia.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Este aprendizaje ocurre en un contexto lúdico y significativo, donde el error y la experimentación son parte natural del proceso, lo que fortalece la confianza y la motivación intrínseca para aprender (Ministerio de Educación Nacional, 2014).
        p(data-aos="fade-left") Desde un enfoque pedagógico inclusivo y centrado en el niño:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p El juego dramático se convierte en un espacio privilegiado para promover la participación activa y el sentido de comunidad. En él, se establecen relaciones de respeto y solidaridad, puesto que los niños y las niñas aprenden a reconocer y valorar la diversidad, negociar reglas y colaborar en la construcción conjunta de las historias y roles.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p De acuerdo con la teoría socioconstructivista (Vygotsky, 1978), el aprendizaje es un proceso social mediado por la interacción, y el juego dramático ofrece un escenario ideal para que se desarrollen procesos de co-construcción del conocimiento y fortalecimiento del vínculo social.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Al diseñar ambientes pedagógicos que integren el juego dramático, se promueve una cultura de participación donde cada niño o niña tiene voz y agencia, desarrollando así competencias para la convivencia democrática y la solidaridad desde la primera infancia. 

    .bg-full-width.bg-color-4
      .p-4.p-md-5
        p.mb-5 El adulto mediador desempeña un papel fundamental para potenciar el sentido pedagógico del juego dramático. Este rol implica:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.svg" alt="" style="width: 90px")
              h5.text-center 01 
              p.mb-0.text-center Observar activamente para interpretar los significados simbólicos y las necesidades expresivas de cada niño o niña.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/13.svg" alt="" style="width: 90px")
              h5.text-center 02 
              p.mb-0.text-center Facilitar materiales diversos y flexibles que estimulen la creatividad y la exploración.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/14.svg" alt="" style="width: 90px")
              h5.text-center 03 
              p.mb-0.text-center Generar propuestas abiertas que permitan la autonomía y la co-creación.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/15.svg" alt="" style="width: 90px")
              h5.text-center 03 
              p.mb-0.text-center Promover la reflexión y el diálogo para ampliar el sentido y la comprensión de las experiencias lúdicas.
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Se trata de un acompañamiento respetuoso que evita la imposición, pero que está orientado a potenciar el desarrollo integral y a favorecer ambientes donde predominen el respeto, la inclusión y la cooperación (Macías, 2011).

    h2(data-aos="fade-left").mb-5 Reflexionemos: juego dramático y desarrollo humano integral

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          p.mb-0 El juego dramático se configura como una experiencia vital que articula aprendizaje, emoción y convivencia. A través de él, se desarrolla una capacidad única para la expresión, la creatividad y la interacción social que no solo contribuye al desarrollo individual, sino que también cimenta bases sólidas para una sociedad participativa y solidaria.
        p(data-aos="fade-left") Incorporar el juego dramático en las prácticas pedagógicas permite construir espacios educativos ricos en significado, donde la infancia es protagonista de su propio aprendizaje y donde se promueven valores fundamentales para la vida en comunidad.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Elementos del juego dramático: ficción, simulación, roles y narración
    
    p.mb-5 El análisis de los elementos del juego dramático permite comprender cómo esta forma de expresión simbólica impulsa el desarrollo integral en la primera infancia.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Elementos del juego dramático: ficción, simulación, roles y narración
            p.mb-4(data-aos="fade-right") En el PDF <b>Elementos del juego dramático</b>, se abordan los componentes clave de esta práctica: ficción, simulación, roles y narración, los cuales, integrados en ambientes pedagógicos adecuados, fortalecen habilidades cognitivas, emocionales, sociales y comunicativas. Este enfoque proporciona herramientas valiosas para educadores que buscan diseñar experiencias lúdicas que promuevan la participación activa, la empatía, la inclusión y la construcción de comunidades solidarias desde los primeros años de vida.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Elementos del juego dramático: ficción, simulación, roles y narración.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Tipologías del juego dramático: espontáneo, guiado, estructurado
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿De qué manera las diferentes formas de juego dramático potencian el desarrollo cognitivo, emocional y social en la primera infancia?
        p(data-aos="fade-left") Para comprender el impacto del juego dramático en la educación infantil, es fundamental identificar y distinguir sus diversas modalidades: espontáneo, guiado y estructurado. Cada una aporta características específicas que influyen en el desarrollo integral de los niños y las niñas, facilitando aprendizajes significativos, la creatividad y la socialización en ambientes participativos y solidarios.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Juego dramático espontáneo: creatividad y autonomía en acción")
            p El juego dramático espontáneo se define como una manifestación natural y libre, donde los niños y las niñas crean sus propias narrativas, roles y escenarios sin intervención directa del adulto. Esta modalidad se sostiene en la capacidad innata de los infantes para simbolizar y recrear su realidad, favoreciendo procesos cognitivos superiores, tal como lo señala la teoría sociocultural de Vygotsky (1978).
            p En esta fase, la imaginación se convierte en el motor principal que permite construir mundos simbólicos donde se expresan emociones, deseos y aprendizajes previos. La autonomía que se genera fortalece la confianza y la capacidad para tomar decisiones, lo cual es esencial para la formación de un pensamiento crítico y creativo. Además, el juego espontáneo fomenta la empatía y el desarrollo socioemocional al facilitar la exploración de distintos roles y perspectivas.
            p Para optimizar el juego espontáneo, el entorno debe ser rico en materiales diversos y seguros, y el educador debe adoptar un rol observador y facilitador que respete la iniciativa infantil.

    
          .div(titulo="Juego dramático guiado: mediación intencionada y aprendizaje social")
            p El juego dramático guiado involucra la intervención activa y reflexiva del educador, quien orienta la actividad sin controlar la creatividad ni la libertad expresiva. Este tipo de juego funciona como un puente entre la espontaneidad y el aprendizaje estructurado, integrando objetivos pedagógicos claros dentro de un contexto lúdico.
            p La mediación del adulto en este proceso favorece la internalización de normas sociales, habilidades comunicativas y valores éticos, apoyándose en estrategias didácticas que invitan a la reflexión y al diálogo. 
            p En la práctica, el juego guiado promueve la cohesión grupal y fortalece el sentido de comunidad, elementos imprescindibles para crear ambientes educativos participativos y solidarios (Ruiz,1996). La capacidad de negociar roles y resolver conflictos dentro del juego contribuye al desarrollo de competencias socioemocionales claves.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Juego dramático estructurado: planificación con flexibilidad y evaluación formativa")
            p El juego dramático estructurado se caracteriza por su diseño intencional y controlado, donde el adulto establece reglas, roles y objetivos específicos alineados con metas educativas. Esta modalidad permite evaluar el progreso de habilidades cognitivas, sociales y emocionales dentro de un marco seguro y ordenado.
            p Si bien el juego estructurado aporta un marco formal necesario, es fundamental mantener un equilibrio que permita espacios para la creatividad y la improvisación. De lo contrario, corre el riesgo de convertirse en una actividad meramente dirigida. En esta línea, Guerrero, Vargas y Acero (2018) señalan que, en el ámbito de la educación infantil, la literatura contemporánea subraya la importancia de la flexibilidad en el juego estructurado, porque esta potencia la motivación intrínseca y fomenta un compromiso activo en los niños y las niñas.
            p El juego estructurado es una herramienta clave para implementar planes educativos inclusivos y con enfoque en competencias, permitiendo la integración de contenidos curriculares y la evaluación continua desde una perspectiva formativa.

    
          .div(titulo="Integración y aplicación práctica: diseñar ambientes lúdicos integradores")
            p Para favorecer un desarrollo integral, es fundamental combinar las tres tipologías del juego dramático de manera estratégica y contextualizada. Esta integración permite responder a las necesidades individuales y colectivas, potenciando tanto la creatividad y autonomía como la adquisición de habilidades sociales y cognitivas.
            p Por ejemplo, iniciar una sesión con juego espontáneo estimula la motivación y la expresión libre, seguido por actividades guiadas que orientan aprendizajes y valores, culminando en juegos estructurados que consolidan competencias y permiten la evaluación del proceso educativo. Este enfoque dinámico genera ambientes lúdicos que promueven la participación activa y la solidaridad, pilares esenciales en la educación infantil actual.
    
    h2(data-aos="fade-left").mb-5 Reflexionemos:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          p.mb-0 Entender las tipologías del juego dramático desde una perspectiva actualizada y profunda permite a los educadores diseñar experiencias de aprendizaje más significativas y adaptadas a las realidades diversas de la infancia. La implementación consciente de estas modalidades fortalece no solo el desarrollo integral de los niños y las niñas, sino también la construcción de comunidades educativas inclusivas, participativas y solidarias.
        p(data-aos="fade-left") El desafío profesional consiste en articular teoría y práctica para que el juego dramático sea una herramienta efectiva de enseñanza-aprendizaje, capaz de formar individuos críticos, creativos y socialmente responsables.

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Reglas implícitas y explícitas en los juegos dramáticos
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿Cómo influyen las reglas en el desarrollo socioemocional y cognitivo durante el juego dramático en la primera infancia?
    
        .bg-color-5.p-5(data-aos="fade-left")
          p.mb-0 El juego dramático es una herramienta fundamental para el desarrollo integral en la primera infancia, debido a que promueve habilidades cognitivas, sociales y emocionales. Las reglas que rigen este tipo de juego se dividen en explícitas e implícitas, y su correcta comprensión e implementación facilita la construcción de ambientes lúdicos participativos, solidarios y significativos.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Reglas explícitas: normas claras para el orden y la convivencia - 1")
            p Las reglas explícitas son aquellas normas comunicadas de manera directa y consciente, establecidas para organizar la actividad lúdica. Estas reglas se presentan generalmente al inicio del juego o durante su desarrollo y permiten que los niños comprendan con claridad los límites, roles, tiempos y formas de interacción. Por ejemplo, establecer el turno para hablar, el respeto a los personajes y la permanencia en la trama son normas explícitas que aseguran la participación equitativa y el respeto mutuo.
    
          .div(titulo="Reglas explícitas: normas claras para el orden y la convivencia - 2")
            p Estas reglas cumplen una función esencial en el aprendizaje, dado que fomentan la autorregulación, la responsabilidad y la comprensión del concepto de norma dentro del grupo. Según estudios recientes en psicología del desarrollo, las reglas explícitas también fortalecen la capacidad de planificación y la memoria operativa en niños pequeños, habilidades cognitivas cruciales para el aprendizaje formal posterior.
            p Además, estas normas explícitas contribuyen a crear un ambiente seguro donde los niños pueden explorar la creatividad con confianza, sabiendo que existen límites claros que protegen la integridad de todos los participantes.

    
          .div(titulo="Reglas implícitas: la regulación social y emocional no verbalizada")
            p En contraposición, las reglas implícitas son aquellas que no se enuncian verbalmente pero que son aprendidas y respetadas a través de la interacción social y la experiencia compartida. Estas reglas están profundamente arraigadas en la dinámica social del grupo y se manifiestan en comportamientos como respetar la coherencia del relato, interpretar el rol de manera adecuada y responder con sensibilidad a las señales de los compañeros.
            p Estas reglas favorecen el desarrollo de competencias socioemocionales esenciales como la empatía, la comprensión mutua y la negociación social. La interiorización de normas implícitas fortalece la capacidad de los niños para adaptarse a diferentes contextos sociales y desarrollar relaciones saludables basadas en la confianza y el respeto.
            p Es precisamente en este nivel tácito donde el juego dramático se convierte en un escenario privilegiado para el aprendizaje de normas sociales complejas, que van más allá de lo explícito y permiten el ejercicio de la flexibilidad cognitiva y la sensibilidad interpersonal.
    
    h2(data-aos="fade-left").mb-5 Sinergia entre reglas explícitas e implícitas: clave para el desarrollo integral

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5(data-aos="fade-left").mb-3
          p.mb-0 Para potenciar el efecto educativo del juego dramático, es fundamental mantener un equilibrio dinámico entre las reglas explícitas y las implícitas. Las primeras proporcionan estructura, claridad y seguridad, mientras que las segundas enriquecen la experiencia mediante la creatividad, la espontaneidad y la construcción colectiva del sentido del juego.
        p(data-aos="fade-left") El adulto juega un rol estratégico como mediador, al establecer normas claras que organizan el juego, y al mismo tiempo, al observar y facilitar que los niños asuman y respeten las reglas implícitas emergentes del grupo. Esta mediación permite que el juego sea una experiencia inclusiva y solidaria, donde se promueven la participación activa y el sentido de pertenencia.

    h2(data-aos="fade-left").mb-5 Reflexionemos: implicaciones pedagógicas y conclusiones
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Incorporar una comprensión profunda de las reglas explícitas e implícitas en el diseño y acompañamiento del juego dramático permite crear ambientes educativos que favorecen el desarrollo de habilidades para la vida. Se potencia la autonomía, la creatividad, la cooperación y la regulación emocional, competencias indispensables en la formación de niños y niñas capaces de interactuar de manera constructiva en sociedad.
        p(data-aos="fade-left") En la práctica educativa, esto se traduce en planificar espacios y momentos para que las reglas sean claras, justas y flexibles, y en cultivar una cultura de respeto mutuo donde los niños aprendan a autorregularse y a respetar las normas sociales, tanto explícitas como implícitas, en diferentes contextos.
        p Por tanto, el manejo adecuado de estas reglas no solo mejora la calidad del juego dramático, sino que también contribuye a la formación de sujetos críticos, creativos y comprometidos con su entorno social.

    
    #t_1_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.6] Rol del adulto en el acompañamiento del juego dramático
    
    p.mb-5 El acompañamiento del adulto en el juego dramático durante la primera infancia es un factor determinante para potenciar experiencias de aprendizaje significativas y transformadoras.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Rol del adulto en el acompañamiento del juego dramático
            p.mb-4(data-aos="fade-right") En el PDF <b>Rol del adulto en el acompañamiento del juego dramático</b>, se exploran las múltiples funciones que cumple el adulto como mediador, facilitador y observador activo, destacando su influencia en la creación de ambientes seguros, inclusivos y ricos en estímulos. Este enfoque resalta la importancia de una intervención respetuosa, que fomente la autonomía, la expresión simbólica y el desarrollo socioemocional, sentando las bases para una educación que valore el juego como medio fundamental para formar individuos creativos, empáticos y participativos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Rol del adulto en el acompañamiento del juego dramático.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/28.png', alt='')
    
    #t_1_7.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.7] Estrategias para diseñar ambientes lúdicos que favorecen la expresión 
    
    p.mb-5 El diseño de ambientes lúdicos tiene un papel central en la promoción de la expresión dramática durante la primera infancia, al ofrecer condiciones que estimulan la imaginación, la interacción y el juego simbólico. 

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Estrategias para diseñar ambientes lúdicos que favorecen la expresión dramática
            p.mb-4(data-aos="fade-right") En el PDF <b>Estrategias para diseñar ambientes lúdicos que favorecen la expresión dramática</b>, se presentan orientaciones clave para la creación de espacios físicos y emocionales que potencien la creatividad, la participación y el desarrollo integral de los niños y las niñas. A través de estrategias centradas en la flexibilidad, la seguridad, la diversidad de materiales y el acompañamiento respetuoso del adulto, este recurso busca fortalecer prácticas pedagógicas inclusivas que reconozcan al ambiente como un agente activo en el aprendizaje y en la construcción de experiencias significativas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias para diseñar ambientes lúdicos que favorecen la expresión dramática.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/29.png', alt='')
        
    #t_1_8.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.8] Estudio de caso: análisis teórico de una situación de juego dramático
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿De qué manera el análisis crítico de un juego dramático en la primera infancia, puede evidenciar su valor formativo y social?
    
        .bg-color-1.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cuando se aborda el análisis de una situación específica de juego dramático, es necesario comprender que este fenómeno constituye un espacio vital para la construcción del conocimiento, la identidad y las habilidades socioemocionales en los primeros años de vida. Se trata de un entorno donde los niños no solo reproducen experiencias sociales, sino que experimentan, interpretan y transforman la realidad mediante el juego. Analizar casos concretos aporta una visión integral que conecta la teoría educativa con la práctica pedagógica, promoviendo ambientes participativos y solidarios, fundamentales en la educación infantil actual  (Cuéllar, Tenreyro & Castellón, 2018).

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5(data-aos="fade-left").mb-3
          p Considerar un grupo de niños y niñas que participan en un juego dramático espontáneo dentro del aula, simulando una consulta médica.
          p En este contexto, cada niño adopta un rol diferente, médico, enfermera, paciente, familiar, y juntos construyen una historia compartida. Se observa la negociación constante de turnos, el uso del lenguaje verbal y no verbal para representar sus personajes, así como la regulación emocional frente a conflictos emergentes.
          p.mb-0 El docente acompaña de forma intencional, favoreciendo la inclusión y el diálogo sin interrumpir la creatividad natural de los niños.
        p(data-aos="fade-left") Este escenario refleja la riqueza del juego dramático como espacio de aprendizaje dinámico, donde se integran habilidades cognitivas, sociales y afectivas.
        p En esta situación, se manifiestan claramente los elementos esenciales del juego dramático, cada uno con un papel crucial:
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/33.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="83%" y="7.5%" numero="+")
                h5 Ficción
                p La capacidad para crear un universo imaginario basado en experiencias reales, estimulando la creatividad y la construcción simbólica del conocimiento (Bodrova & Leong, 2015).
    
              .bg-color-white.box-shadow.p-3(x="18.5%" y="7%" numero="+")
                h5 Simulación
                p La imitación y representación permiten la internalización de normas sociales y culturales, alineadas con la teoría sociocultural de Vygotsky (2020), que resalta el juego como motor del desarrollo cognitivo y social.
    
              .bg-color-white.box-shadow.p-3(x="97%" y="74%" numero="+")
                h5 Roles
                p Adoptar diferentes identidades sociales posibilita la empatía y el aprendizaje de las reglas sociales, promoviendo la comprensión de la diversidad y la cooperación.
    
              .bg-color-white.box-shadow.p-3(x="3%" y="67%" numero="+")
                h5 Narración
                p La estructura narrativa facilita la organización del pensamiento y la comunicación efectiva, fortaleciendo habilidades lingüísticas y la capacidad de expresar emociones complejas (Nicolopoulou, 2019).
    
    p.mb-5 La interacción en este juego impulsa la autorregulación, la negociación y la resolución de conflictos, competencias esenciales para la convivencia pacífica y la vida en comunidad:

    .bg-full-width.bg-color-4
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/34.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center 01
                p.mb-0 El adulto actúa como mediador intencional que fomenta un ambiente emocionalmente seguro, donde los niños pueden experimentar libremente, sin temor al error o la crítica. Su intervención es sutil, enfocada en promover la autonomía, la inclusión y el respeto por las diferencias, aspectos claves para formar sujetos críticos y solidarios (OECD, 2021).
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/35.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center 02
                p.mb-0 Además, el diseño del ambiente físico, accesible, flexible y estimulante, juega un rol fundamental en la potenciación del juego dramático. Materiales diversos, que invitan a la exploración simbólica, junto a espacios que favorecen la interacción grupal, amplifican las posibilidades formativas del juego (Edwards, Gandini & Forman, 2017).
    
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/36.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-9.p-5(data-aos="fade-left").mb-3
              h5 Reflexionemos:
              p El estudio de casos en el juego dramático, ofrece una herramienta poderosa para reflexionar sobre las prácticas pedagógicas, favoreciendo una educación centrada en el niño como protagonista activo de su aprendizaje. Este enfoque promueve no solo el desarrollo integral, sino también la creación de ambientes de aprendizaje inclusivos, participativos y solidarios, tal como lo recomiendan los marcos curriculares contemporáneos (UNESCO, 2021).
              p.mb-0 A través del análisis sistemático de situaciones reales, se identifican estrategias eficaces para potenciar el juego dramático, evidenciando su impacto positivo en el desarrollo emocional, social y cognitivo, y su contribución al bienestar integral de la infancia.

            p(data-aos="fade-left") Luego de adentrarse en el fascinante universo de los juegos dramáticos en la primera infancia, se da paso a una nueva etapa del recorrido: los juegos de roles. Surge entonces una serie de interrogantes claves: ¿cómo se construyen las historias que niños y niñas representan?, ¿qué aprendizajes emergen cuando se transforman en médicas, docentes, bomberos o personajes imaginarios? A través del "como si", se revela una poderosa herramienta pedagógica que favorece el desarrollo de habilidades sociales, emocionales y cognitivas. Se invita, entonces, a continuar esta exploración para comprender cómo el juego de roles contribuye a la formación integral en contextos educativos participativos y solidarios. ¡Es momento de avanzar!







    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
