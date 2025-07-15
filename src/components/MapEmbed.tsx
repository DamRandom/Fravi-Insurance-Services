export default function MapEmbed() {
  return (
    <div className="w-full h-64">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
