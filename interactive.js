function checker()
	{
		var password = document.getElementById("password").value;
        var birthYear = Number(document.getElementById("birthday").value.substring(0, 4));
        var currentYear = 2023;
        var age = currentYear - birthYear;

        if (password.length > 8 && age > 21)
        {
            document.getElementById("alert1").innerText="Hooray! Your account has been successfully created.";
            document.getElementById('b').innerText="";
            document.getElementById('c').innerText="";
        }

		if (password.length < 8)
		{
			document.getElementById("alert2").innerText="Password must be at least 8 characters.";
		}

		
        console.log(password, age);	

		if (age < 21)
		{
			document.getElementById("alert3").innerText="Minors are not allowed!";
		}
	}