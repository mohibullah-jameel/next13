
// generation of all paths statically at build time

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const posts = await res.json();

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log("post", post);
  return post;
};

const page: React.FC<any> = async ({ params }) => {
  const { todos } = params;

  const post = await getPost(todos);

  return (
    <div className="p-6">
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
};

export default page;
