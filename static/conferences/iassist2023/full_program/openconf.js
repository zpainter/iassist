// +----------------------------------------------------------------------+
// | OpenConf                                                             |
// +----------------------------------------------------------------------+
// | Copyright (c) 2002-2022 Zakon Group LLC.  All Rights Reserved.       |
// +----------------------------------------------------------------------+
// | This source file is subject to the OpenConf License, available on    |
// | the OpenConf web site: www.OpenConf.com                              |
// +----------------------------------------------------------------------+

var oc_transAR = new Array(); // Translation strings

// oc_sprintf - sprintf handler
String.prototype.oc_sprintf = function() {
  var args = arguments;
  return this.replace(/\%(\d+)\$\w/g, function(match, number) { 
  	n = number - 1;
    return typeof args[n] != 'undefined'
      ? args[n]
      : '{' + number + '}'
    ;
  });
};

// popup - displays an informational blurb
var popupObj;
function popup(fldId) {
	if (document.getElementById) {
		var field;
		if (popupObj) { popupObj.close(); }
		if (field = document.getElementById(fldId)) {
			popupObj = window.open('','info','width=300,height=300,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no');
			popupObj.document.write('<html><head><title>Click to Close</title></head><body style="margin:10px; padding:0; font-family: Arial, Helvetica, sans-serif; white-space: pre;" onclick="self.close()"><pre>' + field.innerHTML + '</pre></body></html>');
			popupObj.focus();
		}
	}
}

// oc_checkWordNum - checks textarea field length for # of words
// Note: oc_transAR must be set globally prior to calling
function oc_checkWordNum(fieldID, fieldName, max, min) {
	min = typeof min !== 'undefined' ? parseInt(min) : 0;
	max = typeof max !== 'undefined' ? parseInt(max) : 0;
	var msg = '%1$s field contains %2$d words; limit is %3$s words.';
	var fieldObj = document.getElementById(fieldID);
	var oc_fieldContent = fieldObj.value.replace(/^\s\s*/, "").replace(/\s\s*$/, "").replace(/\s+/g, " ");
	var oc_fieldLength = 0;
	if ( (oc_fieldContent != "") && (oc_fieldContent != " ") ) {
		oc_fieldLength = oc_fieldContent.split(" ").length;
	}
	if ( ( (max > 0) && (oc_fieldLength > max) ) || ( (min > 0) && (oc_fieldLength < min) ) ) {
		var limit = '';
		if (min > 0) {
			limit = min;
			if (max > 0) {
				if (min != max) {
					limit = limit + '-' + max;
				}
			} else {
				limit = limit + '+';
			}
		} else {
			limit = max;
		}
		alert(oc_transAR[msg].oc_sprintf(fieldName, oc_fieldLength, limit));
		window.setTimeout( function () { fieldObj.focus(); }, 0 );
	}
}

// oc_checkCharNum - checks text field length for # of characters
// Note: oc_transAR must be set globally prior to calling
function oc_checkCharNum(fieldID, fieldName, max, min) {
	min = typeof min !== 'undefined' ? parseInt(min) : 0;
	max = typeof max !== 'undefined' ? parseInt(max) : 0;
	var msg = '%1$s field contains %2$d characters; limit is %3$s characters.';
	var fieldObj = document.getElementById(fieldID);
	var oc_fieldContent = fieldObj.value.replace(/^\s\s*/, "").replace(/\s\s*$/, "").replace(/\s+/g, " ");
	var oc_fieldLength = 0;
	if ( (oc_fieldContent != "") && (oc_fieldContent != " ") ) {
		oc_fieldLength = oc_fieldContent.length;
	}
	if ( ( (max > 0) && (oc_fieldLength > max) ) || ( (min > 0) && (oc_fieldLength < min) ) ) {
		if (min > 0) {
			limit = min;
			if (max > 0) {
				if (min != max) {
					limit = limit + '-' + max;
				}
			} else {
				limit = limit + '+';
			}
		} else {
			limit = max;
		}
		alert(oc_transAR[msg].oc_sprintf(fieldName, oc_fieldLength, limit));
		window.setTimeout( function () { fieldObj.focus(); }, 0 );
	}}
	function oc_checkB() { var oc_b=document.getElementById("powe"+"red"); if (!oc_b||((oc_b.currentStyle ? oc_b.currentStyle.display : getComputedStyle(oc_b, null).display)==='none')||((oc_b.currentStyle ? oc_b.currentStyle.visibility : getComputedStyle(oc_b, null).visibility)==='hidden')){document.body.style.display='none';}
}

