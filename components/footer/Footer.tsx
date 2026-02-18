"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
  COMPANY_INFO,
} from "@/constants/content";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#060A16",
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 5 },
      }}
    >
      {/* Top border glow */}
      <Box
        className="pointer-events-none"
        sx={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.12), transparent)",
          mb: { xs: 0, md: 0 },
          mt: { xs: -8, md: -10 },
        }}
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 10 } }}>
        <Grid container spacing={{ xs: 6, md: 4 }}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Logo */}
            <Box className="mb-4 flex items-center gap-2.5">
              <Box
                className="flex items-center justify-center rounded-lg"
                sx={{
                  width: 32,
                  height: 32,
                  background:
                    "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
                  boxShadow: "0 0 16px rgba(99, 102, 241, 0.2)",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.938rem",
                    lineHeight: 1,
                  }}
                >
                  K
                </Box>
              </Box>
              <Typography
                variant="h6"
                component="p"
                className="font-sans"
                sx={{
                  fontWeight: 700,
                  color: "#F1F5F9",
                  fontSize: "1.25rem",
                }}
              >
                {COMPANY_INFO.name}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              className="font-sans"
              sx={{
                color: "#64748B",
                lineHeight: 1.7,
                maxWidth: "320px",
                fontSize: "0.875rem",
                mb: 3,
              }}
            >
              {COMPANY_INFO.description}
            </Typography>

            {/* Social Icons */}
            <Box className="flex items-center gap-1">
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  size="small"
                  sx={{
                    color: "#64748B",
                    "&:hover": {
                      color: "#C7D2FE",
                      backgroundColor: "rgba(99, 102, 241, 0.08)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  <social.icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link Groups */}
          {FOOTER_LINKS.map((group) => (
            <Grid key={group.title} size={{ xs: 6, sm: 4, md: 2 }}>
              <Typography
                variant="subtitle2"
                component="h3"
                className="font-sans"
                sx={{
                  color: "#E2E8F0",
                  fontWeight: 600,
                  mb: 2.5,
                  fontSize: "0.875rem",
                  letterSpacing: "0.02em",
                }}
              >
                {group.title}
              </Typography>
              <Box component="ul" className="m-0 list-none p-0">
                {group.links.map((link) => (
                  <Box component="li" key={link.label} className="mb-2.5">
                    <Box
                      component="a"
                      href={link.href}
                      className="no-underline"
                      sx={{
                        color: "#64748B",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: "#C7D2FE",
                        },
                      }}
                    >
                      {link.label}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        <Box
          className="my-8"
          sx={{
            height: "1px",
            backgroundColor: "rgba(148, 163, 184, 0.06)",
          }}
        />

        {/* Copyright */}
        <Box className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <Typography
            variant="caption"
            className="font-sans"
            sx={{ color: "#475569", fontSize: "0.813rem" }}
          >
            {COMPANY_INFO.copyright}
          </Typography>
          <Box className="flex items-center gap-5">
            <Box
              component="a"
              href="#"
              className="no-underline"
              sx={{
                color: "#475569",
                fontSize: "0.813rem",
                "&:hover": { color: "#94A3B8" },
                transition: "color 0.2s ease",
              }}
            >
              Privacy Policy
            </Box>
            <Box
              component="a"
              href="#"
              className="no-underline"
              sx={{
                color: "#475569",
                fontSize: "0.813rem",
                "&:hover": { color: "#94A3B8" },
                transition: "color 0.2s ease",
              }}
            >
              Terms of Service
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
