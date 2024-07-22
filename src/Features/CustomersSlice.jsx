import { createSlice } from "@reduxjs/toolkit";
import { customersList } from "../Data/CustomersData";
import Swal from 'sweetalert2';

const initialState = {
    customersList: customersList,
    customerDetails: [],
    customerEdit: [],
}

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        deleteCus: (state, { payload }) => {
            state.customersList = state.customersList.filter(customer => customer.email !== payload.email);
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

        addCus: (state, { payload }) => {
            state.customersList.push(payload);
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
                title: "Customer added successfully"
            });
        },

        cusDetails: (state, { payload }) => {
            state.customerDetails = [];
            state.customerDetails.push(payload.customer);
        },

        cusEdit: (state, { payload }) => {
            state.customerEdit = [];
            state.customerEdit.push(payload.customer);
        },

        cusUpdate: (state, { payload }) => {
            const customer = state.customersList.find(cus => cus.email === payload.email);
            customer.name = payload.name;
            customer.phNo = payload.phNo;
            customer.gender = payload.gender;
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

export const { deleteCus, addCus, cusDetails, cusEdit, cusUpdate } = customersSlice.actions;
export default customersSlice.reducer;