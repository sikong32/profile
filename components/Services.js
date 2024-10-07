export default function Services() {
  const services = [
    { title: '전략 컨설팅', description: '비즈니스 전략 수립 및 최적화' },
    { title: '재무 관리', description: '효율적인 재무 계획 및 관리' },
    { title: '마케팅 전략', description: '타겟 고객 확보를 위한 마케팅 전략' },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">우리의 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
