import MoviesList from './components/MovieList';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="flex flex-col items-center">
      <ThemeSwitcher />
      <MoviesList />
    </div>
  );
}

export default App;
