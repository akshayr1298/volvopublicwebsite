

// $(document).ready(function(){
//     $("#signupform").validate({
//         rules:{
//             username:{
//                 required:true,
//                 minlength:4,
//                 maxlength:6

//             },
//             password:{
//                 minlength:6
//             }
//         }      
//     })
// })

function login()
	{
		var uname = document.getElementById("emailid").value;
		var pwd = document.getElementById("password").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6.");
		}
    }