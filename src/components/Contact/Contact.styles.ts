import { css, styled } from '../../libs'

export const Container = styled.section`
  padding: 72px 20px;
  ${({ theme }) => css`
    background-color: ${theme.colors.secundary};
    .grid-layout {
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .title {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 90%;
      margin-top: 10px;
    }
    .title h2 {
      font-size: 1.25rem;
      font-weight: 600;
      white-space: nowrap;
    }
    .title p {
      font-size: 1rem;
      color: var(--gray-300);
    }
    .wrapper-primary {
      width: 100%;
    }
    .wrapper-right {
      width: 100%;
    }
    .contactsLinks {
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .contactsLinks div {
      flex: 1;
    }
    .contactsLinks a {
      display: flex;
      justify-content: center;
      gap: 20px;
      border: dashed 1px #9ca3af90;
      border-radius: 0.5rem;
      height: 5.5rem;
      margin-bottom: 20px;
    }
    span:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      font-size: 40px;
    }
    .img {
      width: 30px;
      margin-left: 10px;
    }
    span:first-child:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
    span:last-child {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
    }
    .contactsLinks h4:first-child {
      font-size: 0.8rem;
      font-weight: 600;
    }
    .contactsLinks h4:first-child:hover {
      color: ${theme.colors.textHover};

      transition: 0.5s;
    }
    .contactsLinks h4:last-child {
      color: var(--gray-300);
      font-size: 0.8rem;
      font-weight: 200;
      text-decoration: underline;
    }
    .contactsLinks h4:last-child:hover {
      color: #9ca3afca;
      transition: 0.5s;
    }
  `}
`
