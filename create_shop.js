const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract head (up to <nav>)
const headPart = indexHtml.substring(0, indexHtml.indexOf('<main'));

// Extract footer (from <footer>)
const footerPart = indexHtml.substring(indexHtml.indexOf('<footer'));

const products = [
    { title: "Zari Embroidered Lehenga", price: "$2,500", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" },
    { title: "Classic Banarasi Saree", price: "$1,200", img: "https://images.unsplash.com/photo-1610113174240-5bb9be1d9313?q=80&w=800&auto=format&fit=crop" },
    { title: "Silk Sherwani Set", price: "$1,850", img: "https://images.unsplash.com/photo-1599643478524-fb66f70d00de?q=80&w=800&auto=format&fit=crop" },
    { title: "Handloom Kurta", price: "$450", img: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=800&auto=format&fit=crop" },
    { title: "Bridal Red Lehenga", price: "$3,200", img: "https://images.unsplash.com/photo-1583391733975-654db90f5b40?q=80&w=800&auto=format&fit=crop" },
    { title: "Velvet Embroidered Sherwani", price: "$2,100", img: "https://images.unsplash.com/photo-1620825313936-e82de1953cb7?q=80&w=800&auto=format&fit=crop" },
    { title: "Chanderi Silk Saree", price: "$850", img: "https://images.unsplash.com/photo-1583391733958-d15a59c44643?q=80&w=800&auto=format&fit=crop" },
    { title: "Kundan Choker Set", price: "$1,500", img: "https://images.unsplash.com/photo-1599643478524-fb66f70d00de?q=80&w=800&auto=format&fit=crop" },
    { title: "Georgette Anarkali Suit", price: "$900", img: "https://images.unsplash.com/photo-1626578059039-49fa5fa1c741?q=80&w=800&auto=format&fit=crop" },
    { title: "Pastel Kurta Pajama", price: "$350", img: "https://images.unsplash.com/photo-1589304028045-8120d826a7cb?q=80&w=800&auto=format&fit=crop" },
    { title: "Kanjeevaram Saree", price: "$1,600", img: "https://images.unsplash.com/photo-1610113174240-5bb9be1d9313?q=80&w=800&auto=format&fit=crop" },
    { title: "Polki Earrings", price: "$800", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" }
];

let productGridHTML = '';
products.forEach(p => {
    productGridHTML += `
                <!-- Product Card -->
                <div class="group cursor-pointer">
                    <div class="aspect-[3/4] bg-luxury-grey/30 relative overflow-hidden mb-4">
                        <img src="${p.img}" 
                             class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" alt="${p.title}">
                        <div class="absolute bottom-4 right-4 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
                        </div>
                    </div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-serif text-lg">${p.title}</h4>
                        <span class="font-sans text-sm">${p.price}</span>
                    </div>
                </div>
    `;
});

const shopMain = `
    <main class="max-w-[1920px] mx-auto pt-32 pb-24">
        <div class="px-6 md:px-12 mb-12">
            <h1 class="font-serif text-5xl md:text-6xl mb-4">The Festive Collection</h1>
            <p class="font-sans text-sm tracking-[0.2em] uppercase text-luxury-black/60">Discover our curated heritage pieces</p>
        </div>
        
        <div class="px-6 md:px-12">
            <!-- Filter Bar Mock -->
            <div class="flex flex-wrap gap-6 mb-12 text-sm tracking-[0.1em] uppercase border-b border-luxury-grey/50 pb-4">
                <span class="cursor-pointer font-medium border-b border-luxury-black pb-1">All</span>
                <span class="cursor-pointer text-luxury-black/50 hover:text-luxury-black transition-colors">Lehengas</span>
                <span class="cursor-pointer text-luxury-black/50 hover:text-luxury-black transition-colors">Sarees</span>
                <span class="cursor-pointer text-luxury-black/50 hover:text-luxury-black transition-colors">Menswear</span>
                <span class="cursor-pointer text-luxury-black/50 hover:text-luxury-black transition-colors">Jewelry</span>
                
                <div class="flex-1 text-right text-luxury-black/50 hidden md:block">
                    12 Results
                </div>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                ${productGridHTML}
            </div>
        </div>
    </main>
`;

const newShopHtml = headPart + shopMain + footerPart;
fs.writeFileSync('shop.html', newShopHtml);
console.log('shop.html created successfully.');
