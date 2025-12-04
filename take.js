const puppeteer = require('puppeteer');

(async () => {
  // Launch browser
  const browser = await puppeteer.launch({ headless: true }); // headless: true = no GUI
  const page = await browser.newPage();

  // Define pages to capture
  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/about',
    'http://localhost:3000/contact',
    'http://localhost:3000/courses',
    'http://localhost:3000/course/1',
    'http://localhost:3000/dashboard',
    'http://localhost:3000/registration',

    // Add more routes here
  ];

  for (const url of urls) {
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Set viewport to full HD (or screen size you want)
    await page.setViewport({ width: 1024, height: 616 });

    // Capture screenshot
    const filename = url.replace(/http:\/\/localhost:3000\//, '').replace(/\//g, '_') || 'home';
    await page.screenshot({ path: `screenshots/${filename}.png`, fullPage: true });
    console.log(`Screenshot saved: ${filename}.png`);
  }

  await browser.close();
})();
