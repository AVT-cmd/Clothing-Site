const fs = require('fs');

const files = ['index.html', 'shop.html', 'men.html', 'women.html', 'categories.html', 'profile.html', 'cart.html', 'shipping.html', 'success.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        
        // Wrap logo in a link to index.html
        html = html.replace(
            '<div class="absolute left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-serif">\n            House of Tania\n        </div>',
            '<a href="index.html" class="absolute left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-serif hover:opacity-80 transition-opacity">\n            House of Tania\n        </a>'
        );
        
        fs.writeFileSync(file, html);
    }
});

console.log("Made logo a home link on all pages.");
