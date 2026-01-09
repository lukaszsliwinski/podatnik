export default function Header({ text }: { text: string }) {
  return (
    <h2 className="mb-4 text-xl sm:text-2xl lg:text-3xl font-semibold">{text}</h2>
  );
}