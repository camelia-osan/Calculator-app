# Calculator
HTML, CSS and JS web project

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).


### Description
This is a simple calculator with memory functions similar to a small handheld calculator for math with addition, subtraction, division and multiplication. In order to use it, the user has to click on each number or operand button and can't type from keyboard. 

The calculator has three different color themes the user can pick from by simply clicking on each specific theme button.


### Tools
For this project, I wrote by hand both the structure and the functionality, using *HTML5* and *CSS3* to create the calculator’s body and style it and JavaScript to ensure dynamics.

-	HTML

The whole content is fitted in a big container that contains the calculator's body. The calculator's structure is divided into 3 parts: the header, the output area and the buttons area.

The header contains the themes buttons.

The output area is a readonly input type that displays the result.

The button area contains the buttons with numbers and operands.

- CSS

The main container and calculator contents were styled using *Flexbox*. The buttons were styled using *Grid*. 

I used relative measurement units for better screen compatibility and different designs and cursors for interaction effects.

The screen compatibility for phones, tablets and large screens, portrait and landscape is covered by the media queries.

- JS

I wrote functions that prevent the user from typing more than one "." operator, divide by $0$ or make calculations if an operand is followed by another (except for negative numbers, e.g.: $2 + -1$).

The actions were triggered by interacting with inputs due to *addEventListener*.

The classes that contain 'T2' and 'T3' are for changing the styling based on each theme. The first theme is the basic/standard style which gets overwritten on radio button click then removed when changing to another theme.
