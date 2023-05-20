import {Form} from "antd";
import Title from "antd/es/typography/Title";
import {TextareaJson} from "../components/TextareaJSON/TextareaJSON";

export const IndexView = () => {
    return (
        <section className="b-view-container">
            <Title level={1}>JSONValidator</Title>
            <Form>
                <Title level={3}>Enter JSON:</Title>
                <TextareaJson />
            </Form>
        </section>
    )
}