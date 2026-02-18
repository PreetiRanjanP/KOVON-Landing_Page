"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#0A0F1E",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            className="relative overflow-hidden rounded-3xl px-6 py-12 text-center md:px-12 md:py-16"
            sx={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(17, 24, 39, 0.9) 50%, rgba(34, 211, 238, 0.08) 100%)",
              border: "1px solid rgba(99, 102, 241, 0.12)",
            }}
          >
            {/* Background glow */}
            <Box
              className="pointer-events-none absolute inset-0"
              sx={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)",
              }}
            />
            {/* Corner accent dots */}
            <Box
              className="pointer-events-none absolute inset-0"
              sx={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.03) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <Box className="relative z-10">
              <Typography
                variant="h3"
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
                {"Let's "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #818CF8 0%, #22D3EE 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Connect
                </Box>
              </Typography>
              <Typography
                variant="body1"
                className="text-pretty font-sans"
                sx={{
                  color: "#94A3B8",
                  fontSize: { xs: "0.938rem", md: "1.063rem" },
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  mx: "auto",
                  mb: 4,
                }}
              >
                Kovon is transforming how talent moves across borders, creating
                pathways that Bridge Gaps, Build Futures!
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "10px",
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
