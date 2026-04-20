"""
BuyNest ML Analysis - All Algorithms in One Script
Easy for beginners - just run: python ml_analysis.py
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.cluster import KMeans
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (accuracy_score, classification_report, 
                            confusion_matrix, r2_score, mean_squared_error)
from textblob import TextBlob
import warnings
warnings.filterwarnings('ignore')

print("="*60)
print("🛒 BUYNEST ML ANALYSIS")
print("="*60)

# Load dataset
print("\n📊 Loading dataset...")
df = pd.read_csv('buynest_raw_dataset.csv')
print(f"✅ Loaded {len(df)} rows with {len(df.columns)} columns")
print(f"✅ Products: {df['product_id'].nunique()}")
print(f"✅ Categories: {', '.join(df['category'].unique())}")

# Data overview
print("\n" + "="*60)
print("📈 DATASET OVERVIEW")
print("="*60)
print(df.describe())

# ============================================================
# ALGORITHM 1: LINEAR REGRESSION (Price Prediction)
# ============================================================
print("\n" + "="*60)
print("🤖 ALGORITHM 1: LINEAR REGRESSION")
print("="*60)
print("Goal: Predict product price based on rating and discount\n")

df_clean = df.dropna(subset=['price', 'overall_rating', 'discount_percent'])
X = df_clean[['overall_rating', 'discount_percent', 'total_reviews']]
y = df_clean['price']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

r2 = r2_score(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

print(f"📊 R² Score: {r2:.3f} ({r2*100:.1f}% variance explained)")
print(f"📊 Mean Squared Error: ₹{mse:.2f}")
print(f"📊 Root MSE: ₹{np.sqrt(mse):.2f}")

print("\n🔍 Feature Coefficients (Impact on Price):")
for feature, coef in zip(X.columns, model.coef_):
    print(f"   {feature}: {coef:+.2f}")

# Visualization
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred, alpha=0.6, color='blue', edgecolor='black')
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', linewidth=2)
plt.xlabel('Actual Price (₹)', fontsize=12)
plt.ylabel('Predicted Price (₹)', fontsize=12)
plt.title('Linear Regression: Actual vs Predicted Price', fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('algorithm1_linear_regression.png', dpi=300, bbox_inches='tight')
print("\n✅ Chart saved: algorithm1_linear_regression.png")

# ============================================================
# ALGORITHM 2: K-MEANS CLUSTERING (Product Segmentation)
# ============================================================
print("\n" + "="*60)
print("🤖 ALGORITHM 2: K-MEANS CLUSTERING")
print("="*60)
print("Goal: Group similar products (Budget vs Premium)\n")

df_products = df.drop_duplicates(subset=['product_id']).dropna(subset=['price', 'overall_rating'])
features = df_products[['price', 'overall_rating', 'total_reviews']]

scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df_products['cluster'] = kmeans.fit_predict(features_scaled)

print("📊 Cluster Analysis:\n")
for cluster in range(3):
    cluster_data = df_products[df_products['cluster'] == cluster]
    print(f"=== Cluster {cluster} ===")
    print(f"   Average Price: ₹{cluster_data['price'].mean():.0f}")
    print(f"   Average Rating: {cluster_data['overall_rating'].mean():.2f}")
    print(f"   Count: {len(cluster_data)} products")
    print(f"   Example: {cluster_data['product_name'].iloc[0][:40]}...")
    print()

# Visualization
plt.figure(figsize=(12, 6))

# Scatter plot
plt.subplot(1, 2, 1)
colors = ['#FF6B6B', '#4ECDC4', '#FFD93D']
for cluster in range(3):
    cluster_data = df_products[df_products['cluster'] == cluster]
    plt.scatter(cluster_data['price'], cluster_data['overall_rating'], 
                c=colors[cluster], label=f'Cluster {cluster}', s=150, alpha=0.7, edgecolor='black')
plt.xlabel('Price (₹)', fontsize=12)
plt.ylabel('Rating', fontsize=12)
plt.title('Product Clusters', fontsize=14, fontweight='bold')
plt.legend()
plt.grid(True, alpha=0.3)

# Bar chart
plt.subplot(1, 2, 2)
cluster_sizes = df_products['cluster'].value_counts().sort_index()
plt.bar(range(3), cluster_sizes, color=colors, edgecolor='black', linewidth=2)
plt.xlabel('Cluster', fontsize=12)
plt.ylabel('Number of Products', fontsize=12)
plt.title('Products per Cluster', fontsize=14, fontweight='bold')
plt.xticks(range(3))
plt.grid(True, alpha=0.3, axis='y')

plt.tight_layout()
plt.savefig('algorithm2_kmeans_clustering.png', dpi=300, bbox_inches='tight')
print("✅ Chart saved: algorithm2_kmeans_clustering.png")

# ============================================================
# ALGORITHM 3: DECISION TREE (Good Deal Classifier)
# ============================================================
print("\n" + "="*60)
print("🤖 ALGORITHM 3: DECISION TREE")
print("="*60)
print("Goal: Classify if a product is a Good Deal (discount > 15%)\n")

df_clean = df.dropna(subset=['price', 'overall_rating', 'discount_percent'])
df_clean['is_good_deal'] = (df_clean['discount_percent'] > 15).astype(int)

X = df_clean[['price', 'overall_rating', 'total_reviews']]
y = df_clean['is_good_deal']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X_train, y_train)
y_pred = tree.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"📊 Accuracy: {accuracy:.3f} ({accuracy*100:.1f}%)")

print("\n📈 Classification Report:")
print(classification_report(y_test, y_pred, target_names=['Bad Deal', 'Good Deal']))

print("🔍 Feature Importance:")
for feature, importance in zip(X.columns, tree.feature_importances_):
    print(f"   {feature}: {importance:.3f}")

# Visualization
plt.figure(figsize=(20, 12))
plot_tree(tree, feature_names=X.columns, class_names=['Bad Deal', 'Good Deal'], 
          filled=True, rounded=True, fontsize=12)
plt.title('Decision Tree: Good Deal Classifier', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('algorithm3_decision_tree.png', dpi=300, bbox_inches='tight')
print("\n✅ Chart saved: algorithm3_decision_tree.png")

# ============================================================
# ALGORITHM 4: SENTIMENT ANALYSIS (Review Analysis)
# ============================================================
print("\n" + "="*60)
print("🤖 ALGORITHM 4: SENTIMENT ANALYSIS")
print("="*60)
print("Goal: Analyze customer review sentiments\n")

df_reviews = df.dropna(subset=['review_text'])

def analyze_sentiment(text):
    blob = TextBlob(str(text))
    polarity = blob.sentiment.polarity
    if polarity > 0.1:
        return 'Positive', polarity
    elif polarity < -0.1:
        return 'Negative', polarity
    else:
        return 'Neutral', polarity

df_reviews[['sentiment', 'polarity']] = df_reviews['review_text'].apply(
    lambda x: pd.Series(analyze_sentiment(x))
)

sentiment_counts = df_reviews['sentiment'].value_counts()
print("📊 Sentiment Distribution:")
for sentiment, count in sentiment_counts.items():
    percentage = (count / len(df_reviews)) * 100
    print(f"   {sentiment}: {count} reviews ({percentage:.1f}%)")

print("\n📊 Average Sentiment by Category:")
for category in df_reviews['category'].unique():
    avg_sentiment = df_reviews[df_reviews['category'] == category]['polarity'].mean()
    print(f"   {category.capitalize()}: {avg_sentiment:.3f}")

# Visualization
plt.figure(figsize=(14, 6))

# Pie chart
plt.subplot(1, 3, 1)
colors_sentiment = ['#2ECC71', '#E74C3C', '#95A5A6']
sentiment_counts.plot(kind='pie', autopct='%1.1f%%', colors=colors_sentiment, 
                      startangle=90, textprops={'fontsize': 12})
plt.title('Sentiment Distribution', fontsize=14, fontweight='bold')
plt.ylabel('')

# Bar chart by category
plt.subplot(1, 3, 2)
category_sentiment = df_reviews.groupby('category')['polarity'].mean().sort_values(ascending=False)
category_sentiment.plot(kind='bar', color='#3498DB', edgecolor='black', linewidth=2)
plt.title('Average Sentiment by Category', fontsize=14, fontweight='bold')
plt.xlabel('Category', fontsize=12)
plt.ylabel('Sentiment Score', fontsize=12)
plt.xticks(rotation=45)
plt.grid(True, alpha=0.3, axis='y')

# Histogram
plt.subplot(1, 3, 3)
plt.hist(df_reviews['polarity'], bins=20, color='#9B59B6', edgecolor='black', alpha=0.7)
plt.axvline(0, color='red', linestyle='--', linewidth=2, label='Neutral')
plt.xlabel('Sentiment Polarity', fontsize=12)
plt.ylabel('Frequency', fontsize=12)
plt.title('Sentiment Score Distribution', fontsize=14, fontweight='bold')
plt.legend()
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('algorithm4_sentiment_analysis.png', dpi=300, bbox_inches='tight')
print("\n✅ Chart saved: algorithm4_sentiment_analysis.png")

# ============================================================
# ALGORITHM 5: RANDOM FOREST (Best Deal Predictor)
# ============================================================
print("\n" + "="*60)
print("🤖 ALGORITHM 5: RANDOM FOREST")
print("="*60)
print("Goal: Predict best deals using ensemble learning\n")

df_clean = df.dropna(subset=['price', 'overall_rating', 'discount_percent', 'total_reviews'])
df_clean['is_best_deal'] = ((df_clean['discount_percent'] > 15) & 
                             (df_clean['overall_rating'] > 4.5)).astype(int)

X = df_clean[['price', 'overall_rating', 'total_reviews', 'discount_percent']]
y = df_clean['is_best_deal']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
rf.fit(X_train, y_train)
y_pred = rf.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"📊 Accuracy: {accuracy:.3f} ({accuracy*100:.1f}%)")

print("\n📈 Classification Report:")
print(classification_report(y_test, y_pred, target_names=['Not Best', 'Best Deal']))

# Feature importance
importances = pd.DataFrame({
    'Feature': X.columns,
    'Importance': rf.feature_importances_
}).sort_values('Importance', ascending=False)

print("\n🔍 Feature Importance:")
for _, row in importances.iterrows():
    print(f"   {row['Feature']}: {row['Importance']:.3f}")

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt='d', cmap='YlOrRd', ax=axes[0], 
            xticklabels=['Not Best', 'Best Deal'], 
            yticklabels=['Not Best', 'Best Deal'], 
            cbar_kws={'label': 'Count'})
axes[0].set_title('Confusion Matrix', fontsize=14, fontweight='bold')
axes[0].set_ylabel('Actual', fontsize=12)
axes[0].set_xlabel('Predicted', fontsize=12)

# Feature Importance
axes[1].barh(importances['Feature'], importances['Importance'], color='coral', edgecolor='black')
axes[1].set_xlabel('Importance', fontsize=12)
axes[1].set_title('Feature Importance', fontsize=14, fontweight='bold')
axes[1].invert_yaxis()
axes[1].grid(True, alpha=0.3, axis='x')

plt.tight_layout()
plt.savefig('algorithm5_random_forest.png', dpi=300, bbox_inches='tight')
print("\n✅ Chart saved: algorithm5_random_forest.png")

# ============================================================
# SUMMARY
# ============================================================
print("\n" + "="*60)
print("✅ ANALYSIS COMPLETE!")
print("="*60)
print("\n📊 All 5 algorithms executed successfully!")
print("\n📁 Generated Files:")
print("   1. algorithm1_linear_regression.png")
print("   2. algorithm2_kmeans_clustering.png")
print("   3. algorithm3_decision_tree.png")
print("   4. algorithm4_sentiment_analysis.png")
print("   5. algorithm5_random_forest.png")
print("\n🎓 Show these charts to your teacher!")
print("="*60)
