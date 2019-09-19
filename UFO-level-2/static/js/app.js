// from data.js
var button = d3.select("button");

button.on("click", function() {
    var date = d3.select("#datetime").property("value");
    d3.select("#datetime").property("value","");
    var city = d3.select("#city").property("value");
    d3.select("#city").property("value","")
    var state = d3.select("#state").property("value");
    d3.select("#state").property("value","")
    var country = d3.select("#country").property("value");
    d3.select("#country").property("value","")

    var sect = document.getElementById("shape");
    var shape = sect.options[sect.selectedIndex].value;
    sect.selectedIndex = 0;
       
    console.log(date);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);
    
    let filterArray = [d=>(date==="" && city==="" && state==="" && country==="" && shape ==="")? false:true,
    d => (date ==="")? true: d.datetime===date,
    c => (city ==="")? true: c.city===city,
    s => (state ==="")? true: s.state===state,
    c => (country ==="")? true: c.country===country,
    s => (shape === "")? true: s.shape === shape];
    
    var filteredData = data;
    data.forEach(d=>console.log(d.shape));
    filterArray.forEach((f)=> filteredData = filteredData.filter(f));
    console.log(filteredData);
    var tbody = d3.select("tbody").text("");
      filteredData.forEach((fil)=>{
      var row=tbody.append("tr");
      Object.entries(fil).forEach(([key,value]) => {
        var cell = row.append("td")
        cell.text(value);
        });
    });
});


