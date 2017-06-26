import { browser, element, by } from 'protractor';
import { Page } from './page';

export class LoginPage extends Page {
    public url: string = '/#/login';

    public username: any = element(by.id('username'));

    public password: any = element(by.id('password'));

    public submit: any = element(by.id('submit'));

    public fillLoginForm(username: string, password: string): LoginPage {
        this.username.sendKeys(username).then( () => {
            this.password.sendKeys(password).then( () => {
                this.submit.click();
            });
        });

        return this;
    }
}
