## uwawauwa

專案使用 [Create React App](https://github.com/facebook/create-react-app) 創建，使用 `React`、`TypeScript`、`Tailwind CSS`

## 啟動專案

1. `npm install -g pnpm` - 透過指令安裝 pnpm
2. `pnpm i` - 安裝依賴
3. `pnpm start` - 在開發模式啟動本地端專案
   在 [http://localhost:3000](http://localhost:3000) 打開專案
4. `pnpm test` - 進行 `addComma` 和 `getNumberIntervals` 兩支檔案的單元測試

## 說明

#### 關於測驗

做完驚覺不確定能否使用 `react-hook-form`😫
但如果要不使用套件實作的話我可能參考 `react-hook-form` 的設計架構實作

- 使用 `useContext` 來集中管理和記錄 表單 `state` 和 `errors`
- 在表單 onChange 時及時驗證資料，並將 `errors` 即時更新到 `context` 上
- 動態新增/刪除表單時將資料模板新增/刪除到表單的 `state` 和 `errors` 中

### 基本功能

#### 🍀 [addComma](https://github.com/momi329/uwawauwa/blob/main/src/utils/utils.ts)

- 將數字轉換成千分位

#### 🍀 [getNumberIntervals](https://github.com/momi329/uwawauwa/blob/main/src/utils/utils.ts)

- 接受年齡區間陣列列表，返回重疊＆不重疊的年齡區間

#### 🍀 [PriceInput](https://github.com/momi329/uwawauwa/blob/main/src/components/AgeGroupPriceList/PriceInput.tsx)

- 顯示票價輸入元件，輸入時自動換成千分位
- 針對打字到一半不被干擾的特殊情況使用 `onBlur` 時會將結果為小數點 & 0 開頭的結果做處理

#### 🍀 [AgeGroupSelect](https://github.com/momi329/uwawauwa/blob/main/src/utils/utils.ts)

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
- price沒有輸入會出現錯誤


