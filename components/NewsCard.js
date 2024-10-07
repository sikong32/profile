import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ news }) {
  return (
    <Link href={`/${news.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
        <Image src={news.image} alt={news.title} width={400} height={200} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
          <p className="text-gray-600 line-clamp-3">{news.content}</p>
        </div>
      </div>
    </Link>
  );
}
