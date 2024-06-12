import react from "react";
import { Animated, Dimensions } from "react-native";


export default class FadeInView extends react.Component {
    constructor(props) {
        super(props);
        let {width } = Dimensions.get('window')
        console.log( width);
        this.state = {
            pan: new Animated.ValueXY({ x: width, y: 0 }),
        }
    }

    componentDidMount() {
        Animated.sequence([
            Animated.delay(this.props.delay),
            Animated.timing(
                this.state.pan,
                {
                    delay: this.props.delay,
                    toValue: { x: 0, y: 0 },
                    duration: 1000,
                    useNativeDriver: true
                })
        ]).start();
    }

    render() { 
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    transform: this.state.pan.getTranslateTransform()
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}