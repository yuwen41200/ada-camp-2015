$(document).ready(function() {
	'use strict';

	$('.ui.dropdown').dropdown({
		on: 'hover'
	});

	$('.masthead .information').transition('scale in', 1000);

	var animateIcons = function() {
		$('.ui.feature .icon .icon').transition({
			animation: 'horizontal flip',
			duration: 600,
		})
		.transition({
			animation: 'horizontal flip',
			duration: 600,
		});
	};

	setInterval(animateIcons, 3200);

	$('.ui.radio.checkbox').checkbox();

	$('.ui.form input[name="birth"]').datetimepicker({
		timepicker: false,
		format: 'Y/m/d',
		lang: 'zh-TW'
	});

	var validationRules = {
		name: {
			identifier: 'name',
			rules: [
				{
					type: 'empty',
					prompt: '請輸入姓名'
				}
			]
		},
		birth: {
			identifier: 'birth',
			rules: [
				{
					type: 'empty',
					prompt: '請輸入生日'
				}
			]
		},
		phone: {
			identifier: 'phone',
			rules: [
				{
					type: 'empty',
					prompt: '請輸入行動電話'
				},
				{
					type: 'maxLength[10]',
					prompt: '行動電話的長度超過 10 個字元'
				},
				{
					type: 'length[10]',
					prompt: '行動電話的長度小於 10 個字元'
				},
				{
					type: 'integer',
					prompt: '行動電話無效'
				}
			]
		},
		idnum: {
			identifier: 'idnum',
			rules: [
				{
					type: 'empty',
					prompt: '請輸入身份證字號'
				},
				{
					type: 'maxLength[10]',
					prompt: '身份證字號的長度超過 10 個字元'
				},
				{
					type: 'length[10]',
					prompt: '身份證字號的長度小於 10 個字元'
				}
			]
		},
		email: {
			identifier: 'email',
			rules: [
				{
					type: 'empty',
					prompt: '請輸入電子郵件信箱'
				},
				{
					type: 'email',
					prompt: '電子郵件信箱無效'
				}
			]
		}
	};

	$('.ui.form').form(validationRules, {
		on: 'blur'
	});

});

function goToApply() {
	'use strict';
	var destination = document.getElementsByTagName('section')[2];
	$('html, body').animate({
		scrollTop: $(destination).offset().top
	}, 800);
}