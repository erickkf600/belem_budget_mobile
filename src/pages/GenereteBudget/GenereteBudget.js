import React, { useState } from "react"
import { Container, stepperStyles } from './generete-budget.style'
import { connect } from 'react-redux'
import Stepper from "react-native-stepper-ui"
import * as actions from './generate-budget.actions'
import { CustomIcon } from './../../../src/assets/Icons/CustomIcon'
function GenereteBudget({submit}) {
    const [active, setActive] = useState(0)
    return (
        <Container>
            {/* <CustomIcon name="home" size={27} style={props.state.index === 0 ? icon.active : icon.inactive} /> */}
            <Stepper
                active={active}
                stepStyle={stepperStyles.stepStyle}
                buttonStyle={stepperStyles.buttonStyle}
                wrapperButtonStyle={stepperStyles.wrraperButtonStyle}
                content={actions.content}
                prevButtonText="Voltar"
                nextButtonText="Proximo"
                finishButtonText="Enviar"
                onBack={() => setActive(p => p - 1)}
                onFinish={() => alert("Finish")}
                onNext={() => setActive(p => p + 1)}
            />
            {/* <Button title="Submit" onPress={() => {}} /> */}
        </Container>
    )
}

export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(GenereteBudget)