import { Page } from "playwright";
import { pageFixture } from "../hooks/pageFixture";
import { expect } from "playwright/test";

export class ForgotYourPasswordPage {

    constructor(public page: Page) {

        this.page = page
    }

    private Elements = {

        usernameTextboxUsingPlaceholder: "Username",
        cancelButton: '//*[@type="button"]',
        resetPasswordButton: '//*[@type="submit"]'
    }

    async verifyWebElementsInForgotYourPasswordPage() {

        await expect(pageFixture.page.getByPlaceholder(this.Elements.usernameTextboxUsingPlaceholder)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.cancelButton)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.resetPasswordButton)).toBeVisible()
    }

    async enterUsername(username: any) {

        await pageFixture.page.getByPlaceholder(this.Elements.usernameTextboxUsingPlaceholder).fill(username)
    }
    
    async clickCancelButton() {

        await pageFixture.page.locator(this.Elements.cancelButton).click()
    }

     async clickResetPasswordButton() {

        await pageFixture.page.locator(this.Elements.resetPasswordButton).click()
    }
}
