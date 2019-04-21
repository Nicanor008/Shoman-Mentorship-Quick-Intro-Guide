---
description: Basics of programming
---

# General Programming

This section will discuss about the general things that applies to all programming languages. This includes ✍ 

* [x] What is programming
* [x] Variables
* [x] Data types
* [x] Keywords
* [ ] Conditional Statements
* [ ] Functions
* [ ] OOP Concepts

We will discuss each and how it applies to programming.

### What is Programming

**Program -** Process of writing computer programs. **Programs -** written step by step instructions that guide users on how to do a specific task. You will be instructing the computer by giving specific instructions.

### Definition Of Terms

**Syntax** - Rules of a programming language. Every language has there own rules just like our natural languages

**Algorithms** - Set of rules/instructions in problem solving. Step by step instructions for solving a problem.

**Flowchart** - Diagramatic representation of an algorithm

### Variables

This is a computer storage location. Imagine asking a user for their names and store it in the computer's memory and you can call the **memory location**  anywhere in the program to use it.

**Variable Declaration** is just giving name to a variable while **Variable initialization** is giving value to a variable

{% code-tabs %}
{% code-tabs-item title="variables" %}
```text
// Variable Example
String Movie;  // variable declaration

Movie = "Avengers:End Game";   //variable initialisation

//variable declaration and initialisation
String MyPlatform = "Coding 101 Platform";
```
{% endcode-tabs-item %}
{% endcode-tabs %}

**Rules of writing variables**

Specific languages follow specific rules. This includes:

* A variable cannot start with a number
* A variable can start with a dollar sign \(`$`\), underscore\(`_`\) , capital or small letter.
* variables are case-sensitive
* Variables cannot have keywords

### Constants

These are same with variables only that they don't change once initialised.  Variables can be re-initialised but constants can't change.

```text
// constants syntax
const PIE = 3.142;

// using the above constant
int area = 0.5 * PIE * 7 * 7;
```

### Keywords

These are the reserved words used by a specific language to do something. Like above `const` is a reserved keyword for constants.

{% hint style="info" %}
 **Note** each language has specific keywords.
{% endhint %}

### Data Types

There are a lot of data that we use to come up with programs. The most common include:

* Integers - Include numbers e.g. `int num1 = 100` 
* Characters - \( `char` \) single lettered  `char 1st = 'r'`  
* Strings - \(`string` \) Combination of characters data types `string MyName = "Nicanor"` 
* Boolean - `bool` values required for true or false occasions.
* Float - used for numbers but with decimal values `float num2 = 5.434` 
* Double - used for numbers with large decimal values `double num = 5.4324343434343` 
* Array - Collection of the same data types `int numValues = [3, 2, 4, 5, 2, 43, 23]` 
* Object - Data type which stores data and information on how to process that data e.g. `const Names = { Name : "Nicanor" }`   

### TypeOf Operator

Returns the type of argument. If you want to check the type of data type you using 

```text
typeof "foo";
// result will be shown on the console after execution
```

### Operators

This includes combination of more than one data type, preferably integers, float and double. These include 

* **Arithmetic** Operators - `+, -, *, modulas(%), /` . 
* **Assignment** Operator - `=` 
* **Logical** Operators - `&&(AND) , OR(||), not(!)` 
* **Relational** Operators- Used when making comparisons `>, <, >=, <=, equal to(==), not equal to(!=)` 

More advanced operators include **conditional Operator** that uses **ternary operator \(?\)** e.g.

```text
expression1 ? expression2 : expression3 ;
```

