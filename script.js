

var ready=[]
$(document).ready(function () {
  console.log(myData)
  $('#geoCanada').DataTable( {
    pagingType: 'first_last_numbers',
       stateSave: true,
    data: myData,
    
    columns: [
      { data: 'ER_COUNT_2021-2023' },
              { data: 'ER_COUNT_2022-2024' },
              { data: 'GEO_NAME_EN' },            
              { data:'PT_COUNT_2021-2023' },
              { data: 'PT_COUNT_2022-2024' },
              { data: 'RATING_3_STARS' },
             { data: 'RATING_5_STARS' },
             
              
    ]
} );


function Employee ( name, position, salary, office ) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.office = office;

  this._office = function () {
      return this._office;
  }
};

$('#example').DataTable( {
    dom: '<"top"i>rt<"bottom"flp><"clear">',
    stateSave: true,
    pagingType: 'full_numbers',

  data: [
      new Employee( "Tiger Nixon", "System Architect", "$3,120", "Edinburgh" ),
      new Employee( "Garrett Winters", "Director", "$5,300", "Edinburgh" ),new Employee( "Tiger Nixon", "System Architect", "$3,120", "Edinburgh" ),
      new Employee( "Garrett Winters", "Director", "$5,300", "Edinburgh" ),new Employee( "Tiger Nixon", "System Architect", "$3,120", "Edinburgh" ),
      new Employee( "Garrett Winters", "Director", "$5,300", "Edinburgh" ),new Employee( "Tiger Nixon", "System Architect", "$3,120", "Edinburgh" ),
      new Employee( "Garrett Winters", "Director", "$5,300", "Edinburgh" )
  ],
  columns: [
      { data: 'name' },
      { data: 'position' },
      { data: 'salary' },
      { data: 'office' },
     
  ]
} );
});

// const dTable = $('#myTable').DataTable({
//   "bLengthChange": true, // this gives option for changing the number of records shown in the UI table
//   "lengthMenu": [10], // 4 records will be shown in the table
//   "columnDefs": [{
//           "className": "dt-center",
//           "targets": "_all"
//       } //columnDefs for align text to center
//   ],
//   "dom": "lrtip" //to hide default searchbox but search feature is not disabled hence customised searchbox can be made.
// });

// $('#myCustomSearchBox').keyup(function() {
//   dTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
// })

// const $tableRow = document.getElementById("two")

// $tableRow.addEventListener('click', function(){
//   alert("Hi Kasem")
// })

// const arrYY =[{"Name":"Basse","Age":23, "Work":"ENG"},{"Name":"HUSAM","Age":20, "Work":"non"}]

// $(document).ready(function(){

//   $('a').click(function(e){


//     alert('clicked')
//    e.preventDefault();
//   })
  

// })
// console.log(myData)
// $(document).ready(function () {
//   $('#geoCanada').DataTable({
//       data: 'data/myData.txt',
//       columns: [
//         { data: 'ER_COUNT_2021-2023' },
//         { data: 'ER_COUNT_2022-2024' },
//         { data: 'GEO_NAME_EN' },
//         { dat: 'PT_COUNT_2021-2023' },
//         { data: 'PT_COUNT_2022-2024' },
//         { data: 'RATING_3_STARS' },
//         { data: 'RATING_5_STARS' },
//         { data: 'index' },
//       ],
//   });
// });


 

function sumAll() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    console.log(arguments)
  }
  return sum;
}
document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88);



$(document).ready(function () {

  console.log(dataRender);


$('#dataRender').DataTable( {
  data: dataRender,
  columns: [
      { data: 'product' },
      
      { data: 'creator.firstName' },
      { data: 'created' },
  ]
} )

})