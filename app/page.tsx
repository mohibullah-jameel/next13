//dynamic page

// cache: 'force-cache also denotes statically rendered page
const getQuote = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology", {
    cache: "no-cache",
  });

  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getQuote();

  return (
    <div className="p-6">
      <div className="text-lg font-bold">Result</div>
      <div>{data.author}</div>
      {data.content}
    </div>
  );
}
