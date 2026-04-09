export default function UserCard({ post }: { post: any }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}