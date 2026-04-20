// Expanded Product Database with Indian Rupees (₹)
// Much larger variety of products across all categories

const productsDatabase = [
    // ============== LAPTOPS (15 products) ==============
    {
        id: 1,
        name: "MacBook Pro 14-inch M3",
        brand: "Apple",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        rating: 4.8,
        reviews: 2847,
        platforms: [
            { name: "Amazon", price: 164990, originalPrice: 179900, discount: 8, stock: true, offer: "Bank Offer: 10% off with HDFC Credit Card" },
            { name: "Flipkart", price: 168990, originalPrice: 179900, discount: 6, stock: true, offer: "Exchange: Up to ₹15000 off" },
            { name: "Croma", price: 172990, originalPrice: 179900, discount: 4, stock: true, offer: "No Cost EMI available" },
            { name: "Reliance Digital", price: 163990, originalPrice: 179900, discount: 9, stock: true, offer: "Free AirPods worth ₹12000" }
        ],

        customerReviews: [
            { author: "Rajesh Kumar", rating: 5, date: "2 days ago", text: "Absolutely brilliant laptop! The M3 chip is incredibly fast. Battery life is outstanding - easily lasts a full workday. Best purchase I\'ve made this year!", helpful: 234 },
            { author: "Priya Sharma", rating: 4, date: "1 week ago", text: "Great performance and build quality. Display is stunning. Only complaint is the price but you get what you pay for with Apple.", helpful: 156 },
            { author: "Amit Patel", rating: 5, date: "2 weeks ago", text: "Perfect for video editing. Final Cut Pro runs like butter. No heating issues even under heavy load. Highly recommended!", helpful: 189 }
        ]
    },
    {
        id: 2,
        name: "Dell XPS 15 (Intel i7, 16GB RAM)",
        brand: "Dell",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
        rating: 4.6,
        reviews: 1523,
        platforms: [
            { name: "Amazon", price: 109990, originalPrice: 124990, discount: 12, stock: true, offer: "10% Instant Discount with SBI Cards" },
            { name: "Flipkart", price: 112990, originalPrice: 124990, discount: 10, stock: true, offer: "Exchange up to ₹18000" },
            { name: "Dell Store", price: 114990, originalPrice: 124990, discount: 8, stock: true, offer: "Extended Warranty for ₹4999" },
            { name: "Vijay Sales", price: 108990, originalPrice: 124990, discount: 13, stock: true, offer: "Free Dell Backpack worth ₹3500" }
        ],

        customerReviews: [
            { author: "Vikram Singh", rating: 5, date: "3 days ago", text: "Excellent laptop for programming and gaming. The RTX 4050 handles modern games well. Build quality is premium.", helpful: 98 },
            { author: "Neha Gupta", rating: 4, date: "1 week ago", text: "Good performance but runs a bit hot during intensive tasks. Display is gorgeous though!", helpful: 67 }
        ]
    },
    {
        id: 3,
        name: "HP Pavilion 15.6-inch Laptop",
        brand: "HP",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
        rating: 4.4,
        reviews: 1876,
        platforms: [
            { name: "Amazon", price: 52990, originalPrice: 65990, discount: 20, stock: true, offer: "Coupon: Extra ₹2000 off" },
            { name: "Flipkart", price: 54990, originalPrice: 65990, discount: 17, stock: true, offer: "No Cost EMI from ₹4416/month" },
            { name: "HP Store", price: 57990, originalPrice: 65990, discount: 12, stock: true, offer: "Free HP Mouse + Bag" },
            { name: "Croma", price: 52490, originalPrice: 65990, discount: 20, stock: true, offer: "Bajaj Finserv EMI available" }
        ],

        customerReviews: [
            { author: "Suresh Menon", rating: 4, date: "5 days ago", text: "Great value for money! Perfect for daily tasks browsing and office work. Lightweight and portable.", helpful: 145 }
        ]
    },
    {
        id: 4,
        name: "Lenovo IdeaPad Gaming 3 (Ryzen 5)",
        brand: "Lenovo",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
        rating: 4.5,
        reviews: 3421,
        platforms: [
            { name: "Amazon", price: 64990, originalPrice: 74990, discount: 13, stock: true, offer: "Exchange: Up to ₹45000 off" },
            { name: "Flipkart", price: 62990, originalPrice: 74990, discount: 16, stock: true, offer: "Bank Offer: ₹8000 instant discount" },
            { name: "Lenovo Store", price: 67990, originalPrice: 74990, discount: 9, stock: true },
            { name: "Reliance Digital", price: 63990, originalPrice: 74990, discount: 15, stock: true, offer: "Jio Prepaid: 2 Years Unlimited" }
        ],

        customerReviews: [
            { author: "Arjun Reddy", rating: 5, date: "1 day ago", text: "Camera quality is insane! The titanium build feels premium. Battery easily lasts full day with heavy use. Worth every penny!", helpful: 456 },
            { author: "Kavya Iyer", rating: 5, date: "4 days ago", text: "Upgraded from iPhone 12. The difference is night and day. Action button is super useful. Best iPhone yet!", helpful: 321 },
            { author: "Rahul Mehta", rating: 4, date: "1 week ago", text: "Excellent phone but very expensive. If budget allows go for it. iOS ecosystem is unbeatable.", helpful: 278 }
        ]
    },
    {
        id: 5,
        name: "Asus VivoBook 15 (Intel i5, 8GB)",
        brand: "Asus",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        rating: 4.3,
        reviews: 2134,
        platforms: [
            { name: "Amazon", price: 45990, originalPrice: 54990, discount: 16, stock: true, offer: "No Cost EMI from ₹10000/month" },
            { name: "Flipkart", price: 46990, originalPrice: 54990, discount: 15, stock: true, offer: "Exchange: Up to ₹38000" },
            { name: "Asus Store", price: 49990, originalPrice: 54990, discount: 9, stock: true },
            { name: "Vijay Sales", price: 44990, originalPrice: 54990, discount: 18, stock: true, offer: "Cashback ₹5000" }
        ],

        customerReviews: [
            { author: "Deepak Joshi", rating: 5, date: "2 days ago", text: "200MP camera is absolutely stunning! S-Pen functionality is incredibly useful. Best Android phone available!", helpful: 389 },
            { author: "Ananya Das", rating: 4, date: "1 week ago", text: "Great phone overall. Screen is gorgeous. Battery life could be better with heavy use though.", helpful: 234 }
        ]
    },
    {
        id: 6,
        name: "Acer Aspire 5 (AMD Ryzen 7)",
        brand: "Acer",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
        rating: 4.4,
        reviews: 1654,
        platforms: [
            { name: "Amazon", price: 58990, originalPrice: 69990, discount: 16, stock: true, offer: "Combo: Free Buds Z2 worth ₹4999" },
            { name: "Flipkart", price: 57990, originalPrice: 69990, discount: 17, stock: true, offer: "Exchange up to ₹25000" },
            { name: "Croma", price: 59990, originalPrice: 69990, discount: 14, stock: true },
            { name: "Reliance Digital", price: 56990, originalPrice: 69990, discount: 19, stock: true, offer: "12-month Screen Damage Protection" }
        ],

        customerReviews: [
            { author: "Karthik Nair", rating: 5, date: "3 days ago", text: "Blazing fast! 100W charging is a game changer. Camera quality rivals flagships. Best value flagship!", helpful: 512 },
            { author: "Sneha Kapoor", rating: 5, date: "5 days ago", text: "Switched from iPhone. OxygenOS is smooth and clean. No regrets! Display is absolutely gorgeous.", helpful: 398 }
        ]
    },
    {
        id: 7,
        name: "MSI GF63 Thin Gaming Laptop",
        brand: "MSI",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
        rating: 4.6,
        reviews: 876,
        platforms: [
            { name: "Amazon", price: 72990, originalPrice: 84990, discount: 14, stock: true, offer: "Bank Offer: ₹10000 instant discount" },
            { name: "Flipkart", price: 71990, originalPrice: 84990, discount: 15, stock: true, offer: "Exchange: Old TV up to ₹15000" },
            { name: "Vijay Sales", price: 73990, originalPrice: 84990, discount: 13, stock: true },
            { name: "Croma", price: 70990, originalPrice: 84990, discount: 16, stock: true, offer: "No Cost EMI ₹10000/month" }
        ],

        customerReviews: [
            { author: "Vivek Malhotra", rating: 5, date: "1 week ago", text: "Picture quality is phenomenal! Blacks are truly black. Sound quality with Acoustic Surface Audio is impressive. Home theatre experience!", helpful: 267 },
            { author: "Meera Krishnan", rating: 5, date: "2 weeks ago", text: "Best TV I\'ve owned. Netflix and Prime Video look stunning in 4K. Google TV interface is smooth. Highly recommended!", helpful: 198 }
        ]
    },
    {
        id: 8,
        name: "MacBook Air M2 13-inch",
        brand: "Apple",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400",
        rating: 4.9,
        reviews: 4532,
        platforms: [
            { name: "Amazon", price: 114990, originalPrice: 129900, discount: 11, stock: true, offer: "Great Indian Festival: Extra 10% off" },
            { name: "Flipkart", price: 116990, originalPrice: 129900, discount: 10, stock: true, offer: "No Cost EMI from ₹4499/month" },
            { name: "Croma", price: 119900, originalPrice: 129900, discount: 8, stock: true, offer: "Assured Buyback at 50% value" },
            { name: "Reliance Digital", price: 113990, originalPrice: 129900, discount: 12, stock: true }
        ],

        customerReviews: [
            { author: "Ramesh Kumar", rating: 4, date: "4 days ago", text: "Good TV for the price. WebOS is very user friendly. Picture quality is decent for watching sports and movies.", helpful: 178 }
        ]
    },
    {
        id: 9,
        name: "HP Victus Gaming Laptop (RTX 3050)",
        brand: "HP",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        rating: 4.5,
        reviews: 1987,
        platforms: [
            { name: "Amazon", price: 68990, originalPrice: 79990, discount: 14, stock: true, offer: "Limited Time Deal" },
            { name: "Flipkart", price: 67990, originalPrice: 79990, discount: 15, stock: true, offer: "Exchange old headphones up to ₹5000" },
            { name: "HP Store", price: 71990, originalPrice: 79990, discount: 10, stock: true },
            { name: "Croma", price: 66990, originalPrice: 79990, discount: 16, stock: true, offer: "Croma Assured: Best Price Guarantee" }
        ],

        customerReviews: [
            { author: "Aditya Verma", rating: 5, date: "2 days ago", text: "Best noise cancelling headphones! Comfort is exceptional for long listening sessions. Sound quality is pristine. Worth every rupee!", helpful: 789 },
            { author: "Pooja Nambiar", rating: 5, date: "1 week ago", text: "Perfect for flights and commute. Battery life is amazing. Speak-to-Chat feature is super convenient. Highly recommend!", helpful: 654 },
            { author: "Sanjay Reddy", rating: 4, date: "2 weeks ago", text: "Excellent headphones but a bit pricey. If budget allows these are the best you can buy. ANC is unmatched!", helpful: 432 }
        ]
    },
    {
        id: 10,
        name: "Lenovo ThinkPad E14 (Intel i5)",
        brand: "Lenovo",
        category: "laptops",
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400",
        rating: 4.4,
        reviews: 1234,
        platforms: [
            { name: "Amazon", price: 54990, originalPrice: 64990, discount: 15, stock: true, offer: "Lightning Deal: Save ₹5000" },
            { name: "Flipkart", price: 53990, originalPrice: 64990, discount: 17, stock: true, offer: "Exchange: Get up to ₹3000 off" },
            { name: "Lenovo Store", price: 57990, originalPrice: 64990, discount: 11, stock: true },
            { name: "Reliance Digital", price: 52990, originalPrice: 64990, discount: 18, stock: true, offer: "Jio Users: Extra ₹1000 off" }
        ],

        customerReviews: [
            { author: "Ishaan Patel", rating: 5, date: "1 day ago", text: "Perfect integration with iPhone! ANC is fantastic. Adaptive audio automatically adjusts based on environment. Love them!", helpful: 923 },
            { author: "Divya Sharma", rating: 5, date: "3 days ago", text: "Fit is secure and comfortable. Sound quality is excellent. Spatial audio for movies is mind-blowing!", helpful: 678 }
        ]
    },

    // ============== MOBILE PHONES (20 products) ==============
    {
        id: 11,
        name: "iPhone 15 Pro Max 256GB",
        brand: "Apple",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1592286927505-c04a37362b91?w=400",
        rating: 4.9,
        reviews: 5432,
        platforms: [
            { name: "Amazon", price: 144900, originalPrice: 159900, discount: 9, stock: true, offer: "Gaming Sale Special" },
            { name: "Flipkart", price: 146900, originalPrice: 159900, discount: 8, stock: true, offer: "Exchange up to ₹12000" },
            { name: "Croma", price: 149900, originalPrice: 159900, discount: 6, stock: true },
            { name: "Reliance Digital", price: 143900, originalPrice: 159900, discount: 10, stock: true, offer: "Free Gaming Mouse" }
        ],

        customerReviews: [
            { author: "Rohan Desai", rating: 5, date: "1 day ago", text: "Amazing gaming laptop for the price. Plays AAA titles at high settings. Cooling is excellent.", helpful: 287 }
        ]
    },
    {
        id: 12,
        name: "Samsung Galaxy S24 Ultra 256GB",
        brand: "Samsung",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        rating: 4.7,
        reviews: 3876,
        platforms: [
            { name: "Amazon", price: 119999, originalPrice: 134999, discount: 11, stock: true, offer: "Student Discount Available" },
            { name: "Flipkart", price: 121999, originalPrice: 134999, discount: 10, stock: true, offer: "Exchange offer" },
            { name: "Samsung Store", price: 124999, originalPrice: 134999, discount: 7, stock: true },
            { name: "Vijay Sales", price: 118999, originalPrice: 134999, discount: 12, stock: true, offer: "Cashback ₹2000" }
        ],

        customerReviews: [
            { author: "Meghna Shah", rating: 4, date: "3 days ago", text: "Good laptop for students. Lightweight and battery lasts whole day. Screen could be brighter though.", helpful: 167 }
        ]
    },
    {
        id: 13,
        name: "OnePlus 12 5G (16GB RAM)",
        brand: "OnePlus",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        rating: 4.6,
        reviews: 4532,
        platforms: [
            { name: "Amazon", price: 64999, originalPrice: 69999, discount: 7, stock: true, offer: "Flash Sale Price" },
            { name: "Flipkart", price: 63999, originalPrice: 69999, discount: 9, stock: true, offer: "Bank Discount ₹3000" },
            { name: "OnePlus Store", price: 66999, originalPrice: 69999, discount: 4, stock: true },
            { name: "Reliance Digital", price: 62999, originalPrice: 69999, discount: 10, stock: true }
        ],

        customerReviews: [
            { author: "Prateek Jain", rating: 5, date: "2 days ago", text: "Camera is incredible for the price. MIUI is much better now. Fast charging is super convenient.", helpful: 445 },
            { author: "Swati Kulkarni", rating: 4, date: "5 days ago", text: "Great value flagship. Performance is smooth. Battery life is good.", helpful: 312 }
        ]
    },
    {
        id: 14,
        name: "Google Pixel 8 Pro 256GB",
        brand: "Google",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
        rating: 4.6,
        reviews: 2134,
        platforms: [
            { name: "Flipkart", price: 84999, originalPrice: 99999, discount: 15, stock: true, offer: "Exchange bonus ₹5000" },
            { name: "Amazon", price: 86999, originalPrice: 99999, discount: 13, stock: true, offer: "Limited Stock Deal" },
            { name: "Croma", price: 89999, originalPrice: 99999, discount: 10, stock: true, offer: "No Cost EMI" },
            { name: "Reliance Digital", price: 83999, originalPrice: 99999, discount: 16, stock: true, offer: "Jio Prepaid Benefits" }
        ],

        customerReviews: [
            { author: "Aarav Chopra", rating: 5, date: "1 day ago", text: "Best camera phone hands down! Clean Android experience. Magic Eraser is amazing!", helpful: 567 },
            { author: "Riya Bajaj", rating: 5, date: "4 days ago", text: "AI features are genuinely useful. Photos look professional. Love the pure Android.", helpful: 434 }
        ]
    },
    {
        id: 15,
        name: "Xiaomi 14 5G (12GB RAM)",
        brand: "Xiaomi",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79b8?w=400",
        rating: 4.5,
        reviews: 3214,
        platforms: [
            { name: "Amazon", price: 54999, originalPrice: 64999, discount: 15, stock: true, offer: "Diwali Offer" },
            { name: "Flipkart", price: 53999, originalPrice: 64999, discount: 17, stock: true, offer: "Big Billion Days Price" },
            { name: "Mi Store", price: 57999, originalPrice: 64999, discount: 11, stock: true },
            { name: "Vijay Sales", price: 52999, originalPrice: 64999, discount: 18, stock: true }
        ],

        customerReviews: [
            { author: "Manoj Tiwari", rating: 4, date: "6 days ago", text: "Value for money TV. Good for daily use. Sound could be better but picture is fine.", helpful: 134 }
        ]
    },
    {
        id: 16,
        name: "iPhone 14 128GB",
        brand: "Apple",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400",
        rating: 4.8,
        reviews: 7654,
        platforms: [
            { name: "Amazon", price: 64900, originalPrice: 79900, discount: 19, stock: true, offer: "Deal of the Day" },
            { name: "Flipkart", price: 65900, originalPrice: 79900, discount: 18, stock: true, offer: "Plus Member Discount" },
            { name: "Croma", price: 67900, originalPrice: 79900, discount: 15, stock: true, offer: "Free Carry Case" },
            { name: "Reliance Digital", price: 63900, originalPrice: 79900, discount: 20, stock: true, offer: "Assured Exchange" }
        ],

        customerReviews: [
            { author: "Siddharth Rao", rating: 5, date: "1 day ago", text: "Great bass! Comfortable for long use. ANC works well for this price range.", helpful: 378 },
            { author: "Tanvi Mehta", rating: 4, date: "3 days ago", text: "Good sound quality. Battery lasts long. Value for money.", helpful: 256 }
        ]
    },
    {
        id: 17,
        name: "Samsung Galaxy S23 FE 5G",
        brand: "Samsung",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400",
        rating: 4.5,
        reviews: 2876,
        platforms: [
            { name: "Amazon", price: 49999, originalPrice: 59999, discount: 17, stock: true, offer: "Bestseller" },
            { name: "Flipkart", price: 48999, originalPrice: 59999, discount: 18, stock: true, offer: "Super Saver Deal" },
            { name: "Samsung Store", price: 52999, originalPrice: 59999, discount: 12, stock: true },
            { name: "Vijay Sales", price: 47999, originalPrice: 59999, discount: 20, stock: true }
        ],

        customerReviews: [
            { author: "Aryan Sinha", rating: 4, date: "2 days ago", text: "Decent headphones for the price. Bass is good. Build quality could be better.", helpful: 523 },
            { author: "Prachi Agarwal", rating: 5, date: "1 week ago", text: "Amazing value! Sound is great for parties. Highly recommend!", helpful: 687 }
        ]
    },
    {
        id: 18,
        name: "Vivo V29 Pro 5G (12GB RAM)",
        brand: "Vivo",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1583573428739-250e520fc8a2?w=400",
        rating: 4.4,
        reviews: 1987,
        platforms: [
            { name: "Amazon", price: 36999, originalPrice: 42999, discount: 14, stock: true, offer: "Lightning Deal" },
            { name: "Flipkart", price: 35999, originalPrice: 42999, discount: 16, stock: true, offer: "Exchange old earbuds" },
            { name: "Vivo Store", price: 38999, originalPrice: 42999, discount: 9, stock: true },
            { name: "Reliance Digital", price: 34999, originalPrice: 42999, discount: 19, stock: true, offer: "Jio User Discount" }
        ],

        customerReviews: [
            { author: "Nisha Verma", rating: 5, date: "1 day ago", text: "Best TWS under 10k! ANC is impressive. Fits perfectly.", helpful: 445 },
            { author: "Kunal Sharma", rating: 4, date: "4 days ago", text: "Good sound quality. Battery life is excellent. Worth the money.", helpful: 334 }
        ]
    },
    {
        id: 19,
        name: "Oppo Reno 11 Pro 5G",
        brand: "Oppo",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400",
        rating: 4.3,
        reviews: 1543,
        platforms: [
            { name: "Amazon", price: 39999, originalPrice: 46999, discount: 15, stock: true, offer: "Prime Day Special" },
            { name: "Flipkart", price: 38999, originalPrice: 46999, discount: 17, stock: true, offer: "Bank Offer ₹2000" },
            { name: "Oppo Store", price: 41999, originalPrice: 46999, discount: 11, stock: true },
            { name: "Croma", price: 37999, originalPrice: 46999, discount: 19, stock: true, offer: "Croma Special" }
        ],

        customerReviews: [
            { author: "Ritesh Gupta", rating: 5, date: "2 days ago", text: "Perfect for Galaxy phones. ANC is very good. Sound is balanced.", helpful: 389 },
            { author: "Simran Kaur", rating: 4, date: "5 days ago", text: "Comfortable fit. Good for calls. Battery could be better.", helpful: 267 }
        ]
    },
    {
        id: 20,
        name: "Realme GT 5 Pro (16GB RAM)",
        brand: "Realme",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
        rating: 4.5,
        reviews: 2341,
        platforms: [
            { name: "Amazon", price: 44999, originalPrice: 52999, discount: 15, stock: true, offer: "Great Indian Sale" },
            { name: "Flipkart", price: 43999, originalPrice: 52999, discount: 17, stock: true, offer: "Flipkart Big Billion" },
            { name: "Realme Store", price: 46999, originalPrice: 52999, discount: 11, stock: true },
            { name: "Vijay Sales", price: 42999, originalPrice: 52999, discount: 19, stock: true, offer: "Free Soundbar" }
        ],

        customerReviews: [
            { author: "Abhishek Modi", rating: 5, date: "3 days ago", text: "Best value TV! Android TV works smoothly. Picture quality is very good for the price.", helpful: 567 },
            { author: "Pooja Reddy", rating: 4, date: "1 week ago", text: "Good TV for streaming. Netflix and Prime work well. Remote is simple.", helpful: 423 }
        ]
    },
    {
        id: 21,
        name: "Nothing Phone 2 (12GB RAM)",
        brand: "Nothing",
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        rating: 4.4,
        reviews: 1876,
        platforms: [
            { name: "Flipkart", price: 39999, originalPrice: 44999, discount: 11, stock: true },
            { name: "Amazon", price: 40999, originalPrice: 44999, discount: 9, stock: true },
            { name: "Croma", price: 42999, originalPrice: 44999, discount: 4, stock: true },
            { name: "Reliance Digital", price: 38999, originalPrice: 44999, discount: 13, stock: true }
        ]
    },

    // ============== TVS (15 products) ==============
    {
        id: 22,
        name: "Sony Bravia 55-inch 4K OLED TV",
        brand: "Sony",
        category: "tvs",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        rating: 4.8,
        reviews: 2145,
        platforms: [
            { name: "Amazon", price: 119990, originalPrice: 139990, discount: 14, stock: true },
            { name: "Flipkart", price: 121990, originalPrice: 139990, discount: 13, stock: true },
            { name: "Croma", price: 124990, originalPrice: 139990, discount: 11, stock: true },
            { name: "Reliance Digital", price: 118990, originalPrice: 139990, discount: 15, stock: true }
        ]
    },
    {
        id: 23,
        name: "LG 55-inch 4K UHD Smart TV",
        brand: "LG",
        category: "tvs",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
        rating: 4.6,
        reviews: 3421,
        platforms: [
            { name: "Amazon", price: 54990, originalPrice: 64990, discount: 15, stock: true },
            { name: "Flipkart", price: 53990, originalPrice: 64990, discount: 17, stock: true },
            { name: "Vijay Sales", price: 56990, originalPrice: 64990, discount: 12, stock: true },
            { name: "Croma", price: 52990, originalPrice: 64990, discount: 18, stock: true }
        ]
    },
    {
        id: 24,
        name: "Samsung 43-inch Crystal 4K TV",
        brand: "Samsung",
        category: "tvs",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        rating: 4.5,
        reviews: 1654,
        platforms: [
            { name: "Amazon", price: 32990, originalPrice: 39990, discount: 18, stock: true },
            { name: "Flipkart", price: 31990, originalPrice: 39990, discount: 20, stock: true },
            { name: "Samsung Store", price: 34990, originalPrice: 39990, discount: 13, stock: true },
            { name: "Reliance Digital", price: 30990, originalPrice: 39990, discount: 23, stock: true }
        ]
    },
    {
        id: 25,
        name: "Mi 50-inch 4K Android TV",
        brand: "Xiaomi",
        category: "tvs",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        rating: 4.4,
        reviews: 4532,
        platforms: [
            { name: "Amazon", price: 34999, originalPrice: 42999, discount: 19, stock: true },
            { name: "Flipkart", price: 33999, originalPrice: 42999, discount: 21, stock: true },
            { name: "Mi Store", price: 36999, originalPrice: 42999, discount: 14, stock: true },
            { name: "Vijay Sales", price: 32999, originalPrice: 42999, discount: 23, stock: true }
        ]
    },
    {
        id: 26,
        name: "OnePlus 55-inch 4K QLED TV",
        brand: "OnePlus",
        category: "tvs",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
        rating: 4.5,
        reviews: 2187,
        platforms: [
            { name: "Amazon", price: 49999, originalPrice: 59999, discount: 17, stock: true },
            { name: "Flipkart", price: 48999, originalPrice: 59999, discount: 18, stock: true },
            { name: "OnePlus Store", price: 52999, originalPrice: 59999, discount: 12, stock: true },
            { name: "Reliance Digital", price: 47999, originalPrice: 59999, discount: 20, stock: true }
        ]
    },
    {
        id: 27,
        name: "TCL 65-inch 4K UHD Smart TV",
        brand: "TCL",
        category: "tvs",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        rating: 4.3,
        reviews: 1432,
        platforms: [
            { name: "Amazon", price: 54990, originalPrice: 64990, discount: 15, stock: true },
            { name: "Flipkart", price: 53990, originalPrice: 64990, discount: 17, stock: true },
            { name: "Croma", price: 56990, originalPrice: 64990, discount: 12, stock: true },
            { name: "Vijay Sales", price: 52990, originalPrice: 64990, discount: 18, stock: true }
        ]
    },
    {
        id: 28,
        name: "Hisense 50-inch 4K QLED TV",
        brand: "Hisense",
        category: "tvs",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
        rating: 4.4,
        reviews: 987,
        platforms: [
            { name: "Amazon", price: 39999, originalPrice: 49999, discount: 20, stock: true },
            { name: "Flipkart", price: 38999, originalPrice: 49999, discount: 22, stock: true },
            { name: "Croma", price: 41999, originalPrice: 49999, discount: 16, stock: true },
            { name: "Reliance Digital", price: 37999, originalPrice: 49999, discount: 24, stock: true }
        ]
    },

    // ============== HEADPHONES (15 products) ==============
    {
        id: 29,
        name: "Sony WH-1000XM5 Noise Cancelling",
        brand: "Sony",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
        rating: 4.9,
        reviews: 8743,
        platforms: [
            { name: "Amazon", price: 28990, originalPrice: 34990, discount: 17, stock: true },
            { name: "Flipkart", price: 29990, originalPrice: 34990, discount: 14, stock: true },
            { name: "Sony Store", price: 32990, originalPrice: 34990, discount: 6, stock: true },
            { name: "Croma", price: 27990, originalPrice: 34990, discount: 20, stock: true }
        ]
    },
    {
        id: 30,
        name: "Apple AirPods Pro (2nd Gen)",
        brand: "Apple",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400",
        rating: 4.8,
        reviews: 12543,
        platforms: [
            { name: "Amazon", price: 24900, originalPrice: 29900, discount: 17, stock: true },
            { name: "Flipkart", price: 25900, originalPrice: 29900, discount: 13, stock: true },
            { name: "Croma", price: 26900, originalPrice: 29900, discount: 10, stock: true },
            { name: "Reliance Digital", price: 23900, originalPrice: 29900, discount: 20, stock: true }
        ]
    },
    {
        id: 31,
        name: "Bose QuietComfort Ultra",
        brand: "Bose",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
        rating: 4.7,
        reviews: 3421,
        platforms: [
            { name: "Amazon", price: 32990, originalPrice: 39990, discount: 18, stock: true },
            { name: "Flipkart", price: 33990, originalPrice: 39990, discount: 15, stock: true },
            { name: "Bose Store", price: 36990, originalPrice: 39990, discount: 8, stock: true },
            { name: "Vijay Sales", price: 31990, originalPrice: 39990, discount: 20, stock: true }
        ]
    },
    {
        id: 32,
        name: "JBL Tune 770NC Wireless",
        brand: "JBL",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        rating: 4.5,
        reviews: 5432,
        platforms: [
            { name: "Amazon", price: 7999, originalPrice: 9999, discount: 20, stock: true },
            { name: "Flipkart", price: 7799, originalPrice: 9999, discount: 22, stock: true },
            { name: "Croma", price: 8499, originalPrice: 9999, discount: 15, stock: true },
            { name: "Reliance Digital", price: 7599, originalPrice: 9999, discount: 24, stock: true }
        ]
    },
    {
        id: 33,
        name: "boAt Rockerz 550 Wireless",
        brand: "boAt",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400",
        rating: 4.3,
        reviews: 15432,
        platforms: [
            { name: "Amazon", price: 1999, originalPrice: 3999, discount: 50, stock: true },
            { name: "Flipkart", price: 1899, originalPrice: 3999, discount: 53, stock: true },
            { name: "boAt Store", price: 2299, originalPrice: 3999, discount: 43, stock: true },
            { name: "Croma", price: 1799, originalPrice: 3999, discount: 55, stock: true }
        ]
    },
    {
        id: 34,
        name: "Sennheiser Momentum 4 Wireless",
        brand: "Sennheiser",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400",
        rating: 4.8,
        reviews: 2134,
        platforms: [
            { name: "Amazon", price: 29990, originalPrice: 34990, discount: 14, stock: true },
            { name: "Flipkart", price: 30990, originalPrice: 34990, discount: 11, stock: true },
            { name: "Sennheiser Store", price: 32990, originalPrice: 34990, discount: 6, stock: true },
            { name: "Vijay Sales", price: 28990, originalPrice: 34990, discount: 17, stock: true }
        ]
    },
    {
        id: 35,
        name: "OnePlus Buds Pro 2",
        brand: "OnePlus",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1590658165737-15a047b7a846?w=400",
        rating: 4.4,
        reviews: 6543,
        platforms: [
            { name: "Amazon", price: 9999, originalPrice: 11999, discount: 17, stock: true },
            { name: "Flipkart", price: 9799, originalPrice: 11999, discount: 18, stock: true },
            { name: "OnePlus Store", price: 10499, originalPrice: 11999, discount: 13, stock: true },
            { name: "Reliance Digital", price: 9599, originalPrice: 11999, discount: 20, stock: true }
        ]
    },
    {
        id: 36,
        name: "Samsung Galaxy Buds2 Pro",
        brand: "Samsung",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1598331668581-e5daac17e671?w=400",
        rating: 4.5,
        reviews: 4321,
        platforms: [
            { name: "Amazon", price: 14990, originalPrice: 17999, discount: 17, stock: true },
            { name: "Flipkart", price: 14490, originalPrice: 17999, discount: 19, stock: true },
            { name: "Samsung Store", price: 15990, originalPrice: 17999, discount: 11, stock: true },
            { name: "Croma", price: 13990, originalPrice: 17999, discount: 22, stock: true }
        ]
    },
    {
        id: 37,
        name: "Noise Buds VS104 TWS",
        brand: "Noise",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400",
        rating: 4.2,
        reviews: 9876,
        platforms: [
            { name: "Amazon", price: 1299, originalPrice: 2499, discount: 48, stock: true },
            { name: "Flipkart", price: 1199, originalPrice: 2499, discount: 52, stock: true },
            { name: "Noise Store", price: 1499, originalPrice: 2499, discount: 40, stock: true },
            { name: "Reliance Digital", price: 1099, originalPrice: 2499, discount: 56, stock: true }
        ]
    },
    {
        id: 38,
        name: "Realme Buds Air 5 Pro",
        brand: "Realme",
        category: "headphones",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        rating: 4.3,
        reviews: 5678,
        platforms: [
            { name: "Amazon", price: 4499, originalPrice: 5999, discount: 25, stock: true },
            { name: "Flipkart", price: 4299, originalPrice: 5999, discount: 28, stock: true },
            { name: "Realme Store", price: 4799, originalPrice: 5999, discount: 20, stock: true },
            { name: "Vijay Sales", price: 4199, originalPrice: 5999, discount: 30, stock: true }
        ]
    }
];

