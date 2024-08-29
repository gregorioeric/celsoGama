const inputImage = document.querySelector('input[name="book_image"]');
const imgBook = document.querySelector("#img-book");

inputImage.addEventListener("input", (e) => {
  const input = e.target.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    imgBook.src = e.target.result;
  });

  reader.readAsDataURL(input);
});
