import { homepage } from "./package.json";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: "serverless",
  trailingSlash: true,
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? homepage : "",
};
