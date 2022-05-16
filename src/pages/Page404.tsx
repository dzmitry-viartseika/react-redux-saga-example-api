import { Link } from 'react-router-dom';

function ErrorPage(): JSX.Element {
    return (
        <div>
            <h1>404 page</h1>
            <Link to='/' className='btn'>
                Back homePage
            </Link>
        </div>
    )
}
export default ErrorPage;
