import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Zeal Consult</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="py-4 px-2 text-gray-500 hover:text-gray-900">홈</Link>
            <Link href="/services" className="py-4 px-2 text-gray-500 hover:text-gray-900">서비스</Link>
            <Link href="/about" className="py-4 px-2 text-gray-500 hover:text-gray-900">소개</Link>
            <Link href="/contact" className="py-4 px-2 text-gray-500 hover:text-gray-900">연락처</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
