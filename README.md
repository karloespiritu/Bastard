Bastard Theme for Ghost
==================

![Ghost version](https://img.shields.io/badge/Ghost-1.20.x-brightgreen.svg?style=flat-square)
![Node version](https://img.shields.io/badge/Node-%5Ev6.9-brightgreen.svg)

A free boilerplate responsive theme for [Ghost](https://ghost.org) blogging platform.

Bastard theme was built using [Bootstrap 3](http://getbootstrap.com/), [SASS](http://sass-lang.com), [Font Awesome](http://fortawesome.github.io/Font-Awesome/), and [Gulp](http://gulpjs.com/). Gulp is used to automate tasks for compiling and minifying the theme components. You can use the theme as is, or customize it by editing the `bastard.js` and `/assets/sass/*.scss` files.

![Bastard](http://f.cl.ly/items/3f2X3p2K2A1E1z263k2K/bastard-sample2.png)

## Demo

I'm using this theme for my personal site, [karloespiritu.com](http://karloespiritu.com)

## Download

You can download the theme here: [http://karloespiritu.github.io/Bastard](http://karloespiritu.github.io/Bastard)

## Theme Features

* Clean and well-documented code
* Developed using Bootstrap 3.3, SASS, Font Awesome, and Gulp
* Organized CSS3 stylesheets using [SASS](http://sass-lang.com)
* Fully responsive layout
* Full bleed cover images for posts
* Retina display ready, looks great on any device or resolution
* Full screen cover page with parallax effect
* Syntax highlighting using [HighlightJs](http://highlightjs.org)
* One file css/js for performance optimization
* Automatic linting, compiling, and minification of SCSS and JS files using Gulp
* Automatic image file size optimization using IMGMin and SVGMin
* Google Analytics integrated
* Includes FitVids.Js for fluid video embeds
* It's free:)

## Using Bastard Theme

1. Copy the theme folder inside `/content/themes` of Ghost.
2. Restart Ghost and then go to Ghost's Settings (http://your.domain.com/ghost/settings/general/). Choose "bastard" from the theme dropdown menu and save your changes.
3. Optionally, you can update the background cover with your own image to replace the default cover image.
4. Have fun :)

## Customizing Bastard Theme

Bastard theme uses Gulp to lint, compile, and concatenate the javascript and [SASS](http://sass-lang.com/) components. Customize the theme by editing the `assets/js/bastard.js` and `sass/*` files. Run `gulp` to compile your changes or use the `gulp watch` while you build your own theme.

1. Make sure you have [Node.js v6.9](http://nodejs.org) and [Gulp v3.9](gulpjs.com) installed on your system.
2. Copy theme folder to Ghost themes directory `/content/themes`. Open your terminal and make the theme's folder your current working directory.
3. Run `npm install` to install theme dependencies.
4. Restart Ghost and switch the theme to use `bastard` in the Ghost's Settings.
5. Make your changes by updating `/sass/*`, `/assets/*`, and `*.hbs` files of the theme.
6. Run `gulp watch` to start watching for file changes or run `gulp` to build your latest changes.
7. If you have new images for the theme, just place them inside `image_sources` folder and Gulp will handle the optimisation automatically and store the optimised version inside `assets/images/`.
8. Update the social media icon links by updating `partials/social.hbs`.
9. Update gravatar by updating URL in `partials/gravatar.hbs`.

## Resources & Dependencies

- [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
- [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/icons/)
- [Gulp: The Streaming Build System](http://gulpjs.com)
- [Sass - Syntactically Awesome Stylesheets](http://sass-lang.com/)
- [HighlightJs - Syntax highlighting for the Web](http://highlightjs.org)
- [FitVids.Js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds](http://fitvidsjs.com/)

## Get in Touch

To get in touch, you can drop me an [email](mailto:karloespiritu.com) or find me on [Twitter](http://twitter.com/karloespiritu).

## License

MIT License

## Author

**Karlo Espiritu**
- [karloespiritu@gmail.com](mailto:karloespiritu@gmail.com)
- [http://twitter.com/karloespiritu](https://twitter.com/karloespiritu)
- [http://github.com/karloespiritu](https://github.com/karloespiritu)
- [http://karloespiritu.com](http://karloespiritu.com)
