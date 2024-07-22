import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../Data/ProductsData";
import Swal from 'sweetalert2';

const initialState = {
    productsList: productsList,
    productDetails: [],
    productEditArr: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        deleteProduct: (state, { payload }) => {
            state.productsList = state.productsList.filter(product => product.name !== payload.name);
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

        addProduct: (state, { payload }) => {
            state.productsList.push(payload);
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
                title: "Product added successfully"
            });
        },

        productDetails: (state, { payload }) => {
            state.productDetails = [];
            state.productDetails.push(payload.product);
        },

        productEdit: (state, { payload }) => {
            state.productEditArr = [];
            state.productEditArr.push(payload.product);
        },

        productUpdate: (state, { payload }) => {
            const product = state.productsList.find(product => product.name === payload.name);
            product.brand = payload.brand;
            product.price = payload.price;
            product.status = payload.status;
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

export const { deleteProduct, addProduct, productDetails, productEdit, productUpdate } = productsSlice.actions;
export default productsSlice.reducer;