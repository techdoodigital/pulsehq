"use client";

import { useState, useEffect } from "react";
import { Loader2, ChevronDown, ChevronUp, Send } from "lucide-react";

interface TicketItem {
  id: string;
  subject: string;
  message: string;
  category: string;
  priority: string;
  status: string;
  response: string | null;
  createdAt: string;
  user: { name: string | null; email: string };
}

const statusColors: Record<string, string> = {
  open: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "in-progress": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  resolved: "bg-green-500/10 text-green-400 border-green-500/20",
};

export default function AdminTicketsPage() {
  const [tickets, setTickets] = useState<TicketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [responseText, setResponseText] = useState("");
  const [responseStatus, setResponseStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, [filter]);

  async function fetchTickets() {
    setLoading(true);
    const url = filter ? `/api/admin/tickets?status=${filter}` : "/api/admin/tickets";
    const res = await fetch(url);
    if (res.ok) setTickets(await res.json());
    setLoading(false);
  }

  async function handleRespond(ticketId: string) {
    setSubmitting(true);
    const body: Record<string, string> = { id: ticketId };
    if (responseText) body.response = responseText;
    if (responseStatus) body.status = responseStatus;

    const res = await fetch("/api/admin/tickets", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setResponseText("");
      setResponseStatus("");
      fetchTickets();
    }
    setSubmitting(false);
  }

  function toggleExpand(id: string) {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      const ticket = tickets.find((t) => t.id === id);
      setResponseText(ticket?.response || "");
      setResponseStatus(ticket?.status || "open");
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Ticket Management</h1>

      {/* Filter */}
      <div className="flex gap-2 mb-6">
        {["", "open", "in-progress", "resolved"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === s
                ? "bg-red-600 text-white"
                : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {s || "All"}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
        </div>
      ) : tickets.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-500">
          No tickets found
        </div>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(ticket.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-medium text-white">{ticket.subject}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${
                        statusColors[ticket.status] || statusColors.open
                      }`}
                    >
                      {ticket.status}
                    </span>
                    <span className="text-xs text-slate-500">
                      {ticket.priority}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {ticket.user.name || ticket.user.email} - {ticket.category} -{" "}
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {expandedId === ticket.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {expandedId === ticket.id && (
                <div className="px-6 pb-6 border-t border-slate-800 pt-4">
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 mb-1">Message:</p>
                    <p className="text-slate-300 text-sm whitespace-pre-wrap">{ticket.message}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">
                        Update Status
                      </label>
                      <select
                        value={responseStatus}
                        onChange={(e) => setResponseStatus(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-red-500"
                      >
                        <option value="open">Open</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">
                        Response
                      </label>
                      <textarea
                        value={responseText}
                        onChange={(e) => setResponseText(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-red-500 resize-none"
                        placeholder="Type your response..."
                      />
                    </div>
                    <button
                      onClick={() => handleRespond(ticket.id)}
                      disabled={submitting}
                      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                      {submitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Update Ticket
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
