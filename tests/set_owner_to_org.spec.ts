import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto(process.env.GITHUB_ORG_URL);
  await page.getByRole('button', { name: 'Sign in with a username and password' }).click();
  await page.getByLabel('Username').fill(process.env.USERNAME);
  await page.getByLabel('Password').fill(process.env.PASSWORD);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByPlaceholder('User to add as owner').fill(process.env.USERNAME);
  await page.getByPlaceholder('Please provide an explanation').fill('add me');
  await page.getByRole('button', { name: 'Add owner' }).click();
});