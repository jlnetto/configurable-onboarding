import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { StepProvider } from './core/StepContext';
import GlobalStyles from './styles/global';
import Onboarding from './view/Onboarding/Onboarding';

export function App() {
  return (
    <StepProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding/1" replace />} />

          <Route path={'/onboarding/:step'} element={<Onboarding />} />

          <Route path="*" element={<Navigate to="/onboarding/1" replace />} />
        </Routes>
      </Router>
    </StepProvider>
  );
}
