export default function Header({ text, underline = true }: { text: string; underline?: boolean }) {
  return (
    <div className="w-fit">
      <h2 className="text-xl lg:text-2xl font-semibold">{text}</h2>
      {underline && <div className="h-0.5 w-full mt-0.5 mb-3 bg-main"></div>}
    </div>
  );
}