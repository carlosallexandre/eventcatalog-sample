# Event Catalog Sample With Github Pages
Simple example to publish Event Catalog for Github Pages from a branch.

## Configuration
1. Set the `base` parameter to your repository's name at [`eventcatalog.config.js`](eventcatalog.config.js). [More details here!](https://docs.astro.build/en/guides/deploy/github/#base)
2. Add [Jekyll config](_config.yml) to include `_astro/*` when publishing from the branch. By default, Jekyll doesn't build files or folders that start with `_`. [Check here!](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#configuring-jekyll-in-your-github-pages-site).
3. Add the [workflow](.github/workflows/build-and-deploy.yml).
4. [Configure to publish from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
