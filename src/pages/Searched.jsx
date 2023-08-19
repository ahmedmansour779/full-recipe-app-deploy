import { Container } from '@mantine/core'
import { IconToolsKitchen2 } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import theme from '../styles/config'
import { Card, Grid } from '../styles/cuisine'
import { NotFound } from '../styles/elements'

export default function Searched() {

    const [searched, setSearched] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearched(recipes.results);
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <>
            {searched.length === 0
                ? <NotFound
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div className='container'>
                        <IconToolsKitchen2 size={150} strokeWidth={1} color={`${theme.primary}`} />
                        <h1>not found</h1>
                    </div>
                </NotFound>
                : <div className='container'>
                    {
                        <Container size="xl">
                            <Grid
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}>
                                {searched.map((item) => {
                                    return (
                                        <Card
                                            key={item.id}
                                            animate={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}>
                                            <Link to={"/recipe/" + item.id}>
                                                <img src={item.image} alt={item.title} />
                                                <h4>{item.title}</h4>
                                            </Link>
                                        </Card>
                                    )
                                })}
                            </Grid>
                        </Container>
                    }
                </div>}
        </>
    )
}
