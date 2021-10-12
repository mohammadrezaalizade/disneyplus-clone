import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import "./HomePage.css";
import HomePageSlider from "./HomePageSlider";
import BoxContainer from "./BoxContainer";
import RecommendedPage from "./RecommendedPage";
import NewDisneyPlusPage from "./NewDisneyPlusPage";
import OriginalPage from "./OriginalPage";
import TrendingPage from "./TrendingPage";
const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const moviesList = useSelector((state) => state.moviesList.moviesList);

  let recommended = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    setMovies(moviesList);
  }, [moviesList]);

  //recommend  new original trending

  if (movies) {
    movies.map((movie) => {
      switch (movie.type) {
        case "recommend":
          recommended = [...recommended, { movie }];
          break;
        case "new":
          newDisney = [...newDisney, { movie }];
          break;
        case "original":
          original = [...original, { movie }];
          break;
        case "trending":
          trending = [...trending, { movie }];
          break;
        default:
          break;
      }
    });
  }

  return (
    <Container>
      <HomePageSlider />
      <BoxContainer />
      <RecommendedPage recommended={recommended} />
      <NewDisneyPlusPage newDisney={newDisney} />
      <OriginalPage original={original} />
      <TrendingPage trending={trending} />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./images/home-background.png");
  padding-top: 50px;
`;

export default HomePage;
