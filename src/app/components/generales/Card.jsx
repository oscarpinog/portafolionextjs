export function Card({ title, description }) {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg border">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }export default Card;