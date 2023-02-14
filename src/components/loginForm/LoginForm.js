import CustomInput from "@components/_globals/customInput";


const LoginForm = ({placeholder, underlineLabel}) => {

    return (
        <div className={'login_form'}>
            <CustomInput placeholder='Email' underlineLabel={underlineLabel}/>
            <CustomInput placeholder='Password' underlineLabel={underlineLabel}/>
        </div>
    )
}

export default LoginForm

LoginForm.defaultProps = {}