## Các bước thực hiện load testing
1. Chuẩn bị môi trường để chạy test
    ```sh
    npm i
    npm run build
    npx playwright install chrome
    ```

1. Thực hiện chạy test và xuất báo cáo kết quả ra file `output/result.json`
    ```sh
    npx artillery run -c config.yml -o output/result.json scenarios/web.yml
    ```

1. Xuất báo cáo kết quả ra file html trực quan hơn
    ```sh
    npx artillery report --output output/result.html output/result.json
    ```
