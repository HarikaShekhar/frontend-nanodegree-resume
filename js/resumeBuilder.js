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

var education = {
	"schools": [
		{
			"name": "Jawaharlal Nehru Technological University",
			"location": "Hyderabad, Telangana",
			"degree": "Bachelors",
			"majors": ["Computer Science Engineering"],
			"dates": 2009,
			"url": "http://www.jntuh.ac.in/new/"
			// TODO: include url as link to name
		},
		{
			"name": "Nalanda Junior College",
			"location": "Hyderabad, Telangana",
			"degree": "Intermediate",
			"majors": ["Math", "Physics", "Chemistry"],
			"dates": 2005,
			"url": "http://junior.nalanda.edu.in/"
			// TODO: include url as link to name
		}
	],

	"onlineCourses": [
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud775/l-2980038599/m-2960778924"
			// TODO: include url as link to title
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud304/l-2617868617/m-2698138588"
			// TODO: include url as link to title
		},
		{
			"title": "Javascript crash course",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1946788554/m-2550568535"
			// TODO: include url as link to title
		},
		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud245-nd/l-3314378535/m-3316638682"
			// TODO: include url as link to title
		},
		{
			"title": "Website Performance Optimization",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/website-performance-optimization--ud884"
			// TODO: include url as link to title
		}
	],
	"display": function() {
		for (var school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolName + " " + formattedSchoolDegree).append(formattedSchoolDates).append(formattedSchoolLocation);
			if(education.schools[school].majors.length > 0) {
				for(var major in education.schools[school].majors) {
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedSchoolMajor);
				}
			}
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var course in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[course].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			formattedOnlineUrl = formattedOnlineUrl.replace("#", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineTitle + " " + formattedOnlineSchool).append(formattedOnlineDates).append(formattedOnlineUrl);
		}
	}
};

education.display();