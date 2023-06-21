import { useForm, useFieldArray } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function UserForm() {

    const [isClicked, setisClicked] = useState(false)

    useEffect(() => {
        if (isClicked == false) {
            document.getElementById('btnSubmit').disabled = true
        } else {
            document.getElementById('btnSubmit').disabled = false
        }
    })

    const { register, handleSubmit, control } = useForm();

    const { append, fields, remove } = useFieldArray({
        control,
        name: "users"
    })

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '50%', marginTop: '0.5%', borderRadius: '30px' }}>
                <h1>React Hook Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        fields.map((item, index) => (
                            <div key={item.id} style={{ marginBottom: '20px' }}>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="text" className="form-control" placeholder='First Name' {...register(`users[${index}].firstname`, { required: true })} defaultValue={item.firstname} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="text" className="form-control" placeholder='Last Name' {...register(`users[${index}].lastname`, { required: true })} defaultValue={item.lastname} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="email" className="form-control" placeholder='Email' {...register(`users[${index}].email`, { required: true })} defaultValue={item.email} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="number" className="form-control" placeholder='Phone Number' {...register(`users[${index}].number`, { required: true })} defaultValue={item.number} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="password" className="form-control" placeholder='Password' {...register(`users[${index}].password`, { required: true })} defaultValue={item.password} />
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="male" id='male' {...register(`users[${index}].gender`, { required: true })} />
                                    <label className="form-check-label" htmlFor="male">male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="female" id='female' {...register(`users[${index}].gender`, { required: true })} />
                                    <label className="form-check-label" htmlFor="female">female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" value="other" id='other'  {...register(`users[${index}].gender`, { required: true })} />
                                    <label className="form-check-label" htmlFor="other">other</label>
                                </div>
                                <br></br>


                                <div className="form-check form-check-inline">
                                    <select className="custom-select" {...register(`users[${index}].state`, { required: true })} defaultValue={item.state}>
                                        <option value="">Select your state</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Bihar">Bihar</option>
                                    </select>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="terms" value="agree" {...register(`users[${index}].term`, { required: true })} />
                                    <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
                                </div>

                                <Button variant="danger" onClick={() => { remove(index) }}>
                                    Delete
                                </Button>
                                <br></br>
                            </div>
                        ))
                    }


                    <Button variant="dark" style={{ marginBottom: '10px' }} onClick={() => {
                        append({

                            firstname: "",
                            lastname: "",
                            email: "",
                            number: "",
                            password: "",
                            gender: "",
                            term: "",
                            state: ""

                        })
                        setisClicked(true)
                    }}>
                        Add User
                    </Button>
                    <br></br>

                    <Button variant="success" type="submit" id='btnSubmit'>
                        Submit
                    </Button>
                </form>
            </div >
        </>
    )
}

export default UserForm