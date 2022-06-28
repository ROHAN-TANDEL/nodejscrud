var Defination =
```
lightweight - it has low CPU usage (You can not justify that If your program uses heavy CPU), designed to have small memory footprint, are easy to implement (important when porting a language to different systems), and/or have minimalist syntax and features
Example c++ and Java have rich build in function that are when implimented uses more resources where as such functionaliries are missing in Javasript example memory managment

interpreted - a language in which the implementations execute instructions directly without earlier compiling a program into machine language
that gives still Javascript feels fast - then 
    your program using less memory that is not effecting the speed which javascript can provide
    why is interpreter 
    Great when user is entering instructions interactively and would like to get the output before putting in the next instruction. Also useful when the program is to be executed only once or requires to be portable
    (source sof)

Interpreting a program is much slower than executing native machine code
Interpreting a high-level language is ~100 times slower
Interpreting an intermediate-level (such as JVM bytecode) language is ~10 slower
If an instruction is called repeatedly, it will be analysed repeatedly - time-consuming!
Generally interpreter is performance costly.
No need to compile code

thus you see one error at a time - needs more time to clear your syntacx and also you have to assure memory and performance in Javasript
 on a deeper aspect - here is the following

A lexer is the part of an interpreter that turns a sequence of characters (plain text) into a sequence of tokens.
A parser, in turn, takes a sequence of tokens and produces an abstract syntax tree (AST) of a language. The rules by which a parser operates are usually specified by a formal grammar.
An interpreter is a program that interprets the AST of the source of a program on the fly

how you do that you need a language to do that
thus Javacript engine - 
what is it
what to do
https://www.geeksforgeeks.org/what-happens-inside-javascript-engine/

JIT-compiled programming language
and thus It's slow make is faster how  - use JIT - 
First interpreter and now compiler why
so what's the diff betwen usual compiler and this JIT compiler why and what is JIT
https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/
https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/


first-class functions.
when functions in that language are treated like any other variable

Node.js
V8 is Google's open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node. js, among others. It implements ECMAScript and WebAssembly,
The answer kind of lies in the name. It alludes to V8 car engines, which are normally very fast. The name Chrome itself was also chosen because of the associations with engines and speed.
When it comes to raw performance, no realistic alternative beats C++. When Chrome was released in 2008, it immediately became the fastest browser in the market. Its V8 engine compiles JavaScript directly to machine code. Chrome could run JavaScript 5–10 times faster than its main competitors, Firefox and IE.
I’m sure there are memory leaks in Chrome. The code base is over five million lines of code. There are bound to be some undetected bugs here and there. C++ requires manual memory management, as opposed to Java which has automatic garbage collection. But if Chrome was written in Java it wouldn’t have been nearly as fast

benchmarks
https://storage.googleapis.com/pub-tools-public-publication-data/pdf/37122.pdf


Apache CouchDB -  JavaScript as its query language
Adobe Acrobat -  JavaScript as its query language
prototype-based - A prototype-based language, does not make the distinction of classes vs objects: it simply has objects. A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object. Any object can specify its own properties, either when you create it or at run time. In addition, any object can be associated as the prototype for another object, allowing the second object to share the first object's properties
thus an object is both instance and type
template for initial properties". If you change the prototype AFTER instantiating an object, that object still receives those functions

we can create new kinds ofobjects at run time without need for defining classes 
Above is possible because objects are essentially functions in java script (closures too)

Classes are not necessarily a static code - take a look at Python, in which classes are objects themselves, and are constructed out of metaclasses which also are objects

1) Inheritance in which objects are inherited directly from other objects

2) That does not use classes

3) Also called instance based programming or classless prototype oriented programming

4) Behaviour reuse is performed by cloning existing objects that serve as prototypes

5) Object used as template from the new object get initial properties

Memory conservation is one of the benefits of prototypal inheritance in JS. In a language like Java, objects generate their own copies of the superclass' instance variables and methods, while in JS, the "super"-object offers get-access to its variables and methods to each "sub"-object that inherits from it without the need to recreate them.

When you put the method in the constructor and create an object out of that constructor, each object carries it's own getName function. For 10 Person instances, each carries it's own getName, therefore 10 separate getName functions.

Finally:
If you place getName in the prototype of the constructor, that same getName function is shared/inherited across all instances. so for 10 instances of Person, each has getName but refer only to 1 getName function.

Using prototypes saves memory since the method is shared across instances so only one is used.

multi-paradigm
The most common and practical paradigms in javascript are Functional Programming and Object Oriented Programming
The main advantage of using this type of approach is because it eliminates redundancy in code that's why developers use helper functions for code abstraction.

dynamic language:
language can set type ocnvert them,
use memeroy as required plays and executes anything needned
where are in static program u need to define memory size, object    runtime alteration,  variable type coz omplier needs to compliter all at once on other hand interpreter does help in dynmaic programming execution

supporting object-oriented:

https://course.ccs.neu.edu/cs4410sp19/lec_objects_notes.html

imperative
With an imperative approach, a developer writes code that specifies the steps that the computer must take to accomplish the goal. This is sometimes referred to as algorithmic programming. In contrast, a functional approach involves composing the problem as a set of functions to be executed. You define carefully the input to each function, and what each function returns. The following table describes some of the general differences between these two approaches.


https://www.geeksforgeeks.org/introduction-of-programming-paradigms/

declarative (e.g. functional programming)
declarative programming. In contrast, most mainstream languages, including object-oriented programming (OOP) languages such as C#, Visual Basic, C++, and Java, were designed to primarily support imperative (procedural) programming.
```;