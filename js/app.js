$(document).ready(function(){


	$("#btn_val").click(function(e){
		e.preventDefault(e);
		$("#fb_list").remove();
		$("#fb_div").append('<ul id="fb_list"></ul>');
		var num_to_fb = $("#val").val();
		console.log(typeof num_to_fb);
		if (isNaN(num_to_fb)) 
			{alert("Please choose a number");}
		else 
		{
			if(parseInt(num_to_fb))
			{
				this_num = parseInt(num_to_fb);
				if (this_num <= 0)
				{
					alert("Please choose a number greater than 0.");
				}
				else 
				{
					fizzBuzz(num_to_fb);
					$("#val").val(" ");
				}
			}
			else
			{
				alert("Please choose numbers only!");
			}
		}
	});
	$("#btn_reset").click(function(e){
		e.preventDefault(e);
		$("#fb_list").remove();
	});

});


$(window).load(function() {
	user_input;
	if (isNaN(user_input))
		{
			alert("Please type a number");
		}
	else 
	{
		if(typeof(+user_input) == "number")
		{
			if(+user_input <= 0)
			{
				alert("Please choose a number greater than 0.");
			}
			else
			{
				$("#fb_div").append('<ul id="fb_list"></ul>');
				fizzBuzz(+user_input);
				$("#val").val(" ");
			}
		}
		else
		{
			alert("Please choose numbers only!");
		}
	}

});

var user_input = prompt("Please enter a number to FizzBuzz!");

var fizzBuzz = function (x) {
	var gen_list = $("#fb_list");
	for (var i = 1; i <= x; i++) {
		if ((i % 3) == 0 && ((i % 5) == 0)) {
			gen_list.append("<li>fizz buzz</li>");
		}
		else if ((i % 3) == 0) {
			gen_list.append("<li>fizz</li>");
		}
		else if ((i % 5) == 0) {
			gen_list.append("<li>buzz</li>");
		}
		else
		{
			gen_list.append("<li>" + i + "</li>");
		}
	}
}
