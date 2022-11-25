import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div>
            <h1>404 Not Found</h1>
            <h2>Back to Homepage</h2>
            <Link to ="/">Home</Link>
        </div>
    )
}

export default NotFound;