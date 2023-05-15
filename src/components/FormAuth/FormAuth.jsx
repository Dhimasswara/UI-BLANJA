

const FormAuth = (props) => {

    return (
        <>
            <div className="mb-3">
                {/* <label for={props.name} className={`form-label ${style.formLabel}`}>
          {props.title}
        </label> */}
             
                    <input type={props.type} value={props.value} className={`form-control`} id={props.name} name={props.name} placeholder={props.title} required={props.req} style={{height: "42px"}}/>
            </div>
        </>
    );
};

export default FormAuth;