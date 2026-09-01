export function ConFrom() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          position: "absolute",
          top: "150px",
          left: "200px",
          width: "15%",
          height: "5vh",
        }}
      >
        Convert From
      </button>

      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Binary
          </a>
        </li>

        <li>
          <a className="dropdown-item" href="#">
            Decimal
          </a>
        </li>

        <li>
          <a className="dropdown-item" href="#">
            Hex
          </a>
        </li>
      </ul>
    </div>
  );
}

export function ConTo() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          position: "absolute",
          top: "150px",
          right: "200px",
          width: "15%",
          height: "5vh",
        }}
      >
        Convert To
      </button>

      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Binary
          </a>
        </li>

        <li>
          <a className="dropdown-item" href="#">
            Decimal
          </a>
        </li>

        <li>
          <a className="dropdown-item" href="#">
            Hex
          </a>
        </li>
      </ul>
    </div>
  );
}
