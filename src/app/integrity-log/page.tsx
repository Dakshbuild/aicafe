"use client";

import { FileText, CheckCircle2, Edit3, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type LogEntry = {
  id: string;
  date: string;
  tool: string;
  task: string;
  output: string;
  verification: string;
  errorFound: string;
  correction: string;
  status: "Used" | "Revised" | "Rejected";
};

const demoLogs: LogEntry[] = [
  {
    id: "LOG-001",
    date: "2024-03-15",
    tool: "Gemini 2.5 Pro",
    task: "Generate placeholder menu descriptions",
    output: "Created 10 menu descriptions",
    verification: "Manual review by team",
    errorFound: "Claimed espresso cures headaches",
    correction: "Removed medical claim",
    status: "Revised"
  },
  {
    id: "LOG-002",
    date: "2024-03-18",
    tool: "Gemini 2.5 Flash",
    task: "Dietary filtering logic for Recommendations",
    output: "Matcha Cheesecake tagged as Dairy-Free",
    verification: "Cross-checked with ingredient list",
    errorFound: "Incorrect tag (contains Cream Cheese)",
    correction: "Removed tag, added allergen warning",
    status: "Rejected"
  },
  {
    id: "LOG-003",
    date: "2024-03-20",
    tool: "ChatGPT (GPT-4o)",
    task: "Brainstorm design color palette",
    output: "Suggested warm neutrals and sage green",
    verification: "Accessibility contrast check",
    errorFound: "None",
    correction: "N/A",
    status: "Used"
  },
  {
    id: "LOG-004",
    date: "2024-03-25",
    tool: "Gemini 2.5 Flash",
    task: "Recommendation system prompt engineering",
    output: "Assumed students only want cheapest items",
    verification: "Team review of bias",
    errorFound: "Demographic stereotyping bias",
    correction: "Rewrote prompt to balance price with taste and mood",
    status: "Revised"
  }
];

const StatusBadge = ({ status }: { status: LogEntry["status"] }) => {
  switch (status) {
    case "Used":
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-success/20 text-success-foreground rounded text-xs font-bold uppercase"><CheckCircle2 className="w-3 h-3" /> Used</span>;
    case "Revised":
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold uppercase"><Edit3 className="w-3 h-3" /> Revised</span>;
    case "Rejected":
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-destructive/10 text-destructive rounded text-xs font-bold uppercase"><XCircle className="w-3 h-3" /> Rejected</span>;
    default:
      return null;
  }
};

export default function IntegrityLogPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">AI Integrity Log</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A transparent record of our AI usage, errors caught, and human corrections made during the development and operation of this project.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-medium">
            <AlertCircle className="w-4 h-4" />
            Demo / Template Entries — replace with the team's actual AI usage records.
          </div>
        </div>

        {/* The Log Table */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm overflow-x-auto mb-16">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground text-xs uppercase">
              <tr>
                <th className="px-6 py-4 font-bold">Date</th>
                <th className="px-6 py-4 font-bold">AI Tool</th>
                <th className="px-6 py-4 font-bold">Task / Prompt</th>
                <th className="px-6 py-4 font-bold">Output Used</th>
                <th className="px-6 py-4 font-bold">Verification Method</th>
                <th className="px-6 py-4 font-bold">Error / Bias Found</th>
                <th className="px-6 py-4 font-bold">Human Correction</th>
                <th className="px-6 py-4 font-bold">Final Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {demoLogs.map((log) => (
                <tr key={log.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">{log.date}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{log.tool}</td>
                  <td className="px-6 py-4">{log.task}</td>
                  <td className="px-6 py-4 text-muted-foreground">{log.output}</td>
                  <td className="px-6 py-4 text-muted-foreground">{log.verification}</td>
                  <td className={cn("px-6 py-4 font-medium", log.errorFound !== "None" ? "text-destructive" : "text-muted-foreground")}>
                    {log.errorFound}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{log.correction}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={log.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Data Privacy Section */}
        <div className="bg-secondary p-8 rounded-3xl border border-border">
          <h2 className="text-2xl font-bold mb-6">What We Deliberately Did NOT Give AI</h2>
          <p className="text-muted-foreground mb-6">
            To ensure complete privacy and data security, the following information was strictly excluded from all AI interactions:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {["Real student names", "Phone numbers", "Email addresses", "Student IDs", "Payment information", "Private conversations", "Confidential university information", "Sensitive personal data"].map((item, idx) => (
              <div key={idx} className="bg-background px-4 py-3 rounded-xl border border-border flex items-center gap-2 text-sm font-medium">
                <XCircle className="w-4 h-4 text-destructive shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <p className="font-bold text-center text-primary bg-primary/10 py-3 rounded-xl">
            No real personal data is required for this café demonstration.
          </p>
        </div>

      </div>
    </div>
  );
}
