var bio = {
	"name": "Harika Mateti",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(408) 673-1384",
		"email": "harika.uid@gmail.com",
		"github": "HarikaShekkhar",
		"twitter": "@harikashekhar",
		"location": "San Jose"
	},
	"welcomeMessage": "Hi, my name is Harika. I love creating beautiful & functional user experiences. As a graduate of Computer Science Technology with 3 years experience working in various roles, I have a wide range of skills. I am very passionate about web development and want to become a Front End Developer who focuses on writing clean, elegant and efficient code. Love HTML, CSS and a touch of jQuery.<br><br> When I am not coding or pushing pixels you will find me painting, sketching, playing Mortal Combat on PS4 or googling around interesting stuff.",
	"skills": ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap", "Shell scripting", "SQL", "PL/SQL"],
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
		$("#topContacts, #footerContacts, .collapsed-footer").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
		// $("#footerContacts").append(formattedEmail).append(formattedGithub).append(formattedMobile);

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

var work = {
	"jobs": [
		{
			"employer": "Udacity",
			"title": "Web Developer",
			"dates": "2015 October - Future",
			"location": "Mountain View, California",
			"description": "Bacon ipsum dolor amet turducken ball tip pork tenderloin. Beef ribs biltong tri-tip jowl ground round flank, alcatra pastrami filet mignon rump pork chop bacon picanha. Shoulder landjaeger spare ribs tail capicola, flank chicken short loin pork chop meatloaf andouille sausage shankle filet mignon ribeye. Spare ribs pig alcatra kevin rump shank pastrami jowl boudin turkey strip steak turducken ball tip corned beef flank. Boudin shankle beef ribs andouille. Cupim strip steak beef ribs kevin, frankfurter jowl andouille pork belly brisket."
		},
		{
			"employer": "Swecha by Harika Shekhar",
			"title": "Fashion Designer",
			"dates": "2013 March - 2013 December",
			"location": "Hyderabad, India",
			"description": "Extremely passionate about designing Ethnic Indian wear, I opened my own Boutique - Swecha, where I created and crafted designs for various customers.<br><br> Swecha means freedom, and I want to celebrate freedom through my designs and collection that I make to touch hearts."
		},
		{
			"employer": "Infosys Technologies Limited",
			"title": "Unix and HP Extreme Developer",
			"dates": "2010 February - 2013 February",
			"location": "Hyderabad, India",
			"description": "Infosys is a global leader in consulting, technology, and outsourcing and next-generation services. Infosys enable clients in more than 50 countries to outperform the competition and stay ahead of the innovation curve. With 187,000+ employees, Infosys helps enterprises renew themselves while also creating new avenues to generate value. <br><br> As a Unix Developer, I was involved in developing company wide communications like letters, Credit Card Statements, Offers and coupons for various financial client like Capital One, Charles Schwab and Bank of America."
		},
	],
	// TODO: Include display() function
	"display": function () {
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle).append(formattedWorkLocation).append(formattedWorkDates).append(formattedWorkDescription);
		}
	}
};

work.display();

var projects = {
	"projects": [
		{
			// TODO: Add links to title
			"title": "Udacity : Build a Portfolio Site",
			"dates": "2015 October",
			"description": "A responsive website that will display images, descriptions and links to each of the portfolio projects that I will complete throughout the course of the Front-End Web Developer Nanodegree.",
			"url": "https://github.com/HarikaShekhar/FE-Nanodegree-Project-1",
			// TODO: Update Images
			"images": [
				"images/portfolio-1.png",
				"images/portfolio-2.png",
				"images/portfolio-3.png",
				"images/portfolio-4.png"
			]
		},
		{
			// TODO: Add links to title
			"title": "Udacity : About Me",
			"dates": "2015 October",
			"description": "About Me demostrates basic HTML and CSS skills.",
			"url": "https://github.com/HarikaShekhar/FE-Nanodegree-Project-0",
			// TODO: Update Images
			"images": [
				"images/aboutMe-1.png",
				"images/aboutMe-2.png"
			]
		},
		{
			// TODO: Add links to title
			"title": "Capital One : Enterprise Fulfillment IT (EFIT)",
			"dates": "2011 January - 2013 February",
			"description": "EFIT is an Outbound application that creates monthly, quarterly and yearly Statements, Offers and Letters for Capital One customers. Outbound applications are critical regulatory applications for Capital One wherein all the customer communications must be delivered within specific days of generation. Outbound applications extract the required data from the upstream Capital One applications and formats into the customer communications using 3rd party formatting Dialog tool. This project involves Design, Development, Maintenance, Enhancement and Production Support.",
			"url": "#home",
			// TODO: Update Images
			"images": [
				"images/capitalOne-1.png",
				"images/capitalOne-2.png"
			]
		},
		{
			// TODO: Add links to title
			"title": "Charles Schwab : CRT Letters  development, maintenance and Support",
			"dates": "2010 February - 2010 December",
			"description": "Client Reporting Technology is a batch application that creates monthly, quarterly and yearly brokerage Letters for Schwab customers. It is hosted on the IBM Mainframe. Letters applications is one of the critical regulatory applications for Schwab wherein all the customer letters must be delivered within 7 days of generation. Letters extract the required data from the upstream Schwab applications and formats into the customer letters using 3rd party formatting tools — DOC1 and Dialogue. This project involves providing Maintenance, Enhancement and Production Support for the statement application. <br><br>It is a multi-tier project. It has different platforms involved such as UNIX/LINUX, Mainframes and different technologies such as JAVA, bash Scripting, COBOL.",
			"url": "#home",
			// TODO: Update Images
			"images": [
				"images/charlesSchwab-1.png",
				"images/charlesSchwab-2.png"
			]
		}
	],
	"display": function() {
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDesciption = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDesciption);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
					$(".images-section:last").append(formattedProjectImage);
				}
			}
		}
	}
}

projects.display();

$("#contacts").click(function(){
	$("#topContacts").fadeToggle("slow");
});

$("#skills-btn").click(function(){
	$("#skills-h3, #skills").fadeToggle("slow");
});

$("#letsConnect").append(internationalizeButton);

function inName() {
	var internationalName = bio.name.trim().split(" ");
	return internationalName[0][0].toUpperCase() + internationalName[0].slice(1).toLowerCase() + " " + internationalName[1].toUpperCase();
}

$("#mapDiv").append(googleMap);