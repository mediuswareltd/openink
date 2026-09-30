const isBlock = (x) => x && typeof x === "object" && !Array.isArray(x) && x.type;
const cellsOf = (row) => (Array.isArray(row) ? row : row?.cells || []);

/** @type {import("./index.js").BlockDef[]} */
export default [
  {
    name: "table",
    group: "Data",
    summary: "Table. A cell is text or a block (e.g. `badge`, `button`). A row can be `{ cells, go }` to make it clickable.",
    props: {
      columns: { type: "text[]", doc: "Column headings.", required: true },
      rows: { type: "rows", doc: "List of rows: `[cell, cell]` or `{ cells: [...], go: screenId }`.", required: true },
    },
    nested: (b) =>
      (b.rows || []).flatMap((r, i) => cellsOf(r).map((x, j) => [Array.isArray(r) ? `.rows[${i}][${j}]` : `.rows[${i}].cells[${j}]`, x]).filter(([, x]) => isBlock(x))),
    targets: (b) => (b.rows || []).map((r) => r?.go).filter(Boolean),
    render: (b, c) => {
      const cell = (x) => (isBlock(x) ? c.block(x) : c.tx(x));
      return `<table class="oi-table"><thead><tr>${(b.columns || []).map((x) => `<th>${c.tx(x)}</th>`).join("")}</tr></thead><tbody>${(b.rows || [])
        .map((r) => `<tr${r?.go ? ` class="click" data-go="${c.esc(r.go)}"` : ""}>${cellsOf(r).map((x) => `<td>${cell(x)}</td>`).join("")}</tr>`)
        .join("")}</tbody></table>`;
    },
  },
];
