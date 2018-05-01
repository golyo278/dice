var contents1 = new Array();
  document.write('<div class="array-body borders" id="zz"> DICE</a> </div>');
    contents1[0] = '<div class="array-body borders" id="zero"> World <a href="1.html"</a> </div>';
    contents1[1] = '<div class="array-body borders" id="one"> U.S. <a href="1.html"</a> </div>';
    contents1[2] = '<div class="array-body borders" id="two"> Politics <a href="1.html"</a> </div>';
    contents1[3] = '<div class="array-body borders" id="three"> NY <a href="1.html"</a></div>';
    contents1[4] = '<div class="array-body borders" id="four"> Business <a href="1.html"</a> </div>';
    contents1[5] = '<div class="array-body borders" id="five"> Opinion <a href="1.html"</a> </div>';
    contents1[6] = '<div class="array-body borders" id="six"> Tech <a href="1.html"</a></div>';
    contents1[7] = '<div class="array-body borders" id="seven"> Science <a href="1.html"</a></div>';
    contents1[8] = '<div class="array-body borders" id="eight"> Health <a href="1.html"</a> </div>';
    contents1[9] = '<div class="array-body borders" id="nine"> Sports <a href="1.html"</a> </div>';
    contents1[10] = '<div class="array-body borders" id="ten"> Arts <a href="1.html"</a></div>';
    contents1[11] = '<div class="array-body borders" id="eleven"> Books <a href="1.html"</a></div>';
    contents1[12] = '<div class="array-body borders" id="twelve"> Style <a href="1.html"</a></div>';
    contents1[13] = '<div class="array-body borders" id="thirteen"> Food <a href="1.html"</a></div>';
    contents1[14] = '<div class="array-body borders" id="fourteen"> Travel <a href="1.html"</a></div>';
    contents1[15] = '<div class="array-body borders" id="fifteen"> Obituaries <a href="1.html"</a></div>';
    contents1[16] = '<div class="array-body borders" id="sixteen"> Video <a href="1.html"</a></div>';
    contents1[17] = '<div class="array-body borders" id="seventeen"> Real Estate <a href="1.html"</a></div>';
    contents1[18] = '<div class="array-body borders" id="eighteen"> Energy <a href="1.html"</a></div>';
    // contents1[19] = '<div class="array-body borders" id="nineteen"> Culture <a href="1.html"</a> </div>';



  
   var i = 0;
   var r;

   while (i < contents1.length) {

      r = Math.floor(Math.random() * contents1.length)

      if (contents1[r] != 'done' ) {

         document.write(contents1[r])
         contents1[r] = 'done'

         i++

      }

   };

