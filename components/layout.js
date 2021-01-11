import Link from 'next/link';
import Head from 'next/head';
import theme from '../styles/theme';
import {useScroll, useWindowSize} from '../components/hooks';
import { useEffect , useState} from 'react';
import {useRouter} from 'next/router';
import { Logout } from '../services/apiservice';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function LoadingScreen({loader}) {
    return (
        <div id="body">
            <style jsx global>{`
                #__next {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                html {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

const Navigation = ({title, links, logo, currentpath, hideNav, user, permission}) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if(show == true) setShow(false)
    }, [currentpath])

    const toggleShow = e => {
        e.persist();
        if(show == false) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    return (
        <div id='nav'>
            <img className='logo' src={logo} />
            <Link href="/"><h1>{title}</h1></Link>
            <ul className='barlink'>
                {links.map((link, i) => {
                    return <Link key={i} href={link.url}><li title={link.url}>{link.name}</li></Link>
                })}
            </ul>
            <img onClick={toggleShow} className='ham' src='/ham.png'/>
            <style jsx>{`
                #nav {
                    position: fixed;
                    left: 0;
                    width: 100%;
                    height: 80px;
                    z-index: 999;
                    transition: all .3s ease;
                    background: rgba(255,255,255, 1);
                    box-shadow: 0 0 2px rgba(23, 23, 23, .8);
                    display: ${hideNav == false ? 'block': 'none'};
                }
                .ham {
                    display: none;
                }
                .logo {
                    float: left;
                    width: 60px;
                    height: 60px;
                    padding: 10px;
                }
                .username:hover .dropdown {
                    height: 100px;
                    opacity: 1;
                }
                h1 {
                    float: left;
                    font: 26px ${theme.fonts.title};
                    color: ${theme.colors.onxy};
                    margin: 0 10px;
                    cursor: pointer;
                    padding: 22px 10px;
                }
                .barlink {
                    float: left;
                    height: 90px;
                    position: relative;
                    margin: 0;
                }
                .barlink li {
                    float: left;
                    font: 15px ${theme.fonts.subheader};
                    padding: 30px 10px;
                    height: 18px;
                    border-top: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .6;
                    list-style: none;
                    cursor: pointer;
                }
                .barlink li:hover {
                    border-top: 2px solid ${theme.colors.coral};
                    opacity: 1;
                }
                .barlink li[title="${currentpath}"] {
                    border-top: 2px solid ${theme.colors.coral};
                }
                @media only screen and (max-device-width: 480px) {
                    .logo {
                        width: 30px;
                        height: 30px;
                        padding: 25px 10px;
                    }
                    .ham {
                        position: fixed;
                        top: 0;
                        right: 0;
                        padding: 20px;
                        display: block;
                        width: 30px;
                        height: auto;
                        cursor: pointer;
                    }
                    h1 {
                        font: 20px ${theme.fonts.title};
                        padding: 25px 5px;
                    }
                    .barlink {
                        height: auto;
                        width: 100%;
                        background: white;
                        transform: translateX(${show ? 0: '100%'});
                        transition: all .4s ease-in-out;
                    }
                    .barlink li {
                        width: 80%;
                        padding: 10px 2px;
                    }
                }
            `}</style>
        </div>
    )
}

const Header = ({title, currentpath}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="J and M Transmission" content="Come in and get your transmission fixed, car repair, friendly service Attleboro MA" />
            <meta name="google-site-verification" content="Pl8i8MYT3sL5Crj-jJ6H4ND_0-U-xAbYEprH7_tWkZc" />
            <link rel='icon' href='/icon_gear_black.png' type="image/gif" sizes="16x16"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
    )
}


function Layout({children, links, title, path, logo}) {
    
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [permission, setPermission] = useState(null)
    const [userFullName, setFullName] = useState(null)

    const [hideNav, setNav] = useState(router.pathname === '/login' ? true: false)

    useEffect(() => {
        setNav(router.pathname === '/login'? true: false)
    }, [router.pathname])

    useEffect(() => {
        const updateUser = () => {
            const email = cookies.get('email')
            const fullname = cookies.get('name')
            const permissions = cookies.get('permission_level')
            if(email && fullname && permissions) {
                setUser(email)
                setFullName(fullname)
                setPermission(permissions)
            } else {
                setUser(null)
                setFullName(null)
                setPermission(null)
            }
        }
        updateUser();
    }, [router.pathname])

    return (
        <div id='layout'>
            <Header title={title} currentpath={path}/>
            <Navigation permission={permission} logo={logo} user={userFullName} hideNav={hideNav} title={title} links={links} currentpath={path}/>
            <div id="canvas">
                {children}
            </div>
            <div id="footer">
                <h2 className='foottitle'>J and M Transmission</h2>
                <ul>
                    {links && links.map((link, i) => {
                        return <Link key={i} href={link.url}><li title={link.url}>{link.name}</li></Link>
                    })}
                </ul>
                <div id="copyw">
                    <h2>© CopyRight 2020 J and M Transmission</h2>
                    <h2>Designed By Uplink Work</h2>
                </div>
            </div>
            <style jsx global>{`
                #layout {
                    float: left;
                    width: 100%;
                    height: 100%;
                }
                #footer {
                    float: left;
                    position: relative;
                    z-index: 2;
                    width: 90%;
                    padding: 10px 5%;
                    min-height: 500px;
                    background: ${theme.colors.onxy};
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    align-content: center;
                }
                .foottitle {
                    position: absolute;
                    top: 10px;
                    left: 40px;
                    color: white;
                    font: 26px 'Montserrat';
                }
                #footer ul {
                    float: left;
                    color: white; 
                }
                #footer ul li {
                    list-style: none;
                    font: 16px 'Roboto';
                    padding: 4px 0;
                    cursor: pointer;
                }
                #copyw {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: 0;
                    background: ${theme.colors.darkonxy};
                    min-height: 80px;
                }
                #copyw h2 {
                    float: left;
                    font: 18px 'Montserrat';
                    color: white;
                    margin: 10px;
                    padding: 20px;
                }
                #maincont {
                    float: left;
                    width: 100%;
                    min-height: 100%;
                }
                #canvas {
                    float: left;
                    width: 100%;
                    min-height: 100%;
                    height: auto;
                    background: white;
                    z-index: 99;
                }
                #__next {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                #nprogress .bar {
                    background: #ff8552 !important;
                }
                html {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

// Layout is out containing shell
// -> Canvas is inner container shell

export default Layout