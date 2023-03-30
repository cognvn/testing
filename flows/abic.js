"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseFlow = void 0;
function purchaseFlow(page, context) {
    return __awaiter(this, void 0, void 0, function* () {
        // Di chuyển đến trang mua sản phầm
        yield page.goto('https://tructuyen.abic.com.vn/');
        yield page.getByText('Bắt buộc TNDS Xe máy').click();
        yield page.getByRole('button', { name: 'Chọn mua' }).nth(1).click();
        // Điền thông tin vào form
        yield page.getByLabel('Họ Tên Chủ Hợp Đồng').fill(context.vars.fullName);
        yield page.getByLabel('Số Điện Thoại').fill(context.vars.phoneNumber.replace(/^'/, ''));
        yield page.getByLabel('Email').fill(context.vars.email);
        yield page.getByLabel('Tỉnh thành').fill(context.vars.city);
        yield page.getByTitle(context.vars.city).click();
        yield page.getByLabel('Địa Chỉ').fill(context.vars.address);
        yield page.getByLabel('Họ Tên Chủ Xe').fill(context.vars.fullName);
        yield page.getByLabel('Biển Số Xe').fill(context.vars.licensePlates);
        yield page.getByRole('button', { name: 'tiếp tục' }).click();
        // Không rõ có nên submit dữ liệu ảo hay không
        // await page.getByRole('button', { name: 'thanh toán' }).click()
    });
}
exports.purchaseFlow = purchaseFlow;
