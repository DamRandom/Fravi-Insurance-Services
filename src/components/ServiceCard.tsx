type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
