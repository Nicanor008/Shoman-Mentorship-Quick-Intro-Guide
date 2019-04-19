# HTML BASICS

## What You First Need

* An editor e.g. VSCode, sublime, atom, or any editor of your choice.
* Browser e.g. Chrome, mozilla firefox are best due to good interactivity in the developer tools

## How to start Up

* Create a folder for your projects, `Coding101`
* create a new file `first-file.html` 
* Learn below, you can copy and paste codes below to make work easier, but make you understand.
* To execute/view results, 
  * right click on your editor\(e.g. **VSCode**\), and copy path. Paste the url on the browser search bar
  * On **Sublime**, right click on the file and click open in browser
* Note, at the bottom, all this have been summarised in a single file `index.html` 

To understand more, always keep referring to [W3schools](https://www.w3schools.com/html/default.asp) or any other learning resource for in-depth explanation.

I like W3Schools because it explains the very basics in a simple language. A thumbs up, they have an online editor.

## What you must know at the end of this

* [ ] **HTML Elements**\( structure\)

{% code-tabs %}
{% code-tabs-item title="first-file.html" %}
```text
<html>
<head>
    <title>first app</title>
</head>
    <body>
        Hello World
    </body>
</html>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

* [ ] **HTML Headings** - This are like titles. There are of different sizes right from h1 to h6

```text
<h1>My First Heading</h1>
        <p>My first paragraph.</p>
```

* [ ] **HTML Paragraphs**

```text
<p>This is a paragraph on starting to code with hmtl5</p>
```

* [ ] **HTML Comments -** Used to explain what has been implemented

```text
<!-- Write your comments here -->
```

```text
<!-- Do not display this at the moment
This is multi line comments
-->
```

* [ ] **HTML Images**   

{% code-tabs %}
{% code-tabs-item title="image.html" %}
```text
<!-- how to upload an image 
<img src="image-path" alt="alternate text" height=""100" width="100">
-->
<img src="pic_trulli.jpg" alt="Italian Trulli">
```
{% endcode-tabs-item %}
{% endcode-tabs %}

* [ ] **HTML Lists** - Items can be numbered\(ordered list\) or be displayed in bullet form\(unordered list\)

{% code-tabs %}
{% code-tabs-item title="ul-list.html" %}
```text
<ul>
  <li>Spiderman Homecoming</li>
  <li>End game</li>
  <li>Game of Thrones</li>
</ul>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

* [ ] **HTML Tables**

{% code-tabs %}
{% code-tabs-item title="table.html" %}
```text
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

* [ ] **HTML Forms** - Input fields can be text, password, email, number, dates, etc. More [here](https://www.w3schools.com/html/html_form_input_types.asp). Forms are used to submit or get data. An example as below:

{% code-tabs %}
{% code-tabs-item title="form.html" %}
```text
<form>
  Username:<br>
  <input type="text" name="username"><br>
  password:<br>
  <input type="password" name="password">
</form>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

**&lt;br&gt;** - Break to the next line

## So How does this come up all together

First create a new file on your editor, `index.html`. Paste or combine the above codes in the **body** tags

{% code-tabs %}
{% code-tabs-item title="index.html" %}
```text
<html>
<head>
    <title>first app</title>
</head>
    <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        <!-- how to upload an image 
        <img src="image-path" alt="alternate text" height=""100" width="100">
        -->
        <img src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Italian Trulli"
         height=""100" 
         width="100"
         >
         <ul>
          <li>Spiderman Homecoming</li>
          <li>End game</li>
          <li>Game of Thrones</li>
        </ul>
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td> 
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td> 
            <td>94</td>
          </tr>
        </table>
        <form action="" method="POST>
          Username:<br>
          <input type="text" name="username"><br>
          password:<br>
          <input type="password" name="password">
        </form>
    </body>
</html>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

To execute this file, right click on your editor\(e.g. **VSCode**\), and copy path. Paste the url on the browser search bar

On **Sublime**, right click on the file and click open in browser.

## Note

The list above is a list of the very important things you must know before proceeding. They are the building blocks of the web document. There are a lot to this. Read more on [W3Schools](https://www.w3schools.com/html/html_elements.asp) to understand in-depth of all HTML contents

## So What Next?

If you have gone through the above basic HTML codes and comfortable, you can start up styling using CSS\(Cascading Style Sheets\). This what makes pages lively by adding some life and color to web content.

```text
hasta entonces(espanol) - See you Then
```

