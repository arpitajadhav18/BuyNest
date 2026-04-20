# 🛒 BuyNest - AI/ML Product Recommendation System

BuyNest is a smart product recommendation and price comparison website. It helps users find the **best deals**, **lowest prices**, and **top-rated products** across multiple Indian e-commerce platforms like Amazon, Flipkart, Croma, and more — all in one place.

---

## 🌐 Live Demo

Open `frontend/index.html` in any browser — no server needed!

---

## 📁 Project Structure

```
buynest/
├── frontend/
│   ├── index.html       → Main webpage (UI structure)
│   ├── styles.css       → All styling and design
│   ├── app.js           → Product data + ML algorithm + all functionality
│   └── logo.png         → BuyNest logo
│
├── data/
│   ├── buynest_raw_dataset.csv     → Cleaned dataset with products, prices, reviews
│   └── buynest_MESSY_dataset.csv  → Original messy dataset (before cleaning)
│
├── ml/
│   ├── ml_analysis.py   → Python ML analysis and recommendation logic
│   └── clean_data.py    → Data cleaning script
│
└── README.md
```

---

## ✨ Features

- 🔍 **Search** products by name or category
- 💰 **Price Comparison** across Amazon, Flipkart, Croma, Reliance Digital, etc.
- ⭐ **Ratings & Reviews** from real customers shown in product detail
- 🏷️ **Special Offers** displayed per platform (EMI, cashback, exchange)
- 🤖 **ML Ranking** — products are scored and ranked using a weighted algorithm
- 🛒 **Cart & Wishlist** — add/save products
- 📊 **Rating Breakdown** — visual bar chart of star distribution
- 📱 **Mobile-friendly** responsive design

---

## 🤖 ML Algorithm (SimpleProductRanker)

The recommendation engine inside `app.js` uses a **Weighted Scoring Algorithm** to rank products:

| Factor          | Weight | Why?                          |
|-----------------|--------|-------------------------------|
| Price           | 40%    | Most important to buyers      |
| Customer Rating | 25%    | Quality signal                |
| Discount %      | 20%    | Savings matter                |
| No. of Reviews  | 15%    | Popularity/trustworthiness    |

**Formula:**
```
Score = (PriceScore × 0.40) + (RatingScore × 0.25) + (DiscountScore × 0.20) + (ReviewScore × 0.15)
```

Products with the highest score appear first as "Best Deals."

---

## 📊 Dataset

- **20 products** across 4 categories: Laptops, Mobile Phones, TVs, Headphones
- **4 platforms** per product with real Indian prices in ₹
- **Customer reviews** with author, rating, date, and helpful count
- **Special offers** per platform (bank discounts, exchange offers, free gifts)

---

## 🛠️ Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | HTML5, CSS3, Vanilla JavaScript |
| Styling    | Custom CSS + Font Awesome icons |
| ML Logic   | JavaScript (Weighted Scoring) |
| Data       | CSV Dataset → JS Object Array |
| Python ML  | pandas, scikit-learn (analysis) |

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/buynest.git
   ```

2. Open the website:
   ```bash
   cd buynest/frontend
   # Just open index.html in your browser!
   ```

3. (Optional) Run Python ML analysis:
   ```bash
   pip install pandas scikit-learn matplotlib
   python ml/ml_analysis.py
   ```

---

## 📸 Screenshots

| Home Page | Product Detail | Price Comparison |
|-----------|---------------|-----------------|
| Top deals, trending products | Reviews, specs, best price | All platforms compared |

---

## 👨‍💻 Made By

**[Your Name]** — AI/ML Project | BCA / B.Tech  
This project demonstrates front-end development, data cleaning, and a beginner-friendly ML recommendation algorithm.

---

## 📄 License

MIT License — free to use for learning purposes.
