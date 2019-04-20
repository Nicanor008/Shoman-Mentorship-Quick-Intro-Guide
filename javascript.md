---
description: User Driven Events
---

# JavaScript

## What's JavaScript?

Also known as EcmaScript. It's major aim is to allow users interact with HTML elements. It majorly allows page interactivity.

**Example** If you click on button, you would require to view confirmation dialog and accept yes or no. Also for form inputs, you need to validate user inputs like strong passwords can be validated in JavaScript.

{% hint style="info" %}
&lt;script&gt; tags are used to enclose javascript codes
{% endhint %}

## JavaScript in HTML

Just like Css in HTML, there are three ways of adding javascript in HTML:

1. Embedded Scripts
2. External file scripts

{% code-tabs %}
{% code-tabs-item title="index.html" %}
```text
//Embedded Scripts
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Javscript</title>
    <script>
    function BtnClick() {
        alert('been clicked');
    }
    </script>
</head>
<body>
    <button onclick="BtnClick()">Javascript is cool</button>
</body>
</html>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="external.html" %}
```text
//External file scripts
// index.html file
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Javscript</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="ExternalClick()">External file</button>
</body>
</html>


// script.js file
function ExternalClick() {
    alert('am an external file clicked');
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

### Note

The button in both codes above has an event `onClick` that recognises the button has been clicked by a user and issues an alert dialog box.

