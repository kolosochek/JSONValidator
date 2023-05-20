import {Content, Footer, Header} from "antd/es/layout/layout";
import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import "antd/dist/reset.css"

export interface ILayout {

}

export const PageContainer = ({}: ILayout) => {
    return (
            <Layout style={{
                minHeight: "100vh",
            }}>
                <Header/>
                <Content style={{
                    padding: "3em",
                }}>
                    <Outlet/>
                </Content>
                <Footer/>
            </Layout>
    )
}