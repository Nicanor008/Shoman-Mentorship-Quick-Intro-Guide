---
description: Right spacing for HTML elements
---

# Margin, Padding and Borders

### Margin

Creates an outside spacing on the element. Spacing can be specified in any direction like `left`, `right`, `top` or `bottom` .

### Padding

Almost similar with margin only that it, creates an inner border on the defined element. 

### Borders

Enclose content within some border line. Border style can be `solid, dotted,  dashed, double, ridge, none, hidden` . Also border-color and border-width can be changed. Example:

```text
p {
  border-style: solid;
  border-color: red;
}

<!-- in shorthand -->
p { border: solid red }
```



All three above in One file

```text
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>margin and padding</title>
    <style>
    .margin {
        margin: 30px;
        border: 1px solid red;
    }
    #padding {
        padding: 20px;
        border: 1px solid blue;
    }
    </style>
</head>
<body>
    <div style="width:200px;padding-left:2%; border-left: 1px dotted red">
        <div class="margin">This is a margin</div>
        <div id="padding">Am adding a padding here</div>
    </div>
</body>
</html>
```

**Overlook on this**

```text
.margin { margin : 30px;}

<!-- On breaking down this -->
.margn {
    margin-top: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
}

<!-- the above is similar to padding -->
```

**ToNote the difference**: Margin has the border close enough while padding leaves some space between element content and the border.

```text
sintiéndome(es) - Feeling Me(En)
```

