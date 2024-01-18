$(function() {
  $("#testForm").submit(function(e) {
    $.ajax({
      url: "/api/stock-prices",
      type: "get",
      data: $("#testForm").serialize(),
      success: function(data) {
        let result = JSON.stringify(data, null, " ")
          .replace('"stockData"', "stockData")
          .replace('"stock"', "stock")
          .replace('"price"', "price")
          .replace('"likes"', "likes");
        $("#jsonResult").text(result);
        $("#testForm")[0].reset();
      }
    });
    e.preventDefault();
  });
  $("#testForm2").submit(function(e) {
    $.ajax({
      url: "/api/stock-prices",
      type: "get",
      data: $("#testForm2").serialize(),
      success: function(data) {
        let result = JSON.stringify(data, null, " ")
          .replace('"stockData"', "stockData")
          .replace('"stock"', "stock")
          .replace('"price"', "price")
          .replace('"likes"', "likes");
        $("#jsonResult").text(result);
        $("#testForm2")[0].reset();
      }
    });
    e.preventDefault();
  });
});
