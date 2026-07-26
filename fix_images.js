const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { recognizeSelfClosing: true });

// 1. Hero Image -> Lehenga
$('section').eq(0).find('img').attr('src', '/images/lehenga.png');

// 2. Categories Section (Lehengas, Sarees, Jewelry)
// Iterate over all img-zoom-container
$('.img-zoom-container').each((i, el) => {
    const title = $(el).find('h3').text().trim().toLowerCase();
    const img = $(el).find('img');
    
    if (title.includes('lehenga')) {
        img.attr('src', '/images/lehenga.png');
    } else if (title.includes('saree')) {
        img.attr('src', '/images/saree.png');
    } else if (title.includes('jewelry')) {
        img.attr('src', '/images/jewelry.png');
    }
});

// 3. The Edit Section (Banarasi Saree, Sherwani, Kurta, Dupatta)
// Let's find h4 tags
$('h4.font-serif.text-lg').each((i, el) => {
    const title = $(el).text().trim().toLowerCase();
    const img = $(el).closest('.snap-start').find('img');
    
    if (title.includes('saree')) {
        img.attr('src', '/images/saree.png');
    } else if (title.includes('sherwani') || title.includes('kurta')) {
        img.attr('src', '/images/sherwani.png');
    } else if (title.includes('dupatta') || title.includes('lehenga')) {
        img.attr('src', '/images/lehenga.png');
    } else {
        img.attr('src', '/images/jewelry.png'); // fallback
    }
});

fs.writeFileSync('index.html', $.html());
console.log("Fixed images with Cheerio");
