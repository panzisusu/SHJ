# 📝 Adult Census Income 數據集與模型筆記 (AdaBoost & SVM)

本筆記記錄了 **UCI Adult Census Income Dataset** 數據集的核心架構，以及在該數據集上應用 **AdaBoost** 與 **SVM (支持向量機)** 兩大模型時的關鍵考量、前處理要求與超參數調優指南。

---

## 📂 1. 數據集核心架構 (Adult Census Income)

* **任務目標**：二元分類。預測一個人的年收入是否超過 **$50,000 美元**（分類標籤為 `>50K` 或 `<=50K`）。
* **數據規模**：約 48,842 筆樣本（通常按 32,561 筆訓練集、16,281 筆測試集進行劃分）。
* **特徵欄位分析**：

| 特徵名稱 | 類型 | 說明 | 前處理建議 |
| :--- | :--- | :--- | :--- |
| **age** | 數值型 (Continuous) | 年齡 | 標準化 (Standardization) |
| **workclass** | 類別型 (Categorical) | 就業類型（如 Private, Self-emp-not-inc 等） | One-Hot / Target 編碼 |
| **fnlwgt** | 數值型 (Continuous) | 人口統計權重 (Final Weight) | 標準化（常可考慮 Log 轉換或 RobustScaler） |
| **education** | 類別型 (Categorical) | 學歷名稱（如 Bachelors, Some-college 等） | 可與 `education-num` 合併處理 |
| **education-num** | 數值型 (Continuous) | 受教育年限（如 13 年代表學士） | 已數值化，可直接使用或標準化 |
| **marital-status** | 類別型 (Categorical) | 婚姻狀況（如 Married-civ-spouse 等） | One-Hot 編碼 |
| **occupation** | 類別型 (Categorical) | 職業（如 Tech-support, Craft-repair 等） | One-Hot / Target 編碼（注意缺失值 `?`） |
| **relationship** | 類別型 (Categorical) | 家庭關係（如 Husband, Own-child 等） | One-Hot 編碼 |
| **race** | 類別型 (Categorical) | 種族 | One-Hot 編碼 |
| **sex** | 類別型 (Categorical) | 性別 (Male, Female) | 二值化 (0 / 1) |
| **capital-gain** | 數值型 (Continuous) | 資本利得（有大量 0 值） | 稀疏特徵，可分箱 (Binning) 或標準化 |
| **capital-loss** | 數值型 (Continuous) | 資本損失（有大量 0 值） | 稀疏特徵，可分箱 (Binning) 或標準化 |
| **hours-per-week** | 數值型 (Continuous) | 每周工作時數 | 標準化 |
| **native-country** | 類別型 (Categorical) | 國籍/原生國家（如 United-States 等） | 高基數特徵，可群組化（如 US vs. Non-US）或 One-Hot |

---

## ⚡ 2. AdaBoost vs. SVM 建模對比與前處理

當我們在此數據集上運行 AdaBoost 與 SVM 時，兩者在前處理、運算複雜度與調參上有極大差異：

### 🛠️ 前處理要求對比
* **支持向量機 (SVM)**：
  * **高度敏感**：SVM 依賴距離度量（如歐氏距離），因此**必須**進行特徵縮放（如 `StandardScaler` 或 `MinMaxScaler`）。
  * **維度爆炸**：類別特徵經 One-Hot Encoding 後，特徵數會從 14 個暴增至上百個，形成高維稀疏矩陣。
* **AdaBoost**：
  * **相對魯棒**：若基底學習器為決策樹（Stumps），則對特徵縮放不敏感。
  * **編碼需求**：在 `scikit-learn` 中，仍需將類別型特徵轉換為數值（如使用 `OrdinalEncoder` 或 `OneHotEncoder`）。

### ⏱️ 計算效率與時間複雜度
* **SVM**：訓練時間複雜度在 $O(N^2)$ 到 $O(N^3)$ 之間。面對 3.2 萬筆數據，若使用 RBF 核心並進行 `GridSearchCV`，運算資源消耗極大，容易導致運行時間過長。
* **AdaBoost**：若使用單層決策樹，每一輪只需在各個特徵上尋找最佳分割點，訓練速度極快，非常適合快速疊代與教學展示。

---

## ⚙️ 3. 關鍵超參數調優指南 (Scikit-Learn)

### 🔹 1. Support Vector Machine (SVM) 常用超參數
```python
from sklearn.svm import SVC
# 範例模型初始化
model = SVC(kernel='rbf', C=1.0, gamma='scale')
```
* **`C` (Regularization parameter)**：
  * 控制誤差懲罰力度。`C` 越大，對錯分樣本的容忍度越低，容易**過擬合**（Overfitting）；`C` 越小，邊界越寬，容易**欠擬合**（Underfitting）。
* **`kernel` (核函數)**：
  * 常用 `'linear'`（線性分類）或 `'rbf'`（高斯徑向基函數，適合處理複雜的非線性關係）。
* **`gamma` (僅適用於 rbf/poly/sigmoid)**：
  * 控制單個訓練樣本的影響範圍。`gamma` 越大，模型越聚焦在局部的支持向量，決策邊界越複雜（易過擬合）；`gamma` 越小，邊界越平滑。

### 🔹 2. AdaBoost 常用超參數
```python
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
# 範例模型初始化（預設使用單層決策樹）
model = AdaBoostClassifier(
    estimator=DecisionTreeClassifier(max_depth=1),
    n_estimators=50,
    learning_rate=1.0
)
```
* **`estimator` (基底學習器)**：
  * 預設是 `DecisionTreeClassifier(max_depth=1)`（即 Decision Stump）。若發現欠擬合，可嘗試將 `max_depth` 調整至 2 或 3。
* **`n_estimators` (基底學習器數量)**：
  * 迭代次數（集成中樹的個數）。個數太少容易欠擬合，過多雖然 AdaBoost 有一定抗過擬合能力，但若雜訊多仍可能導致過擬合。
* **`learning_rate` (學習率)**：
  * 收縮步長。控制每個弱學習器對最終預測的影響力。通常需要與 `n_estimators` 協同調整（例如降低學習率時，應適當增加迭代次數）。

---

*備註：此筆記已記錄於本地工作區根目錄，便於後續專案實作或代碼編寫時隨時調閱。*
