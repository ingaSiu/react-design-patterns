import Article from './Article';
import SlotsMapLayout from './SlotsMapLayout';

// consumer has to make sure that they are passing correct properties to related content

const SlotsMapLayoutDemo = () => {
  return (
    <SlotsMapLayout
      slots={{
        header: <h1 className="text-2xl">Title</h1>,
        sidebar: <nav>Menu</nav>,
        content: <Article />,
        footer: <small>Foot</small>,
      }}
    />
  );
};

export default SlotsMapLayoutDemo;
