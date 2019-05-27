var movies = [
  {
    id: 1,
    title: "Aguirre",
    year: 1972,
    directors: ["Werner Herzog"],
    bio: "Aguirre, the Wrath of God (German: Aguirre, der Zorn Gottes), known in the UK as Aguirre, Wrath of God, is a 1972 West German epic historical drama film written and directed by Werner Herzog. Klaus Kinski stars in the title role. The soundtrack was composed and performed by West German progressive/Krautrock band Popol Vuh. The story follows the travels of Spanish soldier Lope de Aguirre, who leads a group of conquistadores down the Amazon River in South America in search of the legendary city of gold, El Dorado.",
    movieLength: 95,
    poster: "aguirre.jpg",
    genre: ["Historical" , "Psychological" , "True Story"]
  },
  {
    id: 2,
    title: "The Great Ecstacy of Woodcarver Steiner",
    year: 1974,
    directors: ["Werner Herzog"],
    bio: "The Great Ecstasy of Woodcarver Steiner (German: Die große Ekstase des Bildschnitzers Steiner) is a 1974 documentary film by German filmmaker Werner Herzog. It is about Walter Steiner, a celebrated ski jumper of his era who worked as a carpenter for his full-time occupation. Showcased is Steiner's quest for a world record in ski flying, as well as the dangers involved in the sport. Herzog has called it 'one of my most important films'.",
    movieLength: 45,
    poster: "theGreatEcstasy.jpg",
    genre: ["Documentary" , "Sports" , "Woodwork"]
  },
  {
    id: 3,
    title: "The Enigma of Kaspar Hauser",
    year: 1974,
    directors: ["Werner Herzog" , "Werner 2" , "Werner 3"],
    bio: "The Enigma of Kaspar Hauser (German: Jeder für sich und Gott gegen alle; lit. Every Man for Himself and God Against All) is a 1974 West German drama film written and directed by Werner Herzog and starring Bruno Schleinstein (credited as Bruno S.) and Walter Ladengast. The film closely follows the real story of foundling Kaspar Hauser, using the text of actual letters found with Hauser.",
    movieLength: 105,
    poster: "kasparHauser.jpg",
    genre: ["Documentary" , "Historical"]
  },
  {
    id: 4,
    title: "How Much Wood Would a Woodchuck Chuck...",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "How Much Wood Would a Woodchuck Chuck (German: Beobachtungen zu einer neuen Sprache, literally 'Observations of a New Language') is a 1976 documentary film by German director Werner Herzog, produced by Werner Herzog Filmproduktion. It is a 44-minute film documenting the World Livestock Auctioneer Championship held in New Holland, Pennsylvania. The film also contains a section about the Amish and shows Amish speaking Pennsylvania German.",
    movieLength: 44,
    poster: "4Shorts.jpg",
    genre: ["Documentary" , "Language" , "Cattle"]
  },
  {
    id: 5,
    title: "Heart of Glass",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "Heart of Glass (German: Herz aus Glas) is a 1976 German film directed and produced by Werner Herzog, set in 18th century Bavaria. The film was written by Herzog, based partly on a story by Herbert Achternbusch. The main character is Hias, based on the legendary Bavarian prophet Mühlhiasl.",
    movieLength: 94,
    poster: "heartOfGlass.jpg",
    genre: ["Documentary" , "German Idealism" , "Aching Nostalgia"]
  },
  {
    id: 6,
    title: "Meeting Gorbachev",
    year: 2018,
    directors: ["Werner Herzog" , "André Singer"],
    bio: "Meeting Gorbachev is a 2018 biographical documentary film directed by Werner Herzog and André Singer about the life of Mikhail Gorbachev, the eighth and last leader of the Soviet Union. The film features three interviews between Herzog and Gorbachev, conducted over the span of six months, and had its world premiere at the Telluride Film Festival on September 1, 2018.",
    movieLength: 90,
    poster: "meetingGorbachev.jpg",
    genre: ["Documentary" , "Psychological" , "Aching Nostalgia"]
  },
  {
    id: 7,
    title: "My Son, My Son, What Have Ye Done",
    year: 2009,
    directors: ["Werner Herzog"],
    bio: "My Son, My Son, What Have Ye Done? is a 2009 American-German film directed by Werner Herzog and produced by David Lynch, inspired by the story of murderer Mark Yavorsky.[2][5] Herzog describes the film as 'a horror film without the blood, chainsaws and gore, but with a strange, anonymous fear creeping up in you.' The film is an international co-production between the United States and Germany.",
    movieLength: 91,
    poster: "mySonMySon.jpg",
    genre: ["True Story" , "Psychological" , "Tragedy"]
  },
  {
    id: 8,
    title: "Woyzeck",
    year: 1979,
    directors: ["Werner Herzog"],
    bio: "Woyzeck is a 1979 German drama film written, produced and directed by Werner Herzog and starring Klaus Kinski and Eva Mattes. It is an adaptation of the unfinished play Woyzeck by German dramatist Georg Büchner.",
    movieLength: 82,
    poster: "woyzeck.jpeg",
    genre: ["Historical" , "Tragedy" , "Adaptation"]
  },
  {
    id: 9,
    title: "Invincible",
    year: 1979,
    directors: ["Werner Herzog"],
    bio: "2001 drama film written and directed by Werner Herzog. The film stars Tim Roth, Jouko Ahola, Anna Gourari, and Max Raabe. The film tells the story of a Jewish strongman in Germany. While basing his story on the real-life figure Zishe Breitbart (a.k.a. Siegmund Breitbart), Herzog uses the bare facts of Breitbart's life to weave fact and fiction (e.g., the story is set in 1932 Berlin, a full seven years after Breitbart's death in 1925) to create an allegory of human strength, knowing oneself with honesty and pride in one's heritage.",
    movieLength: 134,
    poster: "invincible.jpg",
    genre: ["True Story" , "Historical"]
  },
  {
    id: 10,
    title: "Grizzly Man",
    year: 2005,
    directors: ["Werner Herzog"],
    bio: "A devastating and heart-rending take on grizzly bear activists Timothy Treadwell and Amie Huguenard, who were killed in October of 2003 while living among grizzly bears in Alaska.",
    movieLength: 104,
    poster: "grizzlyMan.jpg",
    genre: ["Documentary" , "Bears"]
  },
  {
    id: 11,
    title: "Cave of Forgotten Dreams",
    year: 2005,
    directors: ["Werner Herzog"],
    bio: "In 1994, a group of scientists discovered a cave in Southern France perfectly preserved for over 20,000 years and containing the earliest known human paintings. Knowing the cultural significance that the Chauvet Cave holds, the French government immediately cut-off all access to it, save a few archaeologists and paleontologists. But documentary filmmaker, Werner Herzog, has been given limited access, and now we get to go inside examining beautiful artwork created by our ancient ancestors around 32,000 years ago.",
    movieLength: 95,
    poster: "caveOfForgottenDreams.jpg",
    genre: ["Documentary" , "Bears"]
  },
  {
    id: 12,
    title: "Fitzcarraldo",
    year: 1982,
    directors: ["Werner Herzog"],
    bio: "Fitzcarraldo is a 1982 West German adventure-drama film written and directed by Werner Herzog and starring Klaus Kinski as the title character. It portrays would-be rubber baron Brian Sweeney Fitzgerald, an Irishman known in Peru as Fitzcarraldo, who is determined to transport a steamship over a steep hill in order to access a rich rubber territory in the Amazon Basin. The film is derived from the historic events of Peruvian rubber baron Carlos Fitzcarrald.",
    movieLength: 104,
    poster: "fitzcarraldo.jpg",
    genre: ["Historical" , "True Story" , "Laissez-Faire Capitalism"]
  },
  {
    id: 13,
    title: "Beyond the Thunderdome",
    year: 1985,
    directors: ["George Miller" , "George Ogilvie"],
    bio: "Epoch-marking, genre-defining, this is definitely the best thing that has ever come out of that Godforsaken land down Under. Mel Gibson rolls around the desert in a cool car; Tina Turner attempts to gladiator-kill him with a chainsaw, which is awesome, and then there's a weird ending where he adopts a bunch of feral kids? CW: maybe a little bit racist.",
    movieLength: 104,
    poster: "beyondThunderdome.jpg",
    genre: ["Guzzoline" , "Heavy Metal" , "Tina Turner" , "Ford XB GT Coupé 'V8 Interceptor'"]
  }
];

