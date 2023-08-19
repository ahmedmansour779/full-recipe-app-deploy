import { Container } from '@mantine/core'
import React from 'react'
import { ButtonDownload, ButtonSend, ContactUsForm, ContactUsText, Details, H2, InputContactUs, Span, WrapperContactUs, WrapperContactUsInside } from './style'

export default function ContactUs() {
    return (
        <>
            <WrapperContactUs
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <Container size="xl">
                    <WrapperContactUsInside>
                        <ContactUsText className='ContactUsText'>
                            <H2>Delicious</H2>
                            <Details>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad suscipit maiores ratione, assumenda sint eligendi ex, </p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad suscipit maiores ratione, assumenda sint eligendi ex, </p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad suscipit maiores ratione, assumenda sint eligendi ex, </p>
                            </Details>
                            <ButtonDownload>Download Now</ButtonDownload>
                        </ContactUsText>
                        <ContactUsForm className='ContactUsForm'>
                            <H2 style={{ textAlign: "center" }}>Keep In <Span>Touch</Span></H2>
                            <InputContactUs placeholder='Name' type={'text'} />
                            <InputContactUs placeholder='Email' type={'email'} />
                            <InputContactUs placeholder='Message' type={'text'} />
                            <ButtonSend>Send</ButtonSend>
                        </ContactUsForm>
                    </WrapperContactUsInside>
                </Container>
            </WrapperContactUs>
        </>
    )
}
