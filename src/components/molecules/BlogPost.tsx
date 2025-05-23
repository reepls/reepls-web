// import React, { useContext } from 'react';
// import { CognitiveModeContext } from '../../context/CognitiveMode/CognitiveModeContext';
// import BlogImagery from '../../feature/Blog/components/BlogComponents/BlogImagery';
// import BlogMessage from "../../feature/Blog/components/BlogComponents/BlogMessage";
// import BlogProfile from "../../feature/Blog/components/BlogComponents/BlogProfile";
// import BlogReactionSession from "../../feature/Blog/components/BlogComponents/BlogReactionSession";
// import BlogReactionStats from "../../feature/Blog/components/BlogComponents/BlogReactionStats";
// import './index.scss';

// interface BlogPostProps {
//   images: string[];
//   title: string;
//   content: string;
//   id: string;
//   date: string;
// }

// // const sampleImages = [
// //   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// //   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// // ];
// const BlogPost: React.FC<BlogPostProps> = ({ images, title, content, id, date }) => {
//   const { isCognitiveMode } = useContext(CognitiveModeContext);

//   return (
//     <div className="each_blog_post mt-5 shadow-md p-2">
//       <BlogProfile id={id} date={date} />
//       <BlogMessage title={title} content={content} />
//       {!isCognitiveMode && <BlogImagery PostImages={images} />}
//       <BlogReactionStats date={date} />
//       <BlogReactionSession message={content} />
//     </div>
//   );
// };

// export default BlogPost;
