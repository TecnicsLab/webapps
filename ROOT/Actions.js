	$(document).ready(function(){
		$("#UserId").blur(function(){
			userid = $("#UserId").val(); 
			
			req = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			 if(!userid.match(req))
			 {
				alert("Not a valid email");
			}			
		});
		$("#Password").blur(function(){
			 password = $("#Password").val();
			 req=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;	
			if(!password.match(req))
			{
				alert("Wrong entry for Password field");
				
			}			
		});
$("#registerbtn").click(function(){
	
	userid = $("#UserId").val();
	username = $("#UserName").val();
	passwd = $("#Password").val();
	$.ajax({
			type:"GET",
			url:"http://localhost:8080/register?UserId="+userid+"&Password="+passwd+"&UserName="+username,
			success:function(data){
				if(data == 0)
				{
					alert("Already Existed");
				}
				else{
					alert("Registerd Successfully");
					window.location = "login.html";
				}
			}
		});
	});
		$("#loginbtn").click(function(){		
			uid = $("#UserId").val();
			password = $("#Password").val();
			$.ajax({url:"/login?UserId="+uid+"&Password="+password,
						success: function(data){
							if(data == "0")
							{
								//alert("Sorry userid or password is incorrect");
								$("#lbl_n").append("Sorry userid or password is incorrect");
							}
							else
							{
								window.location = "chatroom.html";
							}
						}
			});
		});
	$(function()
	{
	    if (localStorage.chkbx != '')
	    {
	        $('#check').attr('checked');
	        $('#usrid').val(localStorage.usrname);
	        $('#Passsword').val(localStorage.pass);
	    }
	    else
	    {
	        $('#check').removeAttr('checked');
	        $('#usrid').val('');
	        $('#Passsword').val('');
	    } 
	    $('#check').click(function()
	    {
	        if ($('#check').is(':checked'))
	        {
	            localStorage.usrname = $('#UserName').val();
	            localStorage.pass = $('#Password').val();
	            localStorage.chkbx = $('#check').val();
	        }
	        else
	        {
	            localStorage.usrname = '';
	            localStorage.pass = '';
	            localStorage.chkbx = '';
	        }      
	    });
	});	
		
		
	
});

