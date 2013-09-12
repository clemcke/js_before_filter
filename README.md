js_before_filter
================

Javascript Method Chaining

Usage:
```javascript
my_alert = function (word) {
    return console.log(word);
};

filter_foobar = function (text) {
    if (text == "foobar");
    return console.log("word is foobar!");
}

my_alert = before_filter(filter_foobar, my_alert);
```
