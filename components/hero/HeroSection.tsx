"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HERO_CONTENT, STATS } from "@/constants/content";
import type { StatItem } from "@/types";
import { motion } from "framer-motion";

const AVATAR_COLORS = ["#6366F1", "#22D3EE", "#F59E0B", "#EF4444", "#10B981"];
const AVATAR_INITIALS = ["A", "M", "R", "S", "K"];

function StatCard({ value, label }: StatItem) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Typography
        variant="h3"
        component="p"
        className="font-sans"
        sx={{
          fontWeight: 700,
          background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "1.75rem", md: "2.25rem" },
          lineHeight: 1.2,
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#64748B",
          fontWeight: 500,
          mt: 0.5,
          fontSize: { xs: "0.813rem", md: "0.875rem" },
        }}
      >
        {label}
      </Typography>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <Box
      component="section"
      id="home"
      className="relative overflow-hidden"
      sx={{
        background: "#0A0F1E",
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 14 },
      }}
    >
      {/* Ambient glow effects */}
      <Box
        className="pointer-events-none absolute inset-0"
        sx={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(34, 211, 238, 0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 20% 60%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)",
        }}
      />
      {/* Dot grid pattern */}
      <Box
        className="pointer-events-none absolute inset-0"
        sx={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container maxWidth="lg" className="relative z-10">
        <Box className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Box
              className="mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
              sx={{
                backgroundColor: "rgba(99, 102, 241, 0.08)",
                border: "1px solid rgba(99, 102, 241, 0.15)",
              }}
            >
              <Box
                className="h-2 w-2 rounded-full"
                sx={{
                  backgroundColor: "#22D3EE",
                  boxShadow: "0 0 8px rgba(34, 211, 238, 0.5)",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#C7D2FE",
                  fontWeight: 500,
                  fontSize: "0.813rem",
                }}
              >
                Trusted by 10,000+ candidates worldwide
              </Typography>
            </Box>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              component="h1"
              className="text-balance font-sans"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.25rem", md: "4.25rem" },
                fontWeight: 700,
                color: "#F1F5F9",
                lineHeight: 1.08,
                mb: 2.5,
                maxWidth: "780px",
                mx: "auto",
                letterSpacing: "-0.03em",
              }}
            >
              Your Passport to{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #818CF8 0%, #22D3EE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Global Work
              </Box>
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              component="p"
              className="text-pretty font-sans"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#94A3B8",
                fontWeight: 400,
                lineHeight: 1.65,
                maxWidth: "560px",
                mx: "auto",
                mb: 5,
              }}
            >
              {HERO_CONTENT.subheading}
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "10px",
                minWidth: 200,
              }}
            >
              {HERO_CONTENT.primaryCta}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#about"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "10px",
                borderColor: "rgba(148, 163, 184, 0.15)",
                color: "#E2E8F0",
                minWidth: 180,
                "&:hover": {
                  borderColor: "rgba(99, 102, 241, 0.4)",
                  backgroundColor: "rgba(99, 102, 241, 0.06)",
                  color: "#C7D2FE",
                },
              }}
            >
              {HERO_CONTENT.secondaryCta}
            </Button>
          </motion.div>

          {/* Avatar Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3"
          >
            <AvatarGroup
              max={5}
              sx={{
                "& .MuiAvatar-root": {
                  width: 36,
                  height: 36,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  border: "2px solid #0A0F1E",
                },
              }}
            >
              {AVATAR_INITIALS.map((initial, idx) => (
                <Avatar
                  key={initial}
                  sx={{ backgroundColor: AVATAR_COLORS[idx] }}
                >
                  {initial}
                </Avatar>
              ))}
            </AvatarGroup>
            <Typography
              variant="body2"
              sx={{
                color: "#64748B",
                fontWeight: 500,
                fontSize: "0.813rem",
              }}
            >
              Join thousands already building global careers
            </Typography>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: "easeOut" }}
            className="mt-14 w-full max-w-3xl md:mt-16"
          >
            <Box
              className="mx-auto grid grid-cols-2 gap-6 rounded-2xl p-6 md:grid-cols-4 md:gap-8 md:p-8"
              sx={{
                backgroundColor: "rgba(17, 24, 39, 0.6)",
                border: "1px solid rgba(148, 163, 184, 0.06)",
                backdropFilter: "blur(12px)",
              }}
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
