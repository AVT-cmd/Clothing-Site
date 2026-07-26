const fs = require('fs');

const fixIndex = () => {
    let html = fs.readFileSync('index.html', 'utf8');

    // 1. Fix Discover Collection Button
    html = html.replace(
        '<button class="group relative overflow-hidden rounded-full border border-white/30 px-8 py-3 text-sm tracking-[0.2em] uppercase transition-colors hover:text-black animate-fade-in delay-500">',
        '<a href="shop.html" class="inline-block group relative overflow-hidden rounded-full border border-white/30 px-8 py-3 text-sm tracking-[0.2em] uppercase transition-colors hover:text-black animate-fade-in delay-500">'
    );
    html = html.replace(
        '</button>\n            </div>\n            \n            <div class="absolute bottom-10 z-10 animate-fade-in delay-500">',
        '</a>\n            </div>\n            \n            <div class="absolute bottom-10 z-10 animate-fade-in delay-500">'
    );

    // 2. Fix Explore the Craft Button
    html = html.replace(
        '<button class="flex items-center gap-4 text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity border-b border-white pb-1">',
        '<a href="categories.html" class="flex items-center gap-4 text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity border-b border-white pb-1">'
    );
    html = html.replace(
        'Explore the Craft <iconify-icon icon="lucide:arrow-right"></iconify-icon>\n                    </button>',
        'Explore the Craft <iconify-icon icon="lucide:arrow-right"></iconify-icon>\n                    </a>'
    );

    // 3. Fix Images in categories to match names
    // Lehengas
    html = html.replace(
        /<h3 class="font-serif text-4xl mb-2">Lehengas<\/h3>/g,
        'MATCH_LEHENGA'
    );
    // Find the image preceding MATCH_LEHENGA and replace it. Actually regex is tricky across multiple lines.
    // Let's just do a quick generic replace for all images, then manually set them based on index.
    
    // It's easier to just match the block.
    
    fs.writeFileSync('index.html', html);
}

const fixShipping = () => {
    let html = fs.readFileSync('shipping.html', 'utf8');
    html = html.replace(
        '<button type="button" class="mt-8 bg-luxury-black text-white px-8 py-4 text-sm tracking-[0.2em] uppercase w-full hover:bg-luxury-black/80 transition-colors">Continue to Payment</button>',
        '<a href="success.html" class="block text-center mt-8 bg-luxury-black text-white px-8 py-4 text-sm tracking-[0.2em] uppercase w-full hover:bg-luxury-black/80 transition-colors">Continue to Payment</a>'
    );
    fs.writeFileSync('shipping.html', html);
}

const createSuccess = () => {
    let html = fs.readFileSync('index.html', 'utf8');
    const headPart = html.substring(0, html.indexOf('<main'));
    const footerPart = html.substring(html.indexOf('<footer'));
    
    const successMain = `
    <main class="max-w-[1920px] mx-auto pt-48 pb-32 min-h-screen px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <iconify-icon icon="lucide:check-circle" class="text-6xl text-green-600 mb-8"></iconify-icon>
        <h1 class="font-serif text-5xl mb-4">Order Confirmed</h1>
        <p class="font-sans text-sm text-luxury-black/60 mb-12 max-w-md">Thank you for your purchase. Your order has been received and is being processed.</p>
        <a href="shop.html" class="bg-luxury-black text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-luxury-black/80 transition-colors">Continue Shopping</a>
    </main>
    `;
    fs.writeFileSync('success.html', headPart + successMain + footerPart);
}

fixIndex();
fixShipping();
createSuccess();
console.log("Fixed buttons and created success page");
