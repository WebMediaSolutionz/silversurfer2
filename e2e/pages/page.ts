import { browser, by, element } from 'protractor';

export class Page {
    protected timer: number = 2000;
    protected url: string;

    public load(): any {
        browser.get(this.url);

        return this;
    }

    public delay(timer: number = this.timer): any {
        browser.sleep(timer);

        return this;
    }
}
