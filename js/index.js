let users = [];

$().ready(
    () => {
        console.log("Jquery is ready");

    let url = "http://localhost:15952/api/users"

    $.getJSON(url)
        .then(
            (res) => {
                console.debug(res)
                users = res;
                display(users);
            }
        )
        .fail(
            (err) => {console.error(err)}
        );

    });

    const display = (users) => {
        var tbody = $("#users");
        tbody.empty();
        for(let user of users){
            let tr = $("<tr></tr>");
            let tdId = $(`<td>${user.id}</td>`);
            tr.append(tdId);
            let tdName = $(`<td>${user.firstname} ${user.lastname}</td>`);
            tr.append(tdName);
            let tdUsername = $(`<td>${user.username}</td>`);
            tr.append(tdUsername);
            let tdPhone = $(`<td>${user.phone} </td>`);
            tr.append(tdPhone);
            let tdEmail = $(`<td>${user.email} </td>`);
            tr.append(tdEmail);
            let tdReviewer = $(`<td>${(user.isReviewer ? "Yes" : "No")} </td>`);
            tr.append(tdReviewer);
            let tdAdmin = $(`<td>${(user.isAdmin ? "Yes" : "No")} </td>`);
            tr.append(tdAdmin);
            tbody.append(tr);

        }
    }