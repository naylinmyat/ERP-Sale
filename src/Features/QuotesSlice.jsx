import { createSlice } from "@reduxjs/toolkit";
import { quotesList } from "../Data/QuotesData";
import Swal from 'sweetalert2';

const initialState = {
    quotesList: quotesList,
    quoteDetails: [],
    quoteEdit: [],
}

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        deleteQuote: (state, { payload }) => {
            state.quotesList = state.quotesList.filter(quote => quote.qId !== payload.qId);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Deleted successfully"
            });
        },

        addQuote: (state, { payload }) => {
            state.quotesList.push(payload);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Quote added successfully"
            });
        },

        quoteDetails: (state, { payload }) => {
            state.quoteDetails = [];
            state.quoteDetails.push(payload.quote);
        },

        quoteEdit: (state, { payload }) => {
            state.quoteEdit = [];
            state.quoteEdit.push(payload.quote);
        },

        quoteUpdate: (state, { payload }) => {
            const quote = state.quotesList.find(quote => quote.qId === payload.qId);
            quote.qName = payload.qName;
            quote.status = payload.status;
            quote.createdAt = payload.createdAt;
            quote.amount = payload.amount;
            quote.customerName = payload.customerName;
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Updated successfully"
            });
        }
    }
})

export const { quoteDetails, deleteQuote, addQuote, quoteEdit, quoteUpdate  } = quotesSlice.actions;
export default quotesSlice.reducer;
