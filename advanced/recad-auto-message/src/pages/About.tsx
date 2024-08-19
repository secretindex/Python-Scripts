import { Typography, Layout } from "antd"
import GitHubIcon from "@mui/icons-material/GitHub"

const { Content } = Layout

const About = () => {
  return (
    <section className="py-5 flex flex-col items-center">
      <Typography.Title level={2} style={{ fontSize: "1.25rem" }}>Made by Caio Programas</Typography.Title>
      <Content className="my-3">
        <Typography.Text>
          Feel free to download and modify the code.
        </Typography.Text>
      </Content>
      <Content>
        <Typography.Link
          href="https://github.com/secretindex/Python-Scripts"
          target="_blank"
          className="flex flex-row justify-start items-center gap-2"
        >
          <GitHubIcon className=" text-slate-950" />
          <Typography.Text>Official Repository</Typography.Text>
        </Typography.Link>
      </Content>
    </section>
  )
}

export default About
