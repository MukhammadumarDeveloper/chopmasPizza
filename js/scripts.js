// Get all necessary elements
var elFormPizza = document.querySelector('.main-form__wrapper');
var elSelectSize = elFormPizza.querySelector('.js-selection__size');
var elRadioWidth = elFormPizza.querySelector('.js-radio__size-box');
var elProductsBox = elFormPizza.querySelector('.js-products__box');
var elAdditionsBox = elFormPizza.querySelector('.js-additions__box');

// Results
var elSelectSizeResult = elFormPizza.querySelector('.js-selection__size-result');
var elRadioWidthResult = elFormPizza.querySelector('.js-radio__size-box-result');
var elProductsResult = elFormPizza.querySelector('.js-poducts-result');
var elAdditionsResult = elFormPizza.querySelector('.js-additions-result');


// All existing Menu 
var sizeOptions = ['yupqa', 'o`rta', 'qalin'];
var widthOptions = ['25 cm', '30 cm', '35 cm'];
var productOptions = ['Pomidor', 'Kurka go`shti', 'Zaytun', 'Tuzlangan bodring', 'Qo`ziqorin', 'Qazi'];
var additonOptions = ['Achchiq', 'Sosiskali'];


/* ================================================
Add addEventListener to FormPizza
================================================ */

elFormPizza.addEventListener('submit', function (evt) {
  evt.preventDefault();
});


/* =================================================
SELECT SIZE
================================================= */

// Add options to elSelectSize
for (var i = 0; i < sizeOptions.length; i++) {
  var newSelectOption = document.createElement('option');
  newSelectOption.setAttribute('value', sizeOptions[i]);
  newSelectOption.textContent = sizeOptions[i];
  elSelectSize.appendChild(newSelectOption);
};

elSelectSize.addEventListener('change', function (evt) {
  evt.preventDefault();

  var sizeChoosen = [];

  var selectSize = elSelectSize.value.trim();
  sizeChoosen.push(selectSize);
  elSelectSizeResult.textContent = selectSize;


  // console.log(sizeOptions);
  // console.log(sizeChoosen);

});



/* =================================================
SELECT WIDTH
================================================= */

// Add options to elRadioWidth
for (var i = 0; i < widthOptions.length; i++) {

  // Create labels to input radios
  var elnewWidthOptionLabel = document.createElement('label');
  elnewWidthOptionLabel.classList.add('d-flex', 'align-items-center', 'mr-5', 'px-2', 'py-4',
    'rounded-circle', 'border');
  elnewWidthOptionLabel.textContent = widthOptions[i];
  elRadioWidth.appendChild(elnewWidthOptionLabel);

  // Create input radios to labels
  var elnewWidthOptionInput = document.createElement('input');
  elnewWidthOptionInput.setAttribute('value', widthOptions[i]);
  elnewWidthOptionInput.setAttribute('name', 'pizza_width');
  elnewWidthOptionInput.setAttribute('type', 'radio');
  elnewWidthOptionInput.classList.add('ml-1');
  elnewWidthOptionLabel.appendChild(elnewWidthOptionInput)

  // Add eventListener and check weather radio checked 
  elnewWidthOptionInput.addEventListener('change', function () {
    var widthChoosen = [];
    if (this.checked) {
      widthChoosen.push(this.value);
      elRadioWidthResult.textContent = this.value;
    }
    // console.log(widthChoosen);
  });

};


/* =================================================
SELECT PRODUCTS BOX
================================================= */

var productsChoosen = [];

for (var i = 0; i < productOptions.length; i++) {

  // Create labels to input checkbox
  var elNewProductsLabel = document.createElement('label');
  elNewProductsLabel.classList.add('align-items-center', 'mr-3', 'p-1', 'border');
  elNewProductsLabel.textContent = productOptions[i];
  elProductsBox.appendChild(elNewProductsLabel);

  // Create input checkboxes to labels
  var elNewProductsInput = document.createElement('input');
  elNewProductsInput.setAttribute('value', productOptions[i]);
  elNewProductsInput.setAttribute('name', 'products');
  elNewProductsInput.setAttribute('type', 'checkbox');
  elNewProductsInput.classList.add('ml-1');
  elNewProductsLabel.appendChild(elNewProductsInput);



  // Add eventListener and check weather checkbox checked 
  elNewProductsInput.addEventListener('change', function () {

    if (productsChoosen.includes(this.value)) {
      var productIndex = productsChoosen.indexOf(this.value);
      productsChoosen.splice(productIndex, 1);
    } else {
      productsChoosen.push(this.value);
    }

    elProductsResult.textContent = productsChoosen.join(', ');
    // console.log(productsChoosen);
  });

};

/* =================================================
SELECT PRODUCTS BOX
================================================= */

var additionsChoosen = [];

for (var i = 0; i < additonOptions.length; i++) {

  // Create labels to input checkbox
  var elAdditionsLabel = document.createElement('label');
  elAdditionsLabel.classList.add('align-items-center', 'mr-3', 'p-1', 'border');
  elAdditionsLabel.textContent = additonOptions[i];
  elAdditionsBox.appendChild(elAdditionsLabel);

  // Create input checkboxes to labels
  var elAdditionsInput = document.createElement('input');
  elAdditionsInput.setAttribute('value', additonOptions[i]);
  elAdditionsInput.setAttribute('name', 'products');
  elAdditionsInput.setAttribute('type', 'checkbox');
  elAdditionsInput.classList.add('ml-1');
  elAdditionsLabel.appendChild(elAdditionsInput);



  // Add eventListener and check weather checkbox checked 
  elAdditionsInput.addEventListener('change', function () {

    if (additionsChoosen.includes(this.value)) {
      var productIndex = additionsChoosen.indexOf(this.value);
      additionsChoosen.splice(productIndex, 1);
    } else {
      additionsChoosen.push(this.value);
    }

    elAdditionsResult.textContent = additionsChoosen.join(', ');
    // console.log(additionsChoosen);
  });

};