import "./App.css";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import JukeboxPage from "./components/Search";
// import AppBar from "./components/common/AppBar";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthContextProvider>
                    {/*<AppBar />*/}
                    {/*<input type="text" value={} onChange={handleInputChange} />*/}
                    {/*<button onClick={handleSearch}>Search</button>*/}
                    {/*{resultUrl && <a href={resultUrl}>Result Link</a>}*/}
                    <JukeboxPage/>
                    <Outlet />
                </AuthContextProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
