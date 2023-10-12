// ISR page

import Link from "next/link";

const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getPost();
  return (
    <div className="p-6">
      <div className="text-lg font-bold">Result</div>
      {data.map((dat: any) => (
        <Link href={`/page4/${dat.id}`} key={dat.id}>
          <div>
            {dat.id} {dat.title}
          </div>
          <div></div>
        </Link>
      ))}
    </div>
  );
}
