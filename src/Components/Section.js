import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div``;

const Box = styled.div``;

const Bold = styled.span`
    font-weight: bold;
`;

const Section = ({rank, name, symbol}) => (
    <Container>
        <Box><Bold>#{rank}</Bold> {name}/{symbol}</Box>
    </Container>
)

Section.propTypes = {
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
}

export default Section 