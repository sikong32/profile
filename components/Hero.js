export default function Hero() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://cdn.pixabay.com/photo/2024/09/10/22/25/architectural-design-9038365_1280.jpg')",
      height: "60vh", // 뷰포트 높이의 60%로 설정
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">비즈니스 성장을 위한 전문 컨설팅</h1>
          <p className="text-xl md:text-2xl mb-8">당신의 비즈니스를 다음 단계로 이끌어 드립니다</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
            무료 상담 신청
          </button>
        </div>
      </div>
    </div>
  );
}
