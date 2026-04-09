export default function UserCard({ post }: { post: any }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px', maxWidth: '85%', overflow: 'auto' }}>
            <h4>{post.title}</h4>
            <p style={{ fontSize: '0.9em', color: '#666' }}>Post ID: {post.id} | User ID: {post.userId}</p>
            <p>{post.body}</p>
        </div>
    )
}