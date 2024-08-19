import { Typography, Layout } from "antd"
import GitHubIcon from "@mui/icons-material/GitHub"

const { Content } = Layout

const About = () => {
  return (
    <section className="py-5">
      <Typography.Title level={2} className="text-5xl">
        Made by Caio Programas
      </Typography.Title>
      <Content className="my-3">
        <Typography.Text>
          Feel free to download and modify the code.
        </Typography.Text>
        <Typography.Paragraph>
          If you need help, open the sidebar and go to Help section
        </Typography.Paragraph>
      </Content>
      <Content className="flex items-center gap-2">
        <Typography.Link
          href="https://github.com/secretindex/Python-Scripts"
          target="_blank"
          className="text-slate-950"
        >
          <GitHubIcon />
          <Typography.Text>Official Repository</Typography.Text>
        </Typography.Link>
      </Content>
    </section>
  )
}

export default About
