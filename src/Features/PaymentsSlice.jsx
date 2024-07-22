import { createSlice } from "@reduxjs/toolkit";
import { paymentsList } from "../Data/PaymentsData";
import Swal from 'sweetalert2';

const initialState = {
    paymentsList: paymentsList,
    paymentDetails: [],
}

const paymentsSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {
        paymentDetails: (state, { payload }) => {
            state.paymentDetails = [];
            state.paymentDetails.push(payload.payment);
        },
    }
})

export const { paymentDetails } = paymentsSlice.actions;
export default paymentsSlice.reducer;
