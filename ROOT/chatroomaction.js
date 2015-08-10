$(document).ready(function(){
	 $.ajax({url:"/history",
						success: function(data){
							// alert(data);
						var data1 = data;
						data1 = data1.replace(/\[/gi,"");
						data1 = data1.replace(/\]/gi,"");
						end=0;
						msgarr=data1.split(",");
						for(start = 0; start < msgarr.length; start = start+4)
						{
							end+=4;
							msg = msgarr.slice(start,end);
							uname = msg[0];
							sentmsg = msg[1];
							time = msg[2];
							date = msg[3];
							$("#all_msg").append(uname+": "+sentmsg+" "+time+","+date+"\n");
						}
					}
				});
	$("#btn_send").click(function(){
		var sentmsg = $("#msg").val(); 
		$.ajax({url:"/displaymsg?msg="+sentmsg,
					success: function(data)
					{
						// alert(data);
						var data1 = data;
						data1 = data1.replace(/\[/gi,"");
						data1 = data1.replace(/\]/gi,"");
						end=0;
						msgarr=data1.split(",");
						// alert(msgarr[1]);
						alert(msgarr.length);
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
