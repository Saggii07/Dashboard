// const bgColorsBody = ["#1d1d27", "#ff96bd", "#9999fb"];

function tn(number) {
  var num = number

  var count = 0;

  if  (num == 88){
    count=+1
    // document.getElementById('my1').style.visibility='visible';
    // document.getElementById('my').style.visibility='hidden';
    // changeBackground(red)
    console.log(num)
    var collection = document.getElementsByClassName("charts-card");
    collection[0].style.backgroundColor = "#2e7d32"
   
    // document.getElementById("div2").style.boxShadow = "10px 20px 30px blue"
    
  }else if (num == 25){
    // document.getElementById('my1').style.visibility='hidden';
    // document.getElementById('my').style.visibility='visible';
    const collection = document.getElementsByClassName("charts-card");
    collection[0].style.backgroundColor = "#ff96bd"
    // changeBackground(blue)
    // document.getElementById("div2").style.boxShadow = "0 0 10px 5px red"
    // document.getElementsByClassName("card:nth-child(4)").style.backgroundColor = '#ff96bd';


    
  }
  collection[0].innerHTML = count
 

}



function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    // console.log(item);
    document.getElementById('cat').innerHTML = item
    tn(item)


}
const array = [25,76,88,34,55,30];
setInterval(function(){getRandomItem(array);},1000);






// var sidebarOpen = false;
// var sidebar = document.getElementById("sidebar");

// function openSidebar() {
//   if(!sidebarOpen) {
//     sidebar.classList.add("sidebar-responsive");
//     sidebarOpen = true;
//   }
// }

// function closeSidebar() {
//   if(sidebarOpen) {
//     sidebar.classList.remove("sidebar-responsive");
//     sidebarOpen = false;
//   }
// }



// // ---------- CHARTS ----------

// // BAR CHART
// var barChartOptions = {
//   series: [{
//     data: [10, 8, 6, 4, 2],
//     name: "Products",
//   }],
//   chart: {
//     type: "bar",
//     background: "transparent",
//     height: 350,
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: [
//     "#2962ff",
//     "#d50000",
//     "#2e7d32",
//     "#ff6d00",
//     "#583cb3",
//   ],
//   plotOptions: {
//     bar: {
//       distributed: true,
//       borderRadius: 4,
//       horizontal: false,
//       columnWidth: "40%",
//     }
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   fill: {
//     opacity: 1,
//   },
//   grid: {
//     borderColor: "#55596e",
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   legend: {
//     labels: {
//       colors: "#f5f7ff",
//     },
//     show: true,
//     position: "top",
//   },
//   stroke: {
//     colors: ["transparent"],
//     show: true,
//     width: 2
//   },
//   tooltip: {
//     shared: true,
//     intersect: false,
//     theme: "dark",
//   },
//   xaxis: {
//     categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
//     title: {
//       style: {
//         color: "#f5f7ff",
//       },
//     },
//     axisBorder: {
//       show: true,
//       color: "#55596e",
//     },
//     axisTicks: {
//       show: true,
//       color: "#55596e",
//     },
//     labels: {
//       style: {
//         colors: "#f5f7ff",
//       },
//     },
//   },
//   yaxis: {
//     title: {
//       text: "Count",
//       style: {
//         color:  "#f5f7ff",
//       },
//     },
//     axisBorder: {
//       color: "#55596e",
//       show: true,
//     },
//     axisTicks: {
//       color: "#55596e",
//       show: true,
//     },
//     labels: {
//       style: {
//         colors: "#f5f7ff",
//       },
//     },
//   }
// };

// var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
// barChart.render();


// // AREA CHART
// var areaChartOptions = {
//   series: [{
//     name: "Purchase Orders",
//     data: [31, 40, 28, 51, 42, 109, 100],
//   }, {
//     name: "Sales Orders",
//     data: [11, 32, 45, 32, 34, 52, 41],
//   }],
//   chart: {
//     type: "area",
//     background: "transparent",
//     height: 350,
//     stacked: false,
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#00ab57", "#d50000"],
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   dataLabels: {
//     enabled: false,
//   },
//   fill: {
//     gradient: {
//       opacityFrom: 0.4,
//       opacityTo: 0.1,
//       shadeIntensity: 1,
//       stops: [0, 100],
//       type: "vertical",
//     },
//     type: "gradient",
//   },
//   grid: {
//     borderColor: "#55596e",
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   legend: {
//     labels: {
//       colors: "#f5f7ff",
//     },
//     show: true,
//     position: "top",
//   },
//   markers: {
//     size: 6,
//     strokeColors: "#1b2635",
//     strokeWidth: 3,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   xaxis: {
//     axisBorder: {
//       color: "#55596e",
//       show: true,
//     },
//     axisTicks: {
//       color: "#55596e",
//       show: true,
//     },
//     labels: {
//       offsetY: 5,
//       style: {
//         colors: "#f5f7ff",
//       },
//     },
//   },
//   yaxis: 
//   [
//     {
//       title: {
//         text: "Purchase Orders",
//         style: {
//           color: "#f5f7ff",
//         },
//       },
//       labels: {
//         style: {
//           colors: ["#f5f7ff"],
//         },
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: "Sales Orders",
//         style: {
//           color:  "#f5f7ff",
//         },
//       },
//       labels: {
//         style: {
//           colors: ["#f5f7ff"],
//         },
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//     theme: "dark",
//   }
// };

// var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
// areaChart.render();