import UserCard from "./UserCard";

export default function PostPage({ posts, currentPage }: { posts: any[], currentPage: number }) {
    const postsPerPage = 10;
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    return (
        <div>
            {currentPosts.map((post) => (
                <UserCard key={post.id} post={post} />
            ))}
        </div>
    )
}