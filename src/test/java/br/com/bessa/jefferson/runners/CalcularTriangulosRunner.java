package br.com.bessa.jefferson.runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

/**
 * @author jefferson
 * Classe responsável pela execução da suite de testes BDD
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(
				features = "src/test/resources/features/",
				glue = "br.com.bessa.jefferson.steps",
				tags = {"@AllCenarios"},
				plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
				monochrome = true,
				snippets = SnippetType.CAMELCASE,
				dryRun = false,
				strict = false
				)

public class CalcularTriangulosRunner {
	
	@BeforeClass
	public static void getDriver() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
	}
}
