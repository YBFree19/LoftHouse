const navBtn = document.querySelector('.nav-icon-btn')

const navIcon = document.querySelector('.nav-icon')

const headerTopRow = document.querySelector('.header__top-row')

navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active')
	headerTopRow.classList.toggle('header__top-row--mobile')
	document.body.classList.toggle('no-scroll')
}

//! phoneMask

mask('[data-tel-input]')

const phoneInputs = document.querySelectorAll('[data-tel-input]')
phoneInputs.forEach(input => {
	input.addEventListener('input', () => {
		if (input.value == '+') input.value = ''
	})

	input.addEventListener('blur', () => {
		if (input.value == '+') input.value = ''
	})
})

//! Yandex Map

ymaps.ready(init)

let myMap

function init() {
	myMap = new ymaps.Map('map', {
		center: [47.216876, 39.720214],
		zoom: 16,
	})

	let myPlacemark = new ymaps.Placemark(
		[47.216876, 39.720214],
		{
			balloonContent: `
         <div class="balloon">
            <div class="balloon__address">ул. Ульяновская д. 58</div>
            <div class="ballon__contacts">
               <a href="tel:+78121234567">+ 7 (812) 123-45-67</a>
            </div>
         </div>
      `,
		},
		{
			iconImageHref: '../IMG/map/location-pin.svg',
			iconImageSize: [30, 42],
			iconImageOffset: [-3, -42],
		}
	)

	myMap.controls.add('smallZoomControl')
	myMap.geoObjects.add(myPlacemark)
}
