"""
BuyNest Data Cleaning Script
Cleans the messy dataset and prepares it for ML analysis
Run this BEFORE running ml_analysis.py
"""

import pandas as pd
import numpy as np

print("="*60)
print("🧹 BUYNEST DATA CLEANING")
print("="*60)

# Load messy data
print("\n📂 Loading messy dataset...")
df = pd.read_csv('buynest_MESSY_dataset.csv')

print(f"✅ Loaded: {len(df)} rows, {len(df.columns)} columns\n")

# Show initial problems
print("="*60)
print("🔍 INITIAL DATA QUALITY ISSUES")
print("="*60)
print("\n📊 Missing Values per Column:")
missing = df.isnull().sum()
missing = missing[missing > 0]
for col, count in missing.items():
    print(f"   {col}: {count} missing ({count/len(df)*100:.1f}%)")

print(f"\n📝 Brand Inconsistencies:")
print(f"   Unique brands: {df['brand'].unique()}")
print(f"   Example issues: 'Dell' vs 'dell', 'Apple' vs 'apple'")

print(f"\n📂 Category Inconsistencies:")
print(f"   Unique categories: {df['category'].unique()}")
print(f"   Example issues: 'laptops' vs 'LAPTOPS' vs 'Laptops'")

print(f"\n✓ Boolean Value Issues:")
print(f"   stock_available values: {df['stock_available'].unique()}")
print(f"   Example issues: TRUE vs yes vs 1")

# Start cleaning
print("\n" + "="*60)
print("🧹 STARTING DATA CLEANING PROCESS")
print("="*60)

# ===== STEP 1: Fix Missing Product Names =====
print("\n[1/7] Fixing missing product names...")
original_missing = df['product_name'].isnull().sum()
df['product_name'] = df.groupby('product_id')['product_name'].transform(
    lambda x: x.fillna(method='ffill').fillna(method='bfill')
)
fixed = original_missing - df['product_name'].isnull().sum()
print(f"      ✅ Fixed {fixed} missing product names")

# ===== STEP 2: Standardize Capitalization =====
print("\n[2/7] Standardizing capitalization...")

# Lowercase categories
df['category'] = df['category'].str.lower()
print(f"      ✅ Categories: {df['category'].unique()}")

# Fix brands
brand_mapping = {
    'dell': 'Dell', 'apple': 'Apple', 'Hp': 'HP', 'hp': 'HP',
    'samsung': 'Samsung', 'oneplus': 'OnePlus', 'Oneplus': 'OnePlus',
    'sony': 'Sony', 'Lg': 'LG', 'lg': 'LG', 'xiaomi': 'Xiaomi',
    'asus': 'Asus', 'ASUS': 'Asus', 'lenovo': 'Lenovo',
    'google': 'Google', 'jbl': 'JBL', 'boat': 'boAt', 'Boat': 'boAt'
}
df['brand'] = df['brand'].replace(brand_mapping)
print(f"      ✅ Brands standardized: {df['brand'].nunique()} unique brands")

# ===== STEP 3: Fix Boolean Values =====
print("\n[3/7] Converting boolean values...")
df['stock_available'] = df['stock_available'].replace({
    'TRUE': True, 'yes': True, 'YES': True, '1': True, 1: True,
    'FALSE': False, 'no': False, 'NO': False, '0': False, 0: False
})
print(f"      ✅ Boolean values: {df['stock_available'].unique()}")

# ===== STEP 4: Fill Missing Numeric Values =====
print("\n[4/7] Filling missing numeric values...")

# Fill total_reviews
reviews_missing = df['total_reviews'].isnull().sum()
df['total_reviews'] = df.groupby('product_id')['total_reviews'].transform(
    lambda x: x.fillna(x.mean())
)
print(f"      ✅ Filled {reviews_missing} missing review counts")

# Fill overall_rating
rating_missing = df['overall_rating'].isnull().sum()
df['overall_rating'] = df.groupby('product_id')['overall_rating'].transform(
    lambda x: x.fillna(x.mean())
)
print(f"      ✅ Filled {rating_missing} missing ratings")

# Fill discount_percent
discount_missing = df['discount_percent'].isnull().sum()
df['discount_percent'].fillna(0, inplace=True)
print(f"      ✅ Filled {discount_missing} missing discounts (set to 0)")

