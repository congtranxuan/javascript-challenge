// from data.js
var tableData = data;
var button = d3.select("button");

button.on("click", function() {
    var InputDate = d3.select("#datetime");
    var date = InputDate.property("value");
    var filteredData = tableData.filter(da => da.datetime===date);
    var tbody = d3.select("tbody").text("");
      filteredData.forEach((filter)=>{
      var row=tbody.append("tr");
      Object.entries(filter).forEach(([key,value]) => {
        var cell = row.append("td")
        cell.text(value);
        });
    });
});
