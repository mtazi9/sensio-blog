import { Date } from 'core-js';
import $ from 'jquery';
const BEARER = process.env.BEARER; 
console.log(BEARER);
$(function () {
    //submit form create ticket
    $("#post-comments").submit(function(e) {
        e.preventDefault();
        var formdata = new FormData(this);
        var comment = formdata.get("message");
        var data = {};
        data['comment'] = comment;
        data['owner'] = 'user1';
        data['post'] = 1;
        data['created'] = new Date();
        data['updated'] = new Date();
        
        console.log(data);
        console.log(BEARER);
        console.log(JSON.stringify(data))
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: hostCommentsApi + "comments",
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + BEARER
            },
            success: function (dataComment) {
                console.log(JSON.stringify(dataComment.message));
            }
        });
    })
})