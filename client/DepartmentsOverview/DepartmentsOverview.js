Template.DepartmentsOverview.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('departments');
    });
});

Template.DepartmentsOverview.helpers({
	department: ()=> {
      	return Departments.find({});
    }
});

 Template.DepartmentsOverview.onRendered(function(){
    	$('input#input_text, textarea#textarea1').characterCounter();
    	$('ul.tabs').tabs();
   	$('select').material_select();
});
