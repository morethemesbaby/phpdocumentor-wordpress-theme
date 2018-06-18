# phpDocumentor template for Wordpress themes

Generate `phpDocumentor` style documentation for Wordpress themes

## Idea

Current `phpDocumentor` templates spit documentation for APIs.
For Wordpress it would be nice to have a documentation following the [recommended file and folder structure](https://developer.wordpress.org/themes/basics/organizing-theme-files/).

A documentation organized in the same way as theme files in the editor would offer a better understanding and reading experience.

## Running

If you add the `--title="Project Title"` param it will be used as the site title  

## Compiling

### SCSS



### Twig

`phpDocumentor` uses the cache extensively when compiling documentation.
Due caching sometimes (when only minor changes are made to the template?) the compilation is unsuccessful in terms of nothing new is generated.
It's good to empty the cache before compiling the theme:

```
rm -Rf /tmp/phpdoc-twig-cache/
phpdoc -d . -t doc -i vendor/,wpcs/ --template=phpdocumentor-wordpress-theme
```
