$(document).ready(function(){
	
	console.log("hi");
	$(".page").on("click",".glyphicon", function()
	 {
				console.log("how r u");
				
				$(this).parent('div').remove();
	
				console.log(this.id);
				$.ajax(
                {
					        type:"delete",
						    url:'/products/' + this.id,
							
							success: function(data)
							{
							    if(data.success == true)
				                {
								  console.log(data);
								  $(this).parent('div').remove();
							    }
						    }
                });
	 });

	
                $.ajax({
					   url: "/products/",
					   dataType: "json",
					   type: "get",
					   success:function(mydata)
					   {
						  for(var i=0;i<mydata.length;i++)
						  {
							 $(".page").append('<div class="well col-md-8 pull-left"><h4>'+mydata[i].itname+'</h4><span id="'+mydata[i].id+'" class="glyphicon glyphicon-remove-sign pull-right"></span><button class="btnprice btn btn-primary" class="col-md-5">'+mydata[i].itprice+'</button><h6>'+mydata[i].itdesc+'</h6></div>');
						  }
				       }
			   });
    
	
    $("#btnadd").on("click",function(e){
				      console.log("krishna");
			          e.preventDefault();
					  
					  var itname=$('input:text[id="inputitemname"]').val();
					  var itdesc=$('input:text[id="inputdescription"]').val();
					  var itprice=$('input:text[id="inputprice"]').val();
					 
					  console.log(itprice);
			$.ajax({
			        url:"/products",
					type:"post",
					data:{
					     itname,
						 itdesc,
						 itprice,
						},
					
				    success:function(data){
					  $(".page").append('<div class="well col-md-8 pull-left"><h4>'+data.itname+'</h4><span id='+data.id+' class="glyphicon glyphicon-remove-sign pull-right"></span><button class="btnprice btn btn-primary" class="col-md-5">'+data.itprice+'</button><h6>'+data.itdesc+'</h6></div>');

						$("#secondmain").trigger( 'click' );
					}					
		    });
	});	
});		
			
			


//var parent1 = $(this).parent('div');
//var comment_report = $(this).data('id');
/* var parent = $(this).closest('div');
				console.log(parent); */
//data: {id:3} ,
//url:$(this).data('/products/'),
			//$(this).parent("div").remove();
								   //deleteID.parent(".jumbotron").remove();
							  
							 
						 // $(this).parents('div[class^=".jumbotron"]').remove();
						
                        // deleteID.slideUp('slow', function() {$(this).remove();});
					
				 
			 
             
				 /*$(".jumbotron").each(function(){
				 
                     $(this).slideUp('fast', function(){
                     $(this).remove();
                });*/
         
			

	