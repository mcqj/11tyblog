const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const draftMode = process.env.DRAFT_MODE &&
  process.env.DRAFT_MODE.toUpperCase() === 'TRUE';

function isLive(post) {
  const now = new Date();
  return post.data.date <= now && (draftMode || !post.data.draft);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./src/posts/*.md')
    .filter(isLive).reverse();
  })
}