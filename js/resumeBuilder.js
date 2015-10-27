var bio = {
	"name": "Harika Mateti",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(408)673-1384",
		"email": "harika.uid@gmail.com",
		"github": "HarikaShekkhar",
		"twitter": "@harikashekhar",
		"location": "San Jose"
	},
	"welcomeMessage": "Hi, my name is Harika. I love creating beautiful & functional user experiences. As a graduate of Computer Science Technology with 3 years experience working in various roles, I have a wide range of skills. I am very passionate about web development and want to become a Front End Developer who focuses on writing clean, elegant and efficient code. Love HTML, CSS and a touch of jQuery.<br><br> When I am not coding or pushing pixels you will find me painting, sketching, playing Mortal Combat on PS4 or googling around interesting stuff.",
	"skills": ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap", "Shell scripting"],
	"bioPic": "images/avatar.jpg",
	// TODO: Implement display function
	"display": function() {
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedHeaderRole).prepend(formattedHeaderName);
		$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
		$("#footerContacts").append(formattedEmail).append(formattedGithub).append(formattedMobile);

		var skillsLength = bio.skills.length;
		if ( skillsLength > 0) {
			$("#header").append(HTMLskillsStart);
				for(var skill in bio.skills) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkills);
			}
		};
		$("#skills-h3").before(formattedBioPic);
		$(".biopic").after(formattedWelcomeMessage);
	} //display() ends here
};
// Call display() function to display bio information
bio.display();