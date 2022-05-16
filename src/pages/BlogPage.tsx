import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function BlogPage(): JSX.Element {
    const [vehiclesList, setVehiclesList] = useState<any[]>([]);
    const store = useSelector((store) => store);
    console.log('store', store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'LOAD_BLOG_DATA'
        });
    }, [])
    return (
        <div>
            <h1>Blog Page</h1>
        </div>
    )
}
export default BlogPage;
