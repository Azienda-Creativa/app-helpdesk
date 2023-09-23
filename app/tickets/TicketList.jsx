async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets")
  return res.json()
}
export default async function TicketList() {
  const tickets = await getTickets()
  return (
    <>
      {tickets.map((ticket) => (
        <div
          key={ticket.key}
          className="card my-5">
          <h3>{ticket.title}</h3>
          <div>{ticket.body.slice(0, 200)}...</div>
          <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
      ))}

      {tickets.length === 0 && <p className="text-center">There are not open tickets</p>}
    </>
  )
}
