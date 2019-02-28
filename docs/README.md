## Objective
A design system to fit current workflow and easy to integrate with exist Pattern Library. Simple to use, non-opinionated and doesn't expect you to write your markup or code in any particular way.

### Demo
[https://crukorg.github.io/cruk-pattern-library-api/](https://crukorg.github.io/cruk-pattern-library-api/)

### Astrum
Currently this design system is powered up by [Astrum](http://astrum.nodividestudio.com/).
It’s small one page application which simply loop the files (by giving path) and output to the page. A config file data.json to store the path, group, title ..etc.

### New file structure

With new structure and custom code, Astrum will loop through patterns folder and output html markup and description file.  I also modify the layout, separate pages into top navigation.

```
./src
--./pages
--./components
----./designElements
----./uiComponents
./data.json
```

#### designElements
Such as colour, typography, grid layout, body text, base theme

#### uiComponents
Any components submitted through pattern builder.

Currently it points to `./patterns`

Ideally, under each component file structure:

```
./breadcrumb
 --./breadcrumb.jsx
 --./breadcrumb.twig
 --./breadcrumb.tpl
 --./breadcrumb.scss
 --./breadcrumb.html
 --./breadcrumb.md
```

#### TODO
* Make data.json auto-generated to reduce manual process even more.
* Make pages nested so they can have sub-pages
* Read data from data store and fetch from API ?
