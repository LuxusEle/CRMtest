import React, { useState } from "react";

export type LeadStatus = "new" | "quoted" | "won" | "lost";
export type Lead = {
  id: string;
  name: string;
  status: LeadStatus;
  client: string;
  quote?: number;
};

const initialLeads: Lead[] = [
  { id: "1", name: "Smith Kitchen", status: "new", client: "Smith" },
  { id: "2", name: "Jones Bath", status: "quoted", client: "Jones", quote: 12000 },
  { id: "3", name: "Acme Office", status: "won", client: "Acme", quote: 25000 },
];

const statuses: LeadStatus[] = ["new", "quoted", "won", "lost"];

export default function KanbanBoard() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [showModal, setShowModal] = useState(false);
  const [newLead, setNewLead] = useState({ name: "", client: "" });
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  function addLead() {
    setLeads([
      ...leads,
      { id: String(Date.now()), name: newLead.name, client: newLead.client, status: "new" },
    ]);
    setShowModal(false);
    setNewLead({ name: "", client: "" });
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 24 }}>
        {statuses.map((status) => (
          <div key={status} style={{ flex: 1, background: "#f4f4f4", padding: 16, borderRadius: 8 }}>
            <h2 style={{ textTransform: "capitalize" }}>{status}</h2>
            {leads.filter((lead) => lead.status === status).map((lead) => (
              <div
                key={lead.id}
                style={{ background: "#fff", margin: "8px 0", padding: 12, borderRadius: 6, boxShadow: "0 1px 4px #ccc", cursor: "pointer" }}
                onClick={() => setSelectedLead(lead)}
              >
                <strong>{lead.name}</strong>
                <div>Client: {lead.client}</div>
                {lead.quote && <div>Quote: ${lead.quote}</div>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button style={{ marginTop: 24 }} onClick={() => setShowModal(true)}>
        + New Lead
      </button>
      {showModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: 32, borderRadius: 8, minWidth: 320 }}>
            <h3>Create New Lead</h3>
            <input
              placeholder="Lead Name"
              value={newLead.name}
              onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
              style={{ width: "100%", marginBottom: 12 }}
            />
            <input
              placeholder="Client Name"
              value={newLead.client}
              onChange={(e) => setNewLead({ ...newLead, client: e.target.value })}
              style={{ width: "100%", marginBottom: 12 }}
            />
            <button onClick={addLead} style={{ marginRight: 8 }}>Create</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
      {selectedLead && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", padding: 32, borderRadius: 8, minWidth: 320 }}>
            <h3>Lead Details</h3>
            <div><strong>Name:</strong> <input value={selectedLead.name} onChange={e => setSelectedLead({ ...selectedLead, name: e.target.value })} /></div>
            <div><strong>Client:</strong> <input value={selectedLead.client} onChange={e => setSelectedLead({ ...selectedLead, client: e.target.value })} /></div>
            <div>
              <strong>Status:</strong>
              <select value={selectedLead.status} onChange={e => setSelectedLead({ ...selectedLead, status: e.target.value as LeadStatus })}>
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <strong>Quote:</strong>
              <input
                type="number"
                value={selectedLead.quote ?? ""}
                onChange={e => setSelectedLead({ ...selectedLead, quote: e.target.value ? Number(e.target.value) : undefined })}
              />
            </div>
            <button
              onClick={() => {
                setLeads(leads.map(l => l.id === selectedLead.id ? selectedLead : l));
                setSelectedLead(null);
              }}
              style={{ marginRight: 8 }}
            >Save</button>
            <button onClick={() => setSelectedLead(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
