"use client"

import { useState } from "react"
import { Search, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const customers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    orders: 12,
    totalSpent: 5847,
    lastOrder: "2024-03-15",
    status: "Active",
  },
  {
    id: "2",
    name: "Sarah Miller",
    email: "sarah@example.com",
    orders: 8,
    totalSpent: 3248,
    lastOrder: "2024-03-14",
    status: "Active",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    orders: 5,
    totalSpent: 1599,
    lastOrder: "2024-03-13",
    status: "Active",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    orders: 3,
    totalSpent: 899,
    lastOrder: "2024-02-28",
    status: "Inactive",
  },
  {
    id: "5",
    name: "Alex Chen",
    email: "alex@example.com",
    orders: 15,
    totalSpent: 8456,
    lastOrder: "2024-03-11",
    status: "Active",
  },
  {
    id: "6",
    name: "Lisa Wang",
    email: "lisa@example.com",
    orders: 7,
    totalSpent: 2789,
    lastOrder: "2024-03-10",
    status: "Active",
  },
  {
    id: "7",
    name: "David Brown",
    email: "david@example.com",
    orders: 2,
    totalSpent: 449,
    lastOrder: "2024-01-20",
    status: "Inactive",
  },
]

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground">
          View and manage your customer base
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Customers Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                      {customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>${customer.totalSpent.toLocaleString()}</TableCell>
                <TableCell>{customer.lastOrder}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {customer.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
