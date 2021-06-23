import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
margin: 2rem 0;
`;

const Title = styled.div`
font-weight: bold;
margin: 0.5rem 0;
`;

const Descript = styled.div`
margin: 0.5rem 0;
`;

const SectionTwo = ({name, description, links}) => { 
    if (links===null) {
        links={website:[".."]};
    }

    if (description===null) {
        description = ".."
    }

    return (
    <Container>
        <Title>{name}</Title>
        <Descript>{description.slice(0,50)}...</Descript>
        <a href={links.website}>{links.website}</a>
    </Container>
    )
}

SectionTwo.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}

export default SectionTwo