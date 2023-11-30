document.addEventListener('DOMContentLoaded', function () {
    loadIssues();
});

function addIssue() {
    const name = document.getElementById('issueName').value;
    const description = document.getElementById('issueDescription').value;

    if (name && description) {
        const issue = {
            name,
            description
        };

        // Save issue to local storage or send it to the server (in a real application)
        saveIssue(issue);

        // Clear form fields
        document.getElementById('issueForm').reset();

        // Reload the issue list
        loadIssues();
    } else {
        alert('Please fill out all fields');
    }
}

function saveIssue(issue) {
    // In a real application, you would save the issue to a database or server
    // For simplicity, we'll use local storage in this example
    let issues = JSON.parse(localStorage.getItem('issues')) || [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
}

function loadIssues() {
    const issueList = document.getElementById('issueList');
    issueList.innerHTML = '';

    const issues = JSON.parse(localStorage.getItem('issues')) || [];

    issues.forEach(function (issue) {
        const div = document.createElement('div');
        div.className = 'issue';
        div.innerHTML = `<h3>${issue.name}</h3><p>${issue.description}</p>`;
        issueList.appendChild(div);
    });
}
