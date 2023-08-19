import styled from "@emotion/styled";
import { motion } from "framer-motion";
import imag from "../image/background.png";
import theme from "../styles/config";

export const WrapperContactUs = styled(motion.section)`
    label: WrapperContactUs;
    background: url(${imag}) fixed no-repeat center;
    background-size: cover;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
`
export const WrapperContactUsInside = styled("section")`
    label: WrapperContactUsInside;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1%;
    flex-wrap: wrap;
`
export const ContactUsText = styled("div")`
    label: ContactUsText;
    width: 49%;
    padding: 2rem 0;
`
export const H2 = styled("h2")`
    label: H2;
    color: ${theme.primary};
    padding-bottom: 1rem;
    font-size: 3rem;
    width: 100%;
`
export const Span = styled("span")`
    label: Span;
    color: ${theme.primary};
`
export const Details = styled("div")`
    label: Details;
    width: 80%;
    padding: 2rem 0 2rem 1rem;
    color: ${theme.gray};
`
export const ButtonDownload = styled("button")`
    label: Details;
    color: ${theme.white};
    background-color: ${theme.primary};
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 15px;
    border: 1px solid ${theme.white};
    &:hover {
        background-color: ${theme.secondary};
        color: ${theme.primary}
    }
`
export const ContactUsForm = styled("div")`
    label: ContactUsForm;
    border-radius: 15px;
    border: 1px solid ${theme.primary};
    background-color: ${theme.textBackground};
    width: 49%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 3rem;
    align-items: flex-start;
    padding: 1rem;
`
export const InputContactUs = styled("input")`
    label: InputContactUs;
    width: 100%;
    border: 1px solid ${theme.gray};
    border-radius: 10px;
    padding: 0.5rem;
    background:none ;
    ::placeholder {
        color: ${theme.primary};
        opacity: 0.8 ;
    }
    &:hover{
        ::placeholder {
        color: ${theme.secondary};
        opacity: 1 ;
        }
    }
    color: ${theme.primary};
`
export const MessageContactUs = styled("textarea")`
    label: MessageContactUs;
    width: 100%;
    border: 1px solid ${theme.primary};
    border-radius: 10px;
    background: none;
    padding: 0.5rem;
    ::placeholder {
        color: ${theme.primary};
        opacity: 0.8 ;
    }
    &:hover{
        ::placeholder {
        color: ${theme.secondary};
        opacity: 1 ;
        }
    }
    color: ${theme.primary};
`
export const ButtonSend = styled("button")`
    label: ButtonSend;
    color: ${theme.primary};
    border: 1px solid ${theme.primary};
    background: none ;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 15px;
    &:hover{
        background-color: ${theme.secondary};
    }
`