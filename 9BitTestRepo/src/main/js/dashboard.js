/**
 * Created by Nikita on 2017-03-01.
 */
// Load the Visualization API and the corechart package and table package
google.charts.load('current', {'packages': ['corechart', 'table']});


// Set a callback to run when the Google Visualization API is loaded (this is for the pie chart and bar chart)
google.charts.setOnLoadCallback(drawChart);

// set a callback for the tables
google.charts.setOnLoadCallback(drawTableChart);
google.charts.setOnLoadCallback(drawTableChart2);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
var myjson;
$.ajax({
    url: "http://localhost:8080/transactionTest",
    type: "GET",

    contentType: 'application/json; charset=utf-8',
    success: function(resultData) {
        returnData(resultData);
    },
    async: false,
    error : function(jqXHR, textStatus, errorThrown, transSum) {
    },

    timeout: 120000,
});
function returnData(resultData){
    myjson = resultData;
    console.log(myjson);
}
var foodSum = 0;
var housingSum = 0;
var leisureSum = 0;
var transSum = 0;
var savingsSum = 0;
var schoolSum = 0;
var clothSum = 0;
var otherSum = 0;
var foodCn = 0;
var housingCn = 0;
var leisureCn = 0;
var transCn = 0;
var savingsCn = 0;
var schoolCn = 0;
var clothCn = 0;
var otherCn = 0;

for(var i = 0; i<myjson.length;i++) {
    var currCat = myjson[i].category;
    var currAm = myjson[i].amount;
    console.log(JSON.stringify(currAm));
    if (currCat == 'food') {
        foodSum = foodSum + parseInt(currAm);
        foodCn = foodCn + 1;
    }
    else if (currCat == "housing") {
        housingSum = housingSum + parseInt(currAm);
        housingCn = housingCn + 1;
    }
    else if (currCat == 'leisure') {
        leisureSum = leisureSum + parseInt(currAm);
        leisureCn = leisureCn + 1;
    }
    else if (currCat == 'transportation') {
        transSum = transSum + parseInt(currAm);
        transCn = transCn + 1;
    }
    else if (currCat == 'savings') {
        savingsSum = savingsSum + parseInt(currAm);
        savingsCn = savingsSum + 1;
    }
    else if (currCat == 'school') {
        schoolSum = schoolSum + parseInt(currAm);
        schoolCn = schoolCn + 1;
    }
    else if (currCat == 'clothing') {
        clothSum = clothSum + parseInt(currAm);
        clothCn = clothCn + 1;
    }
    else {
        otherSum = otherSum + parseInt(currAm);
        otherCn = otherCn + 1;
    }
}
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    data.addRows([
        ['Food', foodSum],
        ['Housing', housingSum],
        ['Leisure', leisureSum],
        ['Transportation', transSum],
        ['Savings', savingsSum],
        ['School', schoolSum],
        ['Clothing', clothSum],
        ['Other', otherSum],
    ]);

    // Set chart options
    var options = {
        'title': 'Number of Recent Transactions By Type',
        'width': 600,
        'height': 400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
    chart.draw(data, options);
    barchart.draw(data, options);
}

// callback that draws table chart
function drawTableChart(housing,food) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Transaction Category');
    data.addColumn('number', 'Amount');
    data.addColumn('boolean', 'Good');
    data.addRows([
        ['Housing', {v: 10000, f: '$10,000'}, true],
        ['Food', {v: 8000, f: '$8,000'}, false],
        ['Food', {v: 12500, f: '$12,500'}, true],
        ['Leisure', {v: 7000, f: '$7,000'}, true]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '1100', height: '200'});
}

function drawTableChart2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Advice Category');
    data.addColumn('string', 'Advice');
    data.addRows([
        ['Spending Habits','Use the 50/30/20 rule'],
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div2'));

    table.draw(data, {showRowNumber: true, width: '600', height: '200'});
}
