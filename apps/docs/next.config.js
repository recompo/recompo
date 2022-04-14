const path = require("path")

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js"
})

const withTM = require("next-transpile-modules")(["recompo"])

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true
}

if (process.env.NODE_ENV !== "production") {
  nextConfig["webpack"] = (config, options) => {
    config.resolve.alias["react$"] = require.resolve("react")

    return config
  }
}

module.exports = withNextra(nextConfig)
