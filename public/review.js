$(function () {
    
    var commenting = $('#comment');
   
  //  console.log("cdcdscsdcsdscdscs")
    var $reviews = $('#addreviews');
   $('#addcomment').on('click',function(event){
       
   event.preventDefault();
   var commentval = $('#comment').val();
var ratingval = $('#rating').val();
    var idis = $('#form-group').attr('action');
  //console.log(something)
    var commentobj = {
        
        comment : commentval,
        userin:   something,
        rating: ratingval
    }
    // $.ajax({
      
    //     type: 'GET',
    //     url: idis,
    //    // data: commentobj,
    //      success: function(newcomment){
              
    //           var userval = $('#userdetail').val();
    //           console.log(userval)
    //           // $reviews.append('<p>'+"ANOOOH"+'</p>');
               
    //        }
       // })  

    $.ajax({
      
        type: 'POST',
        url: idis,
        data: commentobj,
         success: function(newcomment){
            //  console.log(newcomment)
               $reviews.append('<p>'+commentobj.userin+' '+commentobj.rating+ '</p>'+'<p>'+commentobj.comment+'</p>');
           //    console.log(newcomment)
           }
        })

   })
   

});