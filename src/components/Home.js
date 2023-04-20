import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);


  useEffect(() => {
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    onSnapshot(collection(db, 'movies'), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        // console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            console.log("type does not exist.")
        }
      })


      
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
    // eslint-disable-next-line
  }, [userName]);





  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />


    </Container>
  )
}

const Container = styled.main`
  position:relative;
  min-height: calc(100vh - 250px);
  overflow-x:hidden;
  display:block;
  top:72px;
  padding:0 calc(3.5vw + 5px);
  

  &:after{
    background:url("/assests/images/home-background.png") center center / cover no-repeat fixed;
    content:"";
    position:absolute;
    inset:0px;
    opacity:1;
    z-index:-1;
  }
`;


