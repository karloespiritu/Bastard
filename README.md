Swaggy Bastard Theme for Ghost
==================

A free boilerplate responsive theme for [Ghost](https://ghost.org) blogging platform.

Swaggy Bastard is a fork of <a href="https://github.com/karloespiritu/Bastard">Bastard!</a>
It mostly contains UI changes to make the theme look a lighter.
## Demo

I'm using this theme for my personal site, [gferreira.me](http://gferreira.me)
![gferreira.me screenshot](http://res.cloudinary.com/gatec21/image/upload/v1416866665/gil_blog_lfkr9g.png)

## Download

You can download the theme by clicking **Download Zip**

## Using Bastard Theme

1. Copy the theme folder inside `/content/themes` of Ghost.
2. Restart Ghost and then go to Ghost's Settings (http://your.domain.com/ghost/settings/general/). Choose "Swaggy Bastard" from the theme dropdown menu and save your changes.
3. Optionally, you can update the background cover with your own image to replace the default cover image.
4. Have fun :)

## Customising Bastard Theme

Bastard theme uses Grunt to lint, compile, and concatenate the javascript and [SASS](http://sass-lang.com/) components. Customize the theme by editing the `assets/js/bastard.js` and `sass/*` files. Run `grunt` to compile your changes or use the `grunt watch` while you build your own theme.

1. Make sure you have [Node.js](http://nodejs.org), [Bower](http://bower.io) and [Grunt](gruntjs.com) installed on your system.
2. Copy theme folder to Ghost themes directory `/content/themes`. Open your terminal and make the theme's folder your current working directory.
3. Run `bower install` to install package dependencies.
4. Run `npm install` to install Grunt components.
5. Restart Ghost and switch the theme to use `Swaggy Bastard` in the Ghost's Settings.
7. Make your changes by updating `/sass/*`, `/assets/*`, and `*.hbs` files of the theme.
6. Run `grunt watch` to start watching for file changes or run `grunt` to build your latest changes.
7. If you have new images for the theme, just place them inside `image_sources` folder and Grunt will handle the optimisation automatically and store the optimized version inside `assets/images/`.
8. Update the social media icon links by updating `partials/social.hbs`.
9. Update gravatar by updating URL in `partials/gravatar.hbs`.

## Resources & Dependencies

- [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
- [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/icons/)
- [Grunt: The JavaScript Task Runner](http://gruntjs.com)
- [Bower: A package manager for the web](http://bower.io)
- [Sass - Syntactically Awesome Stylesheets](http://sass-lang.com/)
- [HighlightJs - Syntax highlighting for the Web](http://highlightjs.org)
- [FitVids.Js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds](http://fitvidsjs.com/)

## License

MIT License
