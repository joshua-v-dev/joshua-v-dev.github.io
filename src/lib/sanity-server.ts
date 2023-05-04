export const previewClient = require("@sanity/client").default({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// exports.previewClient = previewClient;
