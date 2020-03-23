package br.com.bessa.jefferson.steps;

import br.com.bessa.jefferson.pages.CalcularTriangulosPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

/**
 * @author jefferson
 * Classe responsável pela implementação das features e pela execução de métodos de ação do sistema 
 *
 */
public class CalcularTriangulosSteps {
	
	CalcularTriangulosPage calculadora = new CalcularTriangulosPage();
	
	@Dado("^que desejo calcular os lados de um triangulo$")
	public void queDesejoCalcularOsLadosDeUmTriangulo() {
		calculadora.startDriver();
		calculadora.goToUrl();
		calculadora.checkVisibleElements();
	}

	@Quando("^informo os tres valores iguais (\\d+), (\\d+) e (\\d+) e calculo o triangulo formado$")
	public void informoOsTresValoresIguaisEECalculoOTrianguloFormado(String valor1, String valor2, String valor3) {
		calculadora.prencherValoresLadosTriangulo(valor1, valor2, valor3);
		calculadora.clicarBotaoCalcular();
	}

	@Quando("^informo os tres valores diferentes (\\d+), (\\d+) e (\\d+) e calculo o triangulo formado$")
	public void informoOsTresValoresDiferentesEEeCalculoOTrianguloFormado(String valor1, String valor2, String valor3) {
		calculadora.prencherValoresLadosTriangulo(valor1, valor2, valor3);
		calculadora.clicarBotaoCalcular();
	}
	
	@Quando("^informo dois valores iguais e um valor diferente (\\d+), (\\d+) e (\\d+) e calculo o triangulo formado$")
	public void informoDoisValoresIguaisEUmValorDiferenteEECalculoOTrianguloFormado(String valor1, String valor2, String valor3) {
		calculadora.prencherValoresLadosTriangulo(valor1, valor2, valor3);
		calculadora.clicarBotaoCalcular();
	}
	
	@Quando("^informo apenas dois valores nao informando o terceiro valor (\\d+), (\\d+) e \"([^\"]*)\" e calculo o triangulo formado$")
	public void informoApenasDoisValoresNaoInformandoOTerceiroValorEECalculoOTrianguloFormado(String valor1, String valor2, String valor3) throws Throwable {
		calculadora.prencherValoresLadosTriangulo(valor1, valor2, valor3);
		calculadora.clicarBotaoCalcular();
	}
	
	@Quando("^nao informo nenhum valor e calculo o triangulo formado$")
	public void naoInformoNenhumValorECalculoOTrianguloFormado() throws Throwable {
		calculadora.clicarBotaoCalcular();
	}
	
	@Quando("^informo caracteres \"([^\"]*)\", \"([^\"]*)\" e \"([^\"]*)\" e calculo o triangulo formado$")
	public void informoCaracteresEECalculoOTrianguloFormado(String valor1, String valor2, String valor3) throws Throwable {
		calculadora.prencherValoresLadosTriangulo(valor1, valor2, valor3);
		calculadora.clicarBotaoCalcular();
	}
	
	@Quando("^informo valor decimal \"([^\"]*)\", \"([^\"]*)\" e \"([^\"]*)\" e calculo o triangulo formado$")
	public void informoValorDecimalEECalculoOTrianguloFormado(String valor1, String valor2, String valor3) throws Throwable {
		calculadora.prencherValoresLadosTriangulo(valor1, valor2, valor3);
		calculadora.clicarBotaoCalcular();
	}

	@Então("^devo visualizar mensagem de erro <mensagem>$")
	public void devoVisualizarMensagemDeErroMensagem(String message) throws Throwable {
		calculadora.validarErroCalculoTriangulo(message);
	}

	@Então("^devo visualizar um triangulo \"([^\"]*)\"$")
	public void devoVisualizarUmTriangulo(String tipo) {
		calculadora.validarTrianguloCalculado(tipo);
	}
	
	@Então("^devo visualizar mensagem de erro \"([^\"]*)\"$")
	public void devoVisualizarMensagemDeErro(String message) throws Throwable {
		calculadora.validarErroCalculoTriangulo(message);
	}
	
	@Então("^devo visualizar popup com  mensagem de erro \"([^\"]*)\" valor nao e numero$")
	public void devoVisualizarPopupComMensagemDeErroValorNaoENumero(String popPup) throws Throwable {
		calculadora.validarPopUpErroValorNumeroCalculoTriangulo(popPup);
	}
	
	@Então("^devo visualizar popup com  mensagem de erro \"([^\"]*)\" valor nao e inteiro$")
	public void devoVisualizarPopupComMensagemDeErroValorNaoEInteiro(String popPup) throws Throwable {
		calculadora.validarPopUpErroValorInteiroCalculoTriangulo(popPup);
	}
	
	@After(order = 1, value = {"@AllCenarios"})
	public void screenshot(Scenario cenario) {
		calculadora.gerarEvidencia(cenario);
	}
	
	@After(order = 0, value = {"@AllCenarios"})
	public void fecharBrowser() {
		calculadora.killDriver();
	}
}