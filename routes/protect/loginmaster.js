if (user == "bima") {
		request(`https://api-zeks-mirip.herokuapp.com/api/passwd/bima`, function (err, res, body) {
			if (body == `${passwd}`) {
				console.log(`Successfully login as bima`);
				console.log(`welcome master :)`);
				console.log(`Expired Day : ∞, Hour : ∞, Minute : ∞, Sec : ∞`);
				hahamaster();
			} else {
				console.log(`Salah pw Njeng`);
				process.exit(1);
			}
		});
	} else {
		loginmenu();
	}