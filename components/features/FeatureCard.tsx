"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import type { FeatureItem } from "@/types";
import { motion } from "framer-motion";

interface FeatureCardProps extends FeatureItem {
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
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
          cursor: "default",
          "&:hover": {
            transform: "translateY(-6px)",
            backgroundColor: "rgba(17, 24, 39, 0.8)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            boxShadow:
              "0 20px 50px -12px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(99, 102, 241, 0.05)",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "flex-start",
            p: { xs: 3, md: 4 },
            "&:last-child": { pb: { xs: 3, md: 3.5 } },
            flexGrow: 1,
          }}
        >
          <Box
            className="mb-5 flex shrink-0 items-center justify-center rounded-xl"
            sx={{
              width: 52,
              height: 52,
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(34, 211, 238, 0.08) 100%)",
              border: "1px solid rgba(99, 102, 241, 0.1)",
            }}
          >
            <Icon
              sx={{
                fontSize: 26,
                color: "#818CF8",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            component="h3"
            className="font-sans"
            sx={{
              fontWeight: 600,
              color: "#F1F5F9",
              fontSize: { xs: "1rem", md: "1.063rem" },
              mb: 1.5,
              lineHeight: 1.4,
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
    </motion.div>
  );
}
