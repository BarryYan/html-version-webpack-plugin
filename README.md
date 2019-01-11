# html-version-webpack-plugin
Add a timestamp random version for html. 

# Usage

You need add `{{HTML_VERSION}}` mark in your html.

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no">
    <title>Document</title>

    <script>
      window.__version = '{{HTML_VERSION}}'
    </script>

</html>


```