// -----------------------------------------------------------------------------------------------------------------------------------
// global variables
// -----------------------------------------------------------------------------------------------------------------------------------

var maxNumberOnScreen = 4;
var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);
var pageContainer = $('#pageContainer');

var pageTabs = $('.page-tab');
var currentTab = "Movies";

function changeTab(tabName){
  if (tabName.text() === currentTab){
    console.log('you are still on the same page');
  } else {
    console.log('Change to the directors page');
  }
}

function showMovies(){
  if(maxNumberOnScreen > movies.length){
    showMovieThumbnails(0, movies.length);
  } else {
    showMovieThumbnails(0, maxNumberOnScreen);
  }

  if(numberOfPages > 1){
    var pagination = $('#paginationMovies');
    for (var i = 0; i < numberOfPages; i++) {
      var pageNumber = i + 1;
      pagination += ('<li class="page-item" onclick="paginationClick(' + pageNumber + ');"><a class="page-link" href="#">'+ pageNumber +'</a></li>');
    }
  }
}

pageTabs.click(function(){
  pageTabs.removeClass('active');
  $(this).addClass('active');
  changeTab($(this));
})

function getGenreColor(genre){
  if (genre == "Historical") {
      return "primary";
    } else if (genre == "Documentary"){
      return "secondary";
    } else if (genre == "Psychological"){
      return "success";
    } else if (genre == "Sports"){
      return "warning";
    } else if (genre == "Language"){
      return "danger";
    } else if (genre == "Cattle"){
      return "info";
    } else if (genre == "German Idealism"){
      return "light";
    } else {
      return "dark";
    }
  }

showMovies();

function showMovieThumbnails(start, end){
  for (var i = start; i < end; i++) {
    var movie = movies[i];

    var genreClass = "";

    if(movie.genre[0] === "Historical"){
    genreClass = "border-primary";
    } else if (movie.genre[0] === "Documentary") {
      genreClass = "border-success";
    }

    var genreColor = getGenreColor(movie.genre[0]); // [0] because we want the 'primary' genre

    var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
        movieCard += ('<div class="movieThumb movieThumb2 card h-100 ' + genreClass + '" data-id="' + movie.id + '">');
            movieCard += '<img src="posters/' + movie.poster + '" class="card-img-top" alt="">';
            movieCard += '<div class="card-body">';
                movieCard += '<h5 class="card-title">' + movie.title + '</h5>';
            movieCard += '</div>';
        movieCard += '</div>';
    movieCard += '</div>';

    document.getElementById('moviesList').innerHTML += movieCard;
 }

 // applies onclick for overlay to movie thumbails
   var movieThumbnails = document.getElementsByClassName("movieThumb2");

    for (var j = 0; j < movieThumbnails.length; j++) {
     movieThumbnails[j].onclick = function(){
       var id = parseInt(this.dataset.id);
       showMoreMovie(id);

     }
  }
}




///////
// swap out:
//   var movieCard = document.hsifijsdfijdsf
//   movieCard +=
// for:
//    $(movieCard).append( ... );
