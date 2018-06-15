# phpDocumentor template for Wordpress themes

Generate `phpDocumentor` style documentation for Wordpress themes

## Idea

Current `phpDocumentor` templates spit documentation for APIs.
For Wordpress it would be nice to have a documentation following the [recommended file and folder structure](https://developer.wordpress.org/themes/basics/organizing-theme-files/)

This way the documentation is organized in the same familiar way as theme files in the editor. 

## Compiling

`phpDocumentor` uses the cache extensively when compiling documentation.
Due caching sometimes (when only minor changes are made to the template?) the compilation is unsuccessful in terms of nothing new is generated.
It's good to empty the cache before compiling the theme:

```
rm -Rf /tmp/phpdoc-twig-cache/
phpdoc -d . -t doc -i vendor/,wpcs/ --template=phpdocumentor-wordpress-theme
```
