console.log("asdasdasd")

var nFields = 0

for (var i = 0; i <nFields; i++) {
	varI = i+1
	$('#allFields').append('<div class="mt-10"><div class="row"><div class="col-sm-4"><div class="input-group"><input type="number" name="course_'+varI+'" class="form-control" id="exampleInputAmount" placeholder="Course %: '+varI+'"></div></div><div class="col-sm-4"><div class="input-group"><input type="number" class="form-control" name="cr_'+varI+'" id="exampleInputAmount" placeholder="Course CR: ' +varI+'"></div></div></div></div>');
}

$('#btncld').click(function() {
	varI = nFields+1
	$('#allFields').append('<div class="mt-10"><div class="row"><div class="col-sm-4"><div class="input-group"><input type="number" name="course_'+varI+'" class="form-control" id="exampleInputAmount" placeholder="Course %: '+varI+'"></div></div><div class="col-sm-4"><div class="input-group"><input type="number" class="form-control" name="cr_'+varI+'" id="exampleInputAmount" placeholder="Course CR: ' +varI+'"></div></div></div></div>');
	nFields+=1;
});

var isShowing  = false;
function show(){
	$('#allFields').find('input[name="assg_weight"]').show()
	$('#allFields').find('input[name="quiz_weight"]').show()
	$('#allFields').find('input[name="mid_weight"]').show()
	$('#allFields').find('input[name="final_weight"]').show()
	isShowing = true
}

function hide(){
	$('#allFields').find('input[name="assg_weight"]').hide()
	$('#allFields').find('input[name="quiz_weight"]').hide()
	$('#allFields').find('input[name="mid_weight"]').hide()
	$('#allFields').find('input[name="final_weight"]').hide()
	isShowing = false
}

$('#calcGPA').click(function() {
    var a_1 = $('#allFields').find('input[name="assg_total"]').val();
    var a_2 = $('#allFields').find('input[name="assg_weight"]').val();

    var b_1 = $('#allFields').find('input[name="quiz_total"]').val();
    var b_2 = $('#allFields').find('input[name="quiz_weight"]').val();

    var c_1 = $('#allFields').find('input[name="mid_total"]').val();
    var c_2 = $('#allFields').find('input[name="mid_weight"]').val();

    var d_1 = $('#allFields').find('input[name="final_total"]').val();
    var d_2 = $('#allFields').find('input[name="final_weight"]').val();

    var e_1 = $('#parti_total').find(":selected").val();
    var e_2 = $('#allFields').find('input[name="parti_weight"]').val();

    var f_1 = $('#pres_total').find(":selected").val();
    var f_2 = $('#allFields').find('input[name="pres_weight"]').val();

    console.log(a_1, a_2, b_1, b_2,c_1,c_2,d_1,d_2,e_1,e_2,f_1,f_2)


    //caluate score
    if(isShowing){
    	var total = 0
    	var a_3 = (a_1/100)*a_2
    	var b_3 = (b_1/100)*b_2
    	var c_3 = (c_1/100)*c_2
    	var d_3 = (d_1/100)*d_2
    }
});

function getScoreFromPoints_pres_parti(points){

}




//GPAfromPoint(70)

function GPAfromPoint(point){
	points = [55, 61  , 64.5, 68.5, 72.5, 77.5, 82.5, 87.5, 92.5, 97.5] //x
	gpa = 	 [0 , 1.67, 2   , 2.33, 2.67, 3   , 3.33, 3.67, 4   , 4   ] //y

	GPA = 0
	for (var i = 0; i <points.length; i++) {
		
		if(point>points[i] && point<points[i+1] ){

			//first overlap
			m = (gpa[i+1]-0)/(points[i+1]-points[i])
			y = (m*(point - points[i])) + 0
			GPA = y

			//second overlap
			m = (0-gpa[i])/(points[i+1]-points[i])
			y = (m*(point - points[i])) + gpa[i]
			GPA += y
		}
	}
	console.log("point", point, "gpa", GPA)
	return GPA
}


function calculateGPAfromAllCourses(allCourseGrades, crI){

	gpa = 0
	console.log("allCourseGrades", allCourseGrades)
	totalGradePoints = 0
	totalCreditHours = 0
	for (var i = 0; i <nFields; i++) {
		console.log("i", i)
		totalGradePoints+= (allCourseGrades[i] * parseInt(crI[i]))
		totalCreditHours+= parseInt(crI[i])
	}

	gpa = totalGradePoints/totalCreditHours
	console.log("calculated overall GPA", gpa)
	document.getElementById("gpaBlock").innerHTML = "Your GPA is "+gpa
	document.getElementById("gpaBlock").style.display = "block"
}


