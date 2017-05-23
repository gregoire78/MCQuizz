/**
 * Created by gregoire on 31/08/2015.
 */

// fonction permettent un affichage dynamique des erreurs bootstrap
bootstrap_error = function(errorObject, trigger) {
    trigger = trigger || "focus, hover";
    var formGroup = $(errorObject.element).parent();
    formGroup.addClass("has-danger");
    formGroup.find("input, textarea")
        .addClass("form-control-danger")
		.popover("dispose").popover({
            trigger:trigger,
            html:true,
            container:'body',
            content:'<p>' + errorObject.message + '</p>',
            placement:"bottom",
            template: '<div class="popover popError" role="tooltip"><div class="popover-arrow"></div><div class="popover-content"></div></div>',
        }).popover('show');
    formGroup.find("label").addClass("form-control-label");
	//$("button[type=submit]").removeClass("btn-primary").removeClass("btn-warning").addClass("btn-danger");
};
bootstrap_warning = function(warningObject, trigger) {
	trigger = trigger || "focus, hover";
	var formGroup = $(warningObject.element).parent();
	formGroup.addClass("has-warning");
	formGroup.find('input, textarea')
		.addClass("form-control-warning")
		.popover("dispose").popover({
		trigger:trigger,
		html:true,
		container:'body',
		content:'<p>' + warningObject.message + '</p>',
		placement:"bottom",
		template: '<div class="popover popWarning" role="tooltip"><div class="popover-arrow"></div><div class="popover-content"></div></div>',
	}).popover('show');
	formGroup.find("label").addClass("form-control-label");
    //$("button[type=submit]").removeClass("btn-primary").removeClass("btn-danger").addClass("btn-warning");
};
bootstrap_reset = function(element) {
    //all = all || false;
    //if(all === true) {
    //    $.each(formgrput, function (key, val) {
    //        $("#"+val).removeClass('has-error').removeClass('has-warning').removeClass('has-success').find('input, iframe, select').popover('destroy');
    //        $("#"+val+" > .iconStatus").removeClass('glyphicon-remove').removeClass('glyphicon-ok');
    //    });
    //} else {
    //    $("#"+formgrput).removeClass('has-error').removeClass('has-warning').removeClass('has-success').find('input, iframe, select').popover('destroy');
    //    $("#"+formgrput+" > .iconStatus").removeClass('glyphicon-remove').removeClass('glyphicon-ok');
    //}
    var formGroup = $(element).parent();
	formGroup.removeClass("has-danger");
	formGroup.find("input, textarea")
		.removeClass("form-control-danger")
		.popover("dispose");
	formGroup.find("label").removeClass("form-control-label");
	//$("button[type=submit]").removeClass("btn-danger").removeClass("btn-warning").addClass("btn-primary");
};
