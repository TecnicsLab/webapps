$(document).ready(function(){
	$("#registerbtn").click(function()
	{		
		userid = $("#UserId").val();
		username = $("#UserName").val();
		passwd = $("#Password").val();
		passreq=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;	
		req = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;		
		if(userid.match(req) && passwd.match(passreq))
		{
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
							window.location="login.html"; 
						}
					}
				});
		}
		else
		{
			alert("Invalid Entries User Id or Password.");	
		}
	});
	$("#loginbtn").click(function(){		
		uid = $("#UserId").val();
		password = $("#Password").val();
		$.ajax({url:"/login?UserId="+uid+"&Password="+password,
					success: function(data){
						if(data == "0")
						{
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
	        $('#UserId').val(localStorage.UserId);
	        $('#Password').val(localStorage.pass);
	    }
	    else
	    {
	        $('#check').removeAttr('checked');
	        $('#UserId').val('');
	        $('#Password').val('');
	    } 
	    $('#check').click(function()
	    {
	        if ($('#check').is(':checked'))
	        {
	            localStorage.UserId = $('#UserId').val();
	            localStorage.pass = $('#Password').val();
	            localStorage.chkbx = $('#check').val();
	        }
	        else
	        {
	            localStorage.UserId = '';
	            localStorage.pass = '';
	            localStorage.chkbx = '';
	        }      
	    });
	});	
});

