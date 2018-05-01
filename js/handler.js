var spans;


function handleTweets(tweets) {

    spans = document.querySelectorAll(".span");


    // spans[0].innerHTML += tweets[0];
    console.log(spans);
    console.log(spans[9]);

    for (var i = 0; i < spans.length; i++) {

        spans[i].innerHTML += tweets[i];

    }

}

 

