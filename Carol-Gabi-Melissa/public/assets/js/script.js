const inputImage = document.querySelector('input[name="book_image"]');
const imgBook = document.querySelector("#img-book");

if (inputImage !== null) {
  inputImage.addEventListener("input", (e) => {
    const input = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      imgBook.src = e.target.result;
    });

    reader.readAsDataURL(input);
  });
}

// criando codigo para pegar livros da API

const showBooks = document.querySelector("#book-options");
const selectBook = document.querySelector("#select-book");
const listBooks = document.querySelector("#list-books");
const getBook = document.querySelector("#get-book");
const getBookValue = document.querySelector("input[name='loanBook']");
const searchBook = document.querySelector("input[name='search_book']");
const bookOptionsAll = document.querySelectorAll("#book-options li");

const getAllBooks = async () => {
  const req = await fetch("http://localhost:7000/getAllBooksAPI");
  const res = await req.json();

  res.map((book) => {
    const li = document.createElement("li");
    li.innerHTML = book.book_name;
    if (showBooks !== null) {
      showBooks.appendChild(li);
    }
  });

  const bookOptionsAll = document.querySelectorAll("#book-options li");
  bookOptionsAll.forEach((single) => {
    single.addEventListener("click", () => {
      text = single.textContent;
      getBookValue.value = text;
      listBooks.classList.remove("active");
    });
  });

  if (searchBook !== null) {
    searchBook.addEventListener("input", (e) => {
      const filter = e.target.value.toUpperCase();
      const li = showBooks.getElementsByTagName("li");

      for (let i = 0; i < li.length; i++) {
        const liCount = li[i];

        const textValue = liCount.textContent || liCount.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          liCount.style.display = "";
        } else {
          liCount.style.display = "none";
        }
      }
    });
  }
};

if (getBook !== null) {
  getBook.addEventListener("click", () => {
    listBooks.classList.toggle("active");
  });
}

getAllBooks();
