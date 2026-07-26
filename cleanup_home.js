const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { recognizeSelfClosing: true });

// Remove the categories and edit sections
// They are section:nth-of-type(3) and (4) if hero is (1) and philosophy is (2)
$('section').each((i, el) => {
    const sectionHtml = $(el).html();
    if (sectionHtml.includes('Lehengas') && sectionHtml.includes('Sarees') && sectionHtml.includes('Jewelry')) {
        $(el).remove();
    }
    if (sectionHtml.includes('The Edit') && sectionHtml.includes('Curated essentials')) {
        $(el).remove();
    }
});

// Write the updated HTML
fs.writeFileSync('index.html', $.html());
console.log('Removed categories and edit sections from homepage.');
