import { Page } from "playwright";
import { pageFixture } from "../hooks/pageFixture";
import { expect } from "playwright/test";

export class AdminPage {

    constructor(public page: Page) {

        this.page = page
    }

    private Elements = {

        usernameTextbox: "//*[@class='oxd-input oxd-input--active']",
        searchButton: '//*[@type="submit"]'
    }

    async verifyWebElementsInAdminPage() {

        await expect(pageFixture.page.locator(this.Elements.usernameTextbox)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.searchButton)).toBeVisible()
    }

    async enterUsernameTextbox(username: string) {

        await pageFixture.page.locator(this.Elements.usernameTextbox).last().fill(username)
    }

    async clickSearchButton() {

        await pageFixture.page.locator(this.Elements.searchButton).click()
    }
}
