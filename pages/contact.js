import Layout from '../components/Layout';
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      <Layout title="Contact">
        <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
          <div className="mt-4">
            <p className="font-bold">Contact info</p>
          </div>
          <div className="flex justify-center mt-4">
            <Image
              className="rounded-full"
              src="/user.png"
              width={60}
              height={60}
              alt="User"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">住所</p>
            <p className="text-xs mt-2 text-gray-600">神奈川県横浜市</p>
            <p className="font-bold mt-3">メールアドレス</p>
            <p className="text-xs mt-2 text-gray-600">example@gmail.com</p>
            <p className="font-bold mt-3">電話番号</p>
            <p className="text-xs mt-2 text-gray-600">012-3456-7890</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact;