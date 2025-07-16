import Link from "next/link";

const Navbar2 = () => {
  return (
    <nav className="flex justify-center">
        <div className="p-[16px] gap-[40px] flex text-black text-[18px] mt-[50px] border-[1px] border-solid border-black rounded-[30px] align-center">
          <Link href="/programs/spo/o_spo">
            Очно
          </Link>
          <Link href="/programs/spo/oz_spo">
            Очно-заочно
          </Link>
          <Link href="/programs/spo/z_spo">
            Заочно
          </Link>
        </div>
    </nav>
  );
};

export default Navbar2;
