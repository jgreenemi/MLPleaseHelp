# README #

[MLPleaseHelp](https://jgreenemi.github.io/MLPleaseHelp/) is a simple ML resource search engine.

## How To Use ##

You can use this search engine [right now at https://jgreenemi.github.io/MLPleaseHelp/](https://jgreenemi.github.io/MLPleaseHelp/), provided via Github Pages. 

## Building Locally ##

In the same directory as the `index.html` page, open a terminal and start an HTTP server:

```bash
$ python -m http.server
```

Now open your web browser to the page [http://localhost:8000](http://localhost:8000) and off you go!

## Contributing ##

You can contribute resources to this repo! All the entries are a static list in `js/ml-assets.js`, so making new entries is as easy as adding a name, description, link and some keywords, then opening a Pull Request.

### What should a new resource entry look like? ###

All entries should look similar to the following:

```javascript
{
    "Name": "Parris",
    "Description": "Parris, the automated infrastructure setup tool for machine learning algorithms.",
    "Link": "https://github.com/jgreenemi/Parris",
    "Keywords": "Python, AWS",
    "LastUpdatedDate": "2018/01/28",
},
```

## Contact ##

* Joseph Greene, [jgreenemi@gmail.com](mailto:jgreenemi@gmail.com)
