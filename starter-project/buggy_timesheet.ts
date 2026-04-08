type TimeEntry = {
  project: string;
  start: string; // ISO timestamp
  end: string;   // ISO timestamp
  hourlyRate: number;
};

const entries: TimeEntry[] = [
  {
    project: "Apollo",
    start: "2026-04-01T22:30:00.000Z",
    end: "2026-04-02T01:00:00.000Z",
    hourlyRate: 120,
  },
  {
    project: "Hermes",
    start: "2026-04-02T09:00:00.000Z",
    end: "2026-04-02T12:00:00.000Z",
    hourlyRate: 100,
  },
];

function calculateBillableHours(entry: TimeEntry): number {
  // BUG: this uses only hour fields and breaks for cross-midnight entries.
  const startHour = new Date(entry.start).getHours();
  const endHour = new Date(entry.end).getHours();
  return endHour - startHour;
}

function totalInvoiceAmount(timesheet: TimeEntry[]): number {
  return timesheet.reduce((sum, entry) => {
    const hours = calculateBillableHours(entry);
    return sum + hours * entry.hourlyRate;
  }, 0);
}

console.log("Expected hours: 5.5");
console.log(
  "Actual hours:",
  entries.reduce((sum, e) => sum + calculateBillableHours(e), 0),
);
console.log("Expected invoice: 630");
console.log("Actual invoice:", totalInvoiceAmount(entries));
