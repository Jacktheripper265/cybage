$(document).ready(
    ()=>{
        // $.getJSON("https://jsonplaceholder.typicode.com/photos",function(data)
        // {
        //     $.each(data,function(k,v){

        //         var elm = "<div class='sub'>"
        //             // +"<label class='id'>"+v.id+"</label>"+"<br>"
        //             +"<img src="+v.thumbnailUrl+ "width='70' height='100'>"+"<br>"+"<br>"
        //             +"<label class='title'>"+v.title+"</label>"+"<br>"+"<br>"
        //             +"<button>Add to cart</button>"                 
        //            + "</div>";
        //     $(elm).appendTo(".main");     
                
        //     })

        // })
        var dat=new Array();

        $.ajax({
            url:"https://jsonplaceholder.typicode.com/users",
            method:"GET",
            success:(x)=>{
                dat=x;
                $.each(dat,function(k,v){
                    $('#table_id').append("<tbody>")
                var elm = 
                         "<tr>"+"<td>"
                        +v.id+"</td>"+"<td>"
                        +v.name+"</td>"+"<td>"
                           +v.username+"</td>"+"<td>"
                            +v.phone+"</td>"+"<td>"
                            +v.email+"</td>"+"<td>"
                            +v.website+"</td>"
                            +"</tr>";               
                        
                     $(elm).appendTo("#table_id");  })
                     $("#table_id").append("</tbody>")

            },
            error:(x)=>{
                alert("Data not recieved");
            },
            async:false
        })
      
        $('#table_id').DataTable();
        
  
    }
)