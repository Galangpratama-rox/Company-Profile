// const button = document.getElementById("but");
// // button.addEventListener("click", function () {
// //   button.style.backgroundColor = "black";
// // });

// const input = document.getElementById("nama");
// const buttons = document.getElementById("button-hasil");
// const result = document.getElementById("hasil");

// button.addEventListener("click", function () {
//   const value = input.value;
//   result.innerText = value;
// });

const namaBarang = document.getElementById("barang");
const buttonAdd = document.getElementById("add-button");
const list = document.getElementById("ul");

buttonAdd.addEventListener("click", function () {
  const li = document.createElement("li");

  // isi text
  li.textContent = namaBarang.value + " ";

  // tombol hapus
  const btnHapus = document.createElement("button");
  btnHapus.textContent = "Delete";

  // event hapus
  btnHapus.addEventListener("click", function () {
    li.remove();
  });

  // gabung
  li.appendChild(btnHapus);
  list.appendChild(li);
});

const box = document.getElementById("box");

box.addEventListener("click", () => {
  box.classList.toggle("active");
});
