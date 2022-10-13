import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';
import Spacer from '../Spacer'

const Header = () => {
  return (
    <header>
      <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubHeader>
          <Button> Subscribe </Button>
          <Spacer  size={8}/>
          <a href='$'> Already a subscriber?</a>
      </SubHeader>
    </Wrapper>
    </header>
  );
};


const Wrapper = styled(MaxWidthWrapper)`
  padding:0;
@media ${ QUERIES.laptopAndUp} {
    display: flex;
    align-items: center ;
    padding-block-start: 16px;
  }
`
const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${ QUERIES.laptopAndUp} {
    background: transparent;
    padding-block: 0;
   color:var(--color-gray-900);
  }
  
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  @media ${ QUERIES.laptopAndUp} {
    &:last-child {
display: none ;
}
  }
  

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${ QUERIES.laptopAndUp} {
    margin-top: 0;
  margin-bottom: 0;
  }

`;

const SubHeader = styled.div`

  display: none;
  @media ${ QUERIES.laptopAndUp} {
    display: block ;

    a {
      font-style: italic ;
      text-decoration:underline;
      color:var(--color-gray-900);
      font-size: calc(14 / 16 * 1rem);
    }
  }
`

export default Header;
