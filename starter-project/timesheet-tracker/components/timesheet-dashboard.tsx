"use client";

import { format, startOfWeek } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

type ApiResponse<T> = {
  data: T;
};

type User = {
  id: string;
  email: string;
  displayName: string;
};

type Project = {
  id: string;
  name: string;
  clientName: string | null;
  isActive: boolean;
  createdAt: string;
};

type TimeEntry = {
  id: string;
  userId: string;
  projectId: string;
  entryDate: string;
  startTime: string;
  endTime: string;
  hoursDecimal: number;
  notes: string | null;
  billable: boolean;
  project: Project;
  user: User;
};

type WeeklyTotal = {
  projectId: string;
  projectName: string;
  totalHours: number;
};

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const contentType = response.headers.get("content-type") ?? "";
  const method = init?.method ?? "GET";

  if (contentType.includes("application/json")) {
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(
        payload?.error?.message ??
          `${method} ${url} failed (${response.status} ${response.statusText})`,
      );
    }

    return payload as T;
  }

  const bodyText = await response.text();
  const preview = bodyText.replace(/\s+/g, " ").trim().slice(0, 180);

  throw new Error(
    `${method} ${url} returned non-JSON response (${response.status} ${response.statusText}). ${preview}`,
  );
}

export function TimesheetDashboard() {
  const currentWeek = useMemo(
    () => format(startOfWeek(new Date(), { weekStartsOn: 1 }), "yyyy-MM-dd"),
    [],
  );

  const [users, setUsers] = useState<User[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [totals, setTotals] = useState<WeeklyTotal[]>([]);

  const [weekStart, setWeekStart] = useState(currentWeek);
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [error, setError] = useState<string>("");

  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [entryUserId, setEntryUserId] = useState("");
  const [entryProjectId, setEntryProjectId] = useState("");
  const [entryDate, setEntryDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [startTimeValue, setStartTimeValue] = useState("09:00");
  const [endTimeValue, setEndTimeValue] = useState("17:00");
  const [notes, setNotes] = useState("");
  const [billable, setBillable] = useState(true);

  async function loadUsersAndProjects() {
    const [usersResponse, projectsResponse] = await Promise.all([
      fetchJson<ApiResponse<User[]>>("/api/users"),
      fetchJson<ApiResponse<Project[]>>("/api/projects"),
    ]);

    setUsers(usersResponse.data);
    setProjects(projectsResponse.data);

    if (!entryUserId && usersResponse.data[0]) {
      setEntryUserId(usersResponse.data[0].id);
    }
    if (!entryProjectId && projectsResponse.data[0]) {
      setEntryProjectId(projectsResponse.data[0].id);
    }
  }

  async function loadEntriesAndTotals() {
    const params = new URLSearchParams({
      weekStart,
      ...(projectFilter !== "all" ? { projectId: projectFilter } : {}),
    });

    const [entriesResponse, totalsResponse] = await Promise.all([
      fetchJson<ApiResponse<TimeEntry[]>>(`/api/time-entries?${params.toString()}`),
      fetchJson<ApiResponse<WeeklyTotal[]>>(`/api/weekly-totals?weekStart=${weekStart}`),
    ]);

    setEntries(entriesResponse.data);
    setTotals(totalsResponse.data);
  }

  useEffect(() => {
    loadUsersAndProjects().catch((requestError: Error) => setError(requestError.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadEntriesAndTotals().catch((requestError: Error) => setError(requestError.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekStart, projectFilter]);

  async function onCreateProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      await fetchJson("/api/projects", {
        method: "POST",
        body: JSON.stringify({
          name: projectName,
          clientName: clientName || undefined,
          isActive,
        }),
      });
      setProjectName("");
      setClientName("");
      setIsActive(true);
      await loadUsersAndProjects();
    } catch (requestError) {
      setError((requestError as Error).message);
    }
  }

  async function onCreateUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      const response = await fetchJson<ApiResponse<User>>("/api/users", {
        method: "POST",
        body: JSON.stringify({
          email: userEmail,
          displayName: userDisplayName,
        }),
      });

      setUserDisplayName("");
      setUserEmail("");
      setEntryUserId(response.data.id);
      await loadUsersAndProjects();
    } catch (requestError) {
      setError((requestError as Error).message);
    }
  }

  async function onCreateTimeEntry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      await fetchJson("/api/time-entries", {
        method: "POST",
        body: JSON.stringify({
          userId: entryUserId,
          projectId: entryProjectId,
          entryDate,
          startTime: startTimeValue,
          endTime: endTimeValue,
          notes: notes || undefined,
          billable,
        }),
      });
      setNotes("");
      setBillable(true);
      await loadEntriesAndTotals();
    } catch (requestError) {
      setError((requestError as Error).message);
    }
  }

  async function onDeleteTimeEntry(id: string) {
    setError("");
    try {
      await fetchJson(`/api/time-entries?id=${id}`, { method: "DELETE" });
      await loadEntriesAndTotals();
    } catch (requestError) {
      setError((requestError as Error).message);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-6">
      <header className="rounded-lg border bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100 p-5 shadow-sm">
        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-700 drop-shadow-sm md:text-5xl">
          Timesheet Tracker
        </h1>
        <p className="mt-2 text-base text-slate-700">
          Track project time, filter by week, and review weekly totals.
        </p>
      </header>

      {error ? (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Add Person</CardTitle>
          <CardDescription>Create a user you can assign time entries to.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-[1fr_1fr_auto]" onSubmit={onCreateUser}>
            <div className="space-y-2">
              <Label htmlFor="user-display-name">Display Name</Label>
              <Input
                id="user-display-name"
                value={userDisplayName}
                onChange={(event) => setUserDisplayName(event.target.value)}
                placeholder="Jane Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-email">Email</Label>
              <Input
                id="user-email"
                type="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                placeholder="jane@example.com"
                required
              />
            </div>
            <div className="flex items-end">
              <Button type="submit" className="w-full md:w-auto">
                Add Person
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create Project</CardTitle>
            <CardDescription>Add projects to log time against.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={onCreateProject}>
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                  id="project-name"
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                  placeholder="Website Revamp"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-name">Client Name (Optional)</Label>
                <Input
                  id="client-name"
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                  placeholder="Acme Co."
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="is-active"
                  checked={isActive}
                  onCheckedChange={(checked) => setIsActive(Boolean(checked))}
                />
                <Label htmlFor="is-active">Project is active</Label>
              </div>
              <Button type="submit">Create Project</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create Time Entry</CardTitle>
            <CardDescription>Log hours for a user and project.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={onCreateTimeEntry}>
              <div className="space-y-2">
                <Label>User</Label>
                <Select value={entryUserId} onValueChange={setEntryUserId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a user" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.displayName} ({user.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Project</Label>
                <Select value={entryProjectId} onValueChange={setEntryProjectId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="entry-date">Date</Label>
                  <Input
                    id="entry-date"
                    type="date"
                    value={entryDate}
                    onChange={(event) => setEntryDate(event.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-time">Start</Label>
                  <Input
                    id="start-time"
                    type="time"
                    value={startTimeValue}
                    onChange={(event) => setStartTimeValue(event.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End</Label>
                  <Input
                    id="end-time"
                    type="time"
                    value={endTimeValue}
                    onChange={(event) => setEndTimeValue(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Feature implementation and review"
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="billable"
                  checked={billable}
                  onCheckedChange={(checked) => setBillable(Boolean(checked))}
                />
                <Label htmlFor="billable">Billable</Label>
              </div>
              <Button type="submit">Add Time Entry</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Filter entries by week and project.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="week-start">Week Start</Label>
            <Input
              id="week-start"
              type="date"
              value={weekStart}
              onChange={(event) => setWeekStart(event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Project</Label>
            <Select value={projectFilter} onValueChange={setProjectFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All projects</SelectItem>
                {projects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Total Hours Per Project</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {totals.length === 0 ? (
              <p className="text-sm text-muted-foreground">No totals for this week yet.</p>
            ) : (
              totals.map((total) => (
                <div key={total.projectId} className="rounded-md border p-3">
                  <p className="text-sm text-muted-foreground">{total.projectName}</p>
                  <p className="text-2xl font-semibold">{total.totalHours.toFixed(2)}h</p>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Time Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Billable</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-muted-foreground">
                    No entries found for this filter.
                  </TableCell>
                </TableRow>
              ) : (
                entries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{format(new Date(entry.entryDate), "yyyy-MM-dd")}</TableCell>
                    <TableCell>{entry.user.displayName}</TableCell>
                    <TableCell>{entry.project.name}</TableCell>
                    <TableCell>
                      {entry.startTime} - {entry.endTime}
                    </TableCell>
                    <TableCell>{entry.hoursDecimal.toFixed(2)}</TableCell>
                    <TableCell>{entry.billable ? "Yes" : "No"}</TableCell>
                    <TableCell>{entry.notes || "-"}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDeleteTimeEntry(entry.id)}
                        aria-label="Delete entry"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
