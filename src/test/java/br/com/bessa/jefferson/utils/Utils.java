package br.com.bessa.jefferson.utils;

import org.junit.Assert;

/**
 * @author jefferson
 * Classe que contém métodos comuns 
 *
 */
public class Utils {

	public static void assertEquals(String esperado, String atual) {
		try {
			Assert.assertEquals(esperado, atual);
		} catch (Exception e) {
			assertFail("Esperado [" + esperado + "], mas retornou [" + atual + "]");
		}
	}
	
	public static void assertFail(String message) {
		Assert.fail(message);
	}
	
	public static void wait(final int iTimeInMillis) {
		try {
			Thread.sleep(iTimeInMillis);
		} catch (InterruptedException ex) {
			ex.printStackTrace();
		}
	}
}