$(document).ready(() =>{
    //alert('The document is ready!');
 
    $("button#left").on('click', function(){
         let message="";
         message = $('textarea#message').val();
         
         //console.log(message);
         //$('div.messages.row').append( message );
         //([htpps])\w+
         const urlRegex =new RegExp(/(((https?):\/\/)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);
         let containLink = urlRegex.test(message);//urlRegex.test(message);
         //console.log((message));
         //console.log(message.replace(urlRegex, 'ferret'));
         //let link = message.match(urlRegex,message);
         let link = urlRegex.exec(message);
         //console.log(containLink);
         if($('textarea#message').val().length != 0)
         {
             if(containLink==true)
             {
                 //REGEX FOR LINK
                // console.log(message);
                $('div.messages.row').append("<div class='col-4 offset-3'>"+ message +"<br/><iframe src="+ link+"width='100%' height='315px'></iframe></div>"); 
            }
             else{
                $('div.messages').append("<div class='col-4 offset-3 bg-light text-dark'>"+message +"</div>");
            }
             
         }
         else{
             //alert("MESSAGE WAS EMPTY")
         }
     });
 });
 
 $(document).ready(() =>{
    //alert('The document is ready!');
 
    $("button#right").on('click', function(){
         let message="";
         message = $('textarea#message').val();
         
         //console.log(message);
         //$('div.messages.row').append( message );
         //([htpps])\w+
         const urlRegex =new RegExp(/(((https?):\/\/)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);
         let containLink = urlRegex.test(message);//urlRegex.test(message);
         //console.log((message));
         //console.log(message.replace(urlRegex, 'ferret'));
         //let link = message.match(urlRegex,message);
         let link = urlRegex.exec(message);
         //console.log(containLink);
         if($('textarea#message').val().length != 0)
         {
             if(containLink==true)
             {
                //console.log(link);

                 //REGEX FOR LINK
                 $('div.messages.row').append("<div class='col-4 offset-3'>"+ message +"<br/><iframe src="+ link+"width='100%' height='315px'></iframe></div>"); 
             }
             else{
                 $('div.messages').append("<div class='col-4 offset-3 bg-primary text-white'>"+message +"</div>");
                 //$('div.col-4').css('background-color', 'blue');
             }
             
         }
         else{
             //alert("MESSAGE WAS EMPTY")
         }
     });
 });