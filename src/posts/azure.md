---
title: "Static Site Hosting on Azure"
subtitle: "In this post, I'm going to wask through deploying a static site to
the Azure Cloud."
image: "azure-logo.png"
draft: true
date: 2020-12-23
---

# Azure Static Site

Since Microsoft moved to become much more open to non Microsoft technology stacks,
adoption of Azure has been growing in the Linux and open source world. Azure has
now clearly established itself as the most credible alternative to Amazon's AWS.
According to Canalys estimates of Global market share for Q3 2020, AWS market share
stands at 32% vs 19% for Azure with Google at 7% and Alibaba at 6%.

While I've used AWS and Google Cloud extensively, I have little experience
with Azure and I thought it was time to correct that. Static site deployment is a
relatively simple introduction that allows you to get familiar with much of the
tooling (e.g. the web console, the CLI, desktop tools, etc) and to use a number of
services (e.g. storage, CDN, SSL, DNS, Certificate Management, etc.). So, that is
what I have chosen as my gentle introduction. Even though, it seems like a simple
use case, I've found that it can be quite revealing in terms of ease of use of a
platform.

## Getting Started


