import { Container } from '@mantine/core'
import React from 'react'
import image from "../image/photo-1552566626-52f8b828add9.jpg"
import theme from '../styles/config'
import { AboutUsWrapper, DivAbout, DivImageAbout, ImageAbout } from './style'

function AboutUs() {
    return (
        <div style={{ background: `${theme.background}` }}>
            <Container size="xl">
                <AboutUsWrapper
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <DivAbout>
                        <h1>ABOUT US</h1>
                        <h3>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe culpa doloribus assumenda deserunt doloremque nemo rerum.
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nulla quae eos eligendi repellat quod reprehenderit earum dignissimos accusamus fuga. Assumenda nisi provident tempora repellendus omnis a eligendi, quasi maiores.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nulla quae eos eligendi repellat quod reprehenderit earum dignissimos accusamus fuga. Assumenda nisi provident tempora repellendus omnis a eligendi, quasi maiores.
                        </p>
                    </DivAbout>
                    <DivImageAbout>
                        <ImageAbout src={image} alt="About Us" />
                    </DivImageAbout>
                </AboutUsWrapper>
            </Container>
        </div>
    )
}

export default AboutUs