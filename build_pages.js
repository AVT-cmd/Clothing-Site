const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Update navbar in indexHtml first
let updatedIndex = indexHtml
    .replace('<a href="shop.html" class="hover:opacity-60 transition-opacity">Collections</a>', '<a href="categories.html" class="hover:opacity-60 transition-opacity">Collections</a>')
    .replace('<a href="#" class="hover:opacity-60 transition-opacity">Atelier</a>', '<a href="men.html" class="hover:opacity-60 transition-opacity">Men</a>')
    .replace('<a href="#" class="hover:opacity-60 transition-opacity">Maison</a>', '<a href="women.html" class="hover:opacity-60 transition-opacity">Women</a>')
    .replace('<a href="#" class="hidden md:block hover:opacity-60 transition-opacity">Account</a>', '<a href="profile.html" class="hidden md:block hover:opacity-60 transition-opacity">Account</a>')
    .replace('<button class="relative hover:opacity-60 transition-opacity">', '<a href="cart.html" class="relative hover:opacity-60 transition-opacity block">')
    .replace('</button>\n            <button class="md:hidden">', '</a>\n            <button class="md:hidden">'); // replace end of shopping bag

// Extract common head and footer
const headPart = updatedIndex.substring(0, updatedIndex.indexOf('<main'));
const footerPart = updatedIndex.substring(updatedIndex.indexOf('<footer'));

// Write updated index
fs.writeFileSync('index.html', updatedIndex);

// Generate Shop.html (update its nav/footer)
if (fs.existsSync('shop.html')) {
    let shopHtml = fs.readFileSync('shop.html', 'utf8');
    let shopMain = shopHtml.substring(shopHtml.indexOf('<main'), shopHtml.indexOf('<footer'));
    fs.writeFileSync('shop.html', headPart + shopMain + footerPart);
}

// Helper to create product card
const createCard = (title, price, img) => `
<div class="group cursor-pointer">
    <div class="aspect-[3/4] bg-luxury-grey/30 relative overflow-hidden mb-4">
        <img src="${img}" class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" alt="${title}">
        <div class="absolute bottom-4 right-4 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
        </div>
    </div>
    <div class="flex justify-between items-start">
        <h4 class="font-serif text-lg">${title}</h4>
        <span class="font-sans text-sm">${price}</span>
    </div>
</div>
`;

// 1. men.html
const menMain = `
<main class="max-w-[1920px] mx-auto pt-32 pb-24 min-h-screen">
    <div class="px-6 md:px-12 mb-12">
        <h1 class="font-serif text-5xl md:text-6xl mb-4">Men's Collection</h1>
        <p class="font-sans text-sm tracking-[0.2em] uppercase text-luxury-black/60">Discover our diverse ranges</p>
    </div>
    
    <!-- Daily Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Daily Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Casual Cotton T-Shirt", "$120", "/images/mens_daily_wear.png")}
        ${createCard("Relaxed Linen Trousers", "$180", "/images/mens_daily_wear.png")}
        ${createCard("Everyday Polo Shirt", "$140", "/images/mens_daily_wear.png")}
        ${createCard("Comfort Chinos", "$160", "/images/mens_daily_wear.png")}
    </div>

    <!-- Office Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Office Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Tailored Wool Suit", "$1,200", "/images/mens_office_wear.png")}
        ${createCard("Crisp White Shirt", "$250", "/images/mens_office_wear.png")}
        ${createCard("Silk Tie Collection", "$95", "/images/mens_office_wear.png")}
        ${createCard("Leather Oxford Shoes", "$450", "/images/mens_office_wear.png")}
    </div>

    <!-- Night Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Night Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Silk Pajama Set", "$350", "/images/mens_night_wear.png")}
        ${createCard("Cotton Sleep Shirt", "$120", "/images/mens_night_wear.png")}
        ${createCard("Cashmere Robe", "$850", "/images/mens_night_wear.png")}
        ${createCard("Lounge Trousers", "$180", "/images/mens_night_wear.png")}
    </div>

    <!-- Party Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Party Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Velvet Tuxedo Jacket", "$1,500", "/images/mens_party_wear.png")}
        ${createCard("Embroidered Sherwani", "$2,100", "/images/mens_party_wear.png")}
        ${createCard("Silk Dress Shirt", "$320", "/images/mens_party_wear.png")}
        ${createCard("Patterned Pocket Square", "$65", "/images/mens_party_wear.png")}
    </div>

    <!-- Holiday Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Holiday Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Resort Linen Shirt", "$190", "/images/mens_holiday_wear.png")}
        ${createCard("Tropical Print Trunks", "$140", "/images/mens_holiday_wear.png")}
        ${createCard("Canvas Espadrilles", "$220", "/images/mens_holiday_wear.png")}
        ${createCard("Straw Panama Hat", "$280", "/images/mens_holiday_wear.png")}
    </div>
</main>
`;
fs.writeFileSync('men.html', headPart + menMain + footerPart);

