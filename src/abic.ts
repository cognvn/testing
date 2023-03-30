import { Page } from 'playwright';
import { ScenarioContext, EventEmitter } from 'artillery'

interface UserVars extends Record<string, string> {
  fullName: string;
  phoneNumber: string;
  email: string;
  city: string;
  address: string;
  licensePlates: string;
}

async function purchaseFlow(page: Page, context: ScenarioContext<UserVars>) {
  // Di chuyển đến trang mua sản phầm
  await page.goto('https://tructuyen.abic.com.vn/');
  await page.waitForLoadState();
  await page.getByText('Bắt buộc TNDS Xe máy').click();
  await page.waitForLoadState();
  await page.getByRole('button', { name: 'Chọn mua' }).nth(1).click();
  await page.waitForLoadState();

  // Điền thông tin vào form
  await page.getByLabel('Họ Tên Chủ Hợp Đồng').fill(context.vars.fullName)
  await page.getByLabel('Số Điện Thoại').fill(context.vars.phoneNumber.replace(/^'/, ''))
  await page.getByLabel('Email').fill(context.vars.email)
  await page.getByLabel('Tỉnh thành').fill(context.vars.city)
  await page.getByTitle(context.vars.city).click()
  await page.getByLabel('Địa Chỉ').fill(context.vars.address)
  await page.getByLabel('Họ Tên Chủ Xe').fill(context.vars.fullName)
  await page.getByLabel('Biển Số Xe').fill(context.vars.licensePlates)
  await page.getByRole('button', { name: 'tiếp tục' }).click()

  // Không rõ có nên submit dữ liệu ảo hay không
  // await page.getByRole('button', { name: 'thanh toán' }).click()
}

export { purchaseFlow }