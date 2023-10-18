// generation of all paths statically at build time


// use this to rendered 404 if the path is not in the ones generated at the build time
const dynamicParams = false;
export { dynamicParams };


export async function generateStaticParams() {
  // it will statically generate all the pages

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  /*  by default it will dynamically generate the page on request if the page is not statically build at build time, 
  e.g if it has 100 pages if we go to 101 page it will not through 404 insted it will generate the page on request */
  //   if you want to build only certain pages of the routes then return an array with them e.g
  // return [
  //   { post: "1" },
  //   { post: "2" },
  //   { post: "3" },
  //   { post: "4" },
  //   { post: "5" },
  //   { post: "6" },
  // ]; //it will generate only 4 pages.

  // name should be same as slug

  //build all routes
  return posts.map((post: any) => ({
    post: post.id.toString(),
  }));
}

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  //   console.log("post", post);
  return post;
};

const page: React.FC<any> = async ({ params }) => {
  const { post } = params;

  // console.log("======>", params);

  const singlePost = await getPost(post);

  return (
    <div className="p-6">
      <div>{singlePost.id}</div>
      <div>{singlePost.title}</div>
      <div>{singlePost.body}</div>
    </div>
  );
};

export default page;
