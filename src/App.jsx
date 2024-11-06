import { Container } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import { User } from "./pages/user"
import { UserDetail } from "./pages/user-detail"

function App() {
  

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<User />}/>
          <Route path="/user-detail/:id" element={<UserDetail />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
