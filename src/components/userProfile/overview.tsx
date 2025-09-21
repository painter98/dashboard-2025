"use client";

import { useState } from "react";
import { DataTable } from "mantine-datatable";
import { Avatar } from "@mantine/core";
import { ArrowDownUp, Calendar, ListFilter, Plus, Search } from "lucide-react";

// Mock Data
interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

const mockData: Order[] = [
  { id: "#CM9801", user: { name: "Natali Craig", avatar: "/diverse-woman-portrait.png" }, project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CM9802", user: { name: "Kate Morrison", avatar: "/woman-2.jpg" }, project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
  { id: "#CM9803", user: { name: "Drew Cano", avatar: "/thoughtful-man.png" }, project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9804", user: { name: "Orlando Diggs", avatar: "/man-2.jpg" }, project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9805", user: { name: "Andi Lane", avatar: "/woman-3.jpg" }, project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
  { id: "#CM9806", user: { name: "Drew Cano", avatar: "/thoughtful-man.png" }, project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9807", user: { name: "Orlando Diggs", avatar: "/man-2.jpg" }, project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9808", user: { name: "Andi Lane", avatar: "/woman-3.jpg" }, project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
];

export default function OrdersTableMantine() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const recordsPerPage = 5;

  const from = (page - 1) * recordsPerPage;
  const to = from + recordsPerPage;
  const records = mockData.slice(from, to);

  return (
    <div>
      <h2 className="font-semibold mb-4">Orders</h2>
      <div className="flex justify-between bg-gray-light dark:bg-black/40 w-full p-2 rounded-xl mb-2">
        <div className="flex gap-4 items-center text-gray-600 dark:text-gray-light">
          <Plus className="w-5 h-5" />
          <ListFilter className="w-5 h-5" />
          <ArrowDownUp className="w-5 h-5" />
        </div>
        <form
          className={`sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden bg-white-light/40`}

        >
          <input
            type="text"
            className="form-input ltr:pl-9 rtl:pr-9 ltr:sm:pr-4 rtl:sm:pl-4 ltr:pr-9 rtl:pl-9 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
            placeholder={`Search`}
          />
          <button type="button" className="absolute pt-2 px-2 w-5 h-5 inset-0 ltr:right-auto rtl:left-auto appearance-none peer-focus:text-graay-light focus:outline-none">
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>
      <DataTable
        highlightOnHover
        records={records}
        page={page}
        onPageChange={setPage}
        totalRecords={mockData.length} 
        recordsPerPage={recordsPerPage}
        noRecordsIcon={<></>}
      paginationActiveBackgroundColor="black"
        noRecordsText=""
        selectedRecords={records.filter((r) => selected.includes(r.id))}
        onSelectedRecordsChange={(selectedRows) =>
          setSelected(selectedRows.map((r) => r.id))
        }
        paginationText={()=>undefined}
        classNames={{
          header: "bg-transparent text-gray-700 dark:bg-gray-800 dark:text-gray-200",
        }}
        columns={[
          {
            accessor: "id",
            title: "Order ID",
            render: (record) => <span className="font-medium">{record.id}</span>,
          },
          {
            accessor: "user",
            title: "User",
            render: (record) => (
              <div className="flex items-center gap-3">
                <Avatar src={record.user.avatar} radius="xl" size="sm" />
                <span className="font-medium">{record.user.name}</span>
              </div>
            ),
          },
          { accessor: "project", title: "Project" },
          { accessor: "address", title: "Address" },
          {
            accessor: "date",
            title: "Date",
            render: (record) => (
              <>
                <Calendar className="w-4 h-4 inline mr-1" /> {record.date}
              </>
            ),
          },
          {
            accessor: "status",
            title: "Status",
            render: (record) => (
              <div className="flex items-center gap-2">
  <div
    className={`w-2 h-2 rounded-full ${
      record.status === "In Progress"
        ? "bg-violet-400"
        : record.status === "Complete"
        ? "bg-green-400"
        : record.status === "Pending"
        ? "bg-yellow-400"
        : record.status === "Approved"
        ? "bg-orange-400"
        : "bg-gray-400"
    }`}
  />
  <span
    className={`text-sm ${
      record.status === "In Progress"
        ? "text-violet-400"
        : record.status === "Complete"
        ? "text-green-400"
        : record.status === "Pending"
        ? "text-yellow-400"
        : record.status === "Approved"
        ? "text-orange-400"
        : "text-gray-400"
    }`}
  >
    {record.status}
  </span>
</div>

            ),
          },
        ]}
      />
    </div>
  );
}
