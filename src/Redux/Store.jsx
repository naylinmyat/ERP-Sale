import { configureStore } from "@reduxjs/toolkit"
import customersReducer from "../Features/CustomersSlice"
import productsReducer from "../Features/ProductsSlice"
import quotesReducer from "../Features/QuotesSlice"
import salesOrdersReducer from "../Features/SalesOrdersSlice"
import invoicesReducer from "../Features/InvoicesSlice"
import paymebtsReducer from "../Features/PaymentsSlice"

export const store = configureStore({
    reducer: {
        customers: customersReducer,
        products: productsReducer,
        quotes: quotesReducer,
        salesOrders: salesOrdersReducer,
        invoices: invoicesReducer,
        payments: paymebtsReducer,
    }
})