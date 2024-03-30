import Link from 'next/link'
import GoHome from './GoHome';

export default function Page() {
  return (
    <div className="sub">
      <p>Sub</p>
      <Link href="/" passHref legacyBehavior>
        <GoHome />
      </Link>
    </div>
  );
}