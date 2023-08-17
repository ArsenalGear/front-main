import {StyledButton} from './styles';

const BaseButton = ({style, btnText, disabled, className, ...props}) => (
    <StyledButton style={style} disabled={disabled} className={className} {...props}>
        {btnText}
    </StyledButton>
);

export {BaseButton};
