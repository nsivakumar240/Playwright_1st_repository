import { Page } from "playwright";  
import { pageFixture } from "../hooks/pageFixture";
import { expect } from "playwright/test";
export class LoginPage {

    constructor(public page: Page) {

        this.page = page
    }

 private Elements = {

        orangeHRMLogoAltText: "company-branding",
        logoText: "Login",
        usernameTextboxUsingPlaceholder: "Username",
        passwordTextboxUsingPlaceholder: "Password",
        loginButton: '//*[@type="submit"]',
        forgotYourPasswordLink: "//*[text()='Forgot your password? ']"
    }

    async navigateToOrangeHRM(url: string) {

        await pageFixture.page.goto(url)
         await pageFixture.page.waitForLoadState('load', { timeout: 10000 })

        console.log(await pageFixture.page.title())
        console.log(await pageFixture.page.url())

    }
     async verifyWebElementsInLoginPage() {

        await expect(pageFixture.page.getByAltText(this.Elements.orangeHRMLogoAltText)).toBeVisible()

        await expect(pageFixture.page.getByText(this.Elements.logoText)).toBeVisible()

        await expect(pageFixture.page.getByPlaceholder(this.Elements.usernameTextboxUsingPlaceholder)).toBeVisible()

        await expect(pageFixture.page.getByPlaceholder(this.Elements.passwordTextboxUsingPlaceholder)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.loginButton)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.forgotYourPasswordLink)).toBeVisible()
    }

    async enterCredentials(username: any, password: string) {

        await pageFixture.page.getByPlaceholder(this.Elements.usernameTextboxUsingPlaceholder).fill(username)

        await pageFixture.page.getByPlaceholder(this.Elements.passwordTextboxUsingPlaceholder).fill(password)

        await pageFixture.page.locator(this.Elements.loginButton).click()
    }

 
async clickForgotYourPasswordLink() {

        await pageFixture.page.locator(this.Elements.forgotYourPasswordLink).click()
    }

    async waitForTime() {

        await pageFixture.page.waitForTimeout(5000)
    }




}
