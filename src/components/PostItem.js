const PostItem = ({ post }) => {
    
    return (
        <div className="p-5 bg-white shadow-md border border-gray-100 hover:bg-gray-100 hover:border-gray-100 rounded-md mb-2 mx-2">{post.title}</div>
    )
}

export default PostItem