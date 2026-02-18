"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FEATURES } from "@/constants/content";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <Box
      component="section"
      id="services"
      className="relative overflow-hidden"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0A0F1E",
      }}
    >
      {/* Top glow line */}
      <Box
        className="pointer-events-none absolute left-0 right-0 top-0"
        sx={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)",
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box className="mx-auto mb-12 max-w-xl text-center md:mb-16">
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
              WHY KOVON
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              className="text-balance font-sans"
              sx={{
                fontWeight: 700,
                color: "#F1F5F9",
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Redefining How the World Discovers & Hires Talent
            </Typography>
            <Typography
              variant="body1"
              className="text-pretty font-sans"
              sx={{
                color: "#94A3B8",
                fontSize: { xs: "0.938rem", md: "1.063rem" },
                lineHeight: 1.65,
              }}
            >
              Our mission is to make overseas job opportunities accessible and
              transparent for everyone.
            </Typography>
          </Box>
        </motion.div>

        {/* Feature Cards Grid */}
        <Grid container spacing={3} alignItems="stretch">
  {FEATURES.map((feature, index) => (
    <Grid
      item
      xs={12}
      sm={6}
      lg={3}
      key={feature.title}
      sx={{ display: "flex" }}
    >
      <FeatureCard {...feature} index={index} />
    </Grid>
  ))}
</Grid>

      </Container>
    </Box>
  );
}