// Search quotes for different categories (like Myntra)
const searchQuotes = {
    laptops: [
        "Finding the perfect laptop for you...",
        "Comparing specs across all brands...",
        "Your productivity partner is just a click away!",
        "Power meets portability - discover your match!",
        "From coding to gaming, we've got you covered!"
    ],
    mobiles: [
        "Searching for your next smartphone...",
        "Your perfect device awaits!",
        "Stay connected in style!",
        "The future of mobile is here!",
        "Find the phone that fits your lifestyle!"
    ],
    tvs: [
        "Bringing cinema home...",
        "Your entertainment upgrade starts here!",
        "Picture perfect viewing awaits!",
        "Experience the difference in every pixel!",
        "Transform your living room!"
    ],
    headphones: [
        "Finding your sound companion...",
        "Music to your ears, literally!",
        "Tune in to perfection!",
        "Your audio experience, elevated!",
        "Hear the difference!"
    ],
    all: [
        "Searching across all categories...",
        "Finding the best deals for you...",
        "Smart shopping begins here!",
        "Your perfect product is loading...",
        "Comparing prices, saving money!"
    ]
};

function getRandomQuote(category) {
    const quotes = searchQuotes[category] || searchQuotes.all;
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Simple ML Algorithm for Product Ranking
// Easy to understand - uses basic scoring and sorting
class SimpleProductRanker {
    constructor() {
        // Simple scoring weights (how important each factor is)
        this.priceWeight = 40;      // Price is most important (40%)
        this.ratingWeight = 25;     // Customer rating (25%)
        this.discountWeight = 20;   // Discount offered (20%)
        this.reviewsWeight = 15;    // Number of reviews (15%)
    }

    // Find the best deal for a product
    findBestDeal(product) {
        let bestPlatform = product.platforms[0];
        let bestScore = 0;

        for (let platform of product.platforms) {
            // Calculate score for each platform
            let priceScore = 100 - ((platform.price / 200000) * 100); // Lower price = higher score
            let discountScore = platform.discount;
            
            // Total score
            let totalScore = (priceScore * this.priceWeight / 100) + 
                           (discountScore * this.discountWeight / 100);
            
            if (totalScore > bestScore) {
                bestScore = totalScore;
                bestPlatform = platform;
            }
        }

        return bestPlatform;
    }

    // Rank all products from best to worst
    rankProducts(products, sortBy = 'deals') {
        // Add best deal info to each product
        let rankedProducts = products.map(product => {
            let bestDeal = this.findBestDeal(product);
            
            // Calculate overall score
            let priceScore = 100 - ((bestDeal.price / 200000) * 100);
            let ratingScore = (product.rating / 5) * 100;
            let discountScore = bestDeal.discount;
            let reviewsScore = Math.min((product.reviews / 10000) * 100, 100);
            
            // Final score (0-100)
            let overallScore = 
                (priceScore * this.priceWeight / 100) +
                (ratingScore * this.ratingWeight / 100) +
                (discountScore * this.discountWeight / 100) +
                (reviewsScore * this.reviewsWeight / 100);

            return {
                ...product,
                bestDeal: bestDeal,
                overallScore: overallScore,
                savings: bestDeal.originalPrice - bestDeal.price
            };
        });

        // Sort products based on user choice
        if (sortBy === 'price-low') {
            return rankedProducts.sort((a, b) => a.bestDeal.price - b.bestDeal.price);
        } else if (sortBy === 'price-high') {
            return rankedProducts.sort((a, b) => b.bestDeal.price - a.bestDeal.price);
        } else if (sortBy === 'rating') {
            return rankedProducts.sort((a, b) => b.rating - a.rating);
        } else {
            // Default: sort by overall score (best deals first)
            return rankedProducts.sort((a, b) => b.overallScore - a.overallScore);
        }
    }
}

// App State
const appState = {
    currentPage: 'home',
    cart: [],
    wishlist: [],
    user: null,
    searchResults: [],
    rankingEngine: new SimpleProductRanker()
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
    setupEventListeners();
    loadUserData();

    // Modal buttons
    document.getElementById('modalClose')?.addEventListener('click', closeProductModal);
    document.getElementById('btnAddCartModal')?.addEventListener('click', () => { addToCartFromModal(); });
    document.getElementById('btnAddWishlistModal')?.addEventListener('click', toggleWishlistFromModal);

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('productModal').classList.contains('active')) {
            closeProductModal();
        }
    });

    // Load wishlist from storage
    const savedWishlist = localStorage.getItem('buynest_wishlist');
    if (savedWishlist) {
        appState.wishlist = JSON.parse(savedWishlist);
    }
});

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.page;
            navigateTo(page);
        });
    });

    // Search
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Categories
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            if (category === 'deals') {
                searchByCategory('all', 'deals');
            } else {
                searchByCategory(category);
            }
        });
    });

    // Account buttons
    document.getElementById('accountBtn').addEventListener('click', () => navigateTo('profile'));
    document.getElementById('cartBtn').addEventListener('click', () => navigateTo('cart'));

    // Auth forms
    document.getElementById('showSignupBtn').addEventListener('click', () => {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('signupContainer').style.display = 'block';
    });

    document.getElementById('showLoginBtn').addEventListener('click', () => {
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
    });

    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);

    // Sort
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        displaySearchResults(appState.searchResults, e.target.value);
    });

    // Logo click
    document.querySelector('.logo').addEventListener('click', () => navigateTo('home'));
}

