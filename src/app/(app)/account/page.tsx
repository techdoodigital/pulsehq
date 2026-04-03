"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { User, Link2, Trash2, Loader2, AlertTriangle } from "lucide-react";

export default function AccountPage() {
  const { data: session } = useSession();
  const [showDelete, setShowDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    const res = await fetch("/api/user/delete", { method: "DELETE" });
    if (res.ok) {
      signOut({ callbackUrl: "/" });
    }
    setDeleting(false);
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-white mb-6">Account Settings</h1>

      {/* Profile */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Profile Information</h2>
            <p className="text-slate-500 text-sm">Your account details</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
            <p className="text-slate-100">{session?.user?.name || "Not set"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
            <p className="text-slate-100">{session?.user?.email || "Not set"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Role</label>
            <p className="text-slate-100 capitalize">
              {(session?.user as { role?: string })?.role || "user"}
            </p>
          </div>
        </div>
      </div>

      {/* Connected Tools */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <Link2 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Connected Tools</h2>
            <p className="text-slate-500 text-sm">Manage your tool connections</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-slate-200">PagePulse</p>
              <p className="text-xs text-slate-500">Content audit tool</p>
            </div>
            <span className="text-xs text-slate-500 px-2 py-1 bg-slate-800 rounded">
              Available
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-slate-200">ContentPulse</p>
              <p className="text-xs text-slate-500">Content monitoring tool</p>
            </div>
            <span className="text-xs text-slate-500 px-2 py-1 bg-slate-800 rounded">
              Available
            </span>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-slate-900 border border-red-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
            <Trash2 className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Delete Account</h2>
            <p className="text-slate-500 text-sm">
              Permanently remove your account and all data
            </p>
          </div>
        </div>

        {!showDelete ? (
          <button
            onClick={() => setShowDelete(true)}
            className="px-4 py-2 bg-red-600/10 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium hover:bg-red-600/20 transition-colors"
          >
            Delete My Account
          </button>
        ) : (
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-sm text-red-300">
                This action is irreversible. All your data, tickets, and account information will
                be permanently deleted.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Confirm Delete"}
              </button>
              <button
                onClick={() => setShowDelete(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
