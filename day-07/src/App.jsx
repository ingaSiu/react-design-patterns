import { useTheme } from './hook/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme ? '#fff' : '#222',
        color: theme ? '#000' : '#fff',
        height: '100vh',
      }}
    >
      <nav className="flex justify-between bg-slate-500 p-1">
        <h1 className="text-3xl">My App</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
      <main className="p-4 text-center">
        <p className="text-xl m-3">{theme ? '☀️ Light Mode' : '🌙 Dark Mode'}</p>
      </main>
    </div>
  );
}

export default App;
