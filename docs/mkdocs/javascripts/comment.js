document.addEventListener("DOMContentLoaded", function() {
	const target = document.querySelector('main');
	if (target) {
	  const script = document.createElement('script');
	  script.src = 'https://utteranc.es/client.js';
	  script.async = true;
	  script.setAttribute('repo', 'Github-Anderson/github-anderson.github.io');
	  script.setAttribute('issue-term', 'pathname');
	  script.setAttribute('theme', 'github-light');
	  script.setAttribute('crossorigin', 'anonymous');
	  script.onload = function() {
		console.log("Utterances script loaded and executed.");
	  };
	  target.appendChild(script);
	}
  });
  