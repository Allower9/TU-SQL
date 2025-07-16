import Link from "next/link";

const Navbar2 = () => {
  return (
    <nav className="flex justify-center">
        <div className="p-[16px] gap-[40px] flex text-black text-[18px] mt-[50px] border-[1px] border-solid border-black rounded-[30px] align-center">
          <Link href="/programs/magistracy/o_mag">
            Очно
          </Link>
          <Link href="/programs/magistracy/oz_mag">
            Очно-заочно
          </Link>
          <Link href="/programs/magistracy/z_mag">
            Заочно
          </Link>
        </div>
    </nav>
  );
};

export default Navbar2;
