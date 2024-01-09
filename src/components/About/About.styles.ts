import { css, styled } from '../../libs'

export const Container = styled.section`
  padding: 72px 20px;
  height: 80vh;
  ${({ theme }) => css`
    .grid-layout {
      max-width: 1140px;
      margin: 0 auto;
    }
    .grid-layout > div {
      margin: 0 auto;
      display: flex;
    }
    .wrapper-left {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      > img {
        width: 40rem;
      }
    }
    .wrapper-right {
      display: flex;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;

      > h2 {
        font-size: 1.875rem;
        font-weight: 600;
        padding: 5px;
      }

      > div {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        > p {
          text-align: justify;
          text-indent: 20px;
          font-size: 1rem;
          color: var(--gray-300);
          opacity: 1;
        }
      }

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        > a {
          display: flex;
          height: 32px;
          padding: 0.5rem;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-size: 0.8rem;
          color: ${theme.colors.primary};
          background-color: var(--green);
        }

        > a:hover {
          color: ${theme.colors.textHover};
        }
      }
    }

    @media (max-width: 780px) {
      .grid-layout > div {
        flex-direction: column;
      }
      .wrapper-left img {
        /* max-width: 200px; */
        width: 10rem;
      }
    }
  `}
`
