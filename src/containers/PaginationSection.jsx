import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fecthPokemonsPageList } from 'slices/dataSlice';
import { RadiusButton } from 'components/indexComponents';
import { vars } from 'styles/Vars';
import { device } from 'styles/DeviceSize';

export function PaginationSection({ count, next, previous, loading }) {
  const [numPage, setNumPage] = useState(1);
  const dispach = useDispatch();
  const totalPages = Math.ceil(count / 20);

  const onClickHandler = (link, type) => {
    if (!loading) {
      dispach(fecthPokemonsPageList({ apiUrl: link }));
      if (type === 'previous') {
        if (numPage > 1) {
          setNumPage(numPage - 1);
        }
      } else if (type === 'next') {
        if (numPage < totalPages) {
          setNumPage(numPage + 1);
        }
        setNumPage(numPage + 1);
      }
    }
  };

  return (
    <StyledPagination>
      <Container>
        <RadiusButton
          link={previous}
          onClick={() => {
            onClickHandler(previous, 'previous');
          }}
        >
          <FaArrowLeft />
        </RadiusButton>
        <PageInfo>
          <CurrentPage>{`${numPage} `}</CurrentPage>
          <MaxPages>{`de ${totalPages}`}</MaxPages>
        </PageInfo>
        <RadiusButton
          link={next}
          onClick={() => {
            onClickHandler(next, 'next');
          }}
        >
          <FaArrowRight />
        </RadiusButton>
      </Container>
    </StyledPagination>
  );
}

const StyledPagination = styled.section`
  display: grid;
  place-items: center;
  inline-size: 100%;
  margin-block-end: 32px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  block-size: 100%;
`;

const PageInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  place-items: center;
  gap: 20px;
  block-size: 100%;
  padding: 8px 20px;
  border-radius: 62px;
  background-color: ${(props) => props.theme?.bg2};
`;

const CurrentPage = styled.span`
  display: grid;
  place-items: center;
  inline-size: 40px;
  block-size: 40px;
  border-radius: 50%;
  font-size: ${vars['p1-sm']};
  font-weight: ${vars['font-weight-text2']};
  color: ${vars['color-text-light-1']};
  background-color: ${vars['color-secondary-opacity']};
  @media ${device.tablet} {
    font-size: ${vars['p1-lg']};
  }
`;

const MaxPages = styled.span`
  font-size: ${vars['p1-sm']};
  font-weight: ${vars['font-weight-text1']};
  color: ${(props) => props.theme.txt1};
  @media ${device.tablet} {
    font-size: ${vars['p1-lg']};
  }
`;
