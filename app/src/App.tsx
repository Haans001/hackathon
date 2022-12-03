import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateOrganisation from "./components/CreateOrganisation";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import Page404 from "./components/Page404";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import RegisterForm from "./components/RegisterForm";
import UserSiteOrganisation from "./components/UserSiteOrganisation";
import WelcomePage from "./components/WelcomePage";
import { AuthProvider } from "./providers/AuthProvider";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Routes>
              <Route
                element={
                  <PublicRoute>
                    <LoginForm />
                  </PublicRoute>
                }
                path="/logowanie"
              />
              <Route
                element={
                  <PublicRoute>
                    <RegisterForm />
                  </PublicRoute>
                }
                path="/rejestracja"
              />
              <Route
                element={
                  <PublicRoute>
                    <WelcomePage />
                  </PublicRoute>
                }
                path="/"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <div
                      style={{
                        paddingTop: "100px",
                      }}
                    >
                      <Dashboard></Dashboard>
                    </div>
                  </ProtectedRoute>
                }
                path="/panel"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <CreateOrganisation />
                  </ProtectedRoute>
                }
                path="/stworz-organizacje"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <UserSiteOrganisation />
                  </ProtectedRoute>
                }
                path="/organizacja/:id"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
                path="/profil"
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </ChakraProvider>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
