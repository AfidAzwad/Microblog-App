import React, { useState } from 'react';
import { useGetAllpostQuery } from '../services/postApi';
import * as Loader from 'react-loader-spinner';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';

function Post() 
{
    const response = useGetAllpostQuery()
    const history = useHistory();
    if(response.isLoading) return <div className="min-h-screen text-3xl font-bold flex justify-center items-center"><Loader.BallTriangle /></div>
    if(response.isError) return <div className="min-h-screen text-xl text-red-600 font-semibold">an error occured !</div>
    function logout()
    {
      localStorage.clear()
      history.push("/")
    }
    return (
    <div className="">
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Micro Blog</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Home
      </a>
    </div>
    <div>
      <button onClick={logout} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white font-semibold border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
    </div>
  </div>
</nav>


    <div className="flex flex-col justify-center m-12 ml-36">
     {
       response.data.map((post, index)=>
       <div key={index}>
          <div className="p-2">
          {post.created_by}
          <p className=" text-gray-400 text-sm ">{post.created_at}</p>
             <div className="p-4 items-center xs:items-start md:items-center lg:items-center xl:items-center bg-white text-black rounded border shadow-sm md:flex-row md:max-w-xl dark:border-gray-800 h-fit cursor-pointer">
                    {post.content} 
              </div>
              <div className='flex flex-row justify'>
                    <div className='flex flex-row cursor-pointer'>
                      <button className='hover:bg-gray-200'>
                            <svg width="26" height="26" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                              <path fill-rule="evenodd" d="M9.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L10 5.707 7.354 8.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"/>
                            </svg>
                      </button>
                      <button className='hover:bg-gray-200'>
                            <svg width="26" height="26" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 11.646a.5.5 0 01.708 0L10 14.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"/>
                              <path fill-rule="evenodd" d="M10 4.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                  <Link to={`/blog/${post.pid}`} className='flex justify-end ml-12'>
                      <svg enable-background="new 0 0 512 512" height="25px" 
                            id="Layer_1" version="1.1" viewBox="0 0 512 512" 
                            width="25px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M170.476,166.19h155.097c4.285,0,7.76-3.469,7.76-7.754s-3.475-7.765-7.76-7.765H170.476c-4.285,0-7.754,3.48-7.754,7.765  S166.191,166.19,170.476,166.19z"/>
                            <path d="M348.088,203.362H202.74c-4.284,0-7.759,3.469-7.759,7.754s3.475,7.765,7.759,7.765h145.348c4.284,0,7.754-3.48,7.754-7.765  S352.372,203.362,348.088,203.362z"/>
                            <path d="M306.695,256.052H170.476c-4.285,0-7.754,3.469-7.754,7.754c0,4.284,3.469,7.754,7.754,7.754h136.219  c4.279,0,7.754-3.47,7.754-7.754C314.448,259.521,310.974,256.052,306.695,256.052z"/><path d="M396.776,86.288H115.225c-29.992,0-54.403,22.562-54.403,50.308v154.83c0,27.735,24.411,50.297,54.403,50.297h166.034  l119.812,83.989v-84.135c27.996-2.038,50.108-23.753,50.108-50.151v-154.83C451.179,108.85,426.768,86.288,396.776,86.288z   M427.906,291.426c0,14.902-13.972,27.025-31.131,27.025h-18.978v62.523l-89.193-62.523h-173.38  c-17.164,0-31.131-12.123-31.131-27.025v-154.83c0-14.913,13.967-27.035,31.131-27.035h281.551  c17.159,0,31.131,12.123,31.131,27.035V291.426z"/>
                        </svg>
                    </Link>
             
    
              </div>                
          </div>
       
       </div>
       )
     }
     </div>
    </div>
  );
}

export default Post;
