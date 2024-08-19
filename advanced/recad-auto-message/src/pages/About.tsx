import { Typography, Link, Box } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import MenuAnt from "../components/alt-antui/MenuAnt"

const About = () => {
  return (
    <section>
      <Typography variant="h1" sx={{ fontSize: "3rem" }}>
        Made by Caio Programas
      </Typography>
      <MenuAnt />
      <Box margin={"0.7rem 0"}>
        <Typography variant="subtitle1">
          Feel free to download and modify the code.
        </Typography>
        <Typography variant="subtitle2">
          If you need help, open the sidebar and go to Help section
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap="0.5rem">
        <Link
          href="https://github.com/secretindex/Python-Scripts"
          target="_blank"
          color={"inherit"}
          fontFamily={"inherit"}
        >
          <GitHubIcon />
          <Typography variant="caption">
            Official Repository
          </Typography>
        </Link>
      </Box>
    </section>
  )
}

export default About
