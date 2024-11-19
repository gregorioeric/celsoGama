const express = require("express");
const LoanBooksController = require("../controllers/loanBooksController");

const loanBooksRoute = express.Router();

loanBooksRoute.get("/", LoanBooksController.getLoanBooks);

loanBooksRoute.post("/", LoanBooksController.postLoanBook);

loanBooksRoute.get("/editLoan/:id", LoanBooksController.editLoan);

loanBooksRoute.post("/updateLoan/:id", LoanBooksController.updateLoan);

loanBooksRoute.post("/deleteLoan/:id", LoanBooksController.deleteLoan);

module.exports = loanBooksRoute;
