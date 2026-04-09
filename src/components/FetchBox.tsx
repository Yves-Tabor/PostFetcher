// Create a component with an input element
// - The input will take in a URL
//     - `https://jsonplaceholder.typicode.com/posts`
//     - The user has to type in the URL manually
// - It will have a submit button called `Fetch`
// - There will be a `retry` button to manually refetch again if the request fail
// - If the user clicks the button, it will fetch the posts and display them
// You have to fetch using a custom hook
// The hook will return
// The posts to display
// refetch function
// loading state
// error state

import React from "react";

export function FetchBox() {
    const [url, setUrl] = React.useState('');
    const [posts, setPosts] = React.useState([]);
    const [getSubmit, setSubmission] = React.useState(false);
    const refetchButtonRef = React.useRef<HTMLButtonElement>(null);
    
    React.useEffect(()=>{
        if (getSubmit && url) {
            async function fetchPosts() {
                try{
                    const response = await fetch(url);
                    const data = await response.json();
                    setPosts(data);
                    console.log(data);
                    if (refetchButtonRef.current) {
                        refetchButtonRef.current.style.display = 'none';
                    }
                }
                catch(err){
                    if (refetchButtonRef.current) {
                        refetchButtonRef.current.style.display = 'block';
                    }
                }
                setSubmission(false);
            }
            fetchPosts();
        }
    }, [getSubmit, url]);
    
    function formHandler(e: unknown) {
        (e as Event).preventDefault();
        console.log('Form submitted');
        setSubmission(true);
    }
    
    function refetchHandler() {
        setSubmission(true);
    }

    return (
        <div>
        <div id='fetch-box'>
            <div id='fetch-box-header'>
                <h3>Fetch Posts</h3>
                <p>Enter the API endpoint URL to fetch the posts from</p>
            </div>
            <form id='fetch-box-input' onSubmit={formHandler}>
                <input type="text" placeholder="https://..." value={url} onChange={(e)=>(setUrl(e.target.value))}/>
                <button type="submit">Fetch</button>                <button type="button" ref={refetchButtonRef} onClick={refetchHandler} style={{display:'none'}}>Refetch</button>
            </form>
        </div>

        
        </div>
    )
}