import { useState } from "react";

function Intro2(props){
    
    const design = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 10px",
        // color: "tomato",
        fontWeight: "bold"
    }

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    // const handleChange = (e) => setForm(e.target.value)

    return (

        <div className="blog-post-intro">
             
            <h2>Why I love front-end web development</h2>
            


            <div style={design}>
                {props.children}
                <label>
                First name: {'\t'} 
                <input 
                    value={form.firstName} 
                    onChange={e => {
                        setForm({
                            ...form, 
                            firstName: e.target.value
                        })
                    }} 
                />
                
                </label>
                <br />
                <label>
                    Last name: {'\t'}
                    <input 
                        value={form.lastName} 
                        onChange={e => {
                            setForm({
                                ...form,
                                lastName: e.target.value
                            })
                        }}
                    />
                </label>

                <p style={design}>
                    {props.children}
                    {form.firstName}{' '}
                    {form.lastName}{' '}
                    {form.email}{' '}
                </p>
            </div>
        </div>
        
    );
};

export default Intro2;