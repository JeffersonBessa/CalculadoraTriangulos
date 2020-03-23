package br.com.bessa.jefferson.pages;

import org.junit.Assert;
import br.com.bessa.jefferson.common.BasePage;
import br.com.bessa.jefferson.utils.Utils;

/**
 * @author jefferson
 * Classe responsável pelo mapeamento de elementos e interação com a tela principal do sistema
 *
 */
public class CalcularTriangulosPage extends BasePage {
	
	private static final String LABELPAGINA = "//*[@id='form']/div/h2";
	private static final String PRIMEIRO_LADO = "lado1";
	private static final String SEGUNDO_LADO = "lado2";
	private static final String TERCEIRO_LADO = "lado3";
	private static final String BTNCALCULAR = "calcular";
	private static final String MSGTELA = "message";
	private static final String MSGPOPUP_NUMERO = "Insira um número.";
	private static final String MSGPOPUP_INTEIRO = "Insira um valor válido. Os dois valores válidos mais próximos são 1 e 2.";

	public void checkVisibleElements() {
		isDisplayedByXpath(LABELPAGINA);
		isDisplayedById(PRIMEIRO_LADO);
		isDisplayedById(SEGUNDO_LADO);
		isDisplayedById(TERCEIRO_LADO);
		isDisplayedById(BTNCALCULAR);
		isClickable(BTNCALCULAR);
	}

	public void prencherValoresLadosTriangulo(String valor1, String valor2, String valor3) {
		preencherCampo(PRIMEIRO_LADO, valor1);
		preencherCampo(SEGUNDO_LADO, valor2);
		preencherCampo(TERCEIRO_LADO, valor3);
	}

	public void clicarBotaoCalcular() {
		click(BTNCALCULAR);
	}

	public void validarTrianguloCalculado(String tipo) {
		String tipoTrianguloCalculado = obterTexto(MSGTELA);
	    Assert.assertEquals(tipoTrianguloCalculado, tipo);
	}

	public void validarErroCalculoTriangulo(String message) {
		String msgErro = obterTexto(MSGTELA);
	    Utils.assertEquals(msgErro, message);
	}

	public void validarPopUpErroValorNumeroCalculoTriangulo(String popPup) {
	    Assert.assertEquals(MSGPOPUP_NUMERO, popPup);
	}
	
	public void validarPopUpErroValorInteiroCalculoTriangulo(String popPup) {
	    Assert.assertEquals(MSGPOPUP_INTEIRO, popPup);
	}
}
