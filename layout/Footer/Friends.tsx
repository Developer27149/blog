import Link from "next/link";

function FriendLinks() {
  const friendList = [
    {
      href: "https://www.howie6879.cn/",
      avatar: "https://avatars.githubusercontent.com/u/17047388?s=100&v=4",
    },
    {
      href: "https://submara.com/",
      avatar: "https://avatars.githubusercontent.com/u/30927318?v=4",
    },
    {
      href: "https://gujiwuqing.top",
      avatar: "https://avatars.githubusercontent.com/u/44566835?v=4",
    },
    {
      href: "https://www.wangmiaozero.cn/",
      avatar: "https://avatars.githubusercontent.com/u/45121589?v=4",
    },
    {
      href: "http://www.jimmyxuexue.top",
      avatar: "https://avatars.githubusercontent.com/u/65758455?v=4",
    },
    {
      href: "https://brucesong.xyz/",
      avatar: "https://avatars.githubusercontent.com/u/62941121?v=4",
    },
    {
      href: "https://scarsu.com",
      avatar: "https://scarsu.com/images/profile_hd.jpg",
    },
  ];
  return (
    <div>
      <p className="text-gray-400 italic pt-12 text-center pb-8 sm:pb-4 sm:text-left">
        Friends:
      </p>
      <div className="flex flex-wrap gap-2 items-center cursor-pointer">
        {friendList.map(({ href, avatar }) => (
          <Link href={href} target={"_blank"} key={href}>
            <img
              alt=""
              src={avatar}
              className="w-10 h-10 rounded-full shadow-purple-200 shadow-sm"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FriendLinks;
