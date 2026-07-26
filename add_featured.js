const fs = require('fs');

const createFeaturedSection = () => `
        <!-- SECTION 4 - FEATURED PRODUCTS -->
        <section class="py-24" id="featured-products">
            <div class="px-6 md:px-12 mb-12 flex justify-between items-end gsap-featured-header opacity-0 translate-y-8">
                <div>
                    <h2 class="font-serif text-4xl md:text-5xl mb-3">Featured Collection</h2>
                    <p class="font-sans text-sm tracking-[0.2em] uppercase text-luxury-black/60">Curated festive essentials</p>
                </div>
                <div class="hidden md:flex gap-4">
                    <a href="shop.html" class="text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity border-b border-luxury-black pb-1">View All</a>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 pb-8">
                <!-- Card 1 -->
                <a href="shop.html" class="block group cursor-pointer gsap-featured-card opacity-0 translate-y-12">
                    <div class="aspect-[3/4] bg-luxury-grey/30 relative overflow-hidden mb-4">
                        <img src="/images/saree.png" class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" alt="Banarasi Silk Saree">
                        <div class="absolute bottom-4 right-4 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
                        </div>
                    </div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-serif text-lg">Banarasi Silk Saree</h4>
                        <span class="font-sans text-sm">$1,200</span>
                    </div>
                </a>
                
                <!-- Card 2 -->
                <a href="shop.html" class="block group cursor-pointer gsap-featured-card opacity-0 translate-y-12">
                    <div class="aspect-[3/4] bg-luxury-grey/30 relative overflow-hidden mb-4">
                        <img src="/images/sherwani.png" class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" alt="Embroidered Sherwani">
                        <div class="absolute bottom-4 right-4 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
                        </div>
                    </div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-serif text-lg">Embroidered Sherwani</h4>
                        <span class="font-sans text-sm">$1,850</span>
                    </div>
                </a>

                <!-- Card 3 -->
                <a href="shop.html" class="block group cursor-pointer gsap-featured-card opacity-0 translate-y-12">
                    <div class="aspect-[3/4] bg-luxury-grey/30 relative overflow-hidden mb-4">
                        <img src="/images/jewelry.png" class="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105" alt="Kundan Set">
                        <div class="absolute bottom-4 right-4 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
                        </div>
                    </div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-serif text-lg">Kundan Bridal Set</h4>
                        <span class="font-sans text-sm">$1,500</span>
                    </div>
                </a>

                <!-- Card 4 -->
                <a href="shop.html" class="block group cursor-pointer gsap-featured-card opacity-0 translate-y-12">
                    <div class="aspect-[3/4] bg-luxury-grey/30 relative overflow-hidden mb-4">
                        <img src="/images/lehenga.png" class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" alt="Bridal Lehenga">
                        <div class="absolute bottom-4 right-4 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <iconify-icon icon="lucide:shopping-bag"></iconify-icon>
                        </div>
                    </div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-serif text-lg">Red Bridal Lehenga</h4>
                        <span class="font-sans text-sm">$3,200</span>
                    </div>
                </a>
            </div>
        </section>
`;

const gsapAnimations = `
            // Fade up effect for philosophy section
            gsap.from("section:nth-of-type(2) h2", {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "section:nth-of-type(2)",
                    start: "top 80%"
                }
            });

            // Featured Products Header Animation
            gsap.to(".gsap-featured-header", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#featured-products",
                    start: "top 80%"
                }
            });

            // Staggered reveal for featured product cards
            gsap.to(".gsap-featured-card", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#featured-products",
                    start: "top 70%"
                }
            });
`;

const processFile = (filename) => {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf8');
    
    // Inject Section
    if (!html.includes('id="featured-products"')) {
        html = html.replace('<!-- SECTION 4 - CATEGORIES -->', createFeaturedSection());
    }

    // Inject GSAP Animation
    if (!html.includes('.gsap-featured-card')) {
        // Find the philosophy animation and replace it with philosophy + featured products animations
        html = html.replace(/\/\/ Fade up effect for philosophy section[\s\S]*?start: "top 80%"\s*\}\s*\}\);/, gsapAnimations);
    }

    fs.writeFileSync(filename, html);
};

processFile('index.html');
processFile('home.html');

console.log("Added featured products with motion design to home pages.");