// Navigation
function navigateTo(page) {
    // Update pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}Page`).classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    appState.currentPage = page;

    // Load page content
    if (page === 'cart') loadCart();
    if (page === 'wishlist') loadWishlist();
    if (page === 'profile') loadProfile();
}

// Home Page
function loadHomePage() {
    const topDeals = appState.rankingEngine.rankProducts(productsDatabase, 'deals').slice(0, 6);
    const laptops = appState.rankingEngine.rankProducts(
        productsDatabase.filter(p => p.category === 'laptops'), 'deals'
    ).slice(0, 6);
    const mobiles = appState.rankingEngine.rankProducts(
        productsDatabase.filter(p => p.category === 'mobiles'), 'deals'
    ).slice(0, 6);

    displayProducts('topDealsGrid', topDeals);
    displayProducts('laptopsGrid', laptops);
    displayProducts('mobilesGrid', mobiles);
}

// Display Products
function displayProducts(gridId, products) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = products.map((product, index) => createProductCard(product, index)).join('');
}

// Create Product Card
function createProductCard(product, index) {
    const bestDeal = product.bestDeal || appState.rankingEngine.findBestDeal(product);
    const savings = bestDeal.originalPrice - bestDeal.price;
    const mainImage = product.images ? product.images[0] : product.image;
    const isInWishlist = appState.wishlist.some(item => item.id === product.id);
    
    // Store product in a global array for easy access
    if (!window.productsList) window.productsList = [];
    window.productsList[product.id] = product;
    
    return `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            ${product.overallScore > 70 ? '<div class="best-deal-badge">🔥 Top Deal</div>' : ''}
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" 
                    onclick="event.stopPropagation(); toggleWishlist(${product.id})"
                    title="${isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${mainImage}" alt="${product.name}" class="product-image">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-rating">
                <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                <span class="rating-count">(${product.reviews.toLocaleString()})</span>
            </div>
            <div class="price-comparison">
                ${product.platforms.slice(0, 3).map(platform => `
                    <div class="price-item ${platform.name === bestDeal.name ? 'best-deal' : ''}">
                        <span class="platform-name">${platform.name}</span>
                        <div>
                            <span class="price">₹${platform.price.toLocaleString()}</span>
                            ${platform.discount > 0 ? `<span class="discount">-${platform.discount}%</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="product-prices">
                <span class="price">₹${bestDeal.price.toLocaleString()}</span>
                ${savings > 0 ? `
                    <span class="original-price">₹${bestDeal.originalPrice.toLocaleString()}</span>
                    <span class="discount">Save ₹${savings.toLocaleString()}</span>
                ` : ''}
            </div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

// Search with quotes
function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const category = document.getElementById('searchCategory').value;
    
    if (!query) return;

    // Show search quotes
    navigateTo('search');
    showSearchQuote(category);

    // Simulate search delay (like real websites)
    setTimeout(() => {
        let results = productsDatabase.filter(product => {
            const matchesQuery = product.name.toLowerCase().includes(query) ||
                               product.brand.toLowerCase().includes(query);
            const matchesCategory = category === 'all' || product.category === category;
            return matchesQuery && matchesCategory;
        });

        appState.searchResults = results;
        hideSearchQuote();
        displaySearchResults(results);
    }, 1500);
}

function showSearchQuote(category) {
    const quotesDiv = document.getElementById('searchQuotes');
    const quoteText = document.getElementById('quoteText');
    
    quoteText.textContent = getRandomQuote(category);
    quotesDiv.style.display = 'block';
    document.getElementById('searchResultsGrid').innerHTML = '';
    document.getElementById('searchTitle').textContent = 'Searching...';
}

function hideSearchQuote() {
    document.getElementById('searchQuotes').style.display = 'none';
}

function searchByCategory(category, sortBy = 'deals') {
    navigateTo('search');
    showSearchQuote(category);

    setTimeout(() => {
        let results = category === 'all' ? 
            [...productsDatabase] : 
            productsDatabase.filter(p => p.category === category);
        
        appState.searchResults = results;
        hideSearchQuote();
        displaySearchResults(results, sortBy);
    }, 1500);
}

function displaySearchResults(products, sortBy = 'relevance') {
    const ranked = appState.rankingEngine.rankProducts(products, sortBy);
    const title = products.length > 0 ? 
        `${products.length} results found` : 
        'No results found';
    
    document.getElementById('searchTitle').textContent = title;
    displayProducts('searchResultsGrid', ranked);
}

// Cart
function addToCart(product) {
    const bestDeal = product.bestDeal || appState.rankingEngine.findBestDeal(product);
    
    const cartItem = {
        ...product,
        selectedPlatform: bestDeal,
        quantity: 1
    };

    const existing = appState.cart.find(item => 
        item.id === product.id && item.selectedPlatform.name === bestDeal.name
    );

    if (existing) {
        existing.quantity++;
    } else {
        appState.cart.push(cartItem);
    }

    updateCartCount();
    saveCartData();
    
    // Visual feedback
    alert(`${product.name} added to cart from ${bestDeal.name}!`);
}

function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');

    if (appState.cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Start adding items to compare and buy!</p>';
        cartSummary.style.display = 'none';
        return;
    }

    cartItems.innerHTML = appState.cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-platform">From: ${item.selectedPlatform.name}</div>
                <div class="cart-item-price">₹${item.selectedPlatform.price.toLocaleString()}</div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = appState.cart.reduce((sum, item) => 
        sum + (item.selectedPlatform.price * item.quantity), 0
    );
    
    const totalSavings = appState.cart.reduce((sum, item) => 
        sum + ((item.selectedPlatform.originalPrice - item.selectedPlatform.price) * item.quantity), 0
    );

    document.getElementById('summaryItems').textContent = appState.cart.length;
    document.getElementById('summaryTotal').textContent = `₹${total.toLocaleString()}`;
    document.getElementById('summarySavings').textContent = `₹${totalSavings.toLocaleString()}`;
    cartSummary.style.display = 'block';
}

function removeFromCart(index) {
    appState.cart.splice(index, 1);
    updateCartCount();
    saveCartData();
    loadCart();
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = appState.cart.length;
}

// Auth
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple demo authentication
    const user = { email, name: email.split('@')[0] };
    appState.user = user;
    saveUserData();
    loadProfile();
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupPasswordConfirm').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const user = { email, name };
    appState.user = user;
    saveUserData();
    loadProfile();
}

function handleLogout() {
    appState.user = null;
    localStorage.removeItem('buynest_user');
    loadProfile();
}

function loadProfile() {
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');
    const profileContainer = document.getElementById('userProfileContainer');

    if (appState.user) {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'none';
        profileContainer.style.display = 'block';
        document.getElementById('userName').textContent = appState.user.name;
    } else {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
        profileContainer.style.display = 'none';
    }
}

// Local Storage
function saveCartData() {
    localStorage.setItem('buynest_cart', JSON.stringify(appState.cart));
}

function saveUserData() {
    localStorage.setItem('buynest_user', JSON.stringify(appState.user));
}

function loadUserData() {
    const savedCart = localStorage.getItem('buynest_cart');
    const savedUser = localStorage.getItem('buynest_user');

    if (savedCart) {
        appState.cart = JSON.parse(savedCart);
        updateCartCount();
    }

    if (savedUser) {
        appState.user = JSON.parse(savedUser);
    }
}
// Product Detail Modal Functions

let currentProduct = null;

// Show product detail modal
function showProductDetail(productId) {
    const product = window.productsList[productId] || productsDatabase.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    const modal = document.getElementById('productModal');
    
    // Set product information
    const mainImage = product.images ? product.images[0] : product.image;
    document.getElementById('modalProductImage').src = mainImage;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalBrand').textContent = product.brand.toUpperCase();
    document.getElementById('modalProductName').textContent = product.name;
    
    // Rating
    document.getElementById('modalStars').textContent = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    document.getElementById('modalRatingNumber').textContent = product.rating;
    document.getElementById('modalReviews').textContent = `${product.reviews.toLocaleString()} ratings`;
    
    // Best price
    const bestDeal = product.bestDeal || appState.rankingEngine.findBestDeal(product);
    document.getElementById('modalBestPrice').textContent = `₹${bestDeal.price.toLocaleString()}`;
    document.getElementById('modalBestPlatform').textContent = `Available at ${bestDeal.name}`;
    
    // Image gallery
    if (product.images && product.images.length > 1) {
        const gallery = document.getElementById('productGallery');
        gallery.innerHTML = product.images.map((img, index) => `
            <img src="${img}" class="gallery-thumb ${index === 0 ? 'active' : ''}" 
                 onclick="changeMainImage('${img}', event.target)" alt="Product view ${index + 1}">
        `).join('');
    }
    
    // Specifications
    if (product.specs) {
        const specsHtml = `
            <h3>Specifications</h3>
            <div class="specs-grid">
                ${Object.entries(product.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <div class="spec-label">${key.replace(/_/g, ' ')}</div>
                        <div class="spec-value">${value}</div>
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('modalSpecs').innerHTML = specsHtml;
    }
    
    // Price Comparison Table
    const priceTableBody = document.getElementById('priceTableBody');
    const sortedPlatforms = [...product.platforms].sort((a, b) => a.price - b.price);
    priceTableBody.innerHTML = sortedPlatforms.map(platform => `
        <tr class="${platform.name === bestDeal.name ? 'best-price-row' : ''}">
            <td class="platform-name-cell">
                ${platform.name}
                ${platform.name === bestDeal.name ? '<span class="best-badge">BEST PRICE</span>' : ''}
            </td>
            <td class="price-cell">₹${platform.price.toLocaleString()}</td>
            <td class="discount-cell">${platform.discount > 0 ? `${platform.discount}% OFF` : '-'}</td>
            <td class="offer-cell">${platform.offer || 'No special offer'}</td>
        </tr>
    `).join('');
    
    // Customer reviews
    if (product.customerReviews && product.customerReviews.length > 0) {
        const reviewsHtml = product.customerReviews.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <span class="review-author">${review.author}</span>
                    <span class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                </div>
                <div class="review-date">${review.date}</div>
                <div class="review-text">${review.text}</div>
                <div class="review-helpful">👍 ${review.helpful} people found this helpful</div>
            </div>
        `).join('');
        document.getElementById('modalCustomerReviews').innerHTML = reviewsHtml;
    } else {
        document.getElementById('modalCustomerReviews').innerHTML = '<p>No reviews yet. Be the first to review!</p>';
    }
    
    // Rating Breakdown
    const ratingBreakdown = calculateRatingBreakdown(product);
    const breakdownHtml = Object.entries(ratingBreakdown).reverse().map(([stars, data]) => `
        <div class="rating-row">
            <div class="rating-label">${stars} Stars</div>
            <div class="rating-bar-container">
                <div class="rating-bar" style="width: ${data.percentage}%"></div>
            </div>
            <div class="rating-count">${data.count} reviews (${data.percentage}%)</div>
        </div>
    `).join('');
    document.getElementById('ratingBreakdown').innerHTML = breakdownHtml;
    
    // Update wishlist button
    const isInWishlist = appState.wishlist.some(item => item.id === product.id);
    const wishlistBtn = document.getElementById('btnAddWishlistModal');
    if (isInWishlist) {
        wishlistBtn.classList.add('active');
        document.getElementById('wishlistBtnText').textContent = 'Remove from Wishlist';
    } else {
        wishlistBtn.classList.remove('active');
        document.getElementById('wishlistBtnText').textContent = 'Add to Wishlist';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Scroll to top of modal
    modal.scrollTop = 0;
}

// Calculate rating breakdown
function calculateRatingBreakdown(product) {
    const breakdown = { 5: {count: 0, percentage: 0}, 4: {count: 0, percentage: 0}, 3: {count: 0, percentage: 0}, 2: {count: 0, percentage: 0}, 1: {count: 0, percentage: 0} };
    
    if (product.customerReviews && product.customerReviews.length > 0) {
        product.customerReviews.forEach(review => {
            breakdown[review.rating].count++;
        });
        
        const total = product.customerReviews.length;
        Object.keys(breakdown).forEach(stars => {
            breakdown[stars].percentage = Math.round((breakdown[stars].count / total) * 100);
        });
    } else {
        // Generate realistic breakdown based on overall rating
        const rating = product.rating;
        const total = product.reviews;
        breakdown[5].count = Math.round(total * 0.6);
        breakdown[4].count = Math.round(total * 0.25);
        breakdown[3].count = Math.round(total * 0.1);
        breakdown[2].count = Math.round(total * 0.03);
        breakdown[1].count = Math.round(total * 0.02);
        
        Object.keys(breakdown).forEach(stars => {
            breakdown[stars].percentage = Math.round((breakdown[stars].count / total) * 100);
        });
    }
    
    return breakdown;
}

// Close modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProduct = null;
}

// Change main image when clicking gallery thumbnail
function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('modalProductImage').src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });
    if (thumbnail) thumbnail.classList.add('active');
}

// Add to cart from modal
function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.id);
    }
}

// Toggle wishlist from modal
function toggleWishlistFromModal() {
    if (currentProduct) {
        toggleWishlist(currentProduct.id);
        
        // Update button
        const isInWishlist = appState.wishlist.some(item => item.id === currentProduct.id);
        const wishlistBtn = document.getElementById('btnAddWishlistModal');
        if (isInWishlist) {
            wishlistBtn.classList.add('active');
            document.getElementById('wishlistBtnText').textContent = 'Remove from Wishlist';
        } else {
            wishlistBtn.classList.remove('active');
            document.getElementById('wishlistBtnText').textContent = 'Add to Wishlist';
        }
    }
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = window.productsList[productId] || productsDatabase.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = appState.wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex !== -1) {
        // Remove from wishlist
        appState.wishlist.splice(existingIndex, 1);
        alert(`${product.name} removed from wishlist!`);
    } else {
        // Add to wishlist
        appState.wishlist.push(product);
        alert(`${product.name} added to wishlist!`);
    }
    
    saveWishlistData();
    
    // Refresh displays if on wishlist page
    if (appState.currentPage === 'wishlist') {
        loadWishlist();
    }
}

function loadWishlist() {
    const wishlistItems = document.getElementById('wishlistItems');
    
    if (appState.wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty. Click the heart icon on products to save them!</p>';
        return;
    }
    
    // Rank wishlist items
    const rankedWishlist = appState.rankingEngine.rankProducts(appState.wishlist, 'deals');
    displayProducts('wishlistItems', rankedWishlist);
}

function saveWishlistData() {
    localStorage.setItem('buynest_wishlist', JSON.stringify(appState.wishlist));
}

// Update addToCart to use product ID
function addToCart(productId) {
    const product = window.productsList[productId] || productsDatabase.find(p => p.id === productId);
    if (!product) return;
    
    const bestDeal = product.bestDeal || appState.rankingEngine.findBestDeal(product);
    
    const cartItem = {
        ...product,
        selectedPlatform: bestDeal,
        quantity: 1
    };

    const existing = appState.cart.find(item => 
        item.id === product.id && item.selectedPlatform.name === bestDeal.name
    );

    if (existing) {
        existing.quantity++;
    } else {
        appState.cart.push(cartItem);
    }

    updateCartCount();
    saveCartData();
    
    // Visual feedback
    alert(`${product.name} added to cart from ${bestDeal.name}!`);
}


