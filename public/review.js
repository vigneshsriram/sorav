$(function () {

    var commenting = $('#comment');
   
    console.log("cdcdscsdcsdscdscs")
    var $reviews = $('#addreviews');
   $('#addcomment').on('click',function(event){
       
   event.preventDefault();
   var commentval = $('#comment').val();
 //  var userval = $('#userdetail').val();
  // var currentlink = $(this);
  // var currentId = currentlink.data("id");
    var idis = $('#form-group').attr('action');
// console.log(idis+"jcbdshvchj")
    var commentobj = {
        
        comment : commentval,
        //userin: userval
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
              console.log(newcomment)
               $reviews.append('<p>'+commentobj.comment+'</p>');
           //    console.log(newcomment)
           }
        })

   })
   

});