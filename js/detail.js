
$().ready(
    () => { // this will call information once button is clicked
        $("#refresh").on("click", () =>{
            refresh();
        })
        // will call information upon opening
        refresh();
    });

    const refresh = () => {
        
        $.getJSON("http://localhost:15952/api/users/9")
        .then((res) => {
            console.debug(res); 
            display(res);}         )
        .fail( (err) => { console.error(err); }       )
    }

    const display = (user) => {
        $("#dId").text(user.id);
        $("#dName").text( `${user.firstname} ${user.lastname}`);
        $("#dUsername").text(user.username);
        $("#dPhone").text(user.phone);
        $("#dEmail").text(user.email);
        $("#dReviewer").text(user.isReviewer ? "Yes" : "No");
        $("#dAdmin").text(user.isAdmin ? "Yes" : "No");




    }