import PropTypes from "prop-types";
import styled from "styled-components"
import Loading from "../../Components/Loading"
import Section from "../../Components/Section"

const Container = styled.div`
`;


const CoinsPresenter = ({coins, loading}) => loading ? (<Loading />) : (
    <Container>
        {coins && coins.length > 0 && (
            <div>
                {coins.map(({rank, name, symbol})=> <Section rank={rank} name={name} symbol={symbol}></Section>)} 
            </div>
        )}
    </Container>
)

CoinsPresenter.propTypes = {
    coins: PropTypes.arrayOf(
        PropTypes.shape({
          rank: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          symbol: PropTypes.string.isRequired
        }),
      ),
    loading: PropTypes.bool.isRequired
}

export default CoinsPresenter
