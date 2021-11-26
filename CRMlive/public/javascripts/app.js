app.use(express.static('public'));

$(function(){

    $("#fetchagent").on('click', function(){
        $.get( "/fetchagent", function( data ) {
            var agents = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(agents, function( agent ) {

                string += '<tr><td>'+agent['agentAbbrev']+'</td><td>'+agent['agentFirstName']+'</td><td>'+agent['agentLastName']+'</td><td>'+agent['agentPosition']+'</td></td>'+agent['agentPhone']+'</td><tr>';
            });

            $("#trdata").html(string);
        });
    });

    $("#importagent").on('click', function(){
        $.get( "/uploadagent", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

});


$(function(){

    $("#fetchcontact").on('click', function(){
        $.get( "/fetchcontact", function( data ) {
            var contacts = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(contacts, function( contact ) {

                string += '<tr><td>'+contact['contactFirstName']+'</td><td>'+contact['contactLastName']+'</td><td>'+contact['contactPosition']+'</td><td>'+contact['contactPhone']+'</td><td>'+contact['contactMobile']+'</td><td>'+contact['contactEmail']+'</td></td>'+contact['contactNotes']+'</td><tr>';
            });

            $("#trdata").html(string);
        });
    });

    $("#importcontact").on('click', function(){
        $.get( "/uploadcontact", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

});
