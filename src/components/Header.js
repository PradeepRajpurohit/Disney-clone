import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider, signInWithPopup } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserphoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

export default function Header() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserphoto);
    const navigate = useNavigate();

    const handleAuth = () => {
        if(!userName){
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            })
    }
    else if(userName){
        auth.signOut().then(()=>{
            dispatch(setSignOutState());
            navigate("/");
        }).catch((error)=>{
            alert(error.message)
        })
    }
}

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )

    }

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user)
                navigate('/home');
            }
        })
        // eslint-disable-next-line
    },[userName])

    return (
        <Nav>
            <Logo>
                <img src='/assests/images/logo.svg' alt='' />
            </Logo>

            {!userName ? (<Login onClick={handleAuth}>Login</Login> ):(
                <>
                    <NavMenu>
                        <a href='/home'>
                            <img src='/assests/images/home-icon.svg' alt='HOME' />
                            <span>HOME</span>
                        </a>
                        <a href='/search'>
                            <img src='/assests/images/search-icon.svg' alt='HOME' />
                            <span>SEARCH</span>
                        </a>
                        <a href='/watchlist'>
                            <img src='/assests/images/watchlist-icon.svg' alt='HOME' />
                            <span>WATCHLIST</span>
                        </a>
                        <a href='/originals'>
                            <img src='/assests/images/original-icon.svg' alt='HOME' />
                            <span>ORIGINALS</span>
                        </a>
                        <a href='/monies'>
                            <img src='/assests/images/movie-icon.svg' alt='HOME' />
                            <span>MOVIES</span>
                        </a>
                        <a href='/series'>
                            <img src='/assests/images/series-icon.svg' alt='HOME' />
                            <span>SERIES</span>
                        </a>

                    </NavMenu>
                    <SignOut>
                    <UserImg src={userPhoto} alt='photo' />
                    <Dropdown>
                        <span onClick={handleAuth}>Sign out</span>
                    </Dropdown>
                    </SignOut>
                </>
            )}
        </Nav>
    )
};
const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:#090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 36px;
    letter-spacing:16px;
    z-index:3;
`;
const Logo = styled.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:70px;
    font-size:8px;

    img{
        diplay:block;
        width:100%;
    }
`;
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    flex-flow:row nowrap;
    height:100%;
    justify-content:flex-end;
    margin:0px;
    padding:0px;
    position:relative;
    margin-right:auto;
    margin-left:25px;

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
    

        img{
            height:20px;
            min-width:20px;
            width:20px;
            z-index:auto;
        }

        span{
            color : rgb(249,249,249);
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.08;
            padding:2px 0px;
            white-space:nowrap;
            position:relative;
        
            &:before {
                background-color:rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                bottom:-6px;
                content: '';
                height:2px;
                opacity:0;
                position:absolute;
                left:0px;
                right:0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width:auto;
                
            }
        }
    &:hover{
        span:before{
            transform:scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}
    @media (max-width:768px){
        display:none;
    }
`;
const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding:8px 16px;
    text-transform:UPPERCASE;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition:all 0.2s ease 0s;
    cursor:pointer;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`;
const UserImg = styled.img`
    height:100%
`;
const Dropdown = styled.div`
    
    position:absolute;
    top:48px;
    right:0px;
    background:rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    box-shadow: rgb(0 0 0/50%) 0px 0px 18px 8px;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    opacity:0;
    
`;
const SignOut = styled.div`
    positon:relative;
    height:48px;
    width:48px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;

    ${UserImg}{
        border-radius:50%;
        height:100%;
        width:100%;
    }

    &:hover{
        ${Dropdown}{
            opacity:1;
            transition-duration:1s;
        }
    }

`;



