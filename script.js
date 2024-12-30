

(function (global) {
    var dc = {};
  
   
    var categoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";
  
    dc.loadRandomCategory = function () {

      $ajaxUtils.sendGetRequest(categoriesUrl, function (categories) {
        
        var randomIndex = Math.floor(Math.random() * categories.length);
        var randomCategoryShortName = categories[randomIndex].short_name;
  
        
        var homeHtmlUrl = "snippets/home-snippet.html";
        $ajaxUtils.sendGetRequest(homeHtmlUrl, function (homeHtml) {
          var updatedHtml = homeHtml.replace(
            "{{randomCategoryShortName}}",
            "'" + randomCategoryShortName + "'"
          );
  
         
          document.querySelector("#main-content").innerHTML = updatedHtml;
        });
      });
    };
  
   
    global.$dc = dc;
  })(window);
  
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#specials-tile").addEventListener("click", function () {
      $dc.loadRandomCategory();
    });
  });
  

