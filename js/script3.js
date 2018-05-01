var doc = $(document), w = $(window), timer;

doc.on('scroll', function(){

    if(doc.scrollTop() + w.height() >= doc.height()){

         alert('Don’t believe everything you read on the internet! This publication mocks the excess of information we have on the internet by randomizing content, dicing together tweets and news, and blurring the line between what is trustworthy and what is not.');
         

        if(typeof timer !== 'undefined') clearTimeout(timer);

        timer = setTimeout(function(){
           
        }, 50);

    }

});