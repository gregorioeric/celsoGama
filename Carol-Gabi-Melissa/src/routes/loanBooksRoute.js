const express = require("express");
const LoanBooksController = require("../controllers/loanBooksController");

const loanRooksRoute = express.Router();

loanRooksRoute.get("/", LoanBooksController.getLoanBooks);

loanRooksRoute.post("/", LoanBooksController.postLoanBook);

module.exports = loanRooksRoute;
