import { createSlice } from "@reduxjs/toolkit";
import { salesOrdersList } from "../Data/SalesOrdersData";
import Swal from 'sweetalert2';

const initialState = {
    salesOrdersList: salesOrdersList,
    salesOrderDetails: [],
    salesOrderEdit: [],
}

const salesOrdersSlice = createSlice({
    name: 'salesOrders',
    initialState,
    reducers: {
        deleteSlo: (state, { payload }) => {
            state.salesOrdersList = state.salesOrdersList.filter(slo => slo.soId !== payload.soId);
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

        addSlo: (state, { payload }) => {
            state.salesOrdersList.push(payload);
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
                title: "SLO added successfully"
            });
        },

        sloDetails: (state, { payload }) => {
            state.salesOrderDetails = [];
            state.salesOrderDetails.push(payload.salesOrder);
        },

        sloEdit: (state, { payload }) => {
            state.salesOrderEdit = [];
            state.salesOrderEdit.push(payload.salesOrder);
        },

        sloUpdate: (state, { payload }) => {
            const slo = state.salesOrdersList.find(slo => slo.soId === payload.soId);
            slo.soName = payload.soName;
            slo.status = payload.status;
            slo.createdAt = payload.createdAt;
            slo.amount = payload.amount;
            slo.customerName = payload.customerName;
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

export const { deleteSlo, addSlo, sloDetails, sloEdit, sloUpdate } = salesOrdersSlice.actions;
export default salesOrdersSlice.reducer;
