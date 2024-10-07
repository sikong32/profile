import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      {/* 여기에 추가 섹션을 넣을 수 있습니다 (예: 고객 후기, 팀 소개 등) */}
    </Layout>
  );
}
