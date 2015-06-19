'use strict';

$(function() {
	$("#name").on('click', function() {
		$.get("http://localhost:3000/adjective", function(response) {
			var adjective = response.word;
			$('#adjective').text(adjective);
		});
		$.get("http://localhost:3000/verb", function(response) {
			var verb = response.word;
			$('#verb').text(verb);
		});
		$.get("http://localhost:3000/noun", function(response) {
			var noun = response.word;
			$('#noun').text(noun);
		});
	});
	$('#submitWords').on('submit', function(e) {
		e.preventDefault();
		var adjective = $("[name=adjective]").val();
		var adjPost;
		var verb = $("[name=verb]").val();
		var verbPost;
		var noun = $("[name=noun]").val();
		var nounPost;

		if(adjective) {
			adjPost = {word: adjective};
			$.post("adjective", adjPost, function(response) {
				var adjectiveRes = response.msg;
				$("#adjectiveRes").text(adjectiveRes);
			});
		}
		if(verb) {
			verbPost = {word: verb};
			$.post("verb", verbPost, function(response) {
				var verbRes = response.msg;
				$("#verbRes").text(verRes);
			});
		}
		if(noun) {
			nounPost = {word: noun};
			$.post("noun", nounPost, function(response) {
				var nounRes = response.msg;
				$("#nounRes").text(nounRes);
			});
		}
	});
});