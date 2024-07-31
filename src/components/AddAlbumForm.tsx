import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import axios from "axios";


export default function AddAlbumForm() {
    const key: ("title") = "title";

    const validationSchema = yup.object({
        title: yup.string().min(1).required('Title is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validationSchema) });

    useEffect(() => { console.log(errors) }, [errors])

    // Handle form submission
    const onSubmit = (data: any, e: any) => {
        console.log(data);
        e?.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/albums/', {
            userId: 10,
            title: key,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>{"Enter an Album title"}</h3>
                <div key={key}>
                    <label>
                        {key.toUpperCase()}
                    </label>
                    <textarea id={key} {...register(key)} />
                    {/* Show error message if field does not meet validationSchema */}
                    {errors[key] && <p>{errors[key]?.message}</p>}
                </div>
            <button type="submit">Submit</button>
        </form>
    );
}