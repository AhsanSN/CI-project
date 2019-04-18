console.log("asdasdasd")

var nFields = 4

for (var i = 0; i <nFields; i++) {
	varI = i+1
	$('#allFields').append('<div class="mt-10"><div class="row"><div class="col-sm-4"><div class="input-group"><input type="text" name="course_'+varI+'" class="form-control" id="exampleInputAmount" placeholder="Course %: '+varI+'"></div></div><div class="col-sm-4"><div class="input-group"><input type="text" class="form-control" name="cr_'+varI+'" id="exampleInputAmount" placeholder="Course CR: ' +varI+'"></div></div></div></div>');
}

$('#btncld').click(function() {
	varI = nFields+1
	$('#allFields').append('<div class="mt-10"><div class="row"><div class="col-sm-4"><div class="input-group"><input type="text" name="course_'+varI+'" class="form-control" id="exampleInputAmount" placeholder="Course %: '+varI+'"></div></div><div class="col-sm-4"><div class="input-group"><input type="text" class="form-control" name="cr_'+varI+'" id="exampleInputAmount" placeholder="Course CR: ' +varI+'"></div></div></div></div>');
	nFields+=1;
    console.log("asdasdasd")
});


$('#calcGPA').click(function() {
    //console.log("calcGPA")
    percI = []
    crI = []
    for (var i = 1; i <=nFields; i++) {
    	var a = $('#allFields').find('input[name="course_'+i+'"]').val();
    	var b = $('#allFields').find('input[name="cr_'+i+'"]').val();
    	percI.push(a)
    	crI.push(b)
    }
    console.log(percI)
    console.log(crI)

});


