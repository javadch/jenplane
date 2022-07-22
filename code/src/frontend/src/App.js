import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Organizations from "./pages/Organizations/Organizations";
import NewOrganization from "./pages/Organizations/NewOrganization";
import Processes from "./pages/Processes";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Users from "./pages/Users";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/Layout/AppBar";
import Sidebar from "./components/Layout/Sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mdTheme = createTheme();

function App() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const location = useLocation();

  const noDashboard = ["/signin", "/signup"];

  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <DndProvider backend={HTML5Backend}>
          {!noDashboard.includes(location.pathname) ? (
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar open={open} toggleDrawer={toggleDrawer} />
              <Sidebar open={open} toggleDrawer={toggleDrawer} />
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  height: "100vh",
                  overflow: "auto",
                }}
              >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route
                      path="dashboard/organizations"
                      element={<Organizations />}
                    />
                    <Route
                      path="dashboard/organizations/add"
                      element={<NewOrganization />}
                    />
                    <Route path="dashboard/users" element={<Users />} />
                    <Route path="dashboard/processes" element={<Processes />} />
                    <Route path="dashboard/projects" element={<Projects />} />
                    <Route path="dashboard/project/:id" element={<Project />} />
                  </Routes>
                </Container>
              </Box>
            </Box>
          ) : (
            <Routes>
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          )}
          <ToastContainer />
        </DndProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
