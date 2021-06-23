import PropTypes from "prop-types";
import styled from "styled-components"
import Loading from "../../Components/Loading"
import SectionTwo from "../../Components/SectionTwo"

const Container = styled.div``;


const ExchangesPresenter = ({exchanges, loading}) => loading ? (<Loading />) : (
    <Container>
        {exchanges && exchanges.length > 0 && (
            <div>
                {exchanges.map(({name, description, links})=> <SectionTwo name={name} description={description} links={links}></SectionTwo>)}
            </div>
        )}
    </Container>
)

ExchangesPresenter.propTypes = {
    coins: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          description: PropTypes.string
        }),
      ),
    loading: PropTypes.bool.isRequired
}

export default ExchangesPresenter
