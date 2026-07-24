const OVERVIEW_ROWS = [
  { detail: "App Name", information: "Ch777.com" },
  { detail: "Category", information: "Game, Card" },
  { detail: "App Size", information: "8 MB" },
  { detail: "Current Version", information: "v1.9" },
  { detail: "Update", information: "24 July, 2026" },
  { detail: "Requirements", information: "Android 5.0 & up" },
  { detail: "Payout Methods", information: "JazzCash, Easypaisa" },
  { detail: "Gaming Language", information: "English" },
  { detail: "App Price", information: "Free" },
] as const;

export default function AppOverviewTable() {
  return (
    <div className="app-overview">
      <p className="app-overview-title">
        <strong>CH777 App Overview</strong>
      </p>
      <div className="app-overview-scroll">
        <table className="app-overview-table" aria-label="CH777 App Overview">
          <caption className="sr-only">CH777 App Overview details</caption>
          <thead>
            <tr>
              <th scope="col">Detail</th>
              <th scope="col">Information</th>
            </tr>
          </thead>
          <tbody>
            {OVERVIEW_ROWS.map((row) => (
              <tr key={row.detail}>
                <th scope="row">{row.detail}</th>
                <td>{row.information}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="app-overview-note">
        App details, payment options, size, and version may change with future
        updates. Check the current platform information before installation or
        payment.
      </p>
    </div>
  );
}
