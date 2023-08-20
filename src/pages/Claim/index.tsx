import Login from '@/components/Login';
// import Thanks from '@/components/Thanks';
import { getCookie } from '@/enum';
import Claim from './claim';
import { Link, useLocation, } from 'react-router-dom';
export default function MINT() {

    const location = useLocation();

    const [login, setLogin] = useState(false);

    useEffect(() => {
        const path = location.pathname.replace(/^\//, "");
        console.log(location)
        if (location.pathname.indexOf('1')) setLogin(true);
    })
    return (
        <>
            <div className='wh-full flex-center'>
                {location.search.indexOf('1') !== -1 ? <Claim /> : <Login />}
                {/* <Login /> */}
                {/* <Claim /> */}
            </div>
        </>
    );
}

