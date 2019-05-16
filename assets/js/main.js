 $('#carouselExampleControls').on('slide.bs.carousel', function(e) {
     /*
         CC 2.0 License Iatek LLC 2018 - Attribution required
     */
     var $e = $(e.relatedTarget);
     var idx = $e.index();
     var itemsPerSlide = 5;
     var totalItems = $('.carousel-item').length;

     if (idx >= totalItems - (itemsPerSlide - 1)) {
         var it = itemsPerSlide - (totalItems - idx);
         for (var i = 0; i < it; i++) {
             // append slides to end
             if (e.direction == "left") {
                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
             } else {
                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
             }
         }
     }
 });
 var tab = [];

 function slid() {
     var html = ''
     var des = ''


     $.getJSON("https://jsonp.afeld.me/?callback=?&url=https://api.myglamapp.pl/api/categories?language=EN", function(data) {
         tab = data.data;
         console.log(tab)
         html += ' <div  class="carousel-item col-md-4 active ">'
         for (let index = 0; index < tab.length; index++) {

             html += ' <div class="card Scard">'
             html += '<div id="i' + index + '" class="text-center card-img-top card-img-top-250 text-center">'
             html += '<img id="i2' + index + '" class="text-center" src="./assets/images/title _line_section@1x.png">'

             html += '   </div>'
             html += '  <div class="card-block p-t-2  text-center">'
             html += '     <p>'
             html += '          <h4 class="text-wide p-b-2">' + tab[index].label + '</h4>'
             html += '       </p>'
             html += '       <div style="line-height:7pt;">'
             des = tab[index].description;
             while (des.indexOf("-") != -1) {
                 var position = des.indexOf("-");

                 html += ' <p>' + des.substr(0, position - 1) + '</p>'

                 des = des.substr(position + 1)
             }

             html += ' <p>' + des + '</p>'


             html += '        </div>'
             html += '   </div>'
             html += '</div>'
             html += '</div>'
             document.getElementById('cars').innerHTML += html
             var id = "i" + index.toString();
             var id2 = "i2" + index.toString();
             var x = document.createElement("img");
             image = "http://" + tab[index].imagePath + "";
             x.setAttribute("src", image);
             x.setAttribute("class", "img-fluid mx-auto d-block");
             var element = document.getElementById(id);
             var child = document.getElementById(id2);
             element.insertBefore(x, child);


             html = ' <div  class="carousel-item col-md-4 ">'
         }

     });
     html = ''
 }