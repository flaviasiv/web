import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CreateRoom } from "./pages/create-room"
import { Room } from "./pages/room"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route path="/room/:roomid" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

