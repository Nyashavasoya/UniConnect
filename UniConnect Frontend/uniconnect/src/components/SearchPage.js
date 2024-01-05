import React, { useState, useEffect } from 'react';
import Search from './SearchBar';
import Post from './Post';
import { useRouter } from 'next/navigation';

const SearchPage = ({ posts }) => {
    const router = useRouter();
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);

    const handleSearch = (searchedInstitute) => {
        const filteredResults = posts.filter(post =>
            post.username.toLowerCase().includes(searchedInstitute.toLowerCase())
        );
        setFilteredPosts(filteredResults);
    };

    return (
        <div className='bg-black text-white'>
            <div className="container mx-auto mt-8">
                <div>
                    <button className="bg-white hover:bg-grey-500 text-indigo-700 border border-indigo-700 border-2 rounded-lg font-bold py-2 px-4 rounded" onClick={() => router.back()}>Return</button>
                </div>
                <div className="flex flex-row justify-center">
                    <div>
                        <Search onSearch={handleSearch} />
                    </div>
                </div>
                {filteredPosts && filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div key={post._id} className="ml-4"> {/* Add left margin */}
                            <Post post={post} /><br />
                        </div>
                    ))
                ) : (
                    <div className='text-white bg-black text-center space-y-30'>
                        No Posts Found
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
