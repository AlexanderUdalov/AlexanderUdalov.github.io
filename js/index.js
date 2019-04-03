'use strict';

$(document).ready(function () {
	var $button = $('button[type="submit"]');

	$button.on('click', function () {

		var $this = $(this);
		if ($this.hasClass('active') || $this.hasClass('success') || $this.hasClass('failed') ) {
			return false;
		}
		$this.addClass('active');
		setTimeout(function () {
			$this.addClass('loader');
		}, 125);

		var xhr = new XMLHttpRequest();
        var url = 'https://localhost:9020/api/unityservice/';
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function() { 
           if (xhr.readyState != 4) return;
           if (xhr.status != 200) {
               	$this.removeClass('loader active');
				$this.text('Ошибка');
				$this.addClass('failed animated pulse');
				setTimeout(function () {
					$this.text('Запустить Unity');
					$this.removeClass('failed animated pulse');
					$this.blur();
				}, 2900);
           } else {
               	$this.removeClass('loader active');
				$this.text('Успешно');
				$this.addClass('success animated pulse');
				setTimeout(function () {
					$this.text('Запустить Unity');
					$this.removeClass('success animated pulse');
					$this.blur();
				}, 2900);
           }
        }

       xhr.send("Vrap");
	});
});
