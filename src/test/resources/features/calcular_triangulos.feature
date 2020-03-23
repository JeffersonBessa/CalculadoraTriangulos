#language: pt

@AllCenarios
Funcionalidade: Calculadora de Triangulos

Como um usuário 
Gostaria de informar diferentes valores para os tres lados de um triangulo
Para que eu possa calcular o tipo de triangulo formado

Contexto:
	Dado que desejo calcular os lados de um triangulo

Esquema do Cenário: CT001_Deve calcular triangulo equilatero
		Quando informo os tres valores iguais <valor>, <valor> e <valor> e calculo o triangulo formado
		Então devo visualizar um triangulo <tipo>
	
Exemplos:
 		 | valor |           tipo					|
	   | 3 		 | "Triângulo Equilátero" |
	   | 5 		 | "Triângulo Equilátero" |
	   | 10  	 | "Triângulo Equilátero" |
	   
  
Esquema do Cenário: CT002_Deve calcular triangulo escaleno
		Quando informo os tres valores diferentes <valor1>, <valor2> e <valor3> e calculo o triangulo formado
		Então devo visualizar um triangulo <tipo>
	
Exemplos:
 		 | valor1 | valor2 | valor3 |         tipo			   |
	   | 1 		  | 2   	 | 3 			| "Triângulo Escaleno" |
	   | 3 		  | 7   	 | 8 			| "Triângulo Escaleno" |
	   | 5  	  | 9   	 | 11 		| "Triângulo Escaleno" |
	   

Esquema do Cenário: CT003_Deve calcular triangulo isosceles
		Quando informo dois valores iguais e um valor diferente <valor1>, <valor2> e <valor3> e calculo o triangulo formado
		Então devo visualizar um triangulo <tipo>
	
Exemplos:
 		 | valor1 | valor2 | valor3 |         tipo			    |
	   | 1 		  | 1   	 | 3 			| "Triângulo Isósceles" |
	   | 5 		  | 5   	 | 7 			| "Triângulo Isósceles" |
	   | 7  	  | 7   	 | 9 			| "Triângulo Isósceles" |
	    
	    
Esquema do Cenário: CT004_Deve validar erro no calculo informando apenas dois valores
		Quando informo apenas dois valores nao informando o terceiro valor <valor1>, <valor2> e <valor3> e calculo o triangulo formado
		Então devo visualizar mensagem de erro <mensagem>
	
Exemplos:
 		 | valor1 | valor2 | valor3 |         mensagem			    |
	   | 	 	1		| 	 2	 |   " "  | "Preencha todos os lados" |

	    	    
Esquema do Cenário: CT005_Deve validar erro no calculo nao informando nenhum valor
		Quando nao informo nenhum valor e calculo o triangulo formado
		Então devo visualizar mensagem de erro <mensagem>
	
Exemplos:
 		|         mensagem			    |
	  | "Preencha todos os lados" |
	
	  
Esquema do Cenário: CT006_Deve validar erro no calculo informando caracteres 
		Quando informo caracteres <valor1>, <valor2> e <valor3> e calculo o triangulo formado
		Então devo visualizar popup com  mensagem de erro <mensagem> valor nao e numero
	
Exemplos:
 		 | valor1 | valor2 | valor3 |       mensagem		  |
	   | "e" 		| "e"    | "e"		| "Insira um número." |


Esquema do Cenário: CT007_Deve validar erro no calculo informando valor decimal
		Quando informo valor decimal <valor1>, <valor2> e <valor3> e calculo o triangulo formado
		Então devo visualizar popup com  mensagem de erro <mensagem> valor nao e inteiro
	
Exemplos:
 		 | valor1 | valor2 | valor3 |       												mensagem		  															 |
	   | "1.5"  | "1"    | "1"		| "Insira um valor válido. Os dois valores válidos mais próximos são 1 e 2." |

	   
