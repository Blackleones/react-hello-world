import PostItem from "./PostItem";

const PostList = ({ posts }) => {

    function NoItems() {
        return <span>Nessun Post</span>
    }

    if(posts.length === 0)
        return NoItems();
        
    return (
        <div className="">
            {
                posts.map(post => {
                    return (<PostItem key={post.id} post={post} />)
                })
            }
        </div>)
}

export default PostList;