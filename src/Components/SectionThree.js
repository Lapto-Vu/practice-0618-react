import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
margin: 0.3rem 0;
`;

const Box = styled.div``;


const Section = ({name, symbol, quotes}) => {
    return (
        <Container>
            <Box>{name} / {symbol}: ${quotes.USD.price} </Box>
        </Container>
    )
}

Section.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
}

export default Section 