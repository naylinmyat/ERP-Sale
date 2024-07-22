import { createSlice } from "@reduxjs/toolkit";
import { invoicesList } from "../Data/InvoicesData";
import Swal from 'sweetalert2';

const initialState = {
    invoicesList: invoicesList,
    invoiceDetails: [],
    invoiceEdit: [],
}

const invoicesSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        deleteInvoice: (state, { payload }) => {
            state.invoicesList = state.invoicesList.filter(invoice => invoice.iId !== payload.iId);
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

        addInvoice: (state, { payload }) => {
            state.invoicesList.push(payload);
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
                title: "Invoice added successfully"
            });
        },

        invoiceDetails: (state, { payload }) => {
            state.invoiceDetails = [];
            state.invoiceDetails.push(payload.invoice);
        },

        invoiceEdit: (state, { payload }) => {
            state.invoiceEdit = [];
            state.invoiceEdit.push(payload.invoice);
        },

        invoiceUpdate: (state, { payload }) => {
            const invoice = state.invoicesList.find(invoice => invoice.iId === payload.iId);
            invoice.customerName = payload.customerName;
            invoice.status = payload.status;
            invoice.createdAt = payload.createdAt;
            invoice.amount = payload.amount;
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

export const { deleteInvoice, addInvoice, invoiceDetails, invoiceEdit, invoiceUpdate } = invoicesSlice.actions;
export default invoicesSlice.reducer;
