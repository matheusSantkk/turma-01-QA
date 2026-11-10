import { test, expect } from '@playwright/test';

const URL = 'https://www.qapractice.com/practice-login-form';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

test('login válido mostra mensagem de sucesso', async ({ page }) => {
  await page.getByTestId('login-email').fill('user@premiumbank.com');
  await page.getByTestId('login-password').fill('Bank@123');
  await page.getByTestId('login-submit').click();

  await expect(page.getByTestId('login-success'))
    .toContainText('Login Successful! Welcome to Premium Banking.');
});

test('credenciais inválidas mostram erro', async ({ page }) => {
  await page.getByTestId('login-email').fill('invalido@example.com');
  await page.getByTestId('login-password').fill('senhaErrada1!');
  await page.getByTestId('login-submit').click();

  await expect(page.getByTestId('login-error'))
    .toContainText('Invalid email id and password');
});

test('campos vazios mostram erro de obrigatoriedade', async ({ page }) => {
  await page.getByTestId('login-submit').click();

  await expect(page.getByTestId('login-error'))
    .toContainText('Email and Password are required');
});