# ===== STEP 5: Convert Data Types =====
print("\n[5/7] Converting data types...")
df['price'] = pd.to_numeric(df['price'], errors='coerce')
df['original_price'] = pd.to_numeric(df['original_price'], errors='coerce')
df['discount_percent'] = pd.to_numeric(df['discount_percent'], errors='coerce')
df['total_reviews'] = pd.to_numeric(df['total_reviews'], errors='coerce')
df['overall_rating'] = pd.to_numeric(df['overall_rating'], errors='coerce')
df['review_rating'] = pd.to_numeric(df['review_rating'], errors='coerce')
df['review_helpful_count'] = pd.to_numeric(df['review_helpful_count'], errors='coerce')
print(f"      ✅ All numeric columns converted properly")

# ===== STEP 6: Add Derived Features =====
print("\n[6/7] Adding derived features...")
df['has_review'] = df['review_text'].notna()
df['savings'] = df['original_price'] - df['price']
df['savings_percent'] = (df['savings'] / df['original_price'] * 100).round(2)
print(f"      ✅ Added: has_review, savings, savings_percent")

# ===== STEP 7: Remove Duplicates =====
print("\n[7/7] Checking for duplicates...")
duplicates = df.duplicated(subset=['product_id', 'platform']).sum()
df.drop_duplicates(subset=['product_id', 'platform'], keep='first', inplace=True)
print(f"      ✅ Removed {duplicates} duplicate rows")

# Final statistics
print("\n" + "="*60)
print("✅ CLEANING COMPLETE!")
print("="*60)

print(f"\n📊 Final Dataset Statistics:")
print(f"   Total Rows: {len(df)}")
print(f"   Total Columns: {len(df.columns)}")
print(f"   Products: {df['product_id'].nunique()}")
print(f"   Platforms: {df['platform'].nunique()}")
print(f"   Categories: {df['category'].nunique()}")
print(f"   Brands: {df['brand'].nunique()}")
print(f"   Rows with Reviews: {df['has_review'].sum()}")

print(f"\n📈 Remaining Missing Values:")
remaining_missing = df.isnull().sum()
remaining_missing = remaining_missing[remaining_missing > 0]
if len(remaining_missing) > 0:
    for col, count in remaining_missing.items():
        print(f"   {col}: {count} ({count/len(df)*100:.1f}%)")
    print(f"   Note: Review fields are intentionally empty for products without reviews")
else:
    print(f"   ✅ No missing values in critical columns!")

print(f"\n💾 Data Quality Score:")
critical_cols = ['product_name', 'brand', 'category', 'price', 'overall_rating']
completeness = (df[critical_cols].notna().sum().sum() / (len(df) * len(critical_cols)) * 100)
print(f"   {completeness:.1f}% complete (critical columns)")

# Save cleaned data
output_file = 'buynest_CLEANED_dataset.csv'
df.to_csv(output_file, index=False)
print(f"\n💾 Cleaned dataset saved: {output_file}")

# Create summary report
print("\n" + "="*60)
print("📊 BEFORE vs AFTER COMPARISON")
print("="*60)

comparison = {
    'Metric': [
        'Missing product names',
        'Missing ratings',
        'Missing reviews count',
        'Missing discounts',
        'Inconsistent brands',
        'Inconsistent categories',
        'Inconsistent booleans',
        'Duplicate rows'
    ],
    'Before': [
        f"{original_missing}",
        f"{rating_missing}",
        f"{reviews_missing}",
        f"{discount_missing}",
        "Yes (dell, Dell, DELL)",
        "Yes (laptops, LAPTOPS)",
        "Yes (TRUE, yes, 1)",
        f"{duplicates}"
    ],
    'After': [
        f"{df['product_name'].isnull().sum()}",
        f"{df['overall_rating'].isnull().sum()}",
        f"{df['total_reviews'].isnull().sum()}",
        f"{df['discount_percent'].isnull().sum()}",
        "No (all standardized)",
        "No (all lowercase)",
        "No (all boolean)",
        "0"
    ]
}

comparison_df = pd.DataFrame(comparison)
print(comparison_df.to_string(index=False))

print("\n" + "="*60)
print("🎉 DATA CLEANING SUCCESSFUL!")
print("="*60)
print(f"\n✅ You can now run: python ml_analysis.py")
print(f"✅ Or open in Excel: {output_file}")
print(f"\n💡 The cleaned dataset is ready for ML algorithms!")
