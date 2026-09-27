// Banco activo de HistoLab: únicamente las 15 fotografías complementarias seleccionadas.
// corte-01.jpg y corte-02.jpg se definen directamente en index.html.

const cortesPdf = [
  {
    "id": "original-6",
    "image": "original-6.jpg",
    "title": "Tejido conjuntivo subepitelial",
    "category": "Tejido conjuntivo",
    "status": "Foto original sin marcas",
    "source": "Fotografía original aportada por el usuario. Terminología: Guía de estudio tejido epitelial, apartados 2 y 5.4; comparación con los preparados del PDF.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Qué tejido se observa bajo el revestimiento?",
        "answers": [
          "Tejido conjuntivo",
          "tejido conectivo"
        ],
        "target": [
          53,
          36
        ],
        "marker": [
          67,
          19
        ]
      }
    ],
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab."
  },
  {
    "id": "original-15",
    "image": "original-15.jpg",
    "title": "Intestino delgado · epitelio y vellosidades",
    "category": "Sistema digestivo",
    "status": "Foto original sin marcas",
    "source": "Fotografía original aportada por el usuario. Terminología: Guía de estudio tejido epitelial, apartados 2 y 5.4; comparación con los preparados del PDF.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Cómo se llama la célula clara señalada?",
        "answers": [
          "Célula caliciforme",
          "celula caliciforme",
          "células caliciformes"
        ],
        "target": [
          77,
          43
        ],
        "marker": [
          66,
          31
        ]
      },
      {
        "label": 2,
        "prompt": "¿Cómo se llama la proyección de la mucosa señalada?",
        "answers": [
          "Vellosidad intestinal",
          "vellosidad"
        ],
        "target": [
          75,
          78
        ],
        "marker": [
          63,
          85
        ]
      }
    ],
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab."
  },
  {
    "id": "original-8",
    "image": "original-8.jpg",
    "title": "Epitelio plano estratificado queratinizado · detalle",
    "category": "Tejido epitelial",
    "status": "Foto original sin marcas",
    "source": "Fotografía original aportada por el usuario. Terminología: Guía de estudio tejido epitelial, apartados 2 y 5.4; comparación con los preparados del PDF.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Qué tipo de epitelio se observa?",
        "answers": [
          "Epitelio plano estratificado queratinizado",
          "epitelio escamoso estratificado queratinizado",
          "epitelio pavimentoso estratificado queratinizado"
        ],
        "target": [
          51,
          54
        ],
        "marker": [
          64,
          66
        ]
      },
      {
        "label": 2,
        "prompt": "¿Cómo se llama la capa superficial señalada?",
        "answers": [
          "Estrato córneo",
          "capa córnea",
          "capa de queratina"
        ],
        "target": [
          54,
          65
        ],
        "marker": [
          43,
          73
        ]
      }
    ],
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab."
  },
  {
    "id": "original-9",
    "image": "original-9.jpg",
    "title": "Epitelio queratinizado y tejido conjuntivo",
    "category": "Tejido epitelial",
    "status": "Foto original sin marcas",
    "source": "Fotografía original aportada por el usuario. Terminología: Guía de estudio tejido epitelial, apartados 2 y 5.4; comparación con los preparados del PDF.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Qué tipo de epitelio se observa?",
        "answers": [
          "Epitelio plano estratificado queratinizado",
          "epitelio escamoso estratificado queratinizado",
          "epitelio pavimentoso estratificado queratinizado"
        ],
        "target": [
          49,
          54
        ],
        "marker": [
          61,
          42
        ]
      },
      {
        "label": 2,
        "prompt": "¿Qué tejido se encuentra bajo el epitelio?",
        "answers": [
          "Tejido conjuntivo",
          "tejido conectivo"
        ],
        "target": [
          42,
          70
        ],
        "marker": [
          24,
          65
        ]
      }
    ],
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab."
  },
  {
    "id": "original-11",
    "image": "original-11.jpg",
    "title": "Intestino delgado · vista general",
    "category": "Sistema digestivo",
    "status": "Foto original sin marcas",
    "source": "Fotografía original aportada por el usuario. Terminología: Guía de estudio tejido epitelial, apartados 2 y 5.4; comparación con los preparados del PDF.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Cómo se llama la proyección de la mucosa señalada?",
        "answers": [
          "Vellosidad intestinal",
          "vellosidad"
        ],
        "target": [
          29,
          32
        ],
        "marker": [
          42,
          25
        ]
      }
    ],
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab."
  },
  {
    "id": "original-16",
    "image": "original-16.jpg",
    "title": "Intestino delgado · células caliciformes",
    "category": "Sistema digestivo",
    "status": "Foto original sin marcas",
    "source": "Fotografía original aportada por el usuario. Terminología: Guía de estudio tejido epitelial, apartados 2 y 5.4; comparación con los preparados del PDF.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Cómo se llama la célula clara señalada?",
        "answers": [
          "Célula caliciforme",
          "celula caliciforme",
          "células caliciformes"
        ],
        "target": [
          40,
          28
        ],
        "marker": [
          27,
          24
        ]
      }
    ],
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab."
  },
  {
    "id": "original-17",
    "image": "original-17.jpg",
    "title": "Intestino delgado · revestimiento de una vellosidad",
    "category": "Sistema digestivo",
    "status": "Foto original sin marcas",
    "source": "Fotografía original aportada por el usuario. Terminología: Guía de estudio tejido epitelial, apartados 2 y 5.4; comparación con los preparados del PDF.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Qué tipo de epitelio reviste la vellosidad?",
        "answers": [
          "Epitelio cilíndrico simple",
          "epitelio simple cilíndrico",
          "epitelio prismático simple"
        ],
        "target": [
          52,
          25
        ],
        "marker": [
          53,
          17
        ]
      },
      {
        "label": 2,
        "prompt": "¿Cómo se llama la célula clara señalada?",
        "answers": [
          "Célula caliciforme",
          "celula caliciforme",
          "células caliciformes"
        ],
        "target": [
          51,
          53
        ],
        "marker": [
          49,
          61
        ]
      }
    ],
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab."
  },
  {
    "id": "original-hueso",
    "image": "original-hueso.jpg",
    "title": "Hueso compacto · osteona",
    "category": "Tejido conjuntivo",
    "status": "Foto original sin marcas",
    "source": "Guía de estudio tejidos conectivos especializados: tejido óseo. Fotografía original aportada por el usuario.",
    "note": "Fotografía sin retoques. Las flechas moradas pertenecen a HistoLab.",
    "questions": [
      {
        "label": 1,
        "marker": [
          67,
          42
        ],
        "target": [
          47,
          42
        ],
        "prompt": "¿Cómo se llama el conducto central de la osteona?",
        "answers": [
          "Conducto de Havers",
          "conducto central",
          "canal de Havers"
        ]
      },
      {
        "label": 2,
        "marker": [
          29,
          56
        ],
        "target": [
          40,
          48
        ],
        "prompt": "¿Cómo se llaman las capas de matriz que rodean el conducto?",
        "answers": [
          "Laminillas concéntricas",
          "laminillas oseas concentricas",
          "laminillas óseas",
          "lamelas concéntricas"
        ]
      }
    ]
  },
  {
    "id": "original-adiposo",
    "image": "original-adiposo.jpg",
    "title": "Tejido adiposo blanco · unilocular",
    "category": "Tejido conjuntivo",
    "status": "Foto original sin marcas",
    "source": "Guía de estudio tejidos conectivos especializados: tejido adiposo. Fotografía original del usuario.",
    "note": "El contenido lipídico se pierde durante la preparación; se observan perfiles celulares claros. No se evalúan núcleos individuales que estén fuera de foco.",
    "questions": [
      {
        "label": 1,
        "prompt": "Identifica el tipo específico de tejido.",
        "answers": [
          "Tejido adiposo blanco",
          "tejido adiposo unilocular",
          "tejido adiposo blanco unilocular"
        ],
        "target": [
          53,
          23
        ],
        "marker": [
          66,
          15
        ]
      },
      {
        "label": 2,
        "prompt": "¿Cómo se llama la célula señalada?",
        "answers": [
          "Adipocito unilocular",
          "adipocito blanco",
          "adipocito"
        ],
        "target": [
          43,
          28
        ],
        "marker": [
          31,
          21
        ]
      },
      {
        "label": 3,
        "prompt": "Identifica la banda de tejido entre grupos de adipocitos.",
        "answers": [
          "Tabique conjuntivo",
          "tabique conectivo",
          "septo conjuntivo",
          "septo conectivo"
        ],
        "target": [
          48,
          43
        ],
        "marker": [
          59,
          36
        ]
      },
      {
        "label": 4,
        "prompt": "¿Qué estructura se observa dentro del tabique?",
        "answers": [
          "Vaso sanguíneo",
          "vaso"
        ],
        "target": [
          30,
          44
        ],
        "marker": [
          20,
          51
        ]
      }
    ]
  },
  {
    "id": "original-nervio",
    "image": "original-nervio.jpg",
    "title": "Nervio periférico · fascículos y envolturas",
    "category": "Tejido nervioso",
    "status": "Foto original sin marcas",
    "source": "Apunte - Tejido Nervioso: nervios periféricos y envolturas conjuntivas. Fotografía original del usuario.",
    "note": "Las fibras presentan diferentes orientaciones de corte. No se exige distinguir axones, mielina o núcleos de Schwann individualmente a esta resolución.",
    "questions": [
      {
        "label": 1,
        "prompt": "Identifica el conjunto de fibras delimitado por una envoltura.",
        "answers": [
          "Fascículo nervioso",
          "fascículo de fibras nerviosas"
        ],
        "target": [
          50,
          39
        ],
        "marker": [
          40,
          18
        ]
      },
      {
        "label": 2,
        "prompt": "¿Cómo se llama la envoltura que delimita el fascículo?",
        "answers": [
          "Perineuro",
          "perineurio"
        ],
        "target": [
          67,
          42
        ],
        "marker": [
          77,
          47
        ]
      },
      {
        "label": 3,
        "prompt": "¿Qué tejido conjuntivo rodea y separa los fascículos?",
        "answers": [
          "Epineuro",
          "epineurio"
        ],
        "target": [
          72,
          29
        ],
        "marker": [
          82,
          22
        ]
      },
      {
        "label": 4,
        "prompt": "Identifica los haces ondulados del tejido conjuntivo externo.",
        "answers": [
          "Fibras de colágeno",
          "fibras colágenas",
          "haces de colágeno"
        ],
        "target": [
          22,
          25
        ],
        "marker": [
          14,
          18
        ]
      },
      {
        "label": 5,
        "prompt": "¿Qué estructura se observa en el tejido conjuntivo?",
        "answers": [
          "Vaso sanguíneo",
          "vaso"
        ],
        "target": [
          47,
          60
        ],
        "marker": [
          58,
          66
        ]
      }
    ]
  },
  {
    "id": "original-nervio-28",
    "image": "original-nervio-28.jpg",
    "title": "Nervio periférico · segunda vista",
    "category": "Tejido nervioso",
    "status": "Foto original sin marcas",
    "source": "Apunte - Tejido Nervioso, pp. 13–14: fascículos, perineuro y epineuro. Fotografía original del usuario.",
    "note": "Se reconocen fascículos con distinta orientación de corte. Las zonas claras de separación no se evalúan como estructuras.",
    "questions": [
      {
        "label": 1,
        "prompt": "Identifica el conjunto de fibras señalado.",
        "answers": [
          "Fascículo nervioso",
          "fascículo de fibras nerviosas"
        ],
        "target": [
          54,
          39
        ],
        "marker": [
          32,
          30
        ]
      },
      {
        "label": 2,
        "prompt": "Identifica la envoltura del fascículo.",
        "answers": [
          "Perineuro",
          "perineurio"
        ],
        "target": [
          45,
          49
        ],
        "marker": [
          30,
          52
        ]
      },
      {
        "label": 3,
        "prompt": "¿Qué estructuras onduladas forman el haz señalado?",
        "answers": [
          "Fibras nerviosas",
          "haces de fibras nerviosas"
        ],
        "target": [
          67,
          58
        ],
        "marker": [
          78,
          68
        ]
      },
      {
        "label": 4,
        "prompt": "Identifica el tejido conjuntivo externo al fascículo.",
        "answers": [
          "Epineuro",
          "epineurio"
        ],
        "target": [
          80,
          61
        ],
        "marker": [
          85,
          51
        ]
      }
    ]
  },
  {
    "id": "musculo-cardiaco-transversal",
    "image": "musculo-cardiaco-transversal.jpg",
    "title": "Músculo cardíaco · cortes transversales y oblicuos",
    "category": "Tejido muscular",
    "status": "Foto original sin marcas",
    "source": "Apunte - Tejido muscular, p. 2: células cardíacas y posición central del núcleo. La identificación se apoya en los perfiles musculares y núcleos centrales visibles.",
    "note": "Se señalan perfiles celulares, núcleos y tejido conjuntivo. No se evalúan discos intercalares ni estriaciones transversales porque no se distinguen con claridad en esta orientación.",
    "questions": [
      {
        "label": 1,
        "prompt": "Identifica el tipo de tejido muscular.",
        "answers": [
          "Músculo estriado cardíaco",
          "músculo cardíaco",
          "tejido muscular cardíaco"
        ],
        "target": [
          66,
          34
        ],
        "marker": [
          76,
          28
        ]
      },
      {
        "label": 2,
        "prompt": "¿Cómo se llama la célula muscular señalada?",
        "answers": [
          "Cardiomiocito",
          "miocardiocito",
          "célula muscular cardíaca"
        ],
        "target": [
          87,
          42
        ],
        "marker": [
          93,
          48
        ]
      },
      {
        "label": 3,
        "prompt": "¿Qué estructura violeta se observa en el interior de la célula?",
        "answers": [
          "Núcleo central",
          "núcleo",
          "núcleo del cardiomiocito"
        ],
        "target": [
          65,
          28
        ],
        "marker": [
          56,
          21
        ]
      },
      {
        "label": 4,
        "prompt": "Identifica el tejido de sostén entre los grupos de células.",
        "answers": [
          "Tejido conjuntivo intersticial",
          "tejido conectivo intersticial",
          "tejido conjuntivo",
          "tejido conectivo"
        ],
        "target": [
          53,
          54
        ],
        "marker": [
          42,
          51
        ]
      }
    ]
  },
  {
    "id": "cartilago-hialino",
    "image": "cartilago-hialino.jpg",
    "title": "Cartílago hialino · células, matriz y pericondrio",
    "category": "Tejido conjuntivo",
    "status": "Foto original sin marcas",
    "source": "Guía de estudio tejidos conectivos especializados, pp. 2–3: condrocitos, grupos isógenos, matriz y pericondrio.",
    "note": "Las preguntas se centran en estructuras visibles. Las zonas claras alrededor de células pueden acentuarse por retracción durante la preparación.",
    "questions": [
      {
        "label": 1,
        "prompt": "¿Qué tipo de cartílago se observa?",
        "answers": [
          "Cartílago hialino"
        ],
        "target": [
          63,
          23
        ],
        "marker": [
          76,
          17
        ]
      },
      {
        "label": 2,
        "prompt": "¿Cómo se llama la célula señalada?",
        "answers": [
          "Condrocito"
        ],
        "target": [
          54,
          13
        ],
        "marker": [
          63,
          9
        ]
      },
      {
        "label": 3,
        "prompt": "¿Cómo se llama la cavidad que aloja al condrocito?",
        "answers": [
          "Laguna cartilaginosa",
          "laguna",
          "condroplasto"
        ],
        "target": [
          42,
          19
        ],
        "marker": [
          30,
          15
        ]
      },
      {
        "label": 4,
        "prompt": "Identifica el grupo de células cartilaginosas señalado.",
        "answers": [
          "Grupo isógeno",
          "grupo isogénico",
          "grupo isogeno de condrocitos"
        ],
        "target": [
          35,
          33
        ],
        "marker": [
          24,
          27
        ]
      },
      {
        "label": 5,
        "prompt": "Identifica la matriz situada entre los grupos celulares.",
        "answers": [
          "Matriz interterritorial",
          "matriz cartilaginosa interterritorial"
        ],
        "target": [
          65,
          30
        ],
        "marker": [
          76,
          34
        ]
      },
      {
        "label": 6,
        "prompt": "¿Cómo se llama el tejido conjuntivo que recubre el cartílago?",
        "answers": [
          "Pericondrio"
        ],
        "target": [
          20,
          57
        ],
        "marker": [
          13,
          66
        ]
      }
    ]
  },
  {
    "id": "p05-03.jpg",
    "image": "p05-03.jpg",
    "title": "Músculo cardíaco",
    "category": "Tejido muscular",
    "status": "PDF · página 5",
    "source": "HISTO SIN ROTULAR.pdf, página 5; terminología cotejada con las guías de estudio adjuntas cuando corresponde.",
    "questions": [
      {
        "label": 1,
        "marker": [
          75,
          18
        ],
        "target": [
          53,
          48
        ],
        "prompt": "¿Qué tipo de tejido muscular se observa?",
        "answers": [
          "Músculo cardíaco",
          "musculo cardiaco",
          "tejido muscular cardíaco"
        ]
      }
    ],
    "note": "La fotografía conserva las flechas rojas incluidas en el PDF original."
  },
  {
    "id": "p06-01.jpg",
    "image": "p06-01.jpg",
    "title": "Músculo estriado esquelético",
    "category": "Tejido muscular",
    "status": "PDF · página 6",
    "source": "HISTO SIN ROTULAR.pdf, página 6; terminología cotejada con las guías de estudio adjuntas cuando corresponde.",
    "questions": [
      {
        "label": 1,
        "marker": [
          77,
          18
        ],
        "target": [
          53,
          52
        ],
        "prompt": "¿Qué tipo de músculo forma los fascículos señalados?",
        "answers": [
          "Músculo estriado esquelético",
          "músculo esquelético",
          "tejido muscular estriado esquelético"
        ]
      }
    ],
    "note": "La fotografía conserva las flechas rojas incluidas en el PDF original."
  }
];
