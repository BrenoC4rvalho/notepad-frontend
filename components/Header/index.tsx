import Logo from '../Logo';
import LinkBtn from '../LinkBtn';

import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router';

type Props = {
    islogged: boolean
    isPageAdd: boolean
}

const Header = ( props: Props) => {

    const router = useRouter();

    const logout = () => {
        destroyCookie(undefined, 'nextauth.token')
        router.push('/');
    }

    return (
        <header className='flex justify-between items-center py-5 px-20 '>
            


            <Logo />
            
            {!props.islogged &&
                <div>
                    <LinkBtn text='Sign in' background={true} link='/signin'  />
                    <LinkBtn text='Sign up' background={false} link='/signup' />
                </div>
            }

            {props.islogged &&
                <div>
                    {!props.isPageAdd &&
                        <LinkBtn text='Add note' link='/add' background={true} />
                    }
                    {props.isPageAdd &&
                        <LinkBtn text='Home'link='/home' background={true} />
                    }
                    <button 
                        className='p-2 mx-2 text-base rounded border-cyan-500 border-2 text-cyan-500'
                        onClick={logout}
                    >
                        Log out
                    </button>
                </div>
            }

        </header>
    )
}

export default Header