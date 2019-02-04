# Giphy-Giferator
Pull and display gifs based on topic selection

- - -

## Instructions

* When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

* When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

* Under every gif, display its rating (PG, G, so on).

* A form takes the value from a user input box and adds it into the buttons on the page.

- - -

## Pseudo

### html

Row 1 - 1 column

* buttons with topic as label
  * generates gifs when clicked
  * starts with 4 buttons
  * new buttons generated with form

Row 2 - 2 columns

* column a (8)
  * gif x10
    * still until clicked
    * Metadata
      * Rating
      * Title
      * Tags
    * favorite button
    * download button
  * favorites
    * same format as others but favorites list
* column b (4)
  * add item form
  * show favorites button

### js

