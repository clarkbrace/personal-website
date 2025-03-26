// One-off typescript types

// type BlogPost = {
//   id: string;
//   title: string;
//   date: string;
// };

export type DropDownMenuItem = {
  label: string;
  refrence: string;
  styling?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  // ogImage: {
  //   url: string;
  // };
  content: string;
  // preview?: boolean;
};
