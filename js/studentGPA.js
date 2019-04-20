console.log("asdasdasd")

var nFields = 2

for (var i = 0; i <nFields; i++) {
	varI = i+1
	$('#allFields').append('<div class="mt-10"><div class="row"><div class="col-sm-4"><div class="input-group"><input type="number" name="course_'+varI+'" class="form-control" id="exampleInputAmount" placeholder="Course %: '+varI+'"></div></div><div class="col-sm-4"><div class="input-group"><input type="number" class="form-control" name="cr_'+varI+'" id="exampleInputAmount" placeholder="Course CR: ' +varI+'"></div></div></div></div>');
}

$('#btncld').click(function() {
	varI = nFields+1
	$('#allFields').append('<div class="mt-10"><div class="row"><div class="col-sm-4"><div class="input-group"><input type="number" name="course_'+varI+'" class="form-control" id="exampleInputAmount" placeholder="Course %: '+varI+'"></div></div><div class="col-sm-4"><div class="input-group"><input type="number" class="form-control" name="cr_'+varI+'" id="exampleInputAmount" placeholder="Course CR: ' +varI+'"></div></div></div></div>');
	nFields+=1;
    console.log("asdasdasd")
});

crI = []
allCourseGrades = []

$('#calcGPA').click(function() {
    //console.log("calcGPA")
    allCourseGrades = []
    percI = []
    crI = []
    for (var i = 1; i <=nFields; i++) {
    	var a = $('#allFields').find('input[name="course_'+i+'"]').val();
    	var b = $('#allFields').find('input[name="cr_'+i+'"]').val();
    	percI.push(a)
    	crI.push(b)

    	allCourseGrades.push(GPAfromPoint(a))
    }
    console.log("percI", percI)
    console.log("crI", crI)    
    calculateGPAfromAllCourses(allCourseGrades, crI)
});




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
		totalGradePoints+= (allCourseGrades[i] * crI[i])
		totalCreditHours+= crI[i]
	}
	gpa = totalGradePoints/totalCreditHours
	console.log("calculated overall GPA", gpa)
}


