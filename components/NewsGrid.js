import NewsCard from './NewsCard';

export default function NewsGrid({ newsItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}
