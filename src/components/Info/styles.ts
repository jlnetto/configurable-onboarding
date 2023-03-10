import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 40px 0px;
    gap: 30px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  gap: 16px;

  span {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }
`;

export const InfoImg = styled.img`
  width: 63px;
  height: 63px;
`;
