import { Page } from "playwright";
import { pageFixture } from "../hooks/pageFixture";
import { expect } from "playwright/test";

export class HomePage {

    constructor(public page: Page) {

        this.page = page
    }

    private Elements = {

        adminTab:"//*[text()='Admin']",
        userDropdown:".oxd-userdropdown-name",
        logoutText:"Logout"
    }

    async verifyWebElementsInHomePage() {

        await expect(pageFixture.page.locator(this.Elements.adminTab)).toBeVisible()

        await expect(pageFixture.page.locator(this.Elements.userDropdown)).toBeVisible()

        await expect(pageFixture.page.getByText(this.Elements.logoutText)).toBeVisible()
    }

    async clickAdminTab() {

        await pageFixture.page.locator(this.Elements.adminTab).click()
    }

    async clickUserDropdown() {

        await pageFixture.page.locator(this.Elements.userDropdown).click()
    }

    async clickLogoutText() {

        await pageFixture.page.getByText(this.Elements.logoutText).click()
    }
}
