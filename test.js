$(function() {
    $('form').submit(function() {
        var manager = new Manager(
            $('#getManagerFirstName').val(),
            $('#getManagerLastName').val()
        );

        var team = new Team(
            $('#getTeamName').val(),
            manager,
            $('#getPhoneNumber').val(),
            $('#getSponsor').val(),
            $('#getZipCode').val()
        );

        printTeam(team);

//      console.log($('form').serializeObject());
      return false;
    });

    
});

function Team(tName, manager, phone, sponsor, zip) {
    this.teamName = tName;
    this.manager = manager;
    this.phone = phone;
    this.sponsor = sponsor;
    this.zip = zip;
};

function Manager(first, last) {
    this.first = first;
    this.last = last;
};

function printTeam(team) {
    console.log(team.teamName);
    console.log(team.manager);
    console.log(team.phone);
    console.log(team.sponsor);
    console.log(team.zip);
};