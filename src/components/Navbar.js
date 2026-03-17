import { currentUser } from "../auth/auth";

export default function Navbar({ openbar }) {
  return (
    <>
      <nav className="p-3 navbar-container shadow">
        <h3 className="ms-2 ">DYNAMIC ANALYTICS</h3>
        <div className="d-flex  align-items-center gap-4">
          {currentUser() ? (
            <p className="m-0">Welcome! {currentUser().name}</p>
          ) : null}
          <i
            className="bi bi-layout-sidebar me-3 fs-3 navbar-icon"
            onClick={openbar}
          ></i>
        </div>
      </nav>
    </>
  );
}
