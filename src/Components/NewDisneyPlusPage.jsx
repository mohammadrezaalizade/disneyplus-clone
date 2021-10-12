import { Link } from "react-router-dom";
import styled from "styled-components";

const NewDisneyPlusPage = ({newDisney}) => {
  let cards;
  if (newDisney) {
    cards = newDisney.map((item) => (
      <Link key={item.movie.id} to={`/detail/${item.movie.id}`}>
        <Img src={item.movie.cardImg} alt="" />
      </Link>
    ));
  }
  return (
    <RecommendForYou>
      <Header>New Disney+</Header>
      <RecommendBoxContainer>
        {cards ? cards : <h1>Loading...</h1>}
      </RecommendBoxContainer>
    </RecommendForYou>
  );
};

const RecommendForYou = styled.div`
  padding: 20px;
`;
const Header = styled.h1`
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const RecommendBoxContainer = styled.div`
  display: grid;
  padding: 20px 0px 26px;
  display: grid;
  grid-gap: 40px;
  gap: 15px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    border: 2px solid #fff;
    transform: scale(1.05);
  }
`;

export default NewDisneyPlusPage;
