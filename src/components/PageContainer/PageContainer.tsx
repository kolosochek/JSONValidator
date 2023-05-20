import {Content, Footer, Header} from "antd/es/layout/layout";
import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import "antd/dist/reset.css"
import "../../assets/css/pageContainer.css"

export interface ILayout {

}

export const PageContainer = ({}: ILayout) => {
    return (
            <Layout className="b-layout-wrapper">
                <Header/>
                <Content className="b-content-wrapper">
                    <Outlet/>
                </Content>
                <Footer/>
            </Layout>
    )
}