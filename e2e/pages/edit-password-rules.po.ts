import { browser, by, element } from 'protractor';

// Pages
import { Page } from './page.po';

export class EditPasswordRulesPage extends Page {

    private textbox1Ctrl: any = element(by.id('textbox1'));

    private textbox2Ctrl: any = element(by.id('textbox2'));

    private textbox3Ctrl: any = element(by.id('textbox3'));

    private textbox4Ctrl: any = element(by.id('textbox4'));

    private textareaCtrl: any = element(by.id('textbox5'));

    private saveCtrl: any = element(by.id('save'));

    private snackbarCtrl: any = element(by.css('.mat-simple-snackbar'));

    constructor() {
        super();
    }

    public load() {
        this.url = 'settings';

        super.load();

        element(by.id('md-tab-label-0-5')).click();

        this.delay();

        element(by.id('toggle')).click();
    }

    public fillPasswordRulesForm(   textbox1: string,
                                    textbox2: string,
                                    textbox3: string,
                                    textbox4: string,
                                    textarea: string): EditPasswordRulesPage {
        this.textbox1Ctrl.clear().sendKeys(textbox1).then( () => {
            this.textbox2Ctrl.clear().sendKeys(textbox2).then( () => {
                this.textbox3Ctrl.clear().sendKeys(textbox3).then( () => {
                    this.textbox4Ctrl.clear().sendKeys(textbox4).then( () => {
                        this.textareaCtrl.clear().sendKeys(textarea).then( () => {
                            this.saveCtrl.click();
                        });
                    });
                });
            });
        });

        return this;
    }

    public getTitle() {
        return element(by.css('h1')).getText();
    }
}
