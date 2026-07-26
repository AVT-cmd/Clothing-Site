const fs = require('fs');

const path = './index.html';
let content = fs.readFileSync(path, 'utf8');

// Title and headers
content = content.replace('Fall Winter 2024', 'Festive Collection 2024');
content = content.replace('Fall Winter 2024', 'Festive Collection 2024');
content = content.replace('Silence & Form', 'Heritage & Grace');

// Hero Image
content = content.replace('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583391733958-d15a59c44643?q=80&w=2070&auto=format&fit=crop');

// Philosophy
content = content.replace('"We believe in the quiet authority of perfectly tailored garments—where absence of noise allows the form to speak."', '"We believe in the timeless elegance of Indian craftsmanship—where every thread tells a story of heritage and grace."');

// Categories
content = content.replace('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop');
content = content.replace('Outerwear', 'Lehengas');
content = content.replace('Outerwear', 'Lehengas');

content = content.replace('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg', 'https://images.unsplash.com/photo-1610113174240-5bb9be1d9313?q=80&w=1600&auto=format&fit=crop');
content = content.replace('Evening Wear', 'Sarees');
content = content.replace('Evening Wear', 'Sarees');

content = content.replace('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg', 'https://images.unsplash.com/photo-1599643478524-fb66f70d00de?q=80&w=1600&auto=format&fit=crop');
content = content.replace('Accessories', 'Jewelry');
content = content.replace('Accessories', 'Jewelry');

// The Edit
content = content.replace('https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1683&auto=format&fit=crop', 'https://images.unsplash.com/photo-1583391733975-654db90f5b40?q=80&w=1683&auto=format&fit=crop');
content = content.replace('Bias-Cut Silk Slip', 'Banarasi Silk Saree');
content = content.replace('$480', '$1,200');

content = content.replace('https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1664&auto=format&fit=crop', 'https://images.unsplash.com/photo-1620825313936-e82de1953cb7?q=80&w=1664&auto=format&fit=crop');
content = content.replace('Structured Wool Blazer', 'Embroidered Sherwani');
content = content.replace('$890', '$1,850');

content = content.replace('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp', 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1600&auto=format&fit=crop');
content = content.replace('Oversized Cashmere Knit', 'Handloom Kurta Set');
content = content.replace('$650', '$450');

content = content.replace('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1588&auto=format&fit=crop', 'https://images.unsplash.com/photo-1609174971844-013de8f090d8?q=80&w=1588&auto=format&fit=crop');
content = content.replace('Wide-Leg Silk Trousers', 'Zari Woven Dupatta');
content = content.replace('$520', '$320');

// Atelier
content = content.replace('https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1626244498305-b0b30cb64670?q=80&w=2070&auto=format&fit=crop');
content = content.replace('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp', 'https://images.unsplash.com/photo-1626578059039-49fa5fa1c741?q=80&w=1600&auto=format&fit=crop');
content = content.replace('https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1572&auto=format&fit=crop', 'https://images.unsplash.com/photo-1589304028045-8120d826a7cb?q=80&w=1572&auto=format&fit=crop');

content = content.replace('In our Paris atelier', 'In our artisanal workshops');

fs.writeFileSync(path, content);
console.log("Replaced all contents");
