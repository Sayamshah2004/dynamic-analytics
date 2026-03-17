import { currentUser, logout } from "../auth/auth";
export default function Sidebar({
  setOpenSideBar,
  login,
  signIn,
  setTheme,
  theme,
}) {
  const handleClose = () => {
    setOpenSideBar(false);
  };

  return (
    <div className="sidebar position-fixed start-0 top-0 ">
      <div className="sidebar-container vh-100 shadow">
        <div className="d-flex justify-content-between p-3 align-items-center shadow">
          <h3 className="text">Sidebar</h3>
          <button
            onClick={() => setOpenSideBar(false)}
            className="btn auth-btn"
          >
            Close
          </button>
        </div>

        <div>
          <ul className="sidebar-list p-3 text-center">
            <hr />
            {currentUser() ? null : (
              <li
                onClick={() => {
                  signIn();
                  handleClose();
                }}
                className=" text py-2"
              >
                SIGNUP
              </li>
            )}
            {currentUser() ? (
              <>
                <li
                  onClick={() => {
                    logout();
                    handleClose();
                  }}
                  className=" text py-2"
                >
                  LOGOUT
                </li>
              </>
            ) : (
              <>
                <hr />

                <li
                  onClick={() => {
                    login();
                    handleClose();
                  }}
                  className=" text py-2"
                >
                  LOGIN
                </li>
              </>
            )}
            <hr />
            <li className="text">THEME</li>
            <br />
            <select
              className="form-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
}
