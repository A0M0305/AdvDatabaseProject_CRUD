
$("#add_user").submit(function(event){
    alert("User Added")
})

$("#update_user").submit(function(event){
    event.preventDefault();
    
    var unindexed_array=$("#update_user").serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })

    var request={
        "url":`http://localhost:5033/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Updated")
    })
})

if(window.location.pathname == "/"){
    $rowdelete = $(".table tbody td a.delete");
    $rowdelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url":`http://localhost:5033/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Are you sure?")){
            $.ajax(request).done(function(response){
                alert("The file is deleted")
                location.reload()
            })
        }
    })

}