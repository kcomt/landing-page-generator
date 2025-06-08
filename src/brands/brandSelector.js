const getBrand = (brand) => {
  if (!brand) {
    console.warn("No brand specified for getBrand");
    return;
  }

  let config;
  try {
    // Dynamically import the brand config
    config = require(`../brands/${brand}/${brand}.js`).default;
  } catch (err) {
    console.error(`Brand config not found for: ${brand}`, err);
    return {
      brand,
      logo: `/${brand}/logo.png`,
      components: [],
    };
  }

  // Load brand-specific CSS theme
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `/${brand}/theme.css`;
  document.head.appendChild(link);

  return {
    brand,
    ...config,
  };
};

export default getBrand;
