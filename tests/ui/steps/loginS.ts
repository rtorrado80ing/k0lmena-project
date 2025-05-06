import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginP';
import { CustomWorld } from '../support/world';

let loginPage: LoginPage;

Given('el usuario está en la página de login', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.open();
});

When('ingresa credenciales válidas', async () => {
  await loginPage.login('Admin', 'admin123');
});

Then('debería ver el dashboard', async () => {
  await loginPage.verifyDashboardVisible();
});
