"use client";

import { useState, useEffect } from "react";
import { Users, Ticket, Mail, AlertCircle, Loader2 } from "lucide-react";

interface Stats {
  totalUsers: number;
  totalTickets: number;
  openTickets: number;
  newsletterSubscribers: number;
  recentTickets: Array<{
    id: string;
    subject: string;
    status: string;
    createdAt: string;
    user: { name: string | null; email: string };
  }>;
  recentUsers: Array<{
    id: string;
    name: string | null;
    email: string;
    role: string;
    createdAt: string;
  }>;
}

const statusColors: Record<string, string> = {
  open: "bg-yellow-500/10 text-yellow-400",
  "in-progress": "bg-blue-500/10 text-blue-400",
  resolved: "bg-green-500/10 text-green-400",
};

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Admin Overview</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Users className="w-5 h-5 text-blue-400" />}
          label="Total Users"
          value={stats.totalUsers}
          bg="bg-blue-500/10"
        />
        <StatCard
          icon={<Ticket className="w-5 h-5 text-purple-400" />}
          label="Total Tickets"
          value={stats.totalTickets}
          bg="bg-purple-500/10"
        />
        <StatCard
          icon={<AlertCircle className="w-5 h-5 text-yellow-400" />}
          label="Open Tickets"
          value={stats.openTickets}
          bg="bg-yellow-500/10"
        />
        <StatCard
          icon={<Mail className="w-5 h-5 text-green-400" />}
          label="Newsletter Subs"
          value={stats.newsletterSubscribers}
          bg="bg-green-500/10"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent tickets */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Tickets</h2>
          {stats.recentTickets.length === 0 ? (
            <p className="text-slate-500 text-sm">No tickets yet</p>
          ) : (
            <div className="space-y-3">
              {stats.recentTickets.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-200">{t.subject}</p>
                    <p className="text-xs text-slate-500">{t.user.name || t.user.email}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[t.status] || statusColors.open}`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent signups */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Signups</h2>
          {stats.recentUsers.length === 0 ? (
            <p className="text-slate-500 text-sm">No users yet</p>
          ) : (
            <div className="space-y-3">
              {stats.recentUsers.map((u) => (
                <div key={u.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-200">{u.name || "No name"}</p>
                    <p className="text-xs text-slate-500">{u.email}</p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  bg: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}
