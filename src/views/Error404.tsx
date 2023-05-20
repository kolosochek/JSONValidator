import Title from "antd/es/typography/Title";
import Typography from "antd/es/typography/Typography";
import Error404Image from "../assets/images/404.jpeg"

export interface IView404 {

}

export const Error404 = ({}: IView404) => {
    return (
        <section className="b-error404-view-wrapper">
            <section className="b-error404-view">
                <Title level={1}>404</Title>
                <img src={Error404Image} />
                <Typography>Completely nothing!</Typography>
            </section>
        </section>
    )
}