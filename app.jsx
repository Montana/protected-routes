import { Routes, Route } from 'react-router-dom';
// Component imports omitted

export const App = () => {
  return (
    <Routes>
      <Route exact path='/reset' element={<ResetPassword />} />
      <Route element={<ProtectedRoutes />}>
        <Route exact path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  );
};
