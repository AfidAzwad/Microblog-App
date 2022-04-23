import React from 'react';
import { useGetPostByIDQuery,useGetCommentByIDQuery } from '../services/postApi';
import * as Loader from 'react-loader-spinner';

function ProductDetail(props) 
{
    const id = props.match.params.id;
    const response = useGetPostByIDQuery(id)
    const result = useGetCommentByIDQuery(id)
    console.log(result.data)
    if(response.isLoading) return <div className="min-h-screen text-3xl font-bold flex justify-center items-center"><Loader.BallTriangle /></div>
    if(response.isError) return <div className="min-h-screen text-xl text-red-600 font-semibold">an error occured !</div>

    return (
    <div className="flex justify-center items-center m-10">       
         {
         result.data.map((post, index)=>
            <div className="">
                      <p className="font-sans font-semibold text-gray-400 text-2xl mb-12">User : <span className="font-sans text-xl font-semibold text-indigo-500">{response.data.created_by}</span></p>
                      <p className="font-sans font-semibold text-gray-400 text-ld mb-12">Created at : <span className="font-sans text-md text-gray-300 ">{response.data.created_at}</span></p>
                      <p className="mb-3 text-xl text-gray-700 dark:text-gray-800">{response.data.content}</p>
                      
                     <div>
                        <p className="mb-3 text-lg text-gray-700 dark:text-gray-800 font-bold">Comments : <br /><span className="font-sans text-md">{post.comment_by} : {post.comment}</span></p>
                    </div>
            
          </div>
         )
      }
    </div>
  );
}

export default ProductDetail;
