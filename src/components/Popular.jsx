import { Container, Text } from '@mantine/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getApi } from '../api';
import theme from '../styles/config';
import { Card, Gradient } from '../styles/elements';

export default function Popular() {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getApi("popular", setPopular)
    }, [])

    return (
        <div style={{ background: `${theme.background}` }}>
            <Container size="xl" pb="2.5rem">
                <Text fz={theme.fontSizeTitle} p="md" color={theme.primary} size="xl" mb={"1rem"} mt="md">Popular Picks</Text>
                <Splide options={{
                    arrows: true,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                    breakpoints: {
                        2560: {
                            perPage: 4
                        },
                        1440: {
                            perPage: 3
                        },
                        768: {
                            perPage: 2
                        },
                        576: {
                            perPage: 1
                        }
                    },
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card
                                    shadow="sm"
                                    padding="xl"
                                    m={"1rem"}
                                    pl={"0rem"}
                                >
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p style={{ color: `${theme.white}`, fontSize: `${theme.fontSize}` }} ml={"0"} color="dark" size="sm">{recipe.title}</p>
                                        <img
                                            src={recipe.image}
                                            alt={recipe.title}
                                            height={160}
                                            radius={"sm"}
                                        />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Container>
        </div>
    )
}