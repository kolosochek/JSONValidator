import {useState} from "react";
import {notification} from "antd";
import TextArea from "antd/es/input/TextArea";
import {IJSONValidator, JSONValidator} from "../../layers/JSONValidator";
import {useDebounce} from "../../hooks/useDebounce";


export interface ITextareaJson {
    validator?: JSONValidator
}

export const TextareaJson = ({validator = new JSONValidator()}: ITextareaJson) => {
    const [rawJSON, setRawJSON] = useState<IJSONValidator['message']>(localStorage.getItem('rawJSON') || ``);
    const [snackbar, contextHolder] = notification.useNotification({maxCount: 3});

    const openNotification = (message: IJSONValidator['message'], severity: IJSONValidator['severity']) => {
        let title;

        switch (severity) {
            case `error`: {
                title = `JSON is INVALID:`
                break;
            }
            case `warning`: {
                title = `Warning:`
                break;
            }
            case `success`: {
                title = `JSON is VALID:`
                break;
            }
        }
        snackbar[severity]({
            message: `${title}`,
            description: `${message}`,
            placement: "topRight"
        });
    };

    const validateJSON = useDebounce((value: IJSONValidator["message"]) => {
        // update the state
        setRawJSON(value)
        // save input to the localStorage
        localStorage.setItem('rawJSON', value)
        // check JSON
        validator?.validate(value)
        // set UI result
        openNotification(validator!.message, validator!.severity)
    }, 500)


    return (
        <>
            {contextHolder}
            <TextArea
                rows={10}
                onChange={(e) => {validateJSON(`${e.target.value}`)}}
                defaultValue={rawJSON}
            />
        </>
    )
}