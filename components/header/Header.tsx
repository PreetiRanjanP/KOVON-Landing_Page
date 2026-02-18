"use client";

import { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NAV_LINKS } from "@/constants/content";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(10, 15, 30, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: scrolled
            ? "1px solid rgba(148, 163, 184, 0.06)"
            : "1px solid transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8"
          sx={{
            minHeight: { xs: 64, md: 72 },
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex shrink-0 items-center"
          >
            <a href="#home" className="flex items-center gap-2.5 no-underline">
              <Box
                className="flex items-center justify-center rounded-lg"
                sx={{
                  width: 36,
                  height: 36,
                  background:
                    "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "1.125rem",
                    lineHeight: 1,
                  }}
                >
                  K
                </Box>
              </Box>
              <Box
                component="span"
                className="text-xl font-bold tracking-tight"
                sx={{ color: "#F1F5F9" }}
              >
                Kovon
              </Box>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden items-center lg:flex"
          >
            <Box
              className="flex items-center rounded-xl px-1 py-1"
              sx={{
                backgroundColor: "rgba(148, 163, 184, 0.06)",
                border: "1px solid rgba(148, 163, 184, 0.06)",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: "#94A3B8",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    px: 2.5,
                    py: 0.75,
                    borderRadius: "8px",
                    minWidth: "auto",
                    "&:hover": {
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      color: "#C7D2FE",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden items-center lg:flex"
          >
            <Button
              variant="contained"
              color="primary"
              href="#contact"
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: "16px !important" }} />
              }
              sx={{
                px: 3,
                py: 1,
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "10px",
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Open navigation menu"
            sx={{
              color: "#F1F5F9",
              display: { lg: "none" },
              ml: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { lg: "none" },
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 340,
            backgroundColor: "#0F172A",
            borderLeft: "1px solid rgba(148, 163, 184, 0.08)",
          },
        }}
      >
        <Box className="flex items-center justify-between px-5 py-4">
          <Box className="flex items-center gap-2.5">
            <Box
              className="flex items-center justify-center rounded-lg"
              sx={{
                width: 32,
                height: 32,
                background:
                  "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
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
            <Box
              component="span"
              className="text-lg font-bold"
              sx={{ color: "#F1F5F9" }}
            >
              Kovon
            </Box>
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close navigation menu"
            sx={{ color: "#94A3B8" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            height: "1px",
            backgroundColor: "rgba(148, 163, 184, 0.08)",
            mx: 2,
          }}
        />

        <List className="px-3 pt-3">
          {NAV_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding className="mb-1">
              <ListItemButton
                component="a"
                href={link.href}
                onClick={handleNavClick}
                sx={{
                  borderRadius: "10px",
                  py: 1.25,
                  "&:hover": {
                    backgroundColor: "rgba(99, 102, 241, 0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: "#E2E8F0",
                    fontSize: "0.938rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem className="mt-5 px-1">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href="#contact"
              onClick={handleNavClick}
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.5,
                fontWeight: 600,
                borderRadius: "10px",
                fontSize: "0.938rem",
              }}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
}
