import {Content, Footer, Header} from "antd/es/layout/layout";
import {ConfigProvider, Layout} from "antd";
import {Outlet} from "react-router-dom";
import "antd/dist/reset.css"

export interface ILayout {

}

export const PageContainer = ({}: ILayout) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        minHeight: "100vh",
                    }
                }
            }}
        >
            <Layout>
                <Header/>
                <Content>
                    <Outlet/>
                </Content>
                <Footer/>
            </Layout>
        </ConfigProvider>
    )
}