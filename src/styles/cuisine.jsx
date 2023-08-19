import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const Grid = styled(motion.div)`
    label: Grid;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
    margin-top: 4rem;
`
export const Card = styled(motion.div)`
    label: Card;
    img {
        label: img;
        width: 100%;
        border-radius: 2rem;
    }
    h4 {
        label: h4;
        text-align: center;
        padding: 1rem;
        color: ${theme.primary}
    }
`