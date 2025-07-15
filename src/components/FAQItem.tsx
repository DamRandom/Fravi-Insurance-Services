type Props = {
  question: string;
  answer: string;
};

export default function FAQItems({ question, answer }: Props) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
