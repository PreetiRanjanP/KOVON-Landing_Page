"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { STEPS } from "@/constants/content";
import type { StepItem } from "@/types";
import { motion } from "framer-motion";

interface StepCardProps extends StepItem {
  index: number;
}

function StepCard({ stepNumber, title, description, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex w-full flex-col items-center text-center"
    >
      {/* Step Number Circle */}
      <Box
        sx={{
          position: "relative",
          mb: 4,
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "full",
          zIndex: 2, // Keeps circle above the connecting line
        }}
      >
        {/* Glow Effect / Outer Ring */}
        <Box
          sx={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            background: "rgba(99, 102, 241, 0.05)",
          }}
        />
        
        {/* Inner Solid Circle */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
            boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "#ffffff",
              fontSize: "1.125rem",
            }}
          >
            {stepNumber}
          </Typography>
        </Box>
      </Box>

      {/* Text Content */}
      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 700,
          color: "#F1F5F9",
          fontSize: "1.125rem",
          mb: 1.5,
          lineHeight: 1.4,
        }}
      >
        {title}
      </Typography>
      
      <Typography
        variant="body2"
        sx={{
          color: "#94A3B8",
          lineHeight: 1.7,
          fontSize: "0.875rem",
          maxWidth: "260px",
        }}
      >
        {description}
      </Typography>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <Box
      component="section"
      id="how-it-works"
      className="relative overflow-hidden"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#050810", // Darker background per image
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="mx-auto mb-16 max-w-2xl text-center">
          <Typography
            variant="overline"
            sx={{
              color: "#38BDF8",
              fontWeight: 700,
              letterSpacing: "0.2em",
              mb: 2,
              display: "block",
            }}
          >
            HOW IT WORKS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#F1F5F9",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 3,
            }}
          >
            Your Journey to a Global Career
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#94A3B8", fontSize: "1.125rem" }}
          >
            A simple, transparent process with our team guiding you all the way.
          </Typography>
        </Box>

        {/* Steps Container */}
        <Box sx={{ position: "relative" }}>
          {/* Horizontal Connecting Line (Desktop) */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              position: "absolute",
              top: 28, // Center of the 56px circle
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)",
              zIndex: 1,
            }}
          />

          <Grid container spacing={6}>
            {STEPS.map((step, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <StepCard {...step} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}