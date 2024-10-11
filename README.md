## uwawauwa

專案使用 [Create React App](https://github.com/facebook/create-react-app) 創建，使用 `React`、`TypeScript`、`Tailwind CSS`和 `react-hook-from`

[My site 🔗](https://uwawauwa-momi329s-projects.vercel.app/)

## 啟動專案

1. `npm install -g pnpm` - 透過指令安裝 pnpm
2. `pnpm i` - 安裝依賴
3. `pnpm start` - 在開發模式啟動本地端專案
   在 [http://localhost:3000](http://localhost:3000) 打開專案
4. `pnpm test` - 進行 `addComma` 和 `getNumberIntervals` 兩支檔案的單元測試

## 說明

#### 關於測驗

做完驚覺不確定能否使用 `react-hook-form`😫
如果要自行實作表單的話，依據是否需要即時驗證或對 value 進行操作, 主要分為兩種

- 透過 useState 或 useReducer 紀錄表單的狀態和 errors
- 用 ref 綁定表單，在 submit 的時候才去取得表單值

其餘就是處理表單的各種狀態，更複雜的處理方式會參考 `react-hook-form` 的設計架構

### 基本功能

#### 🍀 [addComma](https://github.com/momi329/uwawauwa/blob/main/src/utils/utils.ts)

- 將數字轉換成千分位

#### 🍀 [getNumberIntervals](https://github.com/momi329/uwawauwa/blob/main/src/utils/utils.ts)

- 接受年齡區間陣列列表，返回重疊＆不重疊的年齡區間

#### 🍀 [PriceInput](https://github.com/momi329/uwawauwa/blob/main/src/components/AgeGroupPriceList/PriceInput.tsx)

- 顯示票價輸入元件，輸入時自動換成千分位
- 針對打字到一半不被干擾的特殊情況使用 `onBlur` 時會將結果為小數點 & 0 開頭的結果做處理

#### 🍀 [AgeGroupSelect]([https://github.com/momi329/uwawauwa/blob/main/src/components/AgeGroupPriceList/AgeGroupSelect.tsx]

- 顯示年齡區間元件

#### 🌼 [AgeGroupPriceItem](https://github.com/momi329/uwawauwa/blob/main/src/components/AgeGroupPriceList/AgeGroupPriceItem.tsx)

- 顯示 單一 年齡區間&票價元件

#### 🍀 [AgeGroupPriceList](https://github.com/momi329/uwawauwa/blob/main/src/components/AgeGroupPriceList/index.tsx)

- 顯示所有年齡區間的票價列表
- 如果年齡區間重疊會出現錯誤訊息
- `onChange` 時會通過 `react-hook-form` 驗證並顯示 errors，驗證規則則寫在元件內
- 沒有限制筆數上限
- 滿足所有須間會 disable 按鈕

## Demo

![](https://github.com/user-attachments/assets/162e7b22-5be9-4aea-9a02-57184d00e09b)

- 年齡區間測試

![螢幕錄製 2024-10-11 下午4 23 22](https://github.com/user-attachments/assets/fbfb2c8d-944e-49ae-9b55-eb951f1fe7d5)

- 新增按鈕滿足所有須間會 disable 按鈕
- price 沒有輸入會出現錯誤
