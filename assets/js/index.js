
$("#Add_Data").submit(function(event){
    alert("Data Insert Sucessfully!");
})

$("#update_Data").submit(function(event){
    event.preventDefault();


    var unindexed_array=$(this).serializeArray();
    console.log("unindexed_array",unindexed_array);
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['Fname']]=n['value']
    })

    var request={
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $ajax(request).done(function(response){
        alert("data updated successfully")
    })
})

if(window.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }
        if(confirm("Do You really want to delete this record")){
            $ajax(request).done(function(response){
                alert("data delete successfully");
                location.reload();
            }) 
        }
    })
}