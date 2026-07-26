const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const shopHtml = fs.readFileSync('shop.html', 'utf8');

const replaceImages = (html) => {
    let result = html;
    // Replace all unsplash and supabase images with the local premium images
    result = result.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"'\s]*/g, (match) => {
        const rand = Math.random();
        if (rand < 0.25) return '/images/lehenga.png';
        if (rand < 0.5) return '/images/saree.png';
        if (rand < 0.75) return '/images/sherwani.png';
        return '/images/jewelry.png';
    });
    result = result.replace(/https:\/\/hoirqrkdgbmvpwutwuwj\.supabase\.co\/storage\/v1\/object\/public\/assets\/assets\/[^"'\s]*/g, (match) => {
        const rand = Math.random();
        if (rand < 0.25) return '/images/lehenga.png';
        if (rand < 0.5) return '/images/saree.png';
        if (rand < 0.75) return '/images/sherwani.png';
        return '/images/jewelry.png';
    });
    return result;
};

fs.writeFileSync('index.html', replaceImages(indexHtml));
fs.writeFileSync('shop.html', replaceImages(shopHtml));
console.log('Replaced images successfully.');
