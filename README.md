# phpDocumentor template for Wordpress themes

Generate `phpDocumentor` style documentation for Wordpress themes

## Idea

Current `phpDocumentor` templates spit documentation for APIs.
For Wordpress it would be nice to have a documentation following the [recommended file and folder structure](https://developer.wordpress.org/themes/basics/organizing-theme-files/).

A documentation organized in the same way as theme files in the editor would offer a better understanding and reading experience.

## How it works ?

All `PHP` files of the theme are collected into three sections: Templates, Template parts, and Template tags.
When clicking on a file the DocBlock associated to the file is displayed, and in plus all other DocBlocks for all Structural Elements inside of the file (Functions, Constants, Classes etc) 

## Running

If you add the `--title="Project Title"` param it will be used as the site title.
Otherwise the site title will be the default like 'API documentation'

## Compiling

### SCSS

```
gulp
```

Because `scss/template.scss` contains css globbing declarations like `@import 'framework/design/**/*.scss';` and cannot be compiled simply by the `scss` command.

### Twig

`phpDocumentor` uses the cache extensively when compiling documentation.
Due caching sometimes (when only minor changes are made to the template?) the compilation is unsuccessful in terms of nothing new is generated.
It's good to empty the cache before compiling the theme:

```
rm -Rf /tmp/phpdoc-twig-cache/
phpdoc -d . -t doc -i vendor/,wpcs/ --template=phpdocumentor-wordpress-theme
```


## Gotchas

### Markers and Deprecated elements

- Only the `Abstract (XSL)` template displays markers and deprecated elements correctly
- The `Clean (Twig)` doesn't display them all, the `Responsive (XSL)` displays only the deprecated elements, the `Responsive-Twig` display nothing