// hide submit button and show processing notice
function oc_processingForm() {
	document.getElementById("submit").style.visibility="hidden";
	document.getElementById("processing").style.visibility="visible";
}

// add form processing notice event listener
function oc_setupProcessingForm(formName) {
	if (document.addEventListener) {
		document.getElementById(formName).addEventListener("submit", oc_processingForm);
	} else { // IE < 9 support
		document.getElementById(formName).attachEvent("onsubmit", oc_processingForm);
	}
}

// toggle fieldset display
function oc_fsToggle(oc_legend) {
	var oc_fsdiv = document.getElementById(oc_legend.parentNode.id + '_div');
	if (oc_fsdiv.style.display == 'none') {
		oc_fsdiv.style.display = 'block';
		oc_legend.childNodes[1].firstChild.nodeValue = '(collapse)';
		oc_fsdiv.parentNode.scrollIntoView();
	} else {
		oc_fsdiv.style.display = 'none';
		oc_legend.childNodes[1].firstChild.nodeValue = '(expand)';
	}
}

// collapse/expand all fieldsets (w=0/collapse, w=1/expand)
function oc_fsCollapseExpand(w) {
	var oc_legends = document.getElementsByTagName('legend');
	for (var i=0; i<oc_legends.length; i++) {
		var oc_fsdiv = document.getElementById(oc_legends[i].parentNode.id + '_div');
		if (w == 0) {
			oc_fsdiv.style.display = 'none';
			oc_legends[i].childNodes[1].firstChild.nodeValue = '(expand)';
		} else {
			oc_fsdiv.style.display = 'block';
			oc_legends[i].childNodes[1].firstChild.nodeValue = '(collapse)';
		}
	}
}

// toggle checkboxes
function oc_toggleCheckboxes(boxstate, name) {
	var boxObj = document.getElementsByName(name);
	for (var i=0; i<boxObj.length; i++) {
		boxObj[i].checked = boxstate;
	}
}

// updates email address(es) to be displayed for confirmation on forms
function oc_updateSubmitEmailAddresses(evt, multiEmail=false, emailAuthorRecipients = 0) {
	if ( (evt !== null) && ( ! evt.target.id.match(/^(?:contactid|email)/)) ) { return; }
	var email='';
	if (multiEmail) {
		if (emailAuthorRecipients == 1) {
			var emailNodes = document.querySelectorAll("[name^=email]");
			Array.prototype.forEach.call(emailNodes, function(emailObj) { 
				if (emailObj.value != '') {
					email += emailObj.value + ', ';
				}
			});
			email = email.replace(/, $/, '');
		} else {
			var contactidObj = document.getElementById('contactid');
			if (contactidObj && contactidObj.value.match(/^\d+$/)) {
				email = document.getElementById('email' + contactidObj.value).value;
			}
		}
	} else if (document.getElementById('email')) {
		email = document.getElementById('email').value;
	}
	if (email != '') {
		document.getElementById('oc_submit_emailConfirmInner').style.display = 'block';
		document.getElementById('oc_submit_emailConfirm').innerText = email;
	} else {
		document.getElementById('oc_submit_emailConfirmInner').style.display = 'none';
		document.getElementById('oc_submit_emailConfirm').innerText = '';
	}
}
