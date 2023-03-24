/**
 * @param {import('playwright').Page} page */
async function loadHomePageFlow(page) {
    await page.goto('https://tructuyen.abic.com.vn')
    await page.waitForLoadState()
}
/**
 * @param {import('playwright').Page} page */
async function loadPurchasePageFlow(page) {
    await page.goto('https://tructuyen.abic.com.vn/purchase?productId=a91480a2-1c09-43eb-8b59-7551d0d0df1b&productType=motobike')
    await page.waitForLoadState()
}

module.exports = {
    loadHomePageFlow,
    loadPurchasePageFlow,
}