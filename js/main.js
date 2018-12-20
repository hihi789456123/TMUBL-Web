document.addEventListener("DOMContentLoaded", function() {
	var promise = document.getElementById("autoplay").play();

	if (promise !== undefined) {
		promise.then(function() {}).catch(function(error) {
			var autoplayCover = document.createElement("div");
			autoplayCover.id = "autoplay-cover";
			autoplayCover.innerHTML = `<div class="space" ></div><div class="space"></div><img src="img/tmus.png"><p style="color:#f0fff0;">Operations Interrupted. Click to Continue...</p>`;
			document.body.appendChild(autoplayCover);
			autoplayCover.addEventListener("click", function() {
				autoplayCover.className = "hide";
				setTimeout(function() {
					document.body.removeChild(autoplayCover);
				}, 1000);
				document.getElementById("autoplay").play();
			});
		});
	}
});

