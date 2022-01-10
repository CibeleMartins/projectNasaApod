
const search= document.querySelector("#search");

search.addEventListener("click", function (e) {
   
   e.preventDefault()

   let chave= "YJvYvzX3E1xCUh6DBNpmOdWc2I0hFjc350Er7VuX";
   let inputVal= $("#input").val();

   $.ajax ({
      url: `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${inputVal}`,
      type: "GET",
      contentType: "application/json",
      success: function(data) {
         
         console.log(data)
         console.log(data.copyright)

         let explanation= data.explanation 
         let titulo= data.title
         let copyR= data.copyright 

         if (data.media_type== "video") {
            $("#title").text(`${titulo}`);
            $("#texto").text(`${explanation}`);
            $("#container2").css("display", "flex")
            $("#video").css("display", "flex");
            $("#img").css("display", "none");
            $("#video").attr("src", data.url);
            $("#textCopy").text(`${copyR}`);

            

         } else { 
            $("#title").text(`${titulo}`);
            $("#texto").text(`${explanation}`);
            $("#container2").css("display", "flex")
            $("#img").css("display", "flex");
            $("#video").css("display", "none");
            $("#img").attr("src", data.url);
            $("#textCopy").text(`${copyR}`);
            
         }
         

         
      }
   })
})