// declaring variables of a book series that I'm currently reading through
var acotar = {
  title: "A Court of Thorns and Roses",
  author: "Sarah J. Maas",
  yearOfRelease: 2015,
  pages: 432,
  genre: ["romance", "fantasy"],
  extraInfo: {
    readingOrder: 1,
    bestSeller: true,
  },
  closed: true,
  currentlyReading: false,
  finishedReading: true,
  openTheBook: function () {
    this.closed = false;
    this.currentlyReading = true;
  },
  closeTheBook: function () {
    this.closed = true;
    this.currentlyReading = false;
  },
  finishReadingTheBook: function () {
    this.finishReadingTheBook = true;
  },
};

var acomaf = {
  title: "A Court of Mist and Fury",
  author: "Sarah J. Maas",
  yearOfRelease: 2016,
  pages: 640,
  genre: [],
  extraInfo: {
    readingOrder: 2,
    bestSeller: true,
  },
  closed: true,
  currentlyReading: false,
  finishedReading: true,
  openTheBook: function () {
    this.closed = false;
    this.currentlyReading = true;
  },
  closeTheBook: function () {
    this.closed = true;
    this.currentlyReading = false;
  },
  finishReadingTheBook: function () {
    this.finishReadingTheBook = true;
  },
};

var acowar = {
  title: "A Court of Wings and Ruin",
  author: "Sarah J. Maas",
  yearOfRelease: 2017,
  pages: 720,
  genre: [],
  extraInfo: {
    readingOrder: 3,
    bestSeller: true,
  },
  closed: false,
  currentlyReading: true,
  finishedReading: false,
  openTheBook: function () {
    this.closed = false;
    this.currentlyReading = true;
  },
  closeTheBook: function () {
    this.closed = true;
    this.currentlyReading = false;
  },
  finishReadingTheBook: function () {
    this.finishReadingTheBook = true;
  },
};

var acofas = {
  title: "A Court of Frost and Starlight",
  author: "Sarah J. Maas",
  yearOfRelease: 2018,
  pages: 240,
  genre: ["romance", "fantasy"],
  extraInfo: {
    readingOrder: 4,
    bestSeller: true,
  },
  closed: true,
  currentlyReading: false,
  finishedReading: false,
  openTheBook: function () {
    this.closed = false;
    this.currentlyReading = true;
  },
  closeTheBook: function () {
    this.closed = true;
    this.currentlyReading = false;
  },
  finishReadingTheBook: function () {
    this.finishReadingTheBook = true;
  },
};

var acosf = {
  title: "A Court of Silver Flames",
  author: "Sarah J. Maas",
  yearOfRelease: 2021,
  pages: 768,
  genre: [],
  extraInfo: {
    readingOrder: 5,
    bestSeller: true,
  },
  closed: true,
  currentlyReading: false,
  finishedReading: false,
  openTheBook: function () {
    this.closed = false;
    this.currentlyReading = true;
  },
  closeTheBook: function () {
    this.closed = true;
    this.currentlyReading = false;
  },
  finishReadingTheBook: function () {
    this.finishReadingTheBook = true;
  },
};

// declared a variable myBookShelf containing an array containing all 5 books
var myBookShelf = [acotar, acomaf, acowar, acofas, acosf];

// console log acowar before I have added the missing genre property and closed the book
console.log(acowar);

// using a for-loop, I looped through myBookShelf and added genre property for all the books that were missing it (acomaf, acowar, acosf)
for (var i = 0; i < myBookShelf.length; i++) {
  if (myBookShelf[i].genre.length === 0) {
    myBookShelf[i].genre += ["romance", "fantasy"];
  }
}

// called closeTheBook function on acowar book that I was currently reading - to close it and stop reading it
acowar.closeTheBook();

// log the updated acowar book variable
console.log(acowar);
