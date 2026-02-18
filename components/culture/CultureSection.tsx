"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { CULTURE_VALUES } from "@/constants/content";
import type { CultureValue } from "@/types";
import { motion } from "framer-motion";

function CultureCard({ title, description, icon: Icon }: CultureValue) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: "16px",
        backgroundColor: "rgba(17, 24, 39, 0.5)",
        border: "1px solid rgba(148, 163, 184, 0.06)",
        boxShadow: "none",
        transition: "all 0.35s ease",
        "&:hover": {
          border: "1px solid rgba(99, 102, 241, 0.15)",
          backgroundColor: "rgba(17, 24, 39, 0.7)",
          transform: "translateY(-3px)",
          boxShadow: "0 12px 40px -10px rgba(99, 102, 241, 0.12)",
        },
      }}
    >
      <CardContent className="flex flex-col items-start p-6">
        <Box
          className="mb-4 flex items-center justify-center rounded-xl"
          sx={{
            width: 48,
            height: 48,
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(34, 211, 238, 0.06) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.08)",
          }}
        >
          <Icon sx={{ fontSize: 24, color: "#818CF8" }} />
        </Box>
        <Typography
          variant="h6"
          component="h3"
          className="font-sans"
          sx={{
            fontWeight: 600,
            color: "#F1F5F9",
            fontSize: "1.063rem",
            mb: 1,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          className="font-sans"
          sx={{
            color: "#94A3B8",
            lineHeight: 1.7,
            fontSize: "0.875rem",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function CultureSection() {
  return (
    <Box
      component="section"
      id="culture"
      className="relative"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0D1424",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                component="p"
                sx={{
                  background: "linear-gradient(135deg, #818CF8, #22D3EE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  mb: 1.5,
                  fontSize: "0.75rem",
                }}
              >
                OUR VALUES
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                className="text-balance font-sans"
                sx={{
                  fontWeight: 700,
                  color: "#F1F5F9",
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Our Culture, Our Strength.
              </Typography>
              <Typography
                variant="body1"
                className="text-pretty font-sans"
                sx={{
                  color: "#94A3B8",
                  fontSize: { xs: "0.938rem", md: "1rem" },
                  lineHeight: 1.7,
                  mb: 3,
                  maxWidth: "480px",
                }}
              >
                We believe in empathy, integrity, and innovation. Kovon&apos;s
                team is passionate about solving one of the most important
                challenges -- making global jobs accessible with trust. Our
                principles guide every decision we make.
              </Typography>
              <Chip
                label="We're Hiring"
                sx={{
                  backgroundColor: "rgba(34, 211, 238, 0.1)",
                  color: "#22D3EE",
                  fontWeight: 600,
                  fontSize: "0.813rem",
                  border: "1px solid rgba(34, 211, 238, 0.2)",
                  px: 1,
                }}
              />
            </motion.div>
          </Grid>

          {/* Right Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="flex flex-col gap-4">
              {CULTURE_VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CultureCard {...value} />
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
