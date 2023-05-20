import {Form, notification} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useState} from "react";
import Title from "antd/es/typography/Title";
import {IJSONValidator, JSONValidator} from "../layers/JSONValidator";

const validator = new JSONValidator();
export interface IIndexView {
}

export const IndexView = ({}: IIndexView) => {
    const [rawJSON, setRawJSON] = useState<IJSONValidator['message']>(localStorage.getItem('rawJSON') || ``);
    const [snackbar, contextHolder] = notification.useNotification();

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
            placement: "topRight",
        });
    };

    const validateJSON = (value) => {
        // update the state
        setRawJSON(value)
        // save input to the localStorage
        localStorage.setItem('rawJSON', value)
        // check JSON
        validator.validate(value)
        // set UI result
        openNotification(validator.message, validator.severity)
    }


    return (
        <section className="b-view-container">
            {contextHolder}
            <Title level={1}>JSONValidator</Title>
            <Form>
                <Title level={3}>Enter JSON:</Title>
                <TextArea
                    rows={6}
                    cols={40}
                    onChange={e => validateJSON(e.target!.value)}
                    defaultValue={rawJSON}
                />
            </Form>
        </section>
    )
}