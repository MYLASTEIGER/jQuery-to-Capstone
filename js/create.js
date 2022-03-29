$().ready( ( )=> {
console.log("REady");
 $("#save").on("click", () => {
     create();
 })
});

const create = () => {
    let user1 = {
        id: 0, 
        username: $("#iUsername").val(), 
        password: "Train@MAX",
        firstname: $("#iFirstname").val(), 
        lastname: $("#iLastname").val(), 
        phone: $("#iPhone").val(), 
        email: $("#iEmail").val(), 
        isReviewer: $("#iReviewer").prop("checked"), 
        isAdmin: $("#iAdmin").prop("checked")
            
    }
    console.debug(user1);
    $.ajax({
        url: "http://localhost:15952/api/users",
        method: "POST",
        data: JSON.stringify(user1), 
        contentType: "application/json"

    })
    .then( (res) => {
        console.debug(res);
    })
    .fail( (err) => {
        console.error(err);
    });
}