# phpDocumentor template for Wordpress themes

## Compiling

`phpDocumentor` uses the cache extensively when compiling documentation.
Due caching sometimes (when only minor changes are made to the template?) the compilation is unsuccessful.
It's good to empty the cache before compiling the theme:

```
rm -Rf /tmp/phpdoc-twig-cache/
phpdoc -d . -t doc -i vendor/,wpcs/ --template=phpdocumentor-wordpress-theme
```
