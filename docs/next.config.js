const path = require("path")

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js"
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true
}
if (process.env.NODE_ENV !== "production") {
  nextConfig["webpack"] = (config, options) => {
    if (process.env.NODE_ENV === "development") {
      config.resolve.alias["recompo"] = [path.join(__dirname, "../dist")]
      config.resolve.alias["react$"] = require.resolve("react")
    }

    return config
  }
}

module.exports = withNextra(nextConfig)
