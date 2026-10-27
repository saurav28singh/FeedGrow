import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, '../public/images/revamp_img');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const faviconDir = path.resolve(__dirname, '../public/images');
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

const assets = [
  'logo.svg',
  'logo-white.svg',
  'banner-linkedin-underline.png',
  'banner-img-landing-1.png',
  'left-star.png',
  'Lalit.jpeg',
  'JanaTameem.jpeg',
  'BiswanathMukherjee.jpeg',
  'BhuvaneshwaranSubramanian.jpeg',
  'PreetiBhagat.jpeg',
  'PraveenS.jpeg',
  'SachinSeth.jpeg',
  'MandarShrotri.jpeg',
  'Thammanna.jpeg',
  'growth-profile.png',
  'linkedin-makeover1.webp',
  'expert-resume-makeover.webp',
  'ai-resume-enhancer.webp',
  'post-buddy-for-linkedin.webp',
  'followers_img1.png',
  'followers_img2.png',
  'why-outspark-career-suite.webp',
  'times-internet-logo.png',
  'hcl-logo.png',
  'adobe-logo.png',
  'naukri-logo.png',
  'tcs-logo.png',
  'microsoft-logo.png',
  'flipkart-logo.png',
  'genpact-logo.png',
  'isro-logo.png',
  'dabur-logo.png',
  'adani-logo.png',
  'paytm-logo.png',
  'airtel-logo.png',
  'wallmart-logo.png',
  'amazon-logo.png',
  'ibm-logo.png',
  'google-logo.png',
  'sony-logo.png',
  'bosch-logo.png',
  'columbia-logo.png',
  'facebook-logo.png',
  'philiphs-logo.png',
  'nestle-logo.png',
  'siemens-logo.png',
  'american-express-logo.png',
  'uber-logo.png',
  'fedex-logo.png',
  'abbott-logo.png',
  'linkedin-4763813_1280-1.webp',
  'resume-2296951_1280-1.webp',
  'firmbee-com-gcsNOsPEXfs-unsplash.webp',
  'joao-ferrao-4YzrcDNcRVg-unsplash.webp',
  'arrow-right.svg',
  'arrow-down.png',
  'arrow-down.svg',
  'nav-arrow-right.svg',
  'instagram_logo_2022.png',
  'profile-pic-circle.svg',
  'next-icon.png',
  'next-icon-disabled.png'
];

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Failed ${url}: ${res.status}`);
      return false;
    }
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(dest, buffer);
    console.log(`Saved: ${dest}`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('Downloading assets...');
  for (const asset of assets) {
    const url = `https://myoutspark.com/images/revamp_img/${asset}`;
    const dest = path.join(baseDir, asset);
    await downloadFile(url, dest);
  }
  // favicon
  await downloadFile('https://myoutspark.com/images/favicon.png', path.join(faviconDir, 'favicon.png'));
  console.log('All assets processed!');
}

main();
