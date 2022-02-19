function order() {
  let orderNo = prompt("How many packs of Nattō do you want?");
  alert("Thank you for purchasing " + orderNo + " packs of Nattō! 😋");
}
let buy = document.querySelector(".buyButton");
buy.addEventListener("click", order);
