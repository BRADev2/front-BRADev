import './styles.css';
// import bdIMG from '../../assets/logobradev.png'


export const LayoutComponents = (props) => {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>    
        </div>
    )
}