// 2. women.html
const womenMain = `
<main class="max-w-[1920px] mx-auto pt-32 pb-24 min-h-screen">
    <div class="px-6 md:px-12 mb-12">
        <h1 class="font-serif text-5xl md:text-6xl mb-4">Women's Collection</h1>
        <p class="font-sans text-sm tracking-[0.2em] uppercase text-luxury-black/60">Discover our diverse ranges</p>
    </div>
    
    <!-- Daily Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Daily Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Elegant Cotton Blouse", "$150", "/images/womens_daily_wear.png")}
        ${createCard("Flowing Midi Skirt", "$220", "/images/womens_daily_wear.png")}
        ${createCard("Casual Knit Sweater", "$280", "/images/womens_daily_wear.png")}
        ${createCard("Wide-Leg Trousers", "$240", "/images/womens_daily_wear.png")}
    </div>

    <!-- Office Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Office Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Tailored Silk Suit", "$1,400", "/images/womens_office_wear.png")}
        ${createCard("Classic White Button-Down", "$280", "/images/womens_office_wear.png")}
        ${createCard("Pencil Skirt", "$350", "/images/womens_office_wear.png")}
        ${createCard("Leather Pointed Heels", "$480", "/images/womens_office_wear.png")}
    </div>

    <!-- Night Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Night Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Silk Slip Dress", "$380", "/images/womens_night_wear.png")}
        ${createCard("Lace Trimmed Camisole", "$180", "/images/womens_night_wear.png")}
        ${createCard("Cashmere Bed Jacket", "$750", "/images/womens_night_wear.png")}
        ${createCard("Satin Sleep Mask", "$80", "/images/womens_night_wear.png")}
    </div>

    <!-- Party Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Party Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Shimmering Evening Gown", "$2,800", "/images/womens_party_wear.png")}
        ${createCard("Sequin Cocktail Dress", "$1,200", "/images/womens_party_wear.png")}
        ${createCard("Embellished Clutch", "$650", "/images/womens_party_wear.png")}
        ${createCard("Statement Crystal Earrings", "$420", "/images/womens_party_wear.png")}
    </div>

    <!-- Holiday Wear -->
    <div class="px-6 md:px-12 mb-8">
        <h2 class="font-serif text-3xl mb-4 border-b pb-2">Holiday Wear</h2>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
        ${createCard("Resort Maxi Dress", "$680", "/images/womens_holiday_wear.png")}
        ${createCard("Linen Kaftan", "$350", "/images/womens_holiday_wear.png")}
        ${createCard("Woven Sun Hat", "$240", "/images/womens_holiday_wear.png")}
        ${createCard("Leather Strappy Sandals", "$320", "/images/womens_holiday_wear.png")}
    </div>
</main>
`;
fs.writeFileSync('women.html', headPart + womenMain + footerPart);

// 3. categories.html
const catMain = `
<main class="max-w-[1920px] mx-auto pt-32 pb-24 min-h-screen">
    <div class="px-6 md:px-12 mb-12 text-center">
        <h1 class="font-serif text-5xl md:text-6xl mb-4">Categories</h1>
        <p class="font-sans text-sm tracking-[0.2em] uppercase text-luxury-black/60">Explore by attire</p>
    </div>
    <div class="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <a href="women.html" class="group relative aspect-video overflow-hidden">
            <img src="/images/lehenga.png" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <h2 class="absolute bottom-8 left-8 text-white font-serif text-4xl">Women</h2>
        </a>
        <a href="men.html" class="group relative aspect-video overflow-hidden">
            <img src="/images/sherwani.png" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <h2 class="absolute bottom-8 left-8 text-white font-serif text-4xl">Men</h2>
        </a>
        <a href="shop.html" class="group relative aspect-video overflow-hidden">
            <img src="/images/saree.png" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <h2 class="absolute bottom-8 left-8 text-white font-serif text-4xl">Sarees</h2>
        </a>
        <a href="shop.html" class="group relative aspect-video overflow-hidden">
            <img src="/images/jewelry.png" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <h2 class="absolute bottom-8 left-8 text-white font-serif text-4xl">Jewelry</h2>
        </a>
    </div>
</main>
`;
fs.writeFileSync('categories.html', headPart + catMain + footerPart);

// 4. profile.html
const profileMain = `
<main class="max-w-[1920px] mx-auto pt-32 pb-24 min-h-screen px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
        <h1 class="font-serif text-4xl mb-12 border-b border-luxury-grey pb-4">My Account</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div class="md:col-span-1 border-r border-luxury-grey">
                <ul class="space-y-6 font-sans text-sm tracking-[0.1em] uppercase">
                    <li><a href="#" class="font-medium">Dashboard</a></li>
                    <li><a href="#" class="text-luxury-black/50 hover:text-luxury-black">Orders</a></li>
                    <li><a href="#" class="text-luxury-black/50 hover:text-luxury-black">Addresses</a></li>
                    <li><a href="#" class="text-luxury-black/50 hover:text-luxury-black">Wishlist</a></li>
                    <li><a href="#" class="text-luxury-black/50 hover:text-luxury-black">Sign Out</a></li>
                </ul>
            </div>
            <div class="md:col-span-3">
                <h2 class="font-serif text-2xl mb-6">Welcome, Client</h2>
                <p class="font-sans text-sm text-luxury-black/60 mb-12">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                
                <div class="bg-luxury-grey/20 p-8">
                    <h3 class="font-serif text-xl mb-4">Recent Orders</h3>
                    <p class="font-sans text-sm text-luxury-black/60">No orders have been placed yet.</p>
                    <a href="shop.html" class="inline-block mt-6 border-b border-luxury-black font-sans text-sm tracking-[0.1em] uppercase pb-1">Continue Shopping</a>
                </div>
            </div>
        </div>
    </div>
</main>
`;
fs.writeFileSync('profile.html', headPart + profileMain + footerPart);

// 5. cart.html
const cartMain = `
<main class="max-w-[1920px] mx-auto pt-32 pb-24 min-h-screen px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
        <h1 class="font-serif text-4xl mb-12 border-b border-luxury-grey pb-4">Shopping Bag</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="md:col-span-2 space-y-8 border-b border-luxury-grey pb-8">
                <!-- Cart Item 1 -->
                <div class="flex gap-6">
                    <div class="w-32 aspect-[3/4] bg-luxury-grey">
                        <img src="/images/lehenga.png" class="w-full h-full object-cover" alt="Item">
                    </div>
                    <div class="flex-1 flex flex-col justify-between py-2">
                        <div>
                            <h3 class="font-serif text-xl">Zari Embroidered Lehenga</h3>
                            <p class="font-sans text-xs text-luxury-black/50 mt-1">Size: Custom | Color: Red</p>
                        </div>
                        <div class="flex justify-between items-center font-sans text-sm">
                            <span class="border border-luxury-grey px-4 py-1">1</span>
                            <span>$2,500</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="md:col-span-1">
                <div class="bg-luxury-grey/20 p-8">
                    <h3 class="font-serif text-xl mb-6">Order Summary</h3>
                    <div class="space-y-4 font-sans text-sm border-b border-luxury-grey pb-6 mb-6">
                        <div class="flex justify-between"><span>Subtotal</span><span>$2,500</span></div>
                        <div class="flex justify-between"><span>Shipping</span><span>Calculated at checkout</span></div>
                    </div>
                    <div class="flex justify-between font-medium font-sans text-base mb-8">
                        <span>Total</span><span>$2,500</span>
                    </div>
                    <a href="shipping.html" class="block w-full bg-luxury-black text-white text-center py-4 font-sans text-sm tracking-[0.2em] uppercase hover:bg-luxury-black/80 transition-colors">
                        Checkout
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>
`;
fs.writeFileSync('cart.html', headPart + cartMain + footerPart);

// 6. shipping.html
const shippingMain = `
<main class="max-w-[1920px] mx-auto pt-32 pb-24 min-h-screen px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
        <h1 class="font-serif text-4xl mb-4">Checkout</h1>
        <div class="font-sans text-xs tracking-[0.2em] uppercase text-luxury-black/50 mb-12 flex gap-2">
            <span>Information</span> > <span class="text-luxury-black font-medium">Shipping</span> > <span>Payment</span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h2 class="font-serif text-2xl mb-6">Shipping Address</h2>
                <form class="space-y-6 font-sans">
                    <div class="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" class="w-full border-b border-luxury-grey py-3 focus:outline-none focus:border-luxury-black bg-transparent">
                        <input type="text" placeholder="Last Name" class="w-full border-b border-luxury-grey py-3 focus:outline-none focus:border-luxury-black bg-transparent">
                    </div>
                    <input type="text" placeholder="Address" class="w-full border-b border-luxury-grey py-3 focus:outline-none focus:border-luxury-black bg-transparent">
                    <input type="text" placeholder="Apartment, suite, etc." class="w-full border-b border-luxury-grey py-3 focus:outline-none focus:border-luxury-black bg-transparent">
                    <div class="grid grid-cols-3 gap-4">
                        <input type="text" placeholder="City" class="col-span-1 border-b border-luxury-grey py-3 focus:outline-none focus:border-luxury-black bg-transparent">
                        <input type="text" placeholder="State" class="col-span-1 border-b border-luxury-grey py-3 focus:outline-none focus:border-luxury-black bg-transparent">
                        <input type="text" placeholder="ZIP" class="col-span-1 border-b border-luxury-grey py-3 focus:outline-none focus:border-luxury-black bg-transparent">
                    </div>
                    <button type="button" class="mt-8 bg-luxury-black text-white px-8 py-4 text-sm tracking-[0.2em] uppercase w-full hover:bg-luxury-black/80 transition-colors">Continue to Payment</button>
                </form>
            </div>
            
            <div class="bg-luxury-grey/10 p-8 h-fit">
                <div class="flex gap-4 mb-6 border-b border-luxury-grey pb-6">
                    <div class="w-16 h-20 bg-luxury-grey relative">
                        <img src="/images/lehenga.png" class="w-full h-full object-cover">
                        <span class="absolute -top-2 -right-2 w-5 h-5 bg-luxury-black text-white rounded-full flex items-center justify-center text-xs">1</span>
                    </div>
                    <div>
                        <h4 class="font-serif">Zari Embroidered Lehenga</h4>
                        <p class="font-sans text-xs text-luxury-black/50">$2,500</p>
                    </div>
                </div>
                <div class="flex justify-between font-medium font-sans border-t border-luxury-grey pt-6">
                    <span>Total</span>
                    <span>$2,500</span>
                </div>
            </div>
        </div>
    </div>
</main>
`;
fs.writeFileSync('shipping.html', headPart + shippingMain + footerPart);

console.log('All mockup pages generated successfully.');

// Vercel output fix: Copy everything to 'dist' so Vercel finds the output directory
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

const filesToCopy = ['index.html', 'men.html', 'women.html', 'categories.html', 'profile.html', 'cart.html', 'shipping.html', 'shop.html', 'success.html'];
for (const file of filesToCopy) {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, `dist/${file}`);
    }
}

if (!fs.existsSync('dist/images')) {
    fs.mkdirSync('dist/images', { recursive: true });
}
const images = fs.readdirSync('images');
for (const img of images) {
    fs.copyFileSync(`images/${img}`, `dist/images/${img}`);
}

console.log('Copied files to dist/ for Vercel deployment.');
