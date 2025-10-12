export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Expresión dramática',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Subtítulo tema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Subtítulo tema',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Subtítulo tema',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subtítulo tema',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Subtítulo tema',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Subtítulo tema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Subtítulo tema',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Sarlé, P. M. & Rosemberg, C. R. (2015). Dale que… El juego dramático y el desarrollo del lenguaje en los niños pequeños: ( ed.). Homo Sapiens Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67112 ',
    },
    {
      referencia:
        'Cañas Torregrosa, J. (2013). Didáctica de la expresión dramática: una aproximación a la dinámica teatral en el aula: ( ed.). Ediciones Octaedro, S.L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61866',
    },
    {
      referencia:
        'Macías, M. C. (2011). El juego dramático en educación infantil. Temas para la Educación, 12, 1-6. ',
      link:
        'https://tuaulavirtual.educatic.unam.mx/pluginfile.php/2423640/mod_assign/intro/El%20juego%20dram%C3%A1tico%20en%20la%20educaci%C3%B3n%20infantil.pdf ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2014). Referentes Técnicos para la Educación Inicial en el Marco de la Atención Integral . Bogotá.  ',
      link:
        'https://www.mineducacion.gov.co/1780/articles-341880_recurso_1.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2014). Documento N° 22: El juego en la educación inicial. Bogotá: MEN.  ',
      link:
        'https://www.mineducacion.gov.co/portal/men/Publicaciones/Documentos/341835:Documento-N-22-El-juego-en-la-educacion-inicial',
    },
    {
      referencia:
        'UNESCO. (2021). Reimaginar juntos nuestros futuros: un nuevo contrato social para la educación. París: UNESCO.  ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000379381_spa',
    },
    {
      referencia:
        'Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.   ',
      link: 'https://doi.org/10.2307/j.ctvjf9vz4 ',
    },
    {
      referencia:
        'Saco, N. (1988). La expresión dramática infantil. Revista Educación, (41), 227-243.  ',
      link:
        'https://biblat.unam.mx/hevila/EducacionM%C3%A9xicoDF/1982/vol8/no41/18.pdf',
    },
    {
      referencia:
        'Navarro Solano, R., & Mantovani, A. (2012). El juego dramático de 5 a 9 años.  ',
      link: 'https://www.torrossa.com/en/resources/an/2914616',
    },
    {
      referencia:
        'Liu, C., Solis, S. L., Jensen, H., Hopkins, E., Neale, D., Zosh, J., ... & Whitebread, D. (2017). La neurociencia y el aprendizaje a través del juego: un resumen de la evidencia. The Lego Foundation.  ',
      link:
        'https://inee.org/sites/default/files/resources/la-neurociencia-y-el-aprendizaje-a-trave-%C3%BCs-del-juego-web.pdf',
    },
    {
      referencia:
        'Martínez, P. M., & Gracia, P. R. (2012). Propuestas de innovación para la enseñanza de la historia en Educación Infantil. Revista electrónica interuniversitaria de formación del profesorado, 15(1), 81-90.  ',
      link: 'https://www.redalyc.org/pdf/2170/217024398006.pdf',
    },
    {
      referencia:
        'Brell, M. (2006). Juegos de rol. Educación social: Revista de intervención socioeducativa, 33, 104-113.   ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=2039577',
    },
    {
      referencia:
        'Guerrero, G. I. S., Vargas, L. Y. L., & Acero, J. E. D. (2018). El juego dramático: Una estrategia para mejorar la expresión oral. Educación y ciencia, (21), 1-19.  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7982061',
    },
    {
      referencia:
        'Arévalo Parra, Z. A. (2021). La oralidad en la primera infancia desde la potencia del juego dramático.  ',
      link:
        'https://repository.udistrital.edu.co/items/bd9fb937-4f3e-4152-9166-e4df64acd6d6 ',
    },
    {
      referencia:
        'Ruiz, C. R. (1996). El juego infantil. Cultura y educación: Culture and Education, 1, 71-76. ',
      link:
        ' https://archivos.csif.es/archivos/andalucia/ensenanza/revistas/csicsif/revista/pdf/Numero_15/CRISTINA_REINA_1.pdf',
    },
    {
      referencia:
        'Castro Cárdenas, M. P., & Cevallos Cedeño, Á. M. (2021). La estimulación del cerebro y su influencia en el aprendizaje de los niños de preescolar. Revista de Ciencias Humanísticas y Sociales (ReHuSo), 6(1), 49-56.  ',
      link:
        'http://scielo.senescyt.gob.ec/scielo.php?script=sci_arttext&pid=S2550-65872021000100049',
    },
    {
      referencia:
        'Cuellar Cartaya, M. E., Tenreyro Mauriz, M., & Castellón León, G. (2018). El juego en la educación preescolar: fundamentos históricos. Conrado, 14(62), 117-123.  ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S1990-86442018000200020&script=sci_arttext&tlng=pt',
    },
    {
      referencia:
        'Carbonero Celis, C. (2016). El juego motor en la infancia: ( ed.). Wanceulen Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/63430',
    },
    {
      referencia:
        'Anton, M. (Coord.), Blanch, S. (Coord.) & Edo, M. (Coord.). (2016). El juego en la primera infancia: ( ed.). Ediciones Octaedro, S.L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/114193',
    },
    {
      referencia:
        'Vigotsky, L. S. (1966). “El papel del juego en el desarrollo del niño.” En El desarrollo de los procesos psicológicos superiores. Barcelona, Grijalbo. ',
      link:
        'https://educrea.cl/wp-content/uploads/2020/03/papel-del-juego.pdf ',
    },
    {
      referencia:
        'Piaget, J. (1962). Play, dreams and imitation in childhood. New York: Norton, Traducción española: La formación del símbolo en el niño. México, F. C. E. ',
      link:
        'https://www.scribd.com/document/480440647/Piaget-La-formacion-del-simbolo-en-el-nino-pdf ',
    },
    {
      referencia:
        'UNESCO. (1980). El niño y el juego: planteamientos teóricos aplicaciones pedagógicas. Estudios y documentos de educación, 34, 5-33. ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000134047',
    },
    {
      referencia:
        'Gallego, I. B. (2017). La neurociencia en el ámbito educativo. Revista Internacional de apoyo a la inclusión, logopedia, sociedad y multiculturalidad, 3(1), 118-135.  ',
      link: 'https://www.redalyc.org/journal/5746/574660901005/html/',
    },
    {
      referencia:
        'Bones, S. B. A., Acosta, M. M. E., Morales, E. D. R. R., & Guamaní, M. A. E. (2023). El juego en el desarrollo integral infantil, una revisión sistemática. REVISTA MULTIDISCIPLINARIA DE DESARROLLO AGROPECUARIO, TECNOLÓGICO, EMPRESARIAL Y HUMANISTA., 5(3), 7-7.  ',
      link: 'https://investigacion.utc.edu.ec/index.php/dateh/article/view/690',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente lúdico',
      significado:
        'Espacio físico y emocional diseñado para favorecer el juego, la creatividad y la interacción.',
    },
    {
      termino: 'Expresión dramática',
      significado:
        'Manifestación comunicativa que utiliza el cuerpo, la voz y la imaginación para representar ideas.',
    },
    {
      termino: 'Ficción',
      significado:
        'Construcción imaginaria que sirve de base para el juego dramático.',
    },
    {
      termino: 'Juego de roles',
      significado:
        'Modalidad de juego donde los niños asumen personajes y actúan situaciones sociales o ficticias.',
    },
    {
      termino: 'Juego dramático',
      significado:
        'Tipo de juego basado en la simulación y la representación de historias o escenas.',
    },
    {
      termino: 'Juego espontáneo',
      significado:
        'Juego que surge de manera libre y natural, sin intervención directa del adulto.',
    },
    {
      termino: 'Juego guiado',
      significado:
        'Juego en el que el adulto propone y orienta la actividad lúdica, sin controlar completamente.',
    },
    {
      termino: 'Juego estructurado',
      significado:
        'Juego con reglas claras y materiales específicos, con participación activa y organizada.',
    },
    {
      termino: 'Narración',
      significado:
        'Relato o secuencia de eventos que da sentido a la acción en el juego dramático.',
    },
    {
      termino: 'Observación pedagógica',
      significado:
        'Técnica para registrar y analizar el comportamiento de los niños durante el juego.',
    },
    {
      termino: 'Participación activa',
      significado:
        'Involucramiento consciente y comprometido del niño en actividades educativas y lúdicas.',
    },
    {
      termino: 'Personajes',
      significado: 'Roles o identidades asumidos durante el juego de roles.',
    },
    {
      termino: 'Reglas implícitas',
      significado:
        'Normas no expresadas verbalmente, pero que regulan la conducta dentro del juego.',
    },
    {
      termino: 'Reglas explícitas',
      significado:
        'Normas claras y comunicadas que organizan el desarrollo del juego.',
    },
    {
      termino: 'Simulación',
      significado:
        'Representación de situaciones reales o imaginarias mediante la acción y el juego.',
    },
  ],
}
