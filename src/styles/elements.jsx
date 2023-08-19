import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const Gradient = styled.div`
  label: Gradient;
  z-index: 15;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  :hover {
    background: none;
  }
  overflow: hidden;
`;
export const Card = styled.div`
  label: Card;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    label: img;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h4 {
  }
  p {
    label: p;
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    margin-left: -50%;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderNav = styled.div`
  label: HeaderNav;
  padding: 1rem 0;
  background: ${theme.secondary};
  h3 {
    font-family: "Montserrat", sans-serif;
  }
  div {
    label: div;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    color: ${theme.primary};
    flex-wrap: wrap;
  }
`;
export const Section = styled.section`
  label: Section;
  display: flex;
  align-items: baseline;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Contact = styled.p`
  label: Contact;
  text-decoration: none;
  color: ${theme.primary};
`;
export const FormStyle = styled.form`
  label: FormStyle;
  margin-right: 1rem;
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  input {
    border-radius: 10px;
    border: 2px solid ${theme.primary};
    background: none;
    padding: 0.5rem 0.5rem 0.5rem 2.3rem;
    color: ${theme.white};
    &::placeholder {
      color: ${theme.primary};
    }
    &:hover {
      background-color: ${theme.white};
      color: ${theme.primary};
    }
  }
  svg {
    position: absolute;
    top: 25%;
    left: 4%;
    font-size: 1.3rem;
    color: ${theme.primary};
    &:hover {
      background-color: ${theme.white};
      color: ${theme.primary};
    }
  }
`;
export const NotFound = styled(motion.div)`
  label: NotFound;
  background: ${theme.background};
  color: ${theme.primary};
  padding: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 36.5rem;
  @media (max-width: 768px) {
    height: 20.5rem;
  }
  h1 {
    margin-top: 2rem;
  }
`;
export const DetailsWrapper = styled(motion.div)`
  label: detailsWrapper;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 4rem 0 4rem 0;
  gap: 2%;
  @media (max-width: 1020px) {
    gap: 2rem;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
  img {
    width: 100%;
    @media (max-width: 425px) {
    }
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

export const Details = styled(motion.div)`
  label: details;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 49%;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;
export const Info = styled.div`
  label: Info;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  width: 49%;
  div {
    display: flex;
  }
  .active {
    background: ${theme.white};
    color: ${theme.primary};
  }
  @media (max-width: 1020px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  label: Button;
  background: ${theme.secondary};
  color: ${theme.white};
  padding: 1rem 2rem;
  border: 2px solid ${theme.primary};
  cursor: pointer;
  font-weight: 600;
`;
export const PageNotFoundWrapper = styled(motion.div)`
  label: PageNotFoundWrapper;
  background: ${theme.background};
  color: ${theme.primary};
  padding: 2rem;
  min-height: 80vh;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    margin-top: 2rem;
  }
`;
export const PageNotFoundUp = styled.div`
  label: PageNotFoundUp;
  @media (max-width: 768px) {
    grid-template-rows: auto 57.5% auto;
  }
`;
