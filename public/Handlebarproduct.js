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
								   $(this).parent('div.page').remove();
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
                                 var template = Handlebars.compile( $('#Add_template').html() );
						         $('div.page').append(template(mydata[i]));
						  }
				       }
			   });
    
	
	$("#btnadd").on("click",function(e){
				      console.log("krishna");
			          e.preventDefault();
					  
					  var itname=$('input:text[id="inputitemname"]').val();
					  var itdesc=$('input:text[id="inputdescription"]').val();
					  var itprice=$('input:text[id="inputprice"]').val();

					  if (itname == "" || itdesc == "" || itprice == "") 
					  {
						  $('.error').fadeOut(200).show();
                      } else {
            $.ajax({
			        url:"/products",
					type:"post",
					data:{
					     itname,
						 itdesc,
						 itprice,
						},
					
				    success:function(data){
						
						//var template = Handlebars.compile(data);
						var template = Handlebars.compile( $('#Add_template').html() );
						$('div.page').append(template(data));
				    }			
		    });

		  }
	});	
	
	 $("#btnadd").click(function() {
        $('input[type=text]').trigger('focusout').val("");
     });
});	