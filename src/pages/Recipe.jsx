/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mantine/core";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Details, DetailsWrapper, Info } from '../styles/elements';


export default function Recipe() {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState("Instruction")
    let params = useParams()

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
        <>
            <Container size="xl">
                <DetailsWrapper
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <Details
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>
                        <h2>{details.title}</h2>
                        <img src={details.image} alt={details.title} />
                    </Details>
                    <Info>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2rem" }}>
                            <Button
                                onClick={() => { setActiveTab("Instruction") }}
                                className={activeTab === "Instruction" ? "active" : ""}
                            >Instruction</Button>
                            <Button
                                onClick={() => { setActiveTab("Ingredients") }}
                                className={activeTab === "Ingredients" ? "active" : ""}
                            >Ingredients</Button>
                        </div>
                        {activeTab === "Instruction" && (
                            <motion.div
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: "flex", flexDirection: "column" }}>
                                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                                <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                            </motion.div>
                        )}
                        {activeTab === "Ingredients" && (
                            <motion.div
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}>
                                <ul>
                                    {details.extendedIngredients.map((ingredient) => (
                                        <li key={ingredient.id}>{ingredient.original}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </Info>
                </DetailsWrapper>
            </Container>
        </>
    )
}
