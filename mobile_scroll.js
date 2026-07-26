const fs = require('fs');

const processFile = (filename) => {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf8');
    
    // Add shrink-0 to prevent flex items from squishing on mobile
    html = html.replaceAll(
        '<a href="shop.html" class="min-w-[280px] md:min-w-[320px] lg:min-w-[400px] snap-center block group cursor-pointer gsap-featured-card opacity-0 translate-y-12">',
        '<a href="shop.html" class="min-w-[280px] md:min-w-[320px] lg:min-w-[400px] shrink-0 snap-center block group cursor-pointer gsap-featured-card opacity-0 translate-y-12">'
    );

    // Ensure the scroll container has w-full so it doesn't break layout
    html = html.replace(
        '<div class="flex overflow-x-auto no-scrollbar gap-6 px-6 md:px-12 pb-8 snap-x snap-mandatory">',
        '<div class="flex w-full overflow-x-auto no-scrollbar gap-6 px-6 md:px-12 pb-8 snap-x snap-mandatory">'
    );

    fs.writeFileSync(filename, html);
};

processFile('index.html');
processFile('home.html');

console.log("Fixed horizontal scroll for mobile.");
