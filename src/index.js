const dotenv = require("dotenv");
const contentful = require("contentful");
const fs = require("fs");
const path = require("path");

dotenv.config();

const BASE_URL = "https://narative.co";

const root = path.dirname("./");
const redirectPath = path.join(root, "_redirects");

// Create a clinet to talk with Contentful
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_API_KEY,
  host: "preview.contentful.com",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
  dynamic_antries: "auto"
});

async function createRedirects(event, context) {
  const entries = await client.getEntries({
    include: 10,
    limit: 1000
  });

  const articles = entries.items.filter(
    entry => entry.sys.contentType.sys.id === "article"
  );

  const redirects = articles.reduce((curr, next) => {
    const { shortUrl, slug } = next.fields;
    const longUrl = `${BASE_URL}/articles/${slug}`;

    return `/${shortUrl} ${longUrl}\n` + curr;
  }, `/irap https://irap.narative.co\n /4141 https://remaxducartier.com/en/our-properties/montreal-le-plateau-mont-royal/4141-av-papineau/27490548\n /* ${BASE_URL}\n`);

  console.log(redirects);
  fs.writeFileSync(redirectPath, redirects);
}

createRedirects();
