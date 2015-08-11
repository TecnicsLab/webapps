$(document).ready(function(){
	height=0;

	 $.ajax({url:"/history",
						success: function(data){
						//alert(data);
						$('#msg').val("");
						ShowMessages(data);
					}
					
				});

	$("#all_msg").animate({scrollTop:19999999999990});
	$("#btn_send").click(function(){
		var sentmsg = $("#msg").val(); 
		$('#msg').val("");
		$.ajax({url:"/displaymsg?msg="+sentmsg,
					success: function(data)
					{
						// alert(data);
						if(data == "1")
						{
							window.location = "login.html";
						}
						else
						{
							ShowMessages(data);
							window.location.reload();
							$("#all_msg").animate({scrollTop:1000000000});
						}
					}

		});
	});
	$("#btn_out").click(function(){
			userid = $("#UserId").val();
			$.ajax({url:"/logout",
					success: function(result){
						// alert(result);
						window.location = "register.html";
					}
			});		
		});
	});
	function ShowMessages(data)
	{
		var data1 = data;
		data1 = data1.replace(/\[/gi,"");
		data1 = data1.replace(/\]/gi,"");
		end=0;
		msgarr=data1.split(",");
		// alert(msgarr[1]);
		//alert(msgarr.length);
		for(start = 0; start < msgarr.length; start = start+4)
		{
			end+=4;
			msg = msgarr.slice(start,end);
			uname = msg[0];
			sentmsg = msg[1];
			time = msg[2];
			date = msg[3];
			// alert(sentmsg);
			$("#all_msg").append(uname+": "+sentmsg+" "+time+","+date+"\n");
		}
	}
