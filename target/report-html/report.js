$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calcular_triangulos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Calculadora de Triangulos",
  "description": "\r\nComo um usuário \r\nGostaria de informar diferentes valores para os tres lados de um triangulo\r\nPara que eu possa calcular o tipo de triangulo formado",
  "id": "calculadora-de-triangulos",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "CT001_Deve calcular triangulo equilatero",
  "description": "",
  "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "informo os tres valores iguais \u003cvalor\u003e, \u003cvalor\u003e e \u003cvalor\u003e e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "devo visualizar um triangulo \u003ctipo\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;",
  "rows": [
    {
      "cells": [
        "valor",
        "tipo"
      ],
      "line": 18,
      "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;;1"
    },
    {
      "cells": [
        "3",
        "\"Triângulo Equilátero\""
      ],
      "line": 19,
      "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;;2"
    },
    {
      "cells": [
        "5",
        "\"Triângulo Equilátero\""
      ],
      "line": 20,
      "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;;3"
    },
    {
      "cells": [
        "10",
        "\"Triângulo Equilátero\""
      ],
      "line": 21,
      "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 5999282600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "CT001_Deve calcular triangulo equilatero",
  "description": "",
  "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informo os tres valores iguais 3, 3 e 3 e calculo o triangulo formado",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "devo visualizar um triangulo \"Triângulo Equilátero\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 38
    }
  ],
  "location": "CalcularTriangulosSteps.informoOsTresValoresIguaisEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 886549800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Equilátero",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 48075400,
  "status": "passed"
});
formatter.after({
  "duration": 406834400,
  "status": "passed"
});
formatter.after({
  "duration": 648799300,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4315222200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "CT001_Deve calcular triangulo equilatero",
  "description": "",
  "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informo os tres valores iguais 5, 5 e 5 e calculo o triangulo formado",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "devo visualizar um triangulo \"Triângulo Equilátero\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "5",
      "offset": 34
    },
    {
      "val": "5",
      "offset": 38
    }
  ],
  "location": "CalcularTriangulosSteps.informoOsTresValoresIguaisEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 819811900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Equilátero",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 46833200,
  "status": "passed"
});
formatter.after({
  "duration": 388696100,
  "status": "passed"
});
formatter.after({
  "duration": 656175700,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4425035300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "CT001_Deve calcular triangulo equilatero",
  "description": "",
  "id": "calculadora-de-triangulos;ct001-deve-calcular-triangulo-equilatero;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informo os tres valores iguais 10, 10 e 10 e calculo o triangulo formado",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "devo visualizar um triangulo \"Triângulo Equilátero\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 35
    },
    {
      "val": "10",
      "offset": 40
    }
  ],
  "location": "CalcularTriangulosSteps.informoOsTresValoresIguaisEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 821985200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Equilátero",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 53517700,
  "status": "passed"
});
formatter.after({
  "duration": 378847100,
  "status": "passed"
});
formatter.after({
  "duration": 656117200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "CT002_Deve calcular triangulo escaleno",
  "description": "",
  "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 25,
  "name": "informo os tres valores diferentes \u003cvalor1\u003e, \u003cvalor2\u003e e \u003cvalor3\u003e e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar um triangulo \u003ctipo\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3",
        "tipo"
      ],
      "line": 29,
      "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;;1"
    },
    {
      "cells": [
        "1",
        "2",
        "3",
        "\"Triângulo Escaleno\""
      ],
      "line": 30,
      "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;;2"
    },
    {
      "cells": [
        "3",
        "7",
        "8",
        "\"Triângulo Escaleno\""
      ],
      "line": 31,
      "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;;3"
    },
    {
      "cells": [
        "5",
        "9",
        "11",
        "\"Triângulo Escaleno\""
      ],
      "line": 32,
      "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4307906800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "CT002_Deve calcular triangulo escaleno",
  "description": "",
  "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "informo os tres valores diferentes 1, 2 e 3 e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar um triangulo \"Triângulo Escaleno\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "3",
      "offset": 42
    }
  ],
  "location": "CalcularTriangulosSteps.informoOsTresValoresDiferentesEEeCalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 874823100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Escaleno",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 48891800,
  "status": "passed"
});
formatter.after({
  "duration": 387780800,
  "status": "passed"
});
formatter.after({
  "duration": 1153831400,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4287272100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "CT002_Deve calcular triangulo escaleno",
  "description": "",
  "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "informo os tres valores diferentes 3, 7 e 8 e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar um triangulo \"Triângulo Escaleno\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 35
    },
    {
      "val": "7",
      "offset": 38
    },
    {
      "val": "8",
      "offset": 42
    }
  ],
  "location": "CalcularTriangulosSteps.informoOsTresValoresDiferentesEEeCalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 958947400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Escaleno",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 48528200,
  "status": "passed"
});
formatter.after({
  "duration": 356965400,
  "status": "passed"
});
formatter.after({
  "duration": 652014000,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4270740300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "CT002_Deve calcular triangulo escaleno",
  "description": "",
  "id": "calculadora-de-triangulos;ct002-deve-calcular-triangulo-escaleno;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "informo os tres valores diferentes 5, 9 e 11 e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "devo visualizar um triangulo \"Triângulo Escaleno\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 35
    },
    {
      "val": "9",
      "offset": 38
    },
    {
      "val": "11",
      "offset": 42
    }
  ],
  "location": "CalcularTriangulosSteps.informoOsTresValoresDiferentesEEeCalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 805566800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Escaleno",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 49988600,
  "status": "passed"
});
formatter.after({
  "duration": 381213100,
  "status": "passed"
});
formatter.after({
  "duration": 648107700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "CT003_Deve calcular triangulo isosceles",
  "description": "",
  "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 36,
  "name": "informo dois valores iguais e um valor diferente \u003cvalor1\u003e, \u003cvalor2\u003e e \u003cvalor3\u003e e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 37,
  "name": "devo visualizar um triangulo \u003ctipo\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3",
        "tipo"
      ],
      "line": 40,
      "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "3",
        "\"Triângulo Isósceles\""
      ],
      "line": 41,
      "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;;2"
    },
    {
      "cells": [
        "5",
        "5",
        "7",
        "\"Triângulo Isósceles\""
      ],
      "line": 42,
      "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;;3"
    },
    {
      "cells": [
        "7",
        "7",
        "9",
        "\"Triângulo Isósceles\""
      ],
      "line": 43,
      "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4288625500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "CT003_Deve calcular triangulo isosceles",
  "description": "",
  "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "informo dois valores iguais e um valor diferente 1, 1 e 3 e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 37,
  "name": "devo visualizar um triangulo \"Triângulo Isósceles\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    },
    {
      "val": "1",
      "offset": 52
    },
    {
      "val": "3",
      "offset": 56
    }
  ],
  "location": "CalcularTriangulosSteps.informoDoisValoresIguaisEUmValorDiferenteEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 846929800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Isósceles",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 48876000,
  "status": "passed"
});
formatter.after({
  "duration": 360731600,
  "status": "passed"
});
formatter.after({
  "duration": 669865000,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4453548900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "CT003_Deve calcular triangulo isosceles",
  "description": "",
  "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "informo dois valores iguais e um valor diferente 5, 5 e 7 e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 37,
  "name": "devo visualizar um triangulo \"Triângulo Isósceles\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 49
    },
    {
      "val": "5",
      "offset": 52
    },
    {
      "val": "7",
      "offset": 56
    }
  ],
  "location": "CalcularTriangulosSteps.informoDoisValoresIguaisEUmValorDiferenteEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 872971100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Isósceles",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 47964000,
  "status": "passed"
});
formatter.after({
  "duration": 357915800,
  "status": "passed"
});
formatter.after({
  "duration": 660259900,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4648258100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "CT003_Deve calcular triangulo isosceles",
  "description": "",
  "id": "calculadora-de-triangulos;ct003-deve-calcular-triangulo-isosceles;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "informo dois valores iguais e um valor diferente 7, 7 e 9 e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 37,
  "name": "devo visualizar um triangulo \"Triângulo Isósceles\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 49
    },
    {
      "val": "7",
      "offset": 52
    },
    {
      "val": "9",
      "offset": 56
    }
  ],
  "location": "CalcularTriangulosSteps.informoDoisValoresIguaisEUmValorDiferenteEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 890601700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Isósceles",
      "offset": 30
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarUmTriangulo(String)"
});
formatter.result({
  "duration": 48670600,
  "status": "passed"
});
formatter.after({
  "duration": 347456400,
  "status": "passed"
});
formatter.after({
  "duration": 1059673100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "CT004_Deve validar erro no calculo informando apenas dois valores",
  "description": "",
  "id": "calculadora-de-triangulos;ct004-deve-validar-erro-no-calculo-informando-apenas-dois-valores",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 47,
  "name": "informo apenas dois valores nao informando o terceiro valor \u003cvalor1\u003e, \u003cvalor2\u003e e \u003cvalor3\u003e e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 48,
  "name": "devo visualizar mensagem de erro \u003cmensagem\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "calculadora-de-triangulos;ct004-deve-validar-erro-no-calculo-informando-apenas-dois-valores;",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3",
        "mensagem"
      ],
      "line": 51,
      "id": "calculadora-de-triangulos;ct004-deve-validar-erro-no-calculo-informando-apenas-dois-valores;;1"
    },
    {
      "cells": [
        "1",
        "2",
        "\" \"",
        "\"Preencha todos os lados\""
      ],
      "line": 52,
      "id": "calculadora-de-triangulos;ct004-deve-validar-erro-no-calculo-informando-apenas-dois-valores;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4308469300,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "CT004_Deve validar erro no calculo informando apenas dois valores",
  "description": "",
  "id": "calculadora-de-triangulos;ct004-deve-validar-erro-no-calculo-informando-apenas-dois-valores;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "informo apenas dois valores nao informando o terceiro valor 1, 2 e \" \" e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 48,
  "name": "devo visualizar mensagem de erro \"Preencha todos os lados\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "2",
      "offset": 63
    },
    {
      "val": " ",
      "offset": 68
    }
  ],
  "location": "CalcularTriangulosSteps.informoApenasDoisValoresNaoInformandoOTerceiroValorEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 798114400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 34
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarMensagemDeErro(String)"
});
formatter.result({
  "duration": 48937500,
  "status": "passed"
});
formatter.after({
  "duration": 357143800,
  "status": "passed"
});
formatter.after({
  "duration": 658353500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "CT005_Deve validar erro no calculo nao informando nenhum valor",
  "description": "",
  "id": "calculadora-de-triangulos;ct005-deve-validar-erro-no-calculo-nao-informando-nenhum-valor",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 56,
  "name": "nao informo nenhum valor e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 57,
  "name": "devo visualizar mensagem de erro \u003cmensagem\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "calculadora-de-triangulos;ct005-deve-validar-erro-no-calculo-nao-informando-nenhum-valor;",
  "rows": [
    {
      "cells": [
        "mensagem"
      ],
      "line": 60,
      "id": "calculadora-de-triangulos;ct005-deve-validar-erro-no-calculo-nao-informando-nenhum-valor;;1"
    },
    {
      "cells": [
        "\"Preencha todos os lados\""
      ],
      "line": 61,
      "id": "calculadora-de-triangulos;ct005-deve-validar-erro-no-calculo-nao-informando-nenhum-valor;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4146243600,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "CT005_Deve validar erro no calculo nao informando nenhum valor",
  "description": "",
  "id": "calculadora-de-triangulos;ct005-deve-validar-erro-no-calculo-nao-informando-nenhum-valor;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "nao informo nenhum valor e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 57,
  "name": "devo visualizar mensagem de erro \"Preencha todos os lados\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "CalcularTriangulosSteps.naoInformoNenhumValorECalculoOTrianguloFormado()"
});
formatter.result({
  "duration": 408067600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 34
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarMensagemDeErro(String)"
});
formatter.result({
  "duration": 50728800,
  "status": "passed"
});
formatter.after({
  "duration": 335718000,
  "status": "passed"
});
formatter.after({
  "duration": 655810200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "CT006_Deve validar erro no calculo informando caracteres",
  "description": "",
  "id": "calculadora-de-triangulos;ct006-deve-validar-erro-no-calculo-informando-caracteres",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 65,
  "name": "informo caracteres \u003cvalor1\u003e, \u003cvalor2\u003e e \u003cvalor3\u003e e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 66,
  "name": "devo visualizar popup com  mensagem de erro \u003cmensagem\u003e valor nao e numero",
  "keyword": "Então "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "calculadora-de-triangulos;ct006-deve-validar-erro-no-calculo-informando-caracteres;",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3",
        "mensagem"
      ],
      "line": 69,
      "id": "calculadora-de-triangulos;ct006-deve-validar-erro-no-calculo-informando-caracteres;;1"
    },
    {
      "cells": [
        "\"e\"",
        "\"e\"",
        "\"e\"",
        "\"Insira um número.\""
      ],
      "line": 70,
      "id": "calculadora-de-triangulos;ct006-deve-validar-erro-no-calculo-informando-caracteres;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4247283800,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "CT006_Deve validar erro no calculo informando caracteres",
  "description": "",
  "id": "calculadora-de-triangulos;ct006-deve-validar-erro-no-calculo-informando-caracteres;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "informo caracteres \"e\", \"e\" e \"e\" e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 66,
  "name": "devo visualizar popup com  mensagem de erro \"Insira um número.\" valor nao e numero",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "e",
      "offset": 20
    },
    {
      "val": "e",
      "offset": 25
    },
    {
      "val": "e",
      "offset": 31
    }
  ],
  "location": "CalcularTriangulosSteps.informoCaracteresEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 408302000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Insira um número.",
      "offset": 45
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarPopupComMensagemDeErroValorNaoENumero(String)"
});
formatter.result({
  "duration": 135600,
  "status": "passed"
});
formatter.after({
  "duration": 649740300,
  "status": "passed"
});
formatter.after({
  "duration": 652053500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "CT007_Deve validar erro no calculo informando valor decimal",
  "description": "",
  "id": "calculadora-de-triangulos;ct007-deve-validar-erro-no-calculo-informando-valor-decimal",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 74,
  "name": "informo valor decimal \u003cvalor1\u003e, \u003cvalor2\u003e e \u003cvalor3\u003e e calculo o triangulo formado",
  "keyword": "Quando "
});
formatter.step({
  "line": 75,
  "name": "devo visualizar popup com  mensagem de erro \u003cmensagem\u003e valor nao e inteiro",
  "keyword": "Então "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "calculadora-de-triangulos;ct007-deve-validar-erro-no-calculo-informando-valor-decimal;",
  "rows": [
    {
      "cells": [
        "valor1",
        "valor2",
        "valor3",
        "mensagem"
      ],
      "line": 78,
      "id": "calculadora-de-triangulos;ct007-deve-validar-erro-no-calculo-informando-valor-decimal;;1"
    },
    {
      "cells": [
        "\"1.5\"",
        "\"1\"",
        "\"1\"",
        "\"Insira um valor válido. Os dois valores válidos mais próximos são 1 e 2.\""
      ],
      "line": 79,
      "id": "calculadora-de-triangulos;ct007-deve-validar-erro-no-calculo-informando-valor-decimal;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que desejo calcular os lados de um triangulo",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalcularTriangulosSteps.queDesejoCalcularOsLadosDeUmTriangulo()"
});
formatter.result({
  "duration": 4427172300,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "CT007_Deve validar erro no calculo informando valor decimal",
  "description": "",
  "id": "calculadora-de-triangulos;ct007-deve-validar-erro-no-calculo-informando-valor-decimal;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@AllCenarios"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "informo valor decimal \"1.5\", \"1\" e \"1\" e calculo o triangulo formado",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 75,
  "name": "devo visualizar popup com  mensagem de erro \"Insira um valor válido. Os dois valores válidos mais próximos são 1 e 2.\" valor nao e inteiro",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1.5",
      "offset": 23
    },
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "CalcularTriangulosSteps.informoValorDecimalEECalculoOTrianguloFormado(String,String,String)"
});
formatter.result({
  "duration": 329629000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Insira um valor válido. Os dois valores válidos mais próximos são 1 e 2.",
      "offset": 45
    }
  ],
  "location": "CalcularTriangulosSteps.devoVisualizarPopupComMensagemDeErroValorNaoEInteiro(String)"
});
formatter.result({
  "duration": 57800,
  "status": "passed"
});
formatter.after({
  "duration": 383907300,
  "status": "passed"
});
formatter.after({
  "duration": 661495500,
  "status": "passed"
});
});