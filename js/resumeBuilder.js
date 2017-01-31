var bio = {
  "name": "Matt Smith",
  "role": "Web Dev, Mobile Strategist, Front-End Astronaut",
  "welcomeMessage": "Helping to build a better web.",
  "image": "images/fry.jpg",
  "contacts": [{
    "mobile": "555-555-5555",
    "location": "Portland",
    "email": "matt@github.com"
  }],
  "skills": ["HTML5", "CSS3", "JavaScript", "jQuery"]
};

var work = {
  "jobs": [{
    "employer": "Unum",
    "title": "Software Engineer",
    "dates": "2015 - present",
    "location": "Portland",
    "description": "Building web apps that even the dudes in Jurassic Park would be like 'How does this work?'"
  },
    {
      "employer": "Unum",
      "title": "Programmer Analyst III",
      "dates": "2012 - 2014",
      "location": "Portland",
      "description": "I built some stuff on the web and I almost *never* crashed it, too, mmmhmmm."
    }]
};

var projects = {
  "project": [{
    "title": "CSS Protips",
    "dates": "2015",
    "description": "A collection of CSS tips to help take your skills pro."
  }]
};

var education = {
  "schools": [{
      "name": "Universtity of Maine",
      "location": "Orono, Maine",
      "degree": "bachelor",
      "majors": "English",
      "dates": "1998",
      "url": "umaine.edu"
    }
  ],
  "online courses": [{
    "title": "Front-End Web Developer Nanodegree",
    "school": "udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/nd001"
  }]
};


bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedImage = HTMLbioPic.replace("%data%", bio.image);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
  $("#header").append(HTMLskillsStart);

  for (skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
  };

  for (contact in bio.contacts) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
    var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts[contact].skype);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedSkype);
  };
};

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
  }
};

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
  }
};

projects.display = function() {
  for (item in projects.project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);

    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
    for (image in projects.project[item].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
      $(".project-entry:last").append(formattedImage);
    };
  }
};

function inName(name) {
  console.log(name);
  var newName = name;
  newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

  return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);