"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { WHY_CHOOSE_ITEMS } from "@/constants/content";
import type { WhyChooseItem } from "@/types";
import { motion } from "framer-motion";

interface WhyChooseCardProps extends WhyChooseItem {
  index: number;
}

function WhyChooseCard({
  icon: Icon,
  title,
  description,
  index,
}: WhyChooseCardProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          backgroundColor: "rgba(17, 24, 39, 0.5)",
          border: "1px solid rgba(148, 163, 184, 0.06)",
          boxShadow: "none",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            border: "1px solid rgba(99, 102, 241, 0.15)",
            backgroundColor: "rgba(17, 24, 39, 0.7)",
            transform: "translateY(-4px)",
            boxShadow: "0 16px 40px -10px rgba(99, 102, 241, 0.15)",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
            p: { xs: 3, md: 3.5 },
            "&:last-child": { pb: { xs: 3, md: 3.5 } },
          }}
        >
          {/* Icon Container */}
          <Box
            sx={{
              mb: 2,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              flexShrink: 0,
              background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
              boxShadow: "0 4px 16px rgba(99, 102, 241, 0.25)",
            }}
          >
            <Icon sx={{ fontSize: 24, color: "#ffffff" }} />
          </Box>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              color: "#F1F5F9",
              fontSize: { xs: "1rem", md: "1.063rem" },
              mb: 1,
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
              flexGrow: 1,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function WhyChooseSection() {
  return (
    <Box
      component="section"
      id="why-choose-us"
      className="relative overflow-hidden"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0A0F1E", // Matched to your reference section
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
        {/* Section Header - Styled exactly like FeaturesSection */}
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
              WHY CHOOSE US
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
              Why Choose Kovon?
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
              We&apos;re more than a job board; we&apos;re your dedicated
              partner in building a successful international career.
            </Typography>
          </Box>
        </motion.div>

        {/* Grid - Fixed Alignment */}
        <Grid container spacing={3} alignItems="stretch">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={item.title}
              sx={{ display: "flex" }} // Ensures the motion.div and Card fill the height
            >
              <WhyChooseCard {...item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}