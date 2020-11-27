---
title: "Do we need another Static Site Generator?"
subtitle: "In this post, I'm taking a look at Eleventy to see what it has to offer
that might make it better than other SSGs"
image: "eleventy.jpg"
---

# First Impressions of Eleventy

I've build static websites using various Static Site Generators and I've found a lot
to like with all of the ones I've used. But, there have been some things that haven't
totally satisfied me and so I decide to take a look at Eleventy. Also, I had been
thinking about creating a blog and there was a project requirement for me to get 
familiar with Azure. So, there seemed to be an alignment of several goals. And, what
better subject for the first blog post than the process of creating the blog itself.
I won't deal with my Azure experiences but there might be another post about that.

## Installation

Installation is a pretty straightforward process. I will assume that you have an up to
date version of Node.js installed. At time of writing, I'm using v14.15.0. To get 
started with Eleventy, create a new directory for the web site and install Eleventy 
as a dev dependency e.g.

```bash
mkdir 11tyblog
cd 11tyblog
npm i -D @11ty/eleventy
```

You can use npx to run Eleventy and verify the installation:

```bash
npx @11ty/eleventy
```

This will print a version number, which at time of writing is `0.11.1`.

## Simplest Site

Let's just try out a very simple site. Create `index.html` with the following content:

```html
<!doctype html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

and create `README.md` with the following content:

```md
# Page Header
```

and run eleventy. Eleventy will process the two files and generate out put in the
default output directory, which is `_site`. Have a look at the generated files to
get an idea of what is produced. Largely, the output just echoes the input.

## Changing Defaults

I prefer to have a different structure than the default and I want the convenience of
running scripts, using npm, so we'll start to make some simple configuration changes.
Eleventy config can be manage using cli parameters, environment variables and/or a 
configuration file. Details can be found on the [web site](https://www.11ty.dev/docs/config/).

I am going to put the source of the new blog web site in a `src` folder and the output
of the build process in a `build` folder. I am going to add scripts to `package.json`
to build the site for production and to star a dev server to run a local copy with
hot reloading. Add the following scripts to package.json:

```json
  "scripts": {
    "start": "eleventy --input ./src --serve",
    "build": "eleventy --input ./src --output ./build"
  }
```

## Templates

All files that are passed to eleventy for processing are treated as templates
and processed by a templating engine. Eleventy support several engines and they
can be intermixed. There are defaults associated with file extensions but these
can be overridden by configuration. In this implementation, I will be using nunjucks,
which uses the `njk` file extension. All templates support frontmatter, which you can read more about [here](https://www.11ty.dev/docs/data-frontmatter/). Frontmatter is written at the start of a template in a section enclosed by two lines containing '---'.
Different formats are supported but I will use yaml, which is the most common.





## Plugins

### Add Syntax Highlighting

As there are code snippets in some of my blog posts, including this one, I wanted
to be able to apply syntax highlighting. There is an eleventy plugin available for
that, which will now be installed and configured. To install:

``` bash
npm i -D @11ty/eleventy-plugin-syntaxhighlight
```

And to configure, edit the config file (.eleventy.js) as shown:

``` js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
};
```

We will also need to add some `css` to provide styling (colours etc.) for our
highlighted syntax. We will edit our base template to include one of the
[prism css themes](https://prismjs.com/).

``` html
<link href="https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css" rel="stylesheet">
```

