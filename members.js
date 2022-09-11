const slide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links-container');

	burger.addEventListener('click', () => {
		console.log("hi");
		nav.classList.toggle('nav-active');
	});
}

let frameON = false;


ath_cv = "https://drive.google.com/file/d/1iA4zEE4MunVZDVXkAWa6Xb4axuALifXU/preview"
apj_cv = "https://drive.google.com/file/d/1iA4zEE4MunVZDVXkAWa6Xb4axuALifXU/preview"
min_cv = "https://drive.google.com/file/d/1iA4zEE4MunVZDVXkAWa6Xb4axuALifXU/preview"
sri_cv = "https://drive.google.com/file/d/19y68jDWElziyMT7Us39vaWKcTQJFBsfV/preview"

const frameSlide = () => {
	const frame = document.querySelector('.side-frame');
	//frame.setAttribute("src", "");
	const ath = document.querySelector('.ATH');
	ath.addEventListener('click', () => {
		//console.log('hello');
		frame.classList.add('side-frame-on');
		frame.setAttribute('src', ath_cv);
		frameON = true;
	});
	const apj = document.querySelector('.APJ');
	apj.addEventListener('click', () => {
		//console.log('hello');
		frame.classList.add('side-frame-on');
		frame.setAttribute('src', apj_cv);
		frameON = true;
	});
	const min = document.querySelector('.MIN');
	min.addEventListener('click', () => {
		//console.log('hello');
		frame.classList.add('side-frame-on');
		frame.setAttribute('src', min_cv);
		frameON = true;
	});
	const sri = document.querySelector('.SRI');
	sri.addEventListener('click', () => {
		//console.log('hello');
		frame.classList.add('side-frame-on');
		frame.setAttribute('src', sri_cv);
		frameON = true;
		
	});

	

}


slide();
frameSlide();