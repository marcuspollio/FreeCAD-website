# FC Hugo theme

FC Hugo theme is a forked version of [PaperModX](https://github.com/reorx/hugo-PaperModX) based on [PaperMod](https://github.com/adityatelange/hugo-PaperMod) based on [Paper](https://github.com/nanxiaobei/hugo-paper/), it aims at adding new features, improving code quality and make it easier to read and modify by anyone with basic knowledge of Hugo and HTML.

Features and changes:
- InstantClick integration
- Social icons from [Simple Icons](https://simpleicons.org/)


## InstantClick integration

By adding config:

```yaml
params:
  EnableInstantClick: true
```

[InstantClick](http://instantclick.io/) will be enabled, making navigation behaves like Single Page Application.

Another thing to notice is smooth scrolling will be disabled if InstantClick is enabled, because they both listen click event on every `<a>` tags. IMO smooth scrolling is not very useful so it has to give way to InstantCllick.

This feature is enabled on this site.


## Give links an accent color.

You can customize every colors in the following css variables in `assets/css/theme_vars.css` of your site.


## Customize pagniator size

In section pages, if you want the paginator size be different from the [global config](https://gohugo.io/templates/pagination/#configure-pagination), you can add `paginate` in the frontmatter to customize.

```yaml
---
paginate: 6
---
```


## Menus external link

You can add `external: true` to a menu item's params to mark it as an external link, this will add a small icon to the end, and make the link open in new tab when clicked.

```yaml
menu:
  main:
    - name: "@Author"
      url: "https://reorx.com"
      params:
        external: true
```


## Highlight code with Chroma

FC Hugo THeme uses Chroma which is the recommended way in Hugo's [official docs](https://gohugo.io/content-management/syntax-highlighting/#:~:text=Hugo%20uses%20Chroma%20as%20its%20code%20highlighter%3B%20it%20is%20built%20in%20Go%20and%20is%20really%2C%20really%20fast), thus changing theme is easily supported.

By default the themes are `github` for light and `dracula` for dark, you can change it by adding `chroma-light.css` and `chroma-dark.css` in site's `assets/css/lib` directory.