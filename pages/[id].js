import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  // 실제 앱에서는 ID를 기반으로 특정 뉴스 데이터를 가져와야 합니다.
  const news = {
    id: id,
    title: `뉴스 제목 ${id}`,
    content: '뉴스 상세 내용...',
    image: '/images/news1.jpg',
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={news.image} alt={news.title} width={800} height={400} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          <p className="text-gray-700">{news.content}</p>
        </div>
      </div>
    </Layout>
  );
}
