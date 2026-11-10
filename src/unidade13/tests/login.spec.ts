import { test, expect } from "@playwright/test";

const URL = "https://www.qapractice.com/practice-login-form";
const EMAIL_VALIDO = "user@premiumbank.com";
const SENHA_VALIDA = "Bank@123";

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test("login válido mostra mensagem de sucesso", async ({ page }) => {
    await page.getByTestId("login-email").fill(EMAIL_VALIDO);
    await page.getByTestId("login-password").fill(SENHA_VALIDA);
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("login-success")).toContainText(
      "Login Successful! Welcome to Premium Banking.",
    );
  });

  test("campos vazios mostram erro de obrigatoriedade", async ({ page }) => {
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("login-error")).toContainText(
      "Email and Password are required",
    );
  });

  test("somente e-mail preenchido exige a senha", async ({ page }) => {
    await page.getByTestId("login-email").fill(EMAIL_VALIDO);
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("login-error")).toContainText(
      "Password is required",
    );
  });

  test("somente senha preenchida exige o e-mail", async ({ page }) => {
    await page.getByTestId("login-password").fill(SENHA_VALIDA);
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("login-error")).toContainText(
      "Email is required",
    );
  });

  test("credenciais inválidas mostram erro", async ({ page }) => {
    await page.getByTestId("login-email").fill("invalido@example.com");
    await page.getByTestId("login-password").fill("senhaErrada1!");
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("login-error")).toContainText(
      "Invalid email id and password",
    );
    await expect(page.getByTestId("login-success")).toHaveCount(0);
  });

  test("senha é mascarada", async ({ page }) => {
    await expect(page.getByTestId("login-password")).toHaveAttribute(
      "type",
      "password",
    );
  });

  test('checkbox "Remember me" marca e desmarca', async ({ page }) => {
    const remember = page.getByTestId("login-remember");

    await remember.check();
    await expect(remember).toBeChecked();

    await remember.uncheck();
    await expect(remember).not.toBeChecked();
  });

  test('link "Forgot password?" leva à recuperação de senha', async ({
    page,
  }) => {
    await page.getByTestId("login-forgot-password").click();

    await expect(page).toHaveURL(/forget-password/);
  });

  test('link "Register now" leva ao cadastro', async ({ page }) => {
    await page.getByTestId("login-register").click();

    await expect(page).toHaveURL(/register/);
  });
});
