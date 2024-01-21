[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13477854&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA (by Laura Slivka, FED_Jan23_PT)

## In total there are 5 objects containg book information, each in their own variable - "acotar", "acomaf", "acowar", "acofas", "acosf".

### The variable names are abbreviations derived from each book title:

- "A Court of Thorns and Roses" (acotar)
- "A Court of Mist and Fury" (acomaf)
- "A Court of Wings and Ruin" (acowar)
- "A Court of Frost and Starlight" (acofas)
- "A Court of Silver Flames" (acosf)

![picture of the entire acotar book series](https://i.ibb.co/GTb0pRK/ezgif-5-3a8e49ec3c-2-1.jpgs)

### Each book object has the following properties:

- title (String), title of the book
- author (String), author who wrote the book
- yearOfRelease (Number), year the book was released
- pages (Number), how many pages it has
- genre (Array), what is the genre
- extraInfo (Object), inside the object there are 2 more properties (readingOrder (Number), in which order to read the book), (bestSeller (Boolean), is the book a best seller)
- closed (Boolean), is the book currently open or closed
- currentlyReading (Boolean), is the book cuurently being read
- finishedReading (Boolean), is the book fully read
- openTheBook (Function), function to open the book by changing "closed" property to "false" and "currentlyReading" property to "true"
- closeTheBook (Function) - function to close the book by changing "closed" property to "true" and "currentlyReading" property to "false"
- finishReadingTheBook (Function), when book has been fully finished reading this function changes the "finishReadingTheBook" property to "true"

### To play around a bit, I intentionally omitted adding 'genre' property values for variables 'acomaf,' 'acowar,' and 'acosf'

- to add the missing "genre" property values, I created an array called 'myBookShelf', which contains all five book variables. Then I used a for-loop to iterate through "myBookShelf" and, for each variable with an empty 'genre' property, added the missing values using an 'if statement'
