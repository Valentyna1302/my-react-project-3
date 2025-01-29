import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './providers/AuthProvider/AuthProvider';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>

    <Toaster position='top-right' toastOptions={{ duration: 1000 }} />
  </>
);
