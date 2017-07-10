import { browser, by, element } from 'protractor';

export class EditPasswordRulesPage {
    public url: string = '/#/settings/security/password-rules';
    public secondMenuItemAnchor: any = element(by.id('second-menu-item-anchor'));
    public adminAnchor: any = element(by.id('administration'));
    public button: any = element(by.id('edit-password-rules-btn'));
    public textbox1: any = element(by.id('textbox1'));
    public textbox2: any = element(by.id('textbox2'));
    public textbox3: any = element(by.id('textbox3'));
    public textbox4: any = element(by.id('textbox4'));
    public textarea: any = element(by.id('textbox5'));
    public errorMessage1: any = element(by.id('error-msg-1'));
    public errorMessage2: any = element(by.id('error-msg-2'));
    public errorMessage3: any = element(by.id('error-msg-3'));
    public errorMessage4: any = element(by.id('error-msg-4'));
    public errorMessage5: any = element(by.id('error-msg-5'));
    public successMessage: any = element(by.css('form div.message.success'));
    public submitButton: any = element(by.css('form button[type=submit]'));
    public errorPrompt: any = element(by.css('.grid div.four.column p.error'));

    public load() {
        return browser.get('/settings');
    }

    public delay(timer: number = 2000) {
			browser.sleep(timer);

			return this;
    }

    public clickSecondMenuItemAnchor(): EditPasswordRulesPage {
        browser.actions().click(this.secondMenuItemAnchor).perform();
        this.delay();

        return this;
    }

    public clickAdminAnchor(): EditPasswordRulesPage {
        browser.actions().click(this.adminAnchor).perform();
        this.delay();

        return this;
    }

    public clickButton(): EditPasswordRulesPage {
        browser.actions().click(this.button).perform();
        this.delay();

        return this;
    }

    public fillPasswordRulesForm(   textbox1: string,
                                    textbox2: string,
                                    textbox3: string,
                                    textbox4: string,
                                    textarea: string): EditPasswordRulesPage {
        this.textbox1.sendKeys(textbox1).then( () => {
            this.textbox2.sendKeys(textbox2).then( () => {
                this.textbox3.sendKeys(textbox3).then( () => {
                    this.textbox4.sendKeys(textbox4).then( () => {
                        this.textarea.sendKeys(textarea).then( () => {
                            this.submitButton.click();
                        });
                    });
                });
            });
        });

        return this;
    }
}
