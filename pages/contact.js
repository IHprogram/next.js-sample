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
        </div>
      </Layout>
    </div>
  )
}

export default Contact;