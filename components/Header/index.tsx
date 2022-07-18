import Logo from '../Logo';
import LinkBtn from '../LinkBtn';
import Btn from '../Btn';

type Props = {
    islogged: boolean
    isPageAdd: boolean
}

const Header = ( props: Props) => {
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
                    <Btn text='Log out' />
                </div>
            }

        </header>
    )
}

export default Header