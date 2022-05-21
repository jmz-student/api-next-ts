import { FC, ReactElement } from "react";

const dynamicForm: FC<any> = ({ fields }) => {
    delete fields._id;
    delete fields.__v;
    const ITEMS = Object.entries(fields);

    const handleSubmit = (e: any) => {
        e.preventDefault();

    }
    return (
        <div className="mt-2">
            <form>
                {
                    ITEMS.map(([label, value], index): ReactElement => {
                        const TYPE_TEXT: string = /@/.test(value) ? "email" : "text";
                        return(
                            <>
                                <label htmlFor={label}>{label}</label><br />
                                <input type={TYPE_TEXT} name={label} value={value}/><br />
                            </>
                        )
                    })
                }

            </form>
        </div>
    )
};

export default dynamicForm;
