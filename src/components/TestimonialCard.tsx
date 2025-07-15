type Props = {
  name: string;
  quote: string;
};

export default function TestimonialCard({ name, quote }: Props) {
  return (
    <div className="p-4 border rounded shadow-sm">
      <p className="italic">"{quote}"</p>
      <p className="mt-2 font-semibold text-right">- {name}</p>
    </div>
  );
}
