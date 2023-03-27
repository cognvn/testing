/**
 * @param {import('playwright').Page} page */
async function purchaseFlow(page) {
  await page.goto('https://tructuyen.abic.com.vn')
  await page.waitForLoadState()
  await page.goto('https://tructuyen.abic.com.vn/product/motobike')
  await page.waitForLoadState()
  await page.goto('https://tructuyen.abic.com.vn/purchase?productId=a432d2dd-d4b5-4409-8bdf-b01318debc6f&productType=motobike')
  await page.waitForLoadState()
}

module.exports = {
  purchaseFlow,
}