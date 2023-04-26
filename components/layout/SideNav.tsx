import { Items } from "@/constants/sideNav";
import useCurrentUser from "@/hooks/useCurrentUser";
import { layout } from "@/styles/style";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SideNavigation = () => {
  const { data } = useCurrentUser();

  return (
    <div className={`${layout.flex.col.top} gap-2 bg-slate-900 h-full`}>
      {/* Profile Section */}
      <div className={`${layout.flex.col.center} w-full my-10`}>
        <Image
          width={150}
          height={150}
          className={`${layout.flex.row.center} rounded-full`}
          alt='profile_picture'
          src={data?.image}
        />

        <h5 className='text-white'>{data?.name}</h5>
        <p className='text-white'>{data?.email}</p>
      </div>

      {/* Menu Item Section */}
      {Items.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`${layout.flex.row.center} p-3 hover:bg-slate-500 hover:rounded-4xl w-5/6 text-white`}
        >
          {item.label}
        </Link>
      ))}

      {/* Actions */}
      <button
        className='text-white hover:bg-slate-500 w-5/6 p-3 hover:rounded-4xl'
        onClick={() => signOut()}
      >
        {`Sign out`}
      </button>
    </div>
  );
};

export default SideNavigation;
