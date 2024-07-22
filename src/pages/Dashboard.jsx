import React from 'react'
import { useSelector } from 'react-redux'
import DashboardCard from '../components/DashboardCard'
import {
  UsersIcon,
  ShoppingCartIcon,
  ChatBubbleBottomCenterIcon,
  ClipboardDocumentListIcon,
  ReceiptPercentIcon
} from '@heroicons/react/24/outline'
import DoughnutChart from '../components/DashboardDoughnutChart'
import PieChart from '../components/DashboardPieChart'
import BarChart from '../components/DashboardBarChart'

const Dashboard = () => {
  const { customersList } = useSelector((store) => store.customers)
  const { productsList } = useSelector((store) => store.products)
  const { quotesList } = useSelector((store) => store.quotes)
  const { salesOrdersList } = useSelector((store) => store.salesOrders)
  const { invoicesList } = useSelector((store) => store.invoices)

  const openQuotesList = quotesList.filter(quote => quote.status === "open");
  const openQuotesCount = openQuotesList.length;
  const closeQuotesCount = quotesList.length - openQuotesCount;

  const openSalesOrdersList = salesOrdersList.filter(salesOrder => salesOrder.status === "open");
  const openSalesOrdersCount = openSalesOrdersList.length;
  const closeSalesOrdersCount = salesOrdersList.length - openSalesOrdersCount;

  const paidInvoicesList = invoicesList.filter(invoice => invoice.status === "paid");
  const paidInvoicesCount = paidInvoicesList.length;
  const openInvoicesList = invoicesList.filter(invoice => invoice.status === "open");
  const openInvoicesCount = openInvoicesList.length;
  const cancelledInvoicesCount = invoicesList.length - paidInvoicesCount - openInvoicesCount;

  const malesList = customersList.filter(customer => customer.gender === "Male");
  const malesCount = malesList.length;
  const femalesList = customersList.filter(customer => customer.gender === "Female");
  const femalesCount = femalesList.length;
  const othersCount = customersList.length - malesCount - femalesCount;

  return (
    <>
      <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Dashboard</h2>
      <div className='flex flex-wrap gap-4 max-w-[1000px] mx-auto justify-center items-start mb-10'>
        <div className='flex flex-wrap gap-4 max-w-[560px] justify-center items-center'>
          <DashboardCard item={{ icon: UsersIcon }} iconBgColor='bg-[#FFA11D]' title="Total Customers" count={customersList.length} />
          <DashboardCard item={{ icon: ShoppingCartIcon }} iconBgColor='bg-[#1B232F]' title="Total Products" count={productsList.length} />
          <DashboardCard item={{ icon: ChatBubbleBottomCenterIcon }} iconBgColor='bg-[#3EC9D6]' title="Total Quotes" count={quotesList.length} />
          <DashboardCard item={{ icon: ClipboardDocumentListIcon }} iconBgColor='bg-[#6C757D]' title="Total SalesOrders" count={salesOrdersList.length} />
          <DashboardCard item={{ icon: ReceiptPercentIcon }} iconBgColor='bg-[#6FD843]' title="Total Invoices" count={invoicesList.length} />
        </div>

        <div className="divide-y w-max divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <p>Quotes & Sales Orders & Invoices</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <BarChart quotes={quotesList.length} salesOrders={salesOrdersList.length} invoices={invoicesList.length} />
          </div>
        </div>
      </div>


      <div className='flex flex-wrap gap-5 justify-center max-w-[900px] mx-auto mb-10'>
        <div className="divide-y w-[300px] divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <p>Quotes Overview</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <DoughnutChart openCount={openQuotesCount} closeCount={closeQuotesCount} />
          </div>
        </div>

        <div className="divide-y w-[300px] divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <p>Customer's Gender Overview</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <PieChart orange={malesCount} green={femalesCount} blue={othersCount} isGender={true} />
          </div>
        </div>

        <div className="divide-y w-[300px] divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <p>Sales Orders Overview</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <DoughnutChart openCount={openSalesOrdersCount} closeCount={closeSalesOrdersCount} />
          </div>
        </div>

        <div className="divide-y w-[300px] divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <p>Invoices Overview</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <PieChart orange={paidInvoicesCount} green={openInvoicesCount} blue={cancelledInvoicesCount} isGender={false} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard