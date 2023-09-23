import React from "react"
import CreateForm from "./CreateForm"
// server component
export default function createTicket() {
  return (
    <main>
      <h2 className="text-primary text-center"> Create new ticket</h2>
      <CreateForm />
    </main>
  )
}
