// consumer instead of passing each prop value, it passes an object of slots
//  object contain key and value pairs and each pair determines which slot to locate and on that slot
// what React node to inject
// Useful then generate slots dynamically or then you want to inject a bunch React nodes into a bunch of slots
// and you don't want to pass them as an individual props

export default function SlotsMapLayout({ slots = {} }) {
  return (
    <div className="flex gap-12 border p-2 border-white">
      <aside>{slots.sidebar}</aside>
      <main className="border p-2 border-white">
        <header>{slots.header}</header>
        <section className="mt-3">{slots.content}</section>
        <footer className="mt-3">{slots.footer}</footer>
      </main>
    </div>
  );
}
