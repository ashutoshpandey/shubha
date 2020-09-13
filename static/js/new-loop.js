document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e){
    var issueDesc = document.getElementById('issueDescInput').Value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid();
    var issueStatus = 'open';

    var issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }
    if (localStorage.getItem("issues") == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }
    document.getElementById('issueInputForm').requestFullscreen();
    fetchIssues();
    e.preventDefault();
}
function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesListe = document.getElementById('issueList');

    issuesListe.innerHTML = '';

    for (var i = 0; i < issues.length; i++){
        var id = issue[i].id;
        var decs = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesListe.innerHTML+=     '<div class="well">'+
                                    '<h6>Issue Id: ' + id + '</h6>'+
                                    '<p><span class="label label-info">' + status + '</span></p>'+
                                    '<h3>' + decs + '</h3>'+
                                    '<p><span class="glyphicon glyhicon-time"></span>' + severity + '</p>'+
                                    '<p><span class="glyphicon glyhicon-time"></span>' + assignedTo + '</p>'+
                                    '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+
                                    '<a href="#" onclick="setStatusClosed(\''+id+'\I)" class="btn btn-danger">delete</a>'+
                                    '</div>';
    }
}