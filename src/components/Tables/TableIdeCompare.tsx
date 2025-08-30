import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const TableIdeCompare = () => {
  const [filter, setFilter] = useState("");

  const data = [
    {
      section: "Running & Debugging",
      rows: [
        { action: "Run Program", eclipse: "Ctrl + F11", intellij: "Shift + F10" },
        { action: "Debug Program", eclipse: "F11", intellij: "Shift + F9" },
        { action: "Step Over", eclipse: "F6", intellij: "F8" },
        { action: "Step Into", eclipse: "F5", intellij: "F7" },
        { action: "Step Out", eclipse: "F7", intellij: "Shift + F8" },
      ],
    },
    {
      section: "Navigation",
      rows: [
        { action: "Open Type / Class", eclipse: "Ctrl + Shift + T", intellij: "Ctrl + N" },
        { action: "Open Resource / File", eclipse: "Ctrl + Shift + R", intellij: "Ctrl + Shift + N" },
        { action: "Open Declaration", eclipse: "F3", intellij: "Ctrl + B / Ctrl + Click" },
        { action: "Quick Outline / File Structure", eclipse: "Ctrl + O", intellij: "Ctrl + F12" },
        { action: "Navigate Back", eclipse: "Alt + ←", intellij: "Ctrl + Alt + ←" },
        { action: "Navigate Forward", eclipse: "Alt + →", intellij: "Ctrl + Alt + →" },
      ],
    },
    {
      section: "Editing & Refactoring",
      rows: [
        { action: "Quick Fix / Intention", eclipse: "Ctrl + 1", intellij: "Alt + Enter" },
        { action: "Rename", eclipse: "Alt + Shift + R", intellij: "Shift + F6" },
        { action: "Format Code", eclipse: "Ctrl + Shift + F", intellij: "Ctrl + Alt + L" },
        { action: "Organize Imports", eclipse: "Ctrl + Shift + O", intellij: "Ctrl + Alt + O" },
        { action: "Surround With", eclipse: "Alt + Shift + Z", intellij: "Ctrl + Alt + T" },
        { action: "Duplicate Line", eclipse: "Ctrl + Alt + ↓", intellij: "Ctrl + D" },
        { action: "Delete Line", eclipse: "Ctrl + D", intellij: "Ctrl + Y" },
        { action: "Toggle Line Comment", eclipse: "Ctrl + /", intellij: "Ctrl + /" },
        { action: "Block Comment", eclipse: "Ctrl + Shift + /", intellij: "Ctrl + Shift + /" },
        { action: "Remove Block Comment", eclipse: "Ctrl + Shift + \\", intellij: "Ctrl + Shift + \\" },
      ],
    },
    {
      section: "Search & Docs",
      rows: [
        { action: "Search (Global)", eclipse: "Ctrl + H", intellij: "Double Shift" },
        { action: "Find in File", eclipse: "Ctrl + F", intellij: "Ctrl + F" },
        { action: "Find in Project", eclipse: "Ctrl + H", intellij: "Ctrl + Shift + F" },
        { action: "Show Documentation", eclipse: "F2", intellij: "Ctrl + Q" },
        { action: "Open Call Hierarchy", eclipse: "Ctrl + Alt + H", intellij: "Ctrl + Alt + H" },
        { action: "Switch Editors / Switcher", eclipse: "Ctrl + E", intellij: "Ctrl + Tab" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl p-6 text-sm text-gray-800 dark:text-gray-100">
      <h1 className="mb-4 text-2xl font-bold">Eclipse vs IntelliJ IDEA — Keyboard Shortcuts</h1>

      <input
        type="text"
        placeholder="Filter by action..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-3 py-2 text-left font-medium">Action</th>
              <th className="px-3 py-2 text-left font-medium">Eclipse</th>
              <th className="px-3 py-2 text-left font-medium">IntelliJ IDEA</th>
            </tr>
          </thead>
          <tbody>
            {data.map((group) => (
              <Fragment key={group.section}>
                <tr className="bg-blue-300 text-white">
                  <td colSpan={3} className="px-3 py-2 font-semibold">
                    {group.section}
                  </td>
                </tr>
                {group.rows
                  .filter((row) => row.action.toLowerCase().includes(filter.toLowerCase()))
                  .map((row) => (
                    <tr key={row.action} className="hover:bg-blue-50">
                      <td className="border-t border-gray-300 px-3 py-2">{row.action}</td>
                      <td className="border-t border-gray-300 px-3 py-2">{row.eclipse}</td>
                      <td className="border-t border-gray-300 px-3 py-2">{row.intellij}</td>
                    </tr>
                  ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Note: Shortcuts may differ by OS. On macOS, replace <strong>Ctrl</strong> with
        <strong> ⌘</strong> and <strong>Alt</strong> with <strong>⌥</strong>.
      </p>
    </div>
  );
};

export default TableIdeCompare;
