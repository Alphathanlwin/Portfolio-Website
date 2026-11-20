import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(3500);
await page.screenshot({ path: "ref/hero-desktop.png" });

await page.locator("#awards").scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);
await page.locator("#awards").screenshot({ path: "ref/awards.png" });

await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
await page.screenshot({ path: "ref/hero-mobile.png" });
await browser.close();
