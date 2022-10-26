import { Link } from 'react-router-dom'
export default function NoPage() {
  return (
    <>
      <div className="mb-auto"></div>
      <div className="m-auto text-center">
        <h1 className="py-2 display-4 mt-auto fw-bold color-sd">404 | ปุ่มถอน Not Found</h1>
        <h1 className="py-2 display-5">ปุ่มถอนไม่ได้อยู่ตรงนี้ ไปลองหาในหน้าอื่นสิ</h1>
        <Link to="/" className="mt-3 py-2 btn btn-danger btn-lg">กลับไปหน้าหลัก</Link>
      </div >
    </>
  );
}