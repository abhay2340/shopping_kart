// let mainProduct = document.getElementById("main-prod");
// let subProduct = document.getElementsByClassName("sub-product");
// if (
//   mainProduct.src == "http://127.0.0.1:5500/html%20css/kart/image-product-1.jpg"
// ) {
//   console.log("ansjdsjd");
// }
// console.log(subProduct.id);
// let changeImage = () => {
//   console.log("sdjdsjds");
//   for (let i = 1; i <= 4; i++) {
//     if (subProduct.id == `sub-product-${i}`) {
//       mainProduct.src = `main-product-${i}.jpg`;
//     }
//   }
// };
// console.log("anj");
// var getId = (btn) => {
// let x = btn.id;
//   console.log(btn.id);
// };
// console.log(getId());

// subProduct.addEventListener("click", () => {
//   console.log("objet");
// });
let kartImage = document.querySelector(".kart-image");
let dropdownContent = document.getElementsByClassName("dropdown-content");
let overlay = document.querySelector(".overlay");
let profileborder = document.getElementsByClassName("profile");
let status1 = document.getElementById("status");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let finalPrice = document.getElementById("final-price");
let addToKart = document.querySelector(".add-to-kart");
let checkout = document.querySelector(".checkout");
let noOfProduct = 0;
plus.addEventListener("click", () => {
  noOfProduct++;
  profileborder[0].classList.add("profileborder");

  status1.innerText = noOfProduct;
});
minus.addEventListener("click", () => {
  if (noOfProduct > 0) {
    noOfProduct--;
    if (noOfProduct == 0) {
      profileborder[0].classList.remove("profileborder");
    }
  }
  status1.innerText = noOfProduct;
});

addToKart.addEventListener("click", () => {
  finalPrice.innerText = `$125.00 X ${noOfProduct}  $${noOfProduct * 125} .00`;
});
// #####################add to kart####################

// ****************************checkout alternator*********************

// let x = 0;

kartImage.addEventListener("click", () => {
  dropdownContent[0].classList.add("hidden");
  overlay.classList.remove("hiddenn");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hiddenn");
  dropdownContent[0].classList.remove("hidden");
});
checkout.addEventListener("click", () => {
  overlay.classList.add("hiddenn");
  dropdownContent[0].classList.remove("hidden");
  alert("Item will be shipped soon.");
});
