const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf8');

// Fix MATCH_LEHENGA error from earlier
html = html.replace('MATCH_LEHENGA', '<h3 class="font-serif text-4xl mb-2">Lehengas</h3>');

const $ = cheerio.load(html, { recognizeSelfClosing: true });

// Add GSAP to head if not present
if (!html.includes('gsap.min.js')) {
    $('head').append('\n    <!-- GSAP for Motion Design -->\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>\n');
}

// Modify Hero Section to have GSAP hooks
const heroSection = $('section').eq(0);
heroSection.removeClass('animate-fade-in'); // remove tailwind animation
heroSection.addClass('overflow-hidden'); // ensure background scale doesn't break out

const heroBgImg = heroSection.find('img').eq(0);
heroBgImg.addClass('gsap-hero-bg transform scale-125'); // start zoomed in

const heroSubtitle = heroSection.find('p').eq(0);
heroSubtitle.removeClass('animate-fade-in delay-100').addClass('gsap-hero-text opacity-0 translate-y-8');

const heroTitle = heroSection.find('h1').eq(0);
// Wrap each word in a span for split text effect
const titleText = heroTitle.text();
heroTitle.empty();
titleText.split(' ').forEach((word, index) => {
    heroTitle.append(`<span class="inline-block overflow-hidden"><span class="inline-block gsap-hero-word translate-y-full opacity-0">${word}</span></span> `);
});
heroTitle.removeClass('animate-fade-in delay-300');

const heroBtn = heroSection.find('a').eq(0);
heroBtn.removeClass('animate-fade-in delay-500').addClass('gsap-hero-btn opacity-0 translate-y-8');

const heroLine = heroSection.find('.w-\\[1px\\]').parent();
heroLine.removeClass('animate-fade-in delay-500').addClass('gsap-hero-line opacity-0 scale-y-0 origin-bottom transition-none');


// Inject GSAP Script at the end of body
if (!html.includes('gsap.to(".gsap-hero-bg"')) {
    $('body').append(`
    <script>
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Create Master Timeline for Hero
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Ken Burns Effect (Slow continuous scale down over 10 seconds)
            gsap.to(".gsap-hero-bg", {
                scale: 1,
                duration: 10,
                ease: "power1.inOut"
            });

            // 2. Reveal Subtitle
            tl.to(".gsap-hero-text", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: 0.2
            })
            // 3. Stagger reveal title words (sliding up from mask)
            .to(".gsap-hero-word", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "expo.out"
            }, "-=0.8")
            // 4. Reveal Button
            .to(".gsap-hero-btn", {
                y: 0,
                opacity: 1,
                duration: 1
            }, "-=0.8")
            // 5. Reveal Scroll Line
            .to(".gsap-hero-line", {
                scaleY: 1,
                opacity: 1,
                duration: 1,
                transformOrigin: "bottom center"
            }, "-=0.6");

            // Parallax effect on scroll for Hero
            gsap.to(".gsap-hero-bg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: "section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
            
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
        });
    </script>
    `);
}

fs.writeFileSync('index.html', $.html());
console.log("Added GSAP motion design to index.html");
