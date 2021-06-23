import PropTypes from "prop-types";
import styled from "styled-components"
import Loading from "../../Components/Loading"
import SectionThree from "../../Components/SectionThree"

const Container = styled.div``;


const PricesPresenter = ({prices, loading}) => {
    return (
        loading ? (<Loading />) : (
            <Container>
                {prices && prices.length > 0 && (
                    <div>
                        {prices.map(({name, symbol, quotes})=> <SectionThree name={name} symbol={symbol} quotes={quotes}></SectionThree>)} 
                    </div>
                )}
            </Container>
        )
    )
}

PricesPresenter.propTypes = {
    prices: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          symbol: PropTypes.string
        }),
      ),
    loading: PropTypes.bool.isRequired
}

export default PricesPresenter
