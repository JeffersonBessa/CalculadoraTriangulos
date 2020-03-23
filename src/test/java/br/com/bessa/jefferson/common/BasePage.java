package br.com.bessa.jefferson.common;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import br.com.bessa.jefferson.utils.Utils;
import cucumber.api.Scenario;

/**
 * @author jefferson
 * Classe que contém métodos genéricos para as páginas do sistema
 *
 */
public class BasePage {
	
	private static final int LOAD_TIMEOUT = 30;
	public static final String URL = "https://calculadoratriangulo.herokuapp.com";
	
	private WebDriver driver;

	public void startDriver() {
		if (driver == null) {
			driver = new ChromeDriver();
		}
	}
	
	public void goToUrl() {
		driver.get(URL);
		driver.manage().window().maximize();
	}
	
	public void aguardarElementoVisivel(WebElement element) {
		try {
			new WebDriverWait(driver, LOAD_TIMEOUT).until(ExpectedConditions.visibilityOf(element));
		} catch (Exception e) {
			Utils.assertFail("Tempo excedido para aguardar elemento: " + element);
		}
	}
	
	public void limparCampo(String locator) {
		try {
			aguardarElementoVisivel((driver.findElement(By.xpath(locator))));
			(driver.findElement(By.xpath(locator))).clear();
		} catch (WebDriverException e) {
			Utils.assertFail("Nao foi possivel limpar os dados do campo: " + locator + ". Pagina: " + driver.getTitle() + "\n " + e.getMessage());
		}
	}
	
	public void preencherCampo(String locator, CharSequence... keysToSend) {
		try {
			aguardarElementoVisivel((driver.findElement(By.id(locator))));
			driver.findElement(By.id(locator)).clear();
			driver.findElement(By.id(locator)).sendKeys(keysToSend);
		} catch (WebDriverException e) {
			Utils.assertFail("Nao foi possivel encontrar o elemento para preencher: " + locator + ". Pagina: " + driver.getTitle() + "\n " + e.getMessage());
		}
	}
	
	public String obterTexto(String locator) {
		if (!isDisplayedById(locator)) {
			Utils.assertFail("Erro ao buscar texto em tela. Elemento: [" + locator + "] Favor verificar evidencia.");
		}
		return driver.findElement(By.id(locator)).getText();
	}
	
	public void click(String locator) {
		try {
			aguardarElementoVisivel((driver.findElement(By.id(locator))));
			driver.findElement(By.id(locator)).click();
		} catch (Exception e) {
			Utils.assertFail("Nao foi possivel encontrar o elemento para clicar: " + locator + ". Pagina: " + driver.getTitle() + "\n " + e.getMessage());
		}
	}

	public boolean isDisplayedByXpath(String locator) {
		try {
			return driver.findElement(By.xpath(locator)).isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	public boolean isDisplayedById(String locator) {
		try {
			return driver.findElement(By.id(locator)).isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
	}
	public void isClickable(String locator) {
		try {
			new WebDriverWait(driver, LOAD_TIMEOUT).until(ExpectedConditions.elementToBeClickable(driver.findElement(By.id(locator))));
		} catch (Exception e) {
			Utils.assertFail("Excedeu o tempo limite de espera para clicar no elemento: "+ locator);
		}
	}
	
	public void gerarEvidencia(Scenario cenario) {
		 {
			File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
				try {
				  FileUtils.copyFile(file, new File("target/screenshots/"+cenario.getId()+".jpg"));
				} catch (IOException e) {
					e.printStackTrace();
			}
		}
	}
	
	public void killDriver() {
		if (driver != null) {
			driver.quit();
			driver = null;
		}
		System.out.println("fechando browser");
	}
}