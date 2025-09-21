"use client";

import { useState } from "react";
import { Checkbox } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { Clock } from "lucide-react";

const elements = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve  Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

export default function ProductsDataTable() {
  return (

        <div className="text-xs p-6 bg-gray-light dark:bg-white/5 dark:text-white rounded-2xl w-full">
          <div className="text-sm font-semibold pb-6">Top Selling Products</div>
    <DataTable
      highlightOnHover
      records={elements}
      columns={[
         { accessor: "name", title: "Name" },
          { accessor: "price", title: "Price" },
          { accessor: "quantity", title: "Quantity" },
          { accessor: "amount", title: "Amount" },
      ]}
      className='w-full h-full'
      rowClassName={'my-3'}
      minHeight={'0'} 
      noRecordsText=""    
      noRecordsIcon={<></>}   
    />
    </div>
  );
}