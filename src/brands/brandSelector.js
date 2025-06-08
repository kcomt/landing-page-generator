const getBrand = (brand) => {
  if (!brand) {
    console.warn("No brand specified for getBrand");
    return;
  }

  let config;
  let text;
  try {
    // Dynamically import the brand config
    config = require(`../brands/${brand}/${brand}.js`).default;
    text = require(`../brands/${brand}/text.json`);
    console.log("text", text);
  } catch (err) {
    console.error(`Brand config not found for: ${brand}`, err);
    return {
      brand,
      logo: `/${brand}/logo.png`,
      components: [],
    };
  }

  // Load brand-specific CSS theme
  const linkTheme = document.createElement("link");
  linkTheme.rel = "stylesheet";
  linkTheme.href = `/${brand}/theme.css`;
  document.head.appendChild(linkTheme);

  // Load brand-specific custom overrides
  const linkCustom = document.createElement("link");
  linkCustom.rel = "stylesheet";
  linkCustom.href = `/${brand}/custom.css`;
  document.head.appendChild(linkCustom);

  return {
    brand,
    text,
    ...config,
  };
};

export default getBrand